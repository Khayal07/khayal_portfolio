"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from "lucide-react";
import { ArchDiagram, box, edgeLine, type DiagramState } from "@/components/ArchDiagram";
import { useI18n } from "@/components/LanguageProvider";
import type { Diagram } from "@/data/portfolio";
import type { FlowHop, ProjectStep } from "@/data/projectDetails";

const HOP_MS = 650;
const PHASE_GAP_MS = 120;
const STEP_HOLD_MS = 1600;

interface Dot {
  key: string;
  x: number;
  y: number;
}

export function HowItWorks({
  diagram,
  steps,
  title,
}: {
  diagram?: Diagram;
  steps: ProjectStep[];
  title: string;
}) {
  const { t } = useI18n();
  const animated = Boolean(diagram && steps.some((s) => s.flow || s.lit));

  const [step, setStep] = useState(0);
  const [arrived, setArrived] = useState(true);
  const [running, setRunning] = useState<FlowHop[]>([]);
  const [dots, setDots] = useState<Dot[]>([]);
  const [playing, setPlaying] = useState(false);

  const figureRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const token = useRef(0);
  const frame = useRef(0);
  const holdTimer = useRef<ReturnType<typeof setTimeout>>();
  const autoStarted = useRef(false);

  const nodes = useMemo(() => new Map(diagram?.nodes.map((n) => [n.id, n]) ?? []), [diagram]);
  const edgeKeys = useMemo(
    () => new Set(diagram?.edges.map(([a, b]) => `${a}>${b}`) ?? []),
    [diagram],
  );

  /** Diagram edge for a hop, whichever direction it was declared in */
  const edgeKey = useCallback(
    ([a, b]: FlowHop) => (edgeKeys.has(`${a}>${b}`) ? `${a}>${b}` : `${b}>${a}`),
    [edgeKeys],
  );

  const reducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const stop = useCallback(() => {
    token.current += 1;
    cancelAnimationFrame(frame.current);
    clearTimeout(holdTimer.current);
    setDots([]);
    setRunning([]);
  }, []);

  /** Moves the dots of one phase together along their edges */
  const playPhase = useCallback(
    (hops: FlowHop[], id: number) =>
      new Promise<void>((resolve) => {
        const lines = hops.flatMap((hop) => {
          const from = nodes.get(hop[0]);
          const to = nodes.get(hop[1]);
          if (!from || !to) return [];
          const forward = edgeKeys.has(`${hop[0]}>${hop[1]}`);
          const l = forward ? edgeLine(from, to) : edgeLine(to, from);
          return [
            forward
              ? { key: hop.join(">"), ...l }
              : { key: hop.join(">"), x1: l.x2, y1: l.y2, x2: l.x1, y2: l.y1 },
          ];
        });
        const start = performance.now();
        const tick = (now: number) => {
          if (id !== token.current) return resolve();
          const k = Math.min(1, (now - start) / HOP_MS);
          const e = k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2;
          setDots(
            lines.map((l) => ({ key: l.key, x: l.x1 + (l.x2 - l.x1) * e, y: l.y1 + (l.y2 - l.y1) * e })),
          );
          if (k < 1) frame.current = requestAnimationFrame(tick);
          else setTimeout(resolve, PHASE_GAP_MS);
        };
        frame.current = requestAnimationFrame(tick);
      }),
    [nodes, edgeKeys],
  );

  const goTo = useCallback(
    async (index: number, opts: { animate?: boolean } = {}) => {
      stop();
      const id = token.current;
      const target = Math.max(0, Math.min(steps.length - 1, index));
      setStep(target);

      const phases = steps[target].flow ?? [];
      if (opts.animate === false || reducedMotion() || phases.length === 0) {
        setArrived(true);
        return;
      }

      setArrived(false);
      const done: FlowHop[] = [];
      for (const phase of phases) {
        if (id !== token.current) return;
        done.push(...phase);
        setRunning([...done]);
        await playPhase(phase, id);
      }
      if (id !== token.current) return;
      setDots([]);
      setArrived(true);
    },
    [steps, stop, playPhase],
  );

  // Autoplay: after a step lands, hold it, then move on; stop after the last one
  useEffect(() => {
    if (!playing || !arrived) return;
    if (step >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    holdTimer.current = setTimeout(() => goTo(step + 1), STEP_HOLD_MS);
    return () => clearTimeout(holdTimer.current);
  }, [playing, arrived, step, steps.length, goTo]);

  // Play the walkthrough once, the first time the diagram scrolls into view
  useEffect(() => {
    const el = figureRef.current;
    if (!animated || !el || reducedMotion()) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !autoStarted.current) {
          autoStarted.current = true;
          setPlaying(true);
          goTo(0);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animated, goTo]);

  useEffect(() => stop, [stop]);

  // On narrow screens the diagram scrolls sideways: keep the current step in view
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!animated || !scroller || scroller.scrollWidth <= scroller.clientWidth) return;
    const ids = new Set([...(steps[step].lit ?? []), ...(steps[step].flow?.flat(2) ?? [])]);
    const xs = Array.from(ids).flatMap((id) => {
      const n = nodes.get(id);
      return n ? [box(n).cx] : [];
    });
    if (!xs.length) return;
    const svg = scroller.querySelector("svg");
    if (!svg) return;
    const scale = svg.getBoundingClientRect().width / 320;
    const offset = svg.getBoundingClientRect().left - scroller.getBoundingClientRect().left + scroller.scrollLeft;
    const center = offset + ((Math.min(...xs) + Math.max(...xs)) / 2) * scale;
    scroller.scrollTo({
      left: center - scroller.clientWidth / 2,
      behavior: reducedMotion() ? "auto" : "smooth",
    });
  }, [animated, step, steps, nodes]);

  const state: DiagramState | undefined = useMemo(() => {
    if (!animated) return undefined;
    const active = new Set<string>();
    const seen = new Set<string>();
    const edges = new Set<string>();

    steps.slice(0, step).forEach((s) => {
      s.lit?.forEach((n) => seen.add(n));
      s.flow?.flat().forEach((hop) => {
        edges.add(edgeKey(hop));
        hop.forEach((n) => seen.add(n));
      });
    });

    const current = steps[step];
    if (arrived) {
      current.flow?.flat().forEach((hop) => edges.add(edgeKey(hop)));
      current.lit?.forEach((n) => active.add(n));
    } else {
      running.forEach((hop) => {
        edges.add(edgeKey(hop));
        seen.add(hop[0]);
      });
      current.flow?.[0]?.forEach((hop) => active.add(hop[0]));
    }
    return { active, seen, edges };
  }, [animated, steps, step, arrived, running, edgeKey]);

  const atEnd = step === steps.length - 1 && arrived && !playing;

  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      stop();
      setArrived(true);
      return;
    }
    setPlaying(true);
    goTo(atEnd ? 0 : step);
  };

  const manual = (index: number) => {
    setPlaying(false);
    goTo(index);
  };

  const control =
    "focus-ring inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-line bg-card px-2.5 font-mono text-xs text-ink transition-colors duration-200 hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-40";

  return (
    <>
      {diagram && (
        <figure ref={figureRef} className="overflow-hidden rounded-xl border border-line">
          <div ref={scrollerRef} className="overflow-x-auto">
            <div className="blueprint min-w-[560px] p-4 sm:p-6">
              <div className="mx-auto aspect-[16/10] w-full max-w-[680px]">
                <ArchDiagram diagram={diagram} title={title} state={state}>
                  {dots.map((d) => (
                    <circle key={d.key} cx={d.x} cy={d.y} r="3.2" className="fill-accent" />
                  ))}
                </ArchDiagram>
              </div>
            </div>
          </div>

          <figcaption className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line bg-card px-3 py-2.5 sm:px-4">
            {animated ? (
              <>
                <div className="flex items-center gap-1.5">
                  <button type="button" onClick={togglePlay} className={control}>
                    {playing ? <Pause size={13} /> : atEnd ? <RotateCcw size={13} /> : <Play size={13} />}
                    {playing ? t("Pause") : atEnd ? t("Replay") : t("Play")}
                  </button>
                  <button
                    type="button"
                    onClick={() => manual(step - 1)}
                    disabled={step === 0}
                    aria-label={t("Previous step")}
                    className={control}
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => manual(step + 1)}
                    disabled={step === steps.length - 1}
                    aria-label={t("Next step")}
                    className={control}
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
                <p className="min-w-0 flex-1 truncate font-mono text-[11px] text-silver" aria-live="polite">
                  <span className="text-accent">
                    {step + 1}/{steps.length}
                  </span>{" "}
                  {t(steps[step].title)}
                </p>
                <span className="font-mono text-[11px] text-silver sm:hidden">
                  {t("Swipe sideways to see the whole diagram")} →
                </span>
              </>
            ) : (
              <span className="font-mono text-[11px] text-silver">
                <span className="sm:hidden">{t("Swipe sideways to see the whole diagram")} →</span>
                <span className="hidden sm:inline">
                  {t("Architecture")} · {t(title)}
                </span>
              </span>
            )}
          </figcaption>
        </figure>
      )}

      <ol className="relative ml-3.5 mt-10 space-y-2 border-l border-line pl-5 sm:pl-6">
        {steps.map((s, i) => {
          const current = animated && i === step;
          const Tag = animated ? "button" : "div";
          return (
            <li key={s.title} className="relative">
              <Tag
                {...(animated ? { type: "button" as const, onClick: () => manual(i) } : {})}
                aria-current={current ? "step" : undefined}
                className={`group block w-full rounded-lg py-2.5 pl-6 pr-3 text-left transition-colors duration-200 ${
                  animated ? "focus-ring cursor-pointer hover:bg-card" : ""
                } ${current ? "bg-card" : ""}`}
              >
                <span
                  className={`absolute -left-[34px] top-2 flex h-7 w-7 items-center justify-center rounded-full border border-accent font-mono text-xs transition-colors duration-200 sm:-left-[38px] ${
                    current ? "bg-accent text-background" : "bg-background text-accent"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`block text-base font-medium transition-colors duration-200 ${
                    current ? "text-accent" : "text-ink"
                  }`}
                >
                  {t(s.title)}
                </span>
                <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-silver">
                  {t(s.text)}
                </span>
              </Tag>
            </li>
          );
        })}
      </ol>
    </>
  );
}

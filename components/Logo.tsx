"use client";

import { useEffect, useRef, useState } from "react";

const REST = "hayal";

export default function Logo({ href = "#home" }: { href?: string }) {
  const [shown, setShown] = useState(0);
  const target = useRef(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  const run = (to: number) => {
    target.current = to;
    if (timer.current) clearInterval(timer.current);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(to);
      return;
    }

    timer.current = setInterval(() => {
      setShown((n) => {
        const next = n + Math.sign(target.current - n);
        if (next === target.current && timer.current) clearInterval(timer.current);
        return next;
      });
    }, to > 0 ? 70 : 45);
  };

  return (
    <a
      href={href}
      onMouseEnter={() => run(REST.length)}
      onMouseLeave={() => run(0)}
      onFocus={() => run(REST.length)}
      onBlur={() => run(0)}
      className="focus-ring inline-flex w-[7.2ch] items-baseline rounded font-mono text-lg font-medium tracking-tight text-ink"
    >
      <span aria-hidden="true">k{REST.slice(0, shown)}</span>
      <span className="sr-only">Khayal</span>
      <span
        aria-hidden="true"
        className="ml-px inline-block h-[0.16em] w-[0.6em] bg-accent motion-safe:animate-blink"
      />
    </a>
  );
}

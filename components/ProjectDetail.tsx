"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { ArchDiagram } from "@/components/ArchDiagram";
import { useI18n } from "@/components/LanguageProvider";
import { portfolio } from "@/data/portfolio";
import { projectDetails } from "@/data/projectDetails";

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line/70 py-14 sm:py-16">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-medium text-ink sm:text-3xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function RunBlock({ command }: { command: string }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-3 overflow-hidden rounded-xl border border-line bg-card">
      <pre className="min-w-0 flex-1 overflow-x-auto px-4 py-3.5 font-mono text-sm text-ink">
        <span className="select-none text-accent">$ </span>
        {command}
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? t("Copied") : t("Copy")}
        className="focus-ring mr-2 inline-flex shrink-0 items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-silver transition-colors duration-200 hover:border-accent hover:text-ink"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
        <span className="hidden sm:inline">{copied ? t("Copied") : t("Copy")}</span>
      </button>
    </div>
  );
}

export function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useI18n();
  const projects = portfolio.projects;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const details = projectDetails[slug];

  if (!project || !details) {
    return (
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <p className="text-silver">{t("Project not found")}</p>
      </div>
    );
  }

  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  const images = project.images ?? [];

  const buttonBase =
    "focus-ring inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-200";

  return (
    <article className="mx-auto max-w-5xl px-6 pb-16 pt-28 sm:pt-32">
      <Link
        href="/#projects"
        className="focus-ring inline-flex items-center gap-1.5 rounded font-mono text-xs text-silver transition-colors duration-200 hover:text-accent"
      >
        <ArrowLeft size={14} />
        {t("Back to projects")}
      </Link>

      <header className="mt-8 pb-12">
        <p className="font-mono text-xs text-silver">{t(project.category)}</p>
        <h1 className="mt-3 text-4xl font-medium tracking-[-0.03em] text-ink sm:text-5xl">
          {t(project.title)}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-silver">
          {t(details.tagline)}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} bg-accent text-card hover:bg-accent/90`}
            >
              <ExternalLink size={15} />
              {t("Try the live demo")}
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} border border-line text-ink hover:border-accent ${
              project.demo ? "" : "bg-card"
            }`}
          >
            <GithubIcon size={15} />
            {t("View source on GitHub")}
          </a>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {details.metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-line bg-card px-4 py-4">
              <dt className="sr-only">{t(metric.label)}</dt>
              <dd>
                <span className="block font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  {metric.value}
                </span>
                <span className="mt-1 block text-xs leading-snug text-silver">
                  {t(metric.label)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <Section eyebrow={`// ${t("At a glance").toLowerCase()}`} title={t("The problem and the idea")}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-card p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-silver">
              <Target size={16} />
            </span>
            <h3 className="mt-4 text-lg font-medium text-ink">{t("The problem")}</h3>
            <p className="mt-2 leading-relaxed text-silver">{t(details.problem)}</p>
          </div>
          <div className="rounded-xl border border-accent/50 bg-accent-soft/40 p-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-accent/50 text-accent">
              <Lightbulb size={16} />
            </span>
            <h3 className="mt-4 text-lg font-medium text-ink">{t("The idea")}</h3>
            <p className="mt-2 leading-relaxed text-ink/80">{t(details.idea)}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow={`// ${t("Who it's for").toLowerCase()}`} title={t("Who it's for")}>
        <ul className="grid gap-4 sm:grid-cols-3">
          {details.audience.map((item, i) => (
            <li key={item} className="rounded-xl border border-line bg-card p-5">
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-silver">
                  <Users size={15} />
                </span>
                <span className="font-mono text-xs text-silver">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink">{t(item)}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow={`// ${t("How it works").toLowerCase()}`} title={t("How it works")}>
        {project.diagram && (
          <figure className="overflow-x-auto rounded-xl border border-line">
            <div className="blueprint min-w-[560px] p-4 sm:p-6">
              <div className="mx-auto aspect-[16/10] w-full max-w-[680px]">
                <ArchDiagram diagram={project.diagram} title={project.title} />
              </div>
            </div>
            <figcaption className="sticky left-0 border-t border-line bg-card px-4 py-2.5 font-mono text-[11px] text-silver">
              <span className="sm:hidden">{t("Swipe sideways to see the whole diagram")} →</span>
              <span className="hidden sm:inline">
                {t("Architecture")} · {t(project.title)}
              </span>
            </figcaption>
          </figure>
        )}

        <ol className="relative ml-3.5 mt-10 space-y-6 border-l border-line pl-8">
          {details.steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[45px] flex h-7 w-7 items-center justify-center rounded-full border border-accent bg-background font-mono text-xs text-accent">
                {i + 1}
              </span>
              <h3 className="text-base font-medium text-ink">{t(step.title)}</h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-silver">
                {t(step.text)}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {images.length > 0 && (
        <Section eyebrow={`// ${t("Screenshots").toLowerCase()}`} title={t("Screenshots")}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {images.map((src, i) => (
              <li key={src}>
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} screenshot ${i + 1}`}
                  className="focus-ring group block overflow-hidden rounded-xl border border-line bg-card transition-colors duration-200 hover:border-accent"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section eyebrow={`// ${t("Key features").toLowerCase()}`} title={t("Key features")}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {details.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 rounded-xl border border-line bg-card px-4 py-3.5"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Check size={12} strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-ink">{t(feature)}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow={`// ${t("Design decisions").toLowerCase()}`} title={t("Design decisions")}>
        <ol className="space-y-3">
          {details.decisions.map((decision, i) => (
            <li
              key={decision}
              className="flex gap-4 rounded-xl border border-line bg-card px-5 py-4"
            >
              <span className="font-display text-xl font-medium text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-ink">{t(decision)}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow={`// ${t("Built with").toLowerCase()}`} title={t("Built with")}>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-card px-3 py-1.5 font-mono text-xs text-ink"
            >
              {tech}
            </li>
          ))}
        </ul>

        {details.run && (
          <div className="mt-8">
            <p className="mb-3 font-mono text-xs text-silver">{t("Run it locally")}</p>
            <RunBlock command={details.run} />
          </div>
        )}
      </Section>

      <nav
        aria-label={t("Projects")}
        className="grid gap-3 border-t border-line/70 pt-10 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="focus-ring group rounded-xl border border-line bg-card p-5 transition-colors duration-200 hover:border-accent"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-silver">
              <ArrowLeft size={13} />
              {t("Previous project")}
            </span>
            <span className="mt-2 block font-display text-lg font-medium text-ink group-hover:text-accent">
              {t(prev.title)}
            </span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="focus-ring group rounded-xl border border-line bg-card p-5 text-right transition-colors duration-200 hover:border-accent"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-silver">
              {t("Next project")}
              <ArrowRight size={13} />
            </span>
            <span className="mt-2 block font-display text-lg font-medium text-ink group-hover:text-accent">
              {t(next.title)}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}

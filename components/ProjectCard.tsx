"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Maximize2, X } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { ArchDiagram } from "@/components/ArchDiagram";
import { Gallery } from "@/components/Gallery";
import type { Project } from "@/data/portfolio";
import { useI18n } from "@/components/LanguageProvider";

interface ProjectCardProps {
  project: Project;
}

type View = "architecture" | "screenshots";

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useI18n();
  const images = project.images ?? [];
  const hasDiagram = Boolean(project.diagram);
  const hasImages = images.length > 0;
  const [view, setView] = useState<View>(hasDiagram ? "architecture" : "screenshots");
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setZoomed(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [zoomed]);

  const tabs: { id: View; label: string }[] = [];
  if (hasDiagram) tabs.push({ id: "architecture", label: t("architecture") });
  if (hasImages) tabs.push({ id: "screenshots", label: `${t("screenshots")} · ${images.length}` });

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-card transition-colors duration-200 hover:border-ink/30">
      {(hasDiagram || hasImages) && (
        <div className="border-b border-line">
          {tabs.length > 0 && (
            <div className="flex gap-1.5 border-b border-line px-3 py-2" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={view === tab.id}
                  onClick={() => setView(tab.id)}
                  className={`focus-ring rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 ${
                    view === tab.id
                      ? "border-accent text-ink"
                      : "border-line text-silver hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          <div className="relative aspect-[16/10]">
            {view === "architecture" && project.diagram ? (
              <button
                type="button"
                onClick={() => setZoomed(true)}
                aria-label={`${t("Enlarge diagram")}: ${project.title}`}
                className="blueprint focus-ring absolute inset-0 flex cursor-zoom-in items-center p-2"
              >
                <ArchDiagram diagram={project.diagram} title={project.title} />
                <span className="absolute right-2 top-2 rounded-md border border-line bg-card/90 p-1.5 text-silver transition-colors duration-200 group-hover:text-ink">
                  <Maximize2 size={12} />
                </span>
              </button>
            ) : (
              hasImages && <Gallery images={images} title={project.title} />
            )}
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-xs text-silver">{t(project.category)}</span>

        <h3 className="mt-3 text-xl font-medium text-ink">{t(project.title)}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-silver">
          {t(project.description)}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li key={tech}>
              <span className="inline-block rounded border border-line px-2 py-1 font-mono text-[11px] text-silver">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring group/explore inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 font-mono text-xs text-card transition-colors duration-200 hover:bg-accent/90"
          >
            {t("Explore project")}
            <ArrowRight
              size={13}
              className="transition-transform duration-200 group-hover/explore:translate-x-0.5"
            />
          </Link>
          <div className="flex items-center gap-1.5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-silver transition-colors duration-200 hover:border-accent hover:text-ink"
            >
              <GithubIcon size={13} />
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-silver transition-colors duration-200 hover:border-accent hover:text-ink"
              >
                <ExternalLink size={13} />
                {t("Live Demo")}
              </a>
            )}
          </div>
        </div>
      </div>

      {zoomed && project.diagram && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} architecture`}
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-[60] flex flex-col bg-background"
        >
          <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
            <p className="truncate font-display text-base font-medium text-ink">
              {t(project.title)}
            </p>
            <button
              type="button"
              autoFocus
              onClick={() => setZoomed(false)}
              aria-label={t("Close")}
              className="focus-ring shrink-0 rounded-md border border-line p-2 text-silver transition-colors duration-200 hover:border-accent hover:text-ink"
            >
              <X size={16} />
            </button>
          </div>
          <p className="border-b border-line px-4 py-2 font-mono text-[11px] text-silver sm:hidden">
            {t("Swipe sideways to see the whole diagram")} →
          </p>
          <div className="blueprint flex-1 overflow-auto">
            <div className="mx-auto flex min-h-full w-[180%] items-center p-4 sm:w-full sm:max-w-5xl sm:p-8">
              <div
                className="aspect-[16/10] w-full cursor-default"
                onClick={(event) => event.stopPropagation()}
              >
                <ArchDiagram diagram={project.diagram} title={project.title} />
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

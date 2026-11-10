"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { ArchDiagram } from "@/components/ArchDiagram";
import type { Project } from "@/data/portfolio";
import { useI18n } from "@/components/LanguageProvider";

interface ProjectCardProps {
  project: Project;
  index: number;
}

type View = "architecture" | "screenshots";

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useI18n();
  const images = project.images ?? [];
  const hasDiagram = Boolean(project.diagram);
  const hasImages = images.length > 0;
  const [view, setView] = useState<View>(hasDiagram ? "architecture" : "screenshots");
  const [shot, setShot] = useState(0);

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
              <div className="blueprint absolute inset-0 flex items-center p-2">
                <ArchDiagram diagram={project.diagram} title={project.title} />
              </div>
            ) : (
              hasImages && (
                <div className="absolute inset-0 overflow-hidden bg-background">
                  <Image
                    key={images[shot]}
                    src={images[shot]}
                    alt={`${project.title} screenshot ${shot + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                  {images.length > 1 && (
                    <div className="absolute inset-x-0 bottom-2.5 flex justify-center gap-1.5">
                      {images.map((src, i) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setShot(i)}
                          aria-label={`${t("Show screenshot")} ${i + 1}`}
                          aria-current={i === shot}
                          className={`focus-ring h-1.5 rounded-full transition-all duration-200 ${
                            i === shot ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )
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

        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <span className="font-mono text-xs text-silver">
            {String(index + 1).padStart(2, "0")}
          </span>
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
    </article>
  );
}

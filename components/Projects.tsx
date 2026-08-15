"use client";

import { useState } from "react";
import { portfolio, projectCategories } from "@/data/portfolio";
import type { ProjectCategory } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { useI18n } from "@/components/LanguageProvider";

type Filter = ProjectCategory | "All";

const filters: Filter[] = ["All", ...projectCategories];

export function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const { t } = useI18n();

  const projects = portfolio.projects;
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-anchor border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={t("projects")}
            title={t("Selected works")}
            subtitle={t(
              "Systems built with intent, from retrieval pipelines to production services."
            )}
          />
          <p className="shrink-0 font-mono text-xs text-silver">
            {String(filtered.length).padStart(2, "0")}{" "}
            <span className="text-silver/70">
              / {active === "All" ? t("All") : t(active)}
            </span>
          </p>
        </div>

        <div className="mb-8 mt-8 flex flex-wrap gap-2 md:mt-10">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors duration-200 ${
                active === filter
                  ? "border-ink/70 bg-card text-ink"
                  : "border-line text-silver hover:border-ink/50 hover:text-ink"
              }`}
            >
              {filter === "All" ? t("All") : t(filter)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { portfolio, projectCategories } from "@/data/portfolio";
import type { ProjectCategory } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";

type Filter = ProjectCategory | "All";

const filters: Filter[] = ["All", ...projectCategories];

export function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const projects = portfolio.projects;
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-anchor py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="projects"
          title="Selected Works"
          subtitle="A collection of AI systems, backend services, and developer tools I have designed and built."
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2 font-mono text-sm transition-all duration-300 ${
                active === filter
                  ? "bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-glow-sm"
                  : "glass text-muted hover:border-accent-violet/50 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
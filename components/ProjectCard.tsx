import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass group flex flex-col rounded-2xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-violet/50 hover:shadow-glow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-base-border bg-base-elevated transition-colors duration-300 group-hover:border-accent-violet/40">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent-violet"
            aria-hidden="true"
          >
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
          </svg>
        </div>
        <span className="rounded-full border border-base-border bg-base-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-accent-cyan">
          {project.category}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-accent-violet">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li key={tech}>
            <span className="inline-block rounded-full border border-base-border bg-base-surface px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-300 hover:border-accent-cyan/40 hover:text-accent-cyan">
              {tech}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-base-border/70 pt-5">
        <span className="font-mono text-xs text-muted">
          {project.tech.length} technologies
        </span>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="rounded-lg border border-base-border bg-base-surface p-2.5 text-muted transition-all duration-300 hover:border-accent-violet/50 hover:text-white hover:shadow-glow-sm"
          >
            <GithubIcon size={17} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="rounded-lg border border-base-border bg-base-surface p-2.5 text-muted transition-all duration-300 hover:border-accent-cyan/50 hover:text-white hover:shadow-glow-sm"
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
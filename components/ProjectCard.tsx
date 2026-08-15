import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col bg-background p-6 transition-colors duration-200 hover:bg-card">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-silver">
          {project.category}
        </span>
        <ArrowUpRight
          size={15}
          className="text-silver opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-6 text-base font-medium text-ink">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-silver">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <li key={tech}>
            <span className="inline-block rounded border border-line px-2 py-1 font-mono text-[11px] text-silver transition-colors duration-200 group-hover:border-ink/50 group-hover:text-ink">
              {tech}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-line/70 pt-4">
        <span className="font-mono text-xs text-silver">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
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
              className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
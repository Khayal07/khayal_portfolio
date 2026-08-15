import { Heart } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Footer() {
  const { identity, socials } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-border/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="font-mono text-sm text-muted">
          © {year}{" "}
          <span className="text-white">{identity.name}</span> ·{" "}
          {identity.title}
        </p>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 text-xs text-muted sm:flex">
            Built with <Heart size={13} className="text-red-400" fill="currentColor" /> in
            {identity.location.split(",")[0]}
          </span>
          <div className="flex gap-2">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-base-border bg-base-surface p-2.5 text-muted transition-all duration-300 hover:border-accent-violet/50 hover:text-white hover:shadow-glow-sm"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-base-border bg-base-surface p-2.5 text-muted transition-all duration-300 hover:border-accent-violet/50 hover:text-white hover:shadow-glow-sm"
            >
              <LinkedinIcon size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
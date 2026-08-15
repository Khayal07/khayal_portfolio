"use client";

import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { useI18n } from "@/components/LanguageProvider";

export function Footer() {
  const { identity, socials } = portfolio;
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="font-mono text-xs text-silver">
          © {year} {identity.name} · {t(identity.title)}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md border border-line p-2 text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
          >
            <GithubIcon size={14} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-md border border-line p-2 text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
          >
            <LinkedinIcon size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
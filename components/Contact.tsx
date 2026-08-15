"use client";

import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { useI18n } from "@/components/LanguageProvider";

export function Contact() {
  const { identity, socials } = portfolio;
  const { t } = useI18n();

  return (
    <section id="contact" className="section-anchor border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow={t("contact")}
            title={t("Let's build something together.")}
            subtitle={t(
              "Have a project in mind, or want to talk about RAG, multi-agent systems, or backend architecture? Reach out."
            )}
          />

          <a
            href={`mailto:${identity.email}`}
            className="focus-ring mt-10 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-medium text-background transition-all duration-200 hover:bg-white sm:w-auto"
          >
            {identity.email}
            <ArrowUpRight size={15} />
          </a>

          <div className="mt-4 flex items-center gap-2">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
            >
              <LinkedinIcon size={14} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
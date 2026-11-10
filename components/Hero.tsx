"use client";

import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { useI18n } from "@/components/LanguageProvider";

export function Hero() {
  const { identity, hero, socials } = portfolio;
  const { t } = useI18n();

  return (
    <section id="home" className="section-anchor">
      <div className="mx-auto flex min-h-[78svh] max-w-6xl flex-col items-center justify-center px-6 pb-12 pt-28 text-center">
        <span className="animate-fade-in max-w-full text-balance font-mono text-xs text-silver">
          <span
            className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-status align-middle"
            aria-hidden="true"
          />
          {t(hero.status)}
        </span>

        <h1
          className="animate-fade-in mt-8 text-5xl font-medium tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {identity.name}
          <span className="mt-3 block font-display text-xl font-normal tracking-tight text-accent sm:text-2xl">
            {t(identity.title)}
          </span>
        </h1>

        <p
          className="animate-fade-in mt-6 max-w-2xl text-base leading-relaxed text-silver sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {t(identity.tagline)}
        </p>

        <div
          className="animate-fade-in mt-10 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href={hero.primaryCta.href}
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-card transition-colors duration-200 hover:bg-accent/90"
          >
            {t(hero.primaryCta.label)}
            <ArrowUpRight size={15} />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink/60"
          >
            {t(hero.secondaryCta.label)}
          </a>
          <a
            href={identity.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink/60"
          >
            <Download size={15} />
            {t("Download CV")}
          </a>
        </div>

        <div
          className="animate-fade-in mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-silver"
          style={{ animationDelay: "320ms" }}
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} className="text-silver" />
            {t(identity.location)}
          </span>
          <span className="hidden h-3 w-px bg-line sm:block" aria-hidden="true" />
          <a
            href={`mailto:${identity.email}`}
            className="transition-colors duration-200 hover:text-ink"
          >
            {identity.email}
          </a>
          <span className="hidden h-3 w-px bg-line sm:block" aria-hidden="true" />
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-ink"
          >
            github
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-ink"
          >
            linkedin
          </a>
        </div>
      </div>
    </section>
  );
}
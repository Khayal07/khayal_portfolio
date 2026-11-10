"use client";

import { ArrowUpRight, GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

export function Education() {
  const { education } = portfolio;
  const { t } = useI18n();

  return (
    <section id="education" className="section-anchor border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow={t("education")}
          title={t("Education")}
          subtitle={t(
            "Formal and intensive training behind the engineering practice."
          )}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {education.map((entry, i) => (
            <article
              key={entry.institution}
              className="group flex flex-col rounded-xl border border-line bg-card p-6 transition-colors duration-200 hover:border-ink/30"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-silver">
                  {t(entry.period)}
                </span>
                <span className="font-mono text-xs text-silver">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-6 flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line text-silver transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
                  <GraduationCap size={15} />
                </span>
                <div>
                  <h3 className="text-base font-medium text-ink">
                    {entry.institution}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-silver">
                    {t(entry.degree)}
                  </p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-silver">
                {t(entry.description)}
              </p>

              {entry.credentialUrl && (
                <a
                  href={entry.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-6 inline-flex w-fit items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-silver transition-colors duration-200 hover:border-accent hover:text-ink"
                >
                  {t("View Diploma")}
                  <ArrowUpRight size={13} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
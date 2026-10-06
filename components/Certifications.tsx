"use client";

import { useState } from "react";
import { ArrowUpRight, Award, ExternalLink, FileText, Image as ImageIcon } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

type Platform = "All" | "Kaggle" | "HackerRank";

const TABS: Platform[] = ["All", "Kaggle", "HackerRank"];

export function Certifications() {
  const { certifications, socials } = portfolio;
  const { t } = useI18n();
  const [active, setActive] = useState<Platform>("All");

  const visible =
    active === "All"
      ? certifications
      : certifications.filter((c) => c.platform === active);

  return (
    <section id="certifications" className="section-anchor border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow={t("certifications")}
          title={t("Certifications")}
          subtitle={t(
            "Industry-recognized credentials validating core technical skills."
          )}
        />

        {/* Platform filter tabs */}
        <div className="mt-10 flex flex-wrap gap-1.5" role="tablist" aria-label={t("Filter by platform")}>
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={[
                "focus-ring rounded-md border px-3.5 py-1.5 font-mono text-xs transition-colors duration-200",
                active === tab
                  ? "border-ink/60 bg-card text-ink"
                  : "border-line text-silver hover:border-ink/40 hover:text-ink",
              ].join(" ")}
            >
              {t(tab)}
            </button>
          ))}
        </div>

        {/* Certificate grid */}
        <div className="mt-8 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
          {visible.map((cert, i) => {
            const isImageCert = Boolean(cert.imageUrl && !cert.pdfUrl);
            const viewUrl = cert.pdfUrl ?? cert.imageUrl ?? "#";

            return (
              <article
                key={cert.id}
                className="group flex flex-col bg-background p-7 transition-colors duration-200 hover:bg-card"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-silver">
                    {t(cert.issueDate)}
                  </span>
                  <span className="font-mono text-xs text-silver">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line text-silver transition-colors duration-200 group-hover:border-ink/50 group-hover:text-ink">
                    <Award size={15} />
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-ink">
                      {t(cert.title)}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-silver">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="mt-4 font-mono text-xs text-silver">
                  {t("Credential ID")}: {cert.credentialId}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-block rounded border border-line px-2 py-1 font-mono text-[11px] text-silver transition-colors duration-200 group-hover:border-ink/50 group-hover:text-ink">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {/* View Certificate / View PDF */}
                  <a
                    href={viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
                  >
                    {isImageCert ? <ImageIcon size={13} /> : <FileText size={13} />}
                    {t(isImageCert ? "View Certificate" : "View PDF")}
                    <ArrowUpRight size={13} />
                  </a>

                  {/* Verify */}
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
                  >
                    <ExternalLink size={13} />
                    {t("Verify")}
                    <ArrowUpRight size={13} />
                  </a>

                  {/* Per-cert profile / GitHub link */}
                  {cert.profileUrl && cert.profileLabel && (
                    <a
                      href={cert.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
                    >
                      {cert.profileLabel}
                      <ArrowUpRight size={13} />
                    </a>
                  )}

                  {/* HackerRank profile (for HackerRank certs that have no per-cert profileUrl) */}
                  {cert.platform === "HackerRank" && !cert.profileUrl && socials.hackerrank && (
                    <a
                      href={socials.hackerrank}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
                    >
                      HackerRank
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

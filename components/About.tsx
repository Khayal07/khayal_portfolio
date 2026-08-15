import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

const focusAreas = [
  "RAG Pipelines",
  "Multi-Agent Systems",
  "API Development",
  "Data Pipelines",
];

export function About() {
  const { identity, about } = portfolio;

  return (
    <section id="about" className="section-anchor border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="about"
              title="Work that bridges research and production."
            />
            <dl className="mt-10 font-mono text-xs">
              <div className="flex items-baseline justify-between gap-6 border-b border-line/60 py-3">
                <dt className="text-silver">location</dt>
                <dd className="text-right text-ink">
                  {identity.location}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-line/60 py-3">
                <dt className="text-silver">email</dt>
                <dd className="text-right text-ink">{identity.email}</dd>
              </div>
              <div className="flex items-start justify-between gap-6 border-b border-line/60 py-3">
                <dt className="pt-1 text-silver">focus</dt>
                <dd className="flex max-w-[16rem] flex-wrap justify-end gap-1.5">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded border border-line px-2 py-1 text-[11px] text-silver"
                    >
                      {area}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-silver sm:text-base">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
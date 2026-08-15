import { Mail, MapPin, Sparkles } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

const focusAreas = [
  "Retrieval-Augmented Generation",
  "Multi-Agent Architectures",
  "API Development",
  "Data Pipelines",
];

export function About() {
  const { identity, about } = portfolio;

  return (
    <section id="about" className="section-anchor py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="about"
          title="About Me"
          subtitle="Where machine learning research meets production software."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:text-[17px]">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <aside className="glass rounded-2xl p-6 shadow-card">
            <h3 className="font-mono text-sm uppercase tracking-wider text-accent-cyan">
              Quick facts
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted">
                  <MapPin size={14} className="text-accent-violet" />
                  Location
                </dt>
                <dd className="mt-1 text-sm font-medium text-white">
                  {identity.location}
                </dd>
              </li>
              <li>
                <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted">
                  <Mail size={14} className="text-accent-violet" />
                  Email
                </dt>
                <dd className="mt-1 text-sm font-medium text-white">
                  {identity.email}
                </dd>
              </li>
              <li>
                <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted">
                  <Sparkles size={14} className="text-accent-violet" />
                  Focus areas
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-base-border bg-base-surface px-3 py-1 font-mono text-xs text-muted"
                    >
                      {area}
                    </span>
                  ))}
                </dd>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
"use client";

import {
  Cpu,
  Database,
  FileSearch,
  Layers,
  Network,
  type LucideIcon,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

const capabilityIcons: Record<string, LucideIcon> = {
  "RAG & Vector Search": FileSearch,
  "Multi-Agent Workflows": Network,
  "AI API Microservices": Database,
  "Desktop AI Tools": Cpu,
};

export function Capabilities() {
  const { t } = useI18n();

  return (
    <section
      id="capabilities"
      className="section-anchor border-t border-line/70"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow={t("capabilities")}
          title={t("AI capabilities")}
          subtitle={t(
            "The core competencies I engineer around when building intelligent products."
          )}
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
          {portfolio.capabilities.map((capability, i) => {
            const Icon = capabilityIcons[capability.title] ?? Layers;
            return (
              <div
                key={capability.title}
                className="group bg-background p-7 transition-colors duration-200 hover:bg-card"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-silver">
                    <Icon size={15} />
                  </span>
                  <span className="font-mono text-xs text-silver">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-base font-medium text-ink">
                  {t(capability.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver">
                  {t(capability.description)}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {capability.tech.map((tech) => (
                    <li key={tech}>
                      <span className="inline-block rounded border border-line px-2 py-1 font-mono text-[11px] text-silver transition-colors duration-200 group-hover:border-ink/50 group-hover:text-ink">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
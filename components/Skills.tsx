import { BrainCircuit, Code2, LayoutDashboard, type LucideIcon } from "lucide-react";
import { portfolio, type SkillGroup } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

const categoryIcons: Record<string, LucideIcon> = {
  "Programming & Backend": Code2,
  "AI & Data": BrainCircuit,
  "Frontend & Tools": LayoutDashboard,
};

export function Skills() {
  const groups: SkillGroup[] = portfolio.skills;

  return (
    <section id="skills" className="section-anchor py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="skills"
          title="Skills & Technologies"
          subtitle="The tools I reach for when designing reliable, intelligent systems."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((group) => {
            const Icon = categoryIcons[group.category] ?? Code2;
            return (
              <div
                key={group.category}
                className="glass group rounded-2xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/50 hover:shadow-glow"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-base-border bg-base-elevated transition-colors duration-300 group-hover:border-accent-violet/40">
                    <Icon size={20} className="text-accent-cyan" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {group.category}
                  </h3>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-block rounded-full border border-base-border bg-base-surface px-3 py-1.5 font-mono text-xs text-muted transition-all duration-300 hover:border-accent-cyan/40 hover:text-accent-cyan">
                        {skill}
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
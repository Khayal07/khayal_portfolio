import { ArrowUpRight, MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { identity, hero, socials } = portfolio;

  return (
    <section id="home" className="section-anchor">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
        <span className="animate-fade-in inline-flex items-center gap-2 font-mono text-xs text-silver">
          <span className="h-1.5 w-1.5 rounded-full bg-status" aria-hidden="true" />
          {hero.status}
        </span>

        <h1
          className="animate-fade-in mt-8 text-5xl font-medium tracking-tight text-ink sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {identity.name}
          <span className="mt-2 block font-mono text-xl font-normal tracking-normal text-silver sm:text-2xl">
            {identity.title}
          </span>
        </h1>

        <p
          className="animate-fade-in mt-6 max-w-2xl text-base leading-relaxed text-silver sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {identity.tagline}
        </p>

        <div
          className="animate-fade-in mt-10 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href={hero.primaryCta.href}
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:bg-white"
          >
            {hero.primaryCta.label}
            <ArrowUpRight size={15} />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink/60"
          >
            {hero.secondaryCta.label}
          </a>
        </div>

        <div
          className="animate-fade-in mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-silver"
          style={{ animationDelay: "320ms" }}
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} className="text-silver" />
            {identity.location}
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
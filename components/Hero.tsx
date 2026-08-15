import { ArrowRight, Mail, Sparkles, Terminal } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const codeSnippet = [
  { prompt: true, text: "$ whoami" },
  { prompt: false, text: "Khayal — AI Engineer building smart, reliable systems" },
  { prompt: true, text: "$ ./ship --product" },
  { prompt: false, text: "RAG · agents · APIs · data pipelines" },
];

export function Hero() {
  const { identity, hero } = portfolio;

  return (
    <section id="home" className="relative">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
        <span className="glass animate-fade-up inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {hero.status}
        </span>

        <h1
          className="mt-8 animate-fade-up text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "100ms" }}
        >
          {identity.name.split(" ")[0]}
          <span className="text-gradient"> {identity.title}</span>
        </h1>

        <p
          className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted text-balance"
          style={{ animationDelay: "200ms" }}
        >
          {identity.tagline}
        </p>

        <div
          className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href={hero.primaryCta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-cyan px-7 py-3.5 text-sm font-medium text-white shadow-glow transition-all duration-300 hover:shadow-glow hover:brightness-110"
          >
            {hero.primaryCta.label}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="glass inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-accent-violet/60 hover:bg-base-elevated"
          >
            <Mail size={16} />
            {hero.secondaryCta.label}
          </a>
        </div>

        <div
          className="mt-16 w-full max-w-md animate-fade-up text-left"
          style={{ animationDelay: "400ms" }}
        >
          <div className="glass overflow-hidden rounded-2xl shadow-card">
            <div className="flex items-center gap-2 border-b border-base-border/70 px-4 py-3">
              <Terminal size={15} className="text-accent-cyan" />
              <span className="font-mono text-xs text-muted">khayal@dev</span>
              <div className="ml-auto flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
            </div>
            <div className="space-y-1.5 px-4 py-4 font-mono text-[13px]">
              {codeSnippet.map((line, i) => (
                <p
                  key={i}
                  className={`flex items-start gap-2 ${
                    line.prompt ? "text-white" : "text-muted"
                  }`}
                >
                  {line.prompt ? (
                    <Sparkles size={13} className="mt-0.5 shrink-0 text-accent-violet" />
                  ) : (
                    <span className="ml-[26px]" />
                  )}
                  <span>{line.text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
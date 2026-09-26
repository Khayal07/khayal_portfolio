"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Logo from "@/components/Logo";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useI18n } from "@/components/LanguageProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { identity, nav, socials } = portfolio;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-200 ${
        scrolled
          ? "border-line bg-background/85"
          : "border-line/60 bg-background/70"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="focus-ring flex items-center gap-2 rounded font-mono text-sm font-semibold tracking-tight text-ink"
        >
          <Logo className="h-7 w-7 shrink-0" />
          {identity.name.split(" ")[0]}
          <span className="text-silver">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded text-sm text-silver transition-colors duration-200 hover:text-ink"
              >
                {t(item.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={identity.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-2 text-sm text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
          >
            <Download size={14} />
            <span className="hidden lg:inline">{t("Download CV")}</span>
          </a>
          <LanguageToggle />
          <ThemeToggle />
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-ring rounded-md border border-line p-2 text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-ring rounded-md border border-line p-2 text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
          >
            <LinkedinIcon size={15} />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring rounded-md border border-line p-2 text-silver transition-colors duration-200 hover:text-ink md:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-silver transition-colors duration-200 hover:bg-raised hover:text-ink"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
            <li className="mt-2 px-3">
              <a
                href={identity.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm text-silver transition-colors duration-200 hover:border-ink/60 hover:text-ink"
              >
                <Download size={14} />
                {t("Download CV")}
              </a>
            </li>
            <li className="mt-2 flex flex-wrap items-center gap-2 px-3">
              <LanguageToggle />
              <ThemeToggle />
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="focus-ring rounded-md border border-line p-2 text-silver transition-colors duration-200 hover:text-ink"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="focus-ring rounded-md border border-line p-2 text-silver transition-colors duration-200 hover:text-ink"
              >
                <LinkedinIcon size={15} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
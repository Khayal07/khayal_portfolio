"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { identity, nav, socials } = portfolio;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "border-line bg-background/95" : "border-line/60 bg-background/70"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="focus-ring rounded font-mono text-sm font-semibold tracking-tight text-ink"
        >
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
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
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
        <div className="border-t border-line bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-silver transition-colors duration-200 hover:bg-raised hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-2 px-3">
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
"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { identity, nav, socials } = portfolio;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-base-border/60 shadow-lg shadow-black/20"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-mono text-lg font-semibold tracking-tight"
        >
          {identity.name.split("")[0]}
          <span className="text-gradient">
            {identity.name.slice(1)}
          </span>
          <span className="text-accent-violet">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-muted transition-all hover:text-white hover:shadow-glow-sm"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-muted transition-all hover:text-white hover:shadow-glow-sm"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-muted transition-colors hover:text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-base-border/60 md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-base-elevated hover:text-white"
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
                className="rounded-lg p-2 text-muted transition-colors hover:text-white"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2 text-muted transition-colors hover:text-white"
              >
                <LinkedinIcon size={18} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
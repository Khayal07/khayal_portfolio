"use client";

import { useI18n } from "@/components/LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className="flex items-center overflow-hidden rounded-md border border-line"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-2.5 py-1.5 font-mono text-xs transition-colors duration-200 ${
          locale === "en"
            ? "bg-card text-ink"
            : "text-silver hover:text-ink"
        }`}
      >
        EN
      </button>
      <span className="h-4 w-px bg-line" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLocale("az")}
        aria-pressed={locale === "az"}
        className={`px-2.5 py-1.5 font-mono text-xs transition-colors duration-200 ${
          locale === "az"
            ? "bg-card text-ink"
            : "text-silver hover:text-ink"
        }`}
      >
        AZ
      </button>
    </div>
  );
}
"use client";

import { useCallback, useEffect, useRef } from "react";
import type { TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";

interface LightboxProps {
  images: string[];
  title: string;
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}

export function Lightbox({ images, title, index, onChange, onClose }: LightboxProps) {
  const { t } = useI18n();
  const count = images.length;
  const touchStart = useRef<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const go = useCallback(
    (next: number) => onChange((next + count) % count),
    [count, onChange]
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") go(index + 1);
      if (event.key === "ArrowLeft") go(index - 1);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeButton.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [go, index, onClose]);

  const onTouchStart = (event: TouchEvent) => {
    touchStart.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStart.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(delta) > 40 && count > 1) go(delta < 0 ? index + 1 : index - 1);
  };

  const arrow =
    "focus-ring absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition-colors duration-200 hover:bg-black/70";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — ${t("Screenshots")}`}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex flex-col bg-black/90 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 text-white">
        <p className="truncate font-mono text-xs text-white/70">
          {title} · {index + 1} / {count}
        </p>
        <button
          ref={closeButton}
          type="button"
          onClick={onClose}
          aria-label={t("Close")}
          className="focus-ring rounded-md border border-white/20 p-2 text-white/80 transition-colors duration-200 hover:text-white"
        >
          <X size={18} />
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-16"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative aspect-[16/10] w-[min(100%,calc(78vh*1.6))] max-w-6xl">
          <Image
            onClick={(event) => event.stopPropagation()}
            key={images[index]}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            fill
            sizes="(min-width: 1200px) 1152px, 100vw"
            quality={90}
            className="object-contain"
            priority
          />
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                go(index - 1);
              }}
              aria-label={t("Previous screenshot")}
              className={`${arrow} left-2 sm:left-4`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                go(index + 1);
              }}
              aria-label={t("Next screenshot")}
              className={`${arrow} right-2 sm:right-4`}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex justify-center gap-2 pb-5" onClick={(event) => event.stopPropagation()}>
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => onChange(i)}
              aria-label={`${t("Show screenshot")} ${i + 1}`}
              aria-current={i === index}
              className={`focus-ring relative h-10 w-16 overflow-hidden rounded border transition-opacity duration-200 ${
                i === index ? "border-white opacity-100" : "border-white/20 opacity-50 hover:opacity-80"
              }`}
            >
              <Image src={src} alt="" fill sizes="64px" className="object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

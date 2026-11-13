"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent, TouchEvent } from "react";
import Image from "next/image";

export function Gallery({
  images,
  title,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
}: {
  images: string[];
  title: string;
  sizes?: string;
}) {
  const [shot, setShot] = useState(0);
  const touchStart = useRef<number | null>(null);
  const count = images.length;

  const go = (next: number) => setShot((next + count) % count);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || count < 2) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const zone = Math.floor(((event.clientX - rect.left) / rect.width) * count);
    setShot(Math.min(count - 1, Math.max(0, zone)));
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStart.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null || count < 2) return;
    const end = event.changedTouches[0].clientX;
    const delta = end - touchStart.current;
    touchStart.current = null;

    if (Math.abs(delta) > 30) {
      go(delta < 0 ? shot + 1 : shot - 1);
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    go(end - rect.left > rect.width / 2 ? shot + 1 : shot - 1);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") go(shot + 1);
    if (event.key === "ArrowLeft") go(shot - 1);
  };

  return (
    <div
      role="group"
      aria-label={`${title} screenshots, ${shot + 1} / ${count}`}
      tabIndex={count > 1 ? 0 : -1}
      onPointerMove={onPointerMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      className="focus-ring absolute inset-0 touch-pan-y select-none overflow-hidden bg-background"
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${title} screenshot ${i + 1}`}
          fill
          draggable={false}
          sizes={sizes}
          quality={90}
          className={`object-cover object-top transition-opacity duration-200 ${
            i === shot ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {count > 1 && (
        <div className="pointer-events-none absolute inset-x-3 bottom-2.5 flex gap-1.5" aria-hidden="true">
          {images.map((src, i) => (
            <span
              key={src}
              className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
                i === shot ? "bg-white" : "bg-white/35"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

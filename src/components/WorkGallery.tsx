"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ScrollFade from "./ScrollFade";
import type { WorkPhoto } from "@/lib/work";

export default function WorkGallery({ photos }: { photos: WorkPhoto[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {photos.map((p, i) => (
          <ScrollFade key={p.src} delay={(i % 12) * 40}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full aspect-square overflow-hidden rounded-xl ring-1 ring-ink/5 bg-surface text-left"
              aria-label={`Open photo: ${p.caption}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                quality={80}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                placeholder="blur"
                blurDataURL={p.blurDataURL}
              />
              <span className="absolute inset-x-0 bottom-0 p-3 text-white text-[12px] font-medium bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                {p.caption}
              </span>
            </button>
          </ScrollFade>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 flex flex-col"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 md:px-8 h-16 shrink-0">
            <p className="text-white/70 text-[13px] font-medium tabular-nums">
              {openIndex + 1} / {photos.length}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-white hover:bg-white/10"
            >
              <X size={22} strokeWidth={1.75} />
            </button>
          </div>

          <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 pb-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-2 md:left-6 w-11 h-11 inline-flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 z-10"
            >
              <ChevronLeft size={22} strokeWidth={1.75} />
            </button>

            <div
              className="relative w-full h-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[openIndex].src}
                alt={photos[openIndex].alt}
                fill
                quality={90}
                sizes="100vw"
                className="object-contain"
                placeholder="blur"
                blurDataURL={photos[openIndex].blurDataURL}
                priority
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-2 md:right-6 w-11 h-11 inline-flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 z-10"
            >
              <ChevronRight size={22} strokeWidth={1.75} />
            </button>
          </div>

          <p className="text-center text-white/80 text-[14px] pb-6 px-4">
            {photos[openIndex].caption}
          </p>
        </div>
      )}
    </>
  );
}

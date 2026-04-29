"use client";

import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import ScrollFade from "./ScrollFade";
import { brand } from "@/config/brand";

const REVIEWS = [
  {
    quote:
      "I recently had the fortune of finding All Quality Electrical to complete the installation of a new electrical panel. Shai and his team kept in touch with me from start to finish and did an outstanding job.",
    name: "Thomas S.",
    when: "Mar 2026",
  },
  {
    quote:
      "AQE's Lavik installed an EV charger at our house. They did a great job. Everything seems to work. The entire process and communication were very smooth and transparent.",
    name: "Tim B.",
    when: "Feb 2026",
  },
  {
    quote:
      "Some of the plugs in the house stopped working. I called All Quality Electrical to ask if they can help. Shai answered and took the time to diagnose the problem and guide me through a very easy fix. He was extremely helpful and gracious.",
    name: "Ben H.",
    when: "Jan 2026",
  },
  {
    quote:
      "Excellent communication from them. Very good pricing. EV charger was installed in less than 2 hours.",
    name: "Stephanie S.",
    when: "Dec 2025",
  },
  {
    quote:
      "Shai and Levik did a great job installing my EV charger in an efficient manner. Pricing was good and Shai will work with you within your budget. The job was clean and fast.",
    name: "Ronald J.",
    when: "Nov 2025",
  },
  {
    quote:
      "Very professional, efficient, courteous, and good quality. The work was quality and done with good explanations and efficiency.",
    name: "KK Y.",
    when: "Oct 2025",
  },
];

const PER_PAGE = 3;
const PAGES = Math.ceil(REVIEWS.length / PER_PAGE);

export default function Reviews() {
  const [page, setPage] = useState(0);
  const start = page * PER_PAGE;
  const visible = REVIEWS.slice(start, start + PER_PAGE);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null || touchStartY.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Horizontal swipe threshold; ignore if mostly vertical (page scroll)
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) setPage((p) => Math.min(PAGES - 1, p + 1));
      else setPage((p) => Math.max(0, p - 1));
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-surface border-y border-hairline">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <ScrollFade className="max-w-2xl">
            <p className="eyebrow">Reviews</p>
            <h2 className="mt-4 font-display font-bold text-h2-m md:text-h2-d text-ink text-balance">
              Rated{" "}
              <span className="inline-flex items-baseline gap-2">
                <span>{brand.rating}</span>
                <span className="inline-flex translate-y-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={26}
                      strokeWidth={1}
                      fill="#C00A0B"
                      stroke="#C00A0B"
                    />
                  ))}
                </span>
              </span>{" "}
              by Valley homeowners.
            </h2>
          </ScrollFade>

          <ScrollFade delay={80}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-hairline text-[13px] font-semibold text-ink shadow-soft">
              <YelpPill size={20} />
              5-star rated on Yelp
            </span>
          </ScrollFade>
        </div>

        {/* Carousel */}
        <div
          className="mt-12 grid md:grid-cols-3 gap-4 md:gap-5 touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {visible.map((r, i) => (
            <ScrollFade key={r.name + r.when} delay={i * 80}>
              <figure className="lift h-full bg-white border border-hairline rounded-2xl p-7 md:p-8 flex flex-col">
                <div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      strokeWidth={1}
                      fill="#C00A0B"
                      stroke="#C00A0B"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-[18px] leading-[1.5] text-ink flex-1 text-pretty">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <YelpPill size={28} />
                  <div className="leading-tight">
                    <p className="font-semibold text-[14px] text-ink">{r.name}</p>
                    <p className="text-[12px] text-charcoal mt-0.5">
                      Yelp · {r.when}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </ScrollFade>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-between">
          <a
            href="https://www.yelp.com/biz/all-quality-electrical-canoga-park"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 py-3 -my-3 text-[14px] font-semibold text-ink hover:text-brand transition-colors"
          >
            Read all reviews on Yelp
            <ExternalLink size={14} strokeWidth={2} />
          </a>

          <div className="inline-flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous reviews"
              className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-hairline bg-white hover:border-ink/40 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <span className="text-[13px] text-charcoal font-medium tabular-nums">
              {page + 1} / {PAGES}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(PAGES - 1, p + 1))}
              disabled={page === PAGES - 1}
              aria-label="Next reviews"
              className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-hairline bg-white hover:border-ink/40 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small Yelp pill avatar — red square with white "Y". Replaces letter-initial fakery. */
function YelpPill({ size = 24 }: { size?: number }) {
  return (
    <span
      role="img"
      aria-label="Yelp"
      className="inline-flex items-center justify-center rounded-md bg-brand text-white font-display font-bold shrink-0"
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.6),
        lineHeight: 1,
      }}
    >
      Y
    </span>
  );
}

"use client";

import { Phone } from "lucide-react";
import { brand } from "@/config/brand";

/**
 * Sticky bottom call bar — shown only under 720px (per spec).
 * Tailwind's `md` breakpoint is 768; we override with a custom media query
 * via inline class so the threshold matches exactly what was asked for.
 */
export default function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 hidden-mobile-bar"
      style={{ paddingBottom: "max(0px, env(safe-area-inset-bottom))" }}
    >
      <div className="px-3 pb-3 pt-2 bg-gradient-to-t from-bg via-bg/95 to-transparent">
        <a
          href={brand.phoneHref}
          aria-label={`Call ${brand.name} now`}
          className="flex items-center justify-center gap-2 h-13 py-3.5 rounded-full bg-brand text-white font-semibold text-[15px] shadow-lift hover:bg-brand-hover transition-colors"
        >
          <Phone size={16} strokeWidth={2} />
          Call {brand.phone}
        </a>
      </div>
      <style jsx>{`
        .hidden-mobile-bar {
          display: block;
        }
        @media (min-width: 720px) {
          .hidden-mobile-bar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

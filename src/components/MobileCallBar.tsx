"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { brand } from "@/config/brand";

/**
 * Sticky bottom call bar — only shown < 720px.
 * Fades in after the hero CTAs scroll out of view (so it doesn't compete
 * with the hero on first paint), and slides up smoothly.
 */
export default function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show once user has scrolled at least one viewport height. The hero
      // already has its own primary + secondary CTA, so duplicating them in a
      // floating bar is noise on first paint.
      setVisible(window.scrollY > Math.min(560, window.innerHeight * 0.7));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 hidden-mobile-bar"
      style={{
        paddingBottom: "max(0px, env(safe-area-inset-bottom))",
        transform: visible ? "translateY(0)" : "translateY(120%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      <div className="px-3 pb-3 pt-2 bg-gradient-to-t from-bg via-bg/95 to-transparent">
        <a
          href={brand.phoneHref}
          aria-label={`Call ${brand.phone}`}
          tabIndex={visible ? 0 : -1}
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

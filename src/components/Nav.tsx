"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { brand } from "@/config/brand";

const ITEMS = [
  { href: "/#services", label: "Services" },
  { href: "/#ev", label: "EV chargers" },
  { href: "/work", label: "Our work" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#about", label: "About" },
  { href: "/#area", label: "Service area" },
];

export default function Nav() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Smooth opacity ramp from 0 → 1 across the first 80px of scroll
      const p = Math.min(1, Math.max(0, window.scrollY / 80));
      setScrollProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-40"
        style={{
          backgroundColor: `rgba(250, 250, 247, ${scrollProgress * 0.88})`,
          backdropFilter: scrollProgress > 0.05 ? `blur(${scrollProgress * 12}px)` : undefined,
          WebkitBackdropFilter: scrollProgress > 0.05 ? `blur(${scrollProgress * 12}px)` : undefined,
          borderBottom: `1px solid rgba(228, 225, 217, ${scrollProgress})`,
          transition: "background-color 0.14s ease, border-color 0.14s ease",
        }}
      >
        <div className="max-w-content mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
          <a href="/" aria-label={`${brand.name} — home`} className="inline-flex items-center">
            <Logo height={32} className="md:h-9" />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[14px] font-medium text-charcoal hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-brand text-white hover:bg-brand-hover transition-colors text-[14px] font-semibold shadow-soft"
            >
              <Phone size={15} strokeWidth={2} />
              Call now
            </a>
          </div>

          <div className="flex md:hidden items-center gap-1">
            <a
              href={brand.phoneHref}
              aria-label={`Call ${brand.name}`}
              className="w-11 h-11 inline-flex items-center justify-center rounded-lg text-ink hover:bg-surface"
            >
              <Phone size={20} strokeWidth={1.75} />
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="w-11 h-11 inline-flex items-center justify-center rounded-lg text-ink hover:bg-surface"
            >
              {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 md:hidden bg-bg pt-20">
          <nav className="flex flex-col px-6 pt-4">
            {ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display font-semibold text-[28px] py-4 border-b border-hairline text-ink"
                style={{ animation: `fade-up 0.4s ${i * 0.05}s both` }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={brand.phoneHref}
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 h-14 rounded-xl bg-brand text-white font-semibold shadow-soft"
            >
              <Phone size={18} strokeWidth={2} />
              Call now — {brand.phone}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

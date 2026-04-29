"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { brand } from "@/config/brand";

const ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#ev", label: "EV chargers" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#area", label: "Service area" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-bg/85 backdrop-blur border-b border-hairline"
            : "bg-bg/0 border-b border-transparent"
        }`}
      >
        <div className="max-w-content mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
          <a href="#top" aria-label={`${brand.name} — home`} className="inline-flex items-center">
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
              className="text-[14px] font-semibold text-ink hover:text-brand transition-colors"
            >
              {brand.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center h-10 px-4 rounded-lg bg-brand text-white hover:bg-brand-hover transition-colors text-[14px] font-semibold shadow-soft"
            >
              Get a quote
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
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center h-14 rounded-xl bg-brand text-white font-semibold shadow-soft"
            >
              Get a free quote
            </a>
            <a
              href={brand.phoneHref}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center h-12 rounded-xl border border-hairline text-ink font-medium"
            >
              <Phone size={16} className="mr-2" /> {brand.phone}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

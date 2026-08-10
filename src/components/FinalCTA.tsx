import { Phone } from "lucide-react";
import ScrollFade from "./ScrollFade";
import { brand } from "@/config/brand";

export default function FinalCTA() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <span
        aria-hidden
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(192,10,11,0.32), rgba(192,10,11,0) 70%)",
        }}
      />
      <div className="relative max-w-content mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <ScrollFade>
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">
            One call away
          </p>
          <h2 className="mt-4 font-display font-extrabold text-h2-m md:text-h2-d text-white text-balance max-w-3xl mx-auto">
            Stop putting it off. <span className="text-brand">Get it fixed right.</span>
          </h2>
          <p className="mt-5 text-[16px] md:text-[18px] text-white/70 max-w-2xl mx-auto">
            Free, written quotes — usually same-day. Shai picks up.
          </p>
        </ScrollFade>

        <ScrollFade delay={120}>
          <div className="mt-9 flex justify-center">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-brand text-white font-semibold hover:bg-brand-hover transition-colors shadow-soft"
            >
              <Phone size={18} strokeWidth={2} />
              Call now — {brand.phone}
            </a>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}

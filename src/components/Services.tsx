import {
  Plug,
  Zap,
  Lightbulb,
  Home,
  AlertCircle,
  Wrench,
  ArrowRight,
} from "lucide-react";
import ScrollFade from "./ScrollFade";

const FEATURE = {
  Icon: Plug,
  title: "EV charger installation",
  body: "Tesla, Rivian, Ford, Hyundai, Kia — load-calc, permit, and a clean install in about 2 hours. We've done over 400 of these in the Valley.",
  href: "#ev",
};

const SERVICES = [
  {
    Icon: Zap,
    title: "Panel upgrades",
    body: "100A → 200A or 400A service. Permit-pulled, inspector-approved, future-proofed for solar and EVs.",
  },
  {
    Icon: Home,
    title: "Whole-home rewiring",
    body: "Knob-and-tube, aluminum, or just tired wiring. We rip it out and run new copper to every room.",
  },
  {
    Icon: Lightbulb,
    title: "Recessed lighting",
    body: "LED retrofit kitchens, living rooms, hallways. Dimmer-compatible, properly air-sealed.",
  },
  {
    Icon: AlertCircle,
    title: "Diagnostics & repair",
    body: "Outlets that don't work. Breakers that trip. Lights that flicker. We find the cause, not the symptom.",
  },
  {
    Icon: Wrench,
    title: "Remodels & additions",
    body: "Adding an ADU, finishing a basement, opening a wall? Coordinate-with-GC electrical from rough to trim.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <ScrollFade className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 font-display font-bold text-h2-m md:text-h2-d text-ink text-balance">
            Whatever your home needs — Shai&apos;s team handles it.
          </h2>
        </ScrollFade>

        {/* 6-card grid: feature card spans 2 cols on md+ */}
        <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-4 md:gap-5">
          {/* Feature: EV — dark spanning card */}
          <ScrollFade className="md:col-span-2">
            <a
              href={FEATURE.href}
              className="lift group relative h-full block bg-ink text-white border border-ink rounded-2xl p-7 md:p-9 overflow-hidden"
            >
              {/* Soft red glow */}
              <span
                aria-hidden
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(192,10,11,0.55), rgba(192,10,11,0) 70%)",
                }}
              />
              <span className="relative inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full bg-brand text-white">
                Most requested
              </span>
              <div className="relative mt-6 flex items-start gap-5">
                <span className="w-12 h-12 rounded-xl bg-white/10 text-white inline-flex items-center justify-center shrink-0">
                  <FEATURE.Icon size={24} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-[26px] md:text-[30px] leading-tight">
                    {FEATURE.title}
                  </h3>
                  <p className="mt-3 text-[15px] md:text-[16px] leading-[1.6] text-white/75 max-w-[52ch]">
                    {FEATURE.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand group-hover:gap-2.5 transition-all">
                    See pricing & install
                    <ArrowRight size={16} strokeWidth={2} />
                  </span>
                </div>
              </div>
            </a>
          </ScrollFade>

          {SERVICES.map(({ Icon, title, body }, i) => (
            <ScrollFade key={title} delay={(i + 1) * 60}>
              <article className="lift h-full bg-white border border-hairline rounded-2xl p-7">
                <span className="w-11 h-11 rounded-xl bg-brand/10 text-brand inline-flex items-center justify-center">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display font-bold text-[20px] text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-charcoal text-pretty">{body}</p>
              </article>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}

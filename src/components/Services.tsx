import {
  Plug,
  Zap,
  Lightbulb,
  Home,
  AlertCircle,
  Wrench,
} from "lucide-react";
import ScrollFade from "./ScrollFade";

const SERVICES = [
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
    Icon: Zap,
    title: "Panel upgrades",
    body: "100A → 200A or 400A service. Permit-pulled, inspector-approved, future-proofed for solar and EVs.",
  },
  {
    Icon: Plug,
    title: "EV charger installation",
    body: "Tesla, Rivian, Ford, Hyundai, Kia — load-calc, permit, and a clean install.",
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

        <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map(({ Icon, title, body }, i) => (
            <ScrollFade key={title} delay={i * 60}>
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

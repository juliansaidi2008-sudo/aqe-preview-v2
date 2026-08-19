import { ShieldCheck, MessageCircle, Sparkles } from "lucide-react";
import ScrollFade from "./ScrollFade";

const POINTS = [
  { Icon: ShieldCheck, label: "Protect the space" },
  { Icon: MessageCircle, label: "Communicate clearly" },
  { Icon: Sparkles, label: "Work cleanly" },
];

export default function HomeownerFocus() {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-hairline">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <ScrollFade className="max-w-2xl">
          <p className="eyebrow">Built for homeowners</p>
          <h2 className="mt-4 font-display font-bold text-h2-m md:text-h2-d text-ink text-balance">
            Built for real homes, not just job sites.
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.6] text-charcoal max-w-[60ch]">
            AQE specializes in electrical work inside finished, occupied homes. The
            team works carefully around your space, keeps disruption to a minimum,
            and explains what&apos;s happening along the way — without compromising
            the quality of the electrical work.
          </p>
        </ScrollFade>

        <ScrollFade delay={100}>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {POINTS.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-lg bg-brand/10 text-brand inline-flex items-center justify-center shrink-0">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span className="font-semibold text-[15px] text-ink">{label}</span>
              </li>
            ))}
          </ul>
        </ScrollFade>
      </div>
    </section>
  );
}

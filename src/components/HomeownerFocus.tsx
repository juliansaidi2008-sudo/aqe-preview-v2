import { ShieldCheck, MessageCircle, Sparkles, UserCheck } from "lucide-react";
import ScrollFade from "./ScrollFade";

const BENEFITS = [
  {
    Icon: ShieldCheck,
    title: "Protect your home",
    body: "Careful work around flooring, furniture and belongings.",
  },
  {
    Icon: MessageCircle,
    title: "Know what's happening",
    body: "Clear explanations before and during the work so you know what to expect.",
  },
  {
    Icon: Sparkles,
    title: "Minimize disruption",
    body: "Thoughtful planning, clean work areas, and attention to dust when drywall must be opened.",
  },
  {
    Icon: UserCheck,
    title: "Experienced residential service",
    body: "Electricians accustomed to working inside finished, occupied homes — not just construction sites.",
  },
];

export default function HomeownerFocus() {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-hairline">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <ScrollFade className="max-w-2xl">
          <p className="eyebrow">Built for homeowners</p>
          <h2 className="mt-4 font-display font-bold text-h2-m md:text-h2-d text-ink text-balance">
            Electrical work without turning your home into a job site.
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.6] text-charcoal max-w-[62ch]">
            Your home isn&apos;t an open construction site — and we don&apos;t treat
            it like one. AQE specializes in electrical work inside occupied homes,
            where protecting your space matters just as much as doing the electrical
            work correctly.
          </p>
          <p className="mt-4 text-[16px] md:text-[17px] leading-[1.6] text-charcoal max-w-[62ch]">
            We work carefully around furniture and belongings, reduce dust and
            disruption when walls need to be opened, keep the work area organized,
            and explain what&apos;s happening so you know what to expect every step
            of the way.
          </p>
        </ScrollFade>

        <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {BENEFITS.map(({ Icon, title, body }, i) => (
            <ScrollFade key={title} delay={i * 60}>
              <article className="lift h-full bg-white border border-hairline rounded-2xl p-7">
                <span className="w-11 h-11 rounded-xl bg-brand/10 text-brand inline-flex items-center justify-center">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display font-bold text-[18px] text-ink text-balance">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-charcoal text-pretty">
                  {body}
                </p>
              </article>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}

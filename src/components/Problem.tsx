import { ZapOff, AlertTriangle, UserX } from "lucide-react";
import ScrollFade from "./ScrollFade";

const ITEMS = [
  {
    Icon: ZapOff,
    title: "Half-finished jobs",
    body: "Cheap quotes that leave wires hanging in your walls and breakers that trip every summer.",
  },
  {
    Icon: AlertTriangle,
    title: "Dangerous corners cut",
    body: "Underrated panels, missing grounds, daisy-chained outlets — the kind of thing that starts fires.",
  },
  {
    Icon: UserX,
    title: "Contractors who ghost",
    body: "They quote, they vanish. You're left with a partial install and no one calling back.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-28 bg-surface border-y border-hairline">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <ScrollFade className="max-w-2xl">
          <p className="eyebrow">Why this matters</p>
          <h2 className="mt-4 font-display font-bold text-h2-m md:text-h2-d text-ink text-balance">
            Bad electrical work isn&apos;t just inconvenient.
            <br className="hidden md:inline" /> It&apos;s{" "}
            <span className="text-brand">dangerous</span>.
          </h2>
        </ScrollFade>

        <div className="mt-12 md:mt-14 grid md:grid-cols-3 gap-4 md:gap-5">
          {ITEMS.map(({ Icon, title, body }, i) => (
            <ScrollFade key={title} delay={i * 80}>
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

        <ScrollFade delay={240} className="mt-10 md:mt-12">
          <p className="text-[15px] md:text-[16px] text-charcoal max-w-2xl">
            Twenty years in, Shai and his team still answer the phone themselves.
            The job gets done right the first time — or it gets done again, on us.
          </p>
        </ScrollFade>
      </div>
    </section>
  );
}

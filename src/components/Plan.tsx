import ScrollFade from "./ScrollFade";
import { brand } from "@/config/brand";

const STEPS = [
  {
    n: "1",
    title: "Call or text",
    body: "Tell Shai or his team what's going on — someone always picks up.",
  },
  {
    n: "2",
    title: "Free, fixed quote",
    body: "Same-day or next-day visit. Written quote — no surprises, no upsells.",
  },
  {
    n: "3",
    title: "Done right, today",
    body: `Most jobs finish in one visit, backed by a ${brand.warranty}.`,
  },
];

export default function Plan() {
  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <ScrollFade className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 font-display font-bold text-h2-m md:text-h2-d text-ink text-balance">
            Three steps. No mystery.
          </h2>
        </ScrollFade>

        <div className="relative mt-14 grid md:grid-cols-3 gap-10 md:gap-12">
          {/* Dashed connector — desktop only */}
          <div
            aria-hidden
            className="hidden md:block absolute top-7 left-[16%] right-[16%] border-t-2 border-dashed border-hairline"
          />

          {STEPS.map((s, i) => (
            <ScrollFade key={s.n} delay={i * 100}>
              <div className="relative text-center md:text-left">
                {/* Numbered circle */}
                <span
                  className="relative inline-flex items-center justify-center w-14 h-14 rounded-full text-white font-display font-bold text-[22px] shadow-lift"
                  style={{
                    background: "linear-gradient(135deg, #C00A0B 0%, #9C0708 100%)",
                  }}
                >
                  {s.n}
                </span>
                <h3 className="mt-5 font-display font-bold text-[22px] text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-charcoal text-pretty md:max-w-[34ch]">
                  {s.body}
                </p>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Check, Phone } from "lucide-react";
import ScrollFade from "./ScrollFade";
import { brand } from "@/config/brand";
import { blur } from "@/lib/imageBlurs";

const evStoneBlur = blur.evStone;

const POINTS = [
  "We assess your panel, wiring, and load before we quote anything",
  "You get a clear scope and a fixed, written price for the work",
  "Panel, wiring, or lighting work completed to code — permit-pulled when required",
  "Every job is tested and walked through with you before we call it done",
];

export default function EVSpotlight() {
  return (
    <section id="process" className="relative bg-ink text-white overflow-hidden">
      {/* Soft red glow corner */}
      <span
        aria-hidden
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(192,10,11,0.35), rgba(192,10,11,0) 70%)",
        }}
      />

      <div className="relative max-w-content mx-auto px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Copy column */}
        <div className="lg:col-span-7">
          <ScrollFade>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">
              Our process
            </p>
            <h2 className="mt-4 font-display font-bold text-h2-m md:text-h2-d text-white text-balance">
              From assessment to{" "}
              <span className="text-brand">final fixture</span>.
            </h2>
            <p className="mt-5 text-[17px] md:text-[18px] text-white/75 leading-[1.6] max-w-[58ch]">
              Whether it&apos;s a panel upgrade, a full rewire, or new lighting
              throughout the house, every project starts with the same process —
              assess what&apos;s there, plan the scope, do the work right, and test
              everything before we walk away.
            </p>
          </ScrollFade>

          <ScrollFade delay={120}>
            <ul className="mt-7 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-3 items-start">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand inline-flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} className="text-white" />
                  </span>
                  <span className="text-[15px] md:text-[16px] text-white/85">{p}</span>
                </li>
              ))}
            </ul>
          </ScrollFade>

          <ScrollFade delay={200}>
            <figure className="mt-8 border-l-2 border-brand pl-5">
              <blockquote className="text-[16px] md:text-[17px] italic text-white/85 leading-[1.55]">
                &ldquo;Shai and his team kept in touch with me from start to finish
                and did an outstanding job.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-[13px] text-white/60">
                — Thomas S., Yelp · Mar 2026
              </figcaption>
            </figure>
          </ScrollFade>

          {/* Photo on mobile only — appears below copy */}
          <ScrollFade delay={320} className="lg:hidden">
            <div className="mt-10 relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/images/ev-stone.jpg"
                alt="Shai and the AQE crew on a recent install in the San Fernando Valley"
                fill
                quality={90}
                sizes="(max-width: 1024px) 90vw, 0px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={evStoneBlur}
              />
            </div>
          </ScrollFade>
        </div>

        {/* Right column: photo (lg+) + form */}
        <div className="lg:col-span-5">
          <ScrollFade delay={120} className="hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 mb-5">
              <Image
                src="/images/ev-stone.jpg"
                alt="Shai and the AQE crew on a recent install in the San Fernando Valley"
                fill
                quality={90}
                sizes="(max-width: 1024px) 0px, 480px"
                className="object-cover"
              />
            </div>
          </ScrollFade>

          <ScrollFade delay={200} as="div">
            <div className="bg-white/[0.04] border border-white/12 rounded-2xl p-7 md:p-8 text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">
                Free, no-obligation quote
              </p>
              <p className="mt-2 text-[20px] font-display font-bold text-white">
                Shai&apos;s team picks up.
              </p>
              <p className="mt-2 text-[15px] text-white/70 leading-[1.6]">
                Call or text and tell us what&apos;s going on — you&apos;ll get a fixed
                price before anyone touches a wire.
              </p>
              <a
                href={brand.phoneHref}
                className="mt-6 inline-flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-brand text-white font-semibold hover:bg-brand-hover transition-colors"
              >
                <Phone size={18} strokeWidth={2} />
                Call now — {brand.phone}
              </a>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import ScrollFade from "./ScrollFade";
import { brand } from "@/config/brand";

const STATS = [
  { k: "20+", v: "Years in the Valley" },
  { k: "2,400+", v: "Homes wired" },
  { k: `${brand.rating}★`, v: `From ${brand.reviewCount}+ reviews` },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo */}
          <ScrollFade className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-[480px] mx-auto overflow-hidden rounded-2xl ring-1 ring-ink/5 shadow-lift">
              <Image
                src="/images/shai-worker.jpg"
                alt="Shai, owner of All Quality Electrical, on the job in the San Fernando Valley"
                fill
                quality={90}
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          </ScrollFade>

          {/* Bio */}
          <div className="lg:col-span-7">
            <ScrollFade delay={80}>
              <p className="eyebrow">About Shai</p>
              <h2 className="mt-4 font-display font-bold text-h2-m md:text-h2-d text-ink text-balance">
                Your electrician for the next 20 years.
              </h2>
            </ScrollFade>

            <ScrollFade
              delay={140}
              className="mt-7 space-y-5 text-[16px] md:text-[17px] leading-[1.7] text-charcoal max-w-[60ch]"
            >
              <p>
                Shai started All Quality Electrical out of his truck in 2003. Two
                decades later, the same hands still pick up the phone, write the
                quotes, and run service most days of the week.
              </p>
              <p>
                The crew is small on purpose — Shai, his son, and a couple of techs
                he&apos;s trained from the wires up. That&apos;s why the same
                family that wired your panel in 2010 can be the one installing
                your EV charger today, your ADU sub-panel next year, and your solar
                disconnect after that.
              </p>
              <p className="text-ink font-semibold">
                Family-run. Licensed. Insured. Answering the phone.
              </p>
            </ScrollFade>

            {/* Stat row */}
            <ScrollFade delay={220}>
              <dl className="mt-8 grid grid-cols-3 gap-4 md:gap-6 border-t border-hairline pt-7">
                {STATS.map((s) => (
                  <div key={s.v}>
                    <dt className="font-display font-bold text-[34px] md:text-[40px] text-ink leading-none tracking-[-0.02em]">
                      {s.k}
                    </dt>
                    <dd className="mt-2 text-[12px] md:text-[13px] uppercase tracking-[0.1em] text-charcoal font-semibold">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  );
}

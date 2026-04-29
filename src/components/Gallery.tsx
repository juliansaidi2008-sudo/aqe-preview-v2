import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollFade from "./ScrollFade";
import StatsCounter from "./StatsCounter";
import { brand } from "@/config/brand";
import { blur } from "@/lib/imageBlurs";

const ITEMS = [
  {
    src: "/images/hero-malibu.jpg",
    alt: "Utility-pole service install in Malibu",
    caption: "Malibu · Utility service install",
    objectPosition: "center 30%",
    blurDataURL: blur.heroMalibu,
  },
  {
    src: "/images/ev-stone.jpg",
    alt: "Shai and the AQE crew on a recent install",
    caption: "On the job · AQE crew",
    objectPosition: "center",
    blurDataURL: blur.evStone,
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Dining room with chandelier and full recessed-lighting install",
    caption: "Dining room · recessed lighting",
    objectPosition: "center",
    blurDataURL: blur.gallery1,
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Our Lady of Grace school library — recessed lighting + smoke detectors",
    caption: "Our Lady of Grace school · library",
    objectPosition: "center top",
    blurDataURL: blur.gallery2,
  },
  {
    src: "/images/shai-worker.jpg",
    alt: "AQE technician installing a ceiling fixture during an interior remodel",
    caption: "Interior · ceiling fixture install",
    objectPosition: "center 30%",
    blurDataURL: blur.shaiWorker,
  },
];

export default function Gallery() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-hairline">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <ScrollFade className="max-w-2xl">
          <p className="eyebrow">Recent work</p>
          <h2 className="mt-4 font-display font-bold text-h2-m md:text-h2-d text-ink text-balance">
            From panels to charging stations.
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] text-charcoal max-w-[56ch]">
            A few real jobs from across the Valley.
          </p>
        </ScrollFade>

        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {ITEMS.map((p, i) => (
            <ScrollFade key={p.src + i} delay={i * 60}>
              <figure className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-ink/5 group bg-surface">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectPosition: p.objectPosition }}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  placeholder="blur"
                  blurDataURL={p.blurDataURL}
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-white text-[13px] md:text-[14px] font-medium bg-gradient-to-t from-black/65 via-black/20 to-transparent">
                  {p.caption}
                </figcaption>
              </figure>
            </ScrollFade>
          ))}

          {/* Editorial 6th tile — stats CTA, fills the bento and earns its space */}
          <ScrollFade delay={ITEMS.length * 60}>
            <a
              href="#contact"
              className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10 group bg-ink text-white flex flex-col justify-between p-6 md:p-7 lift"
            >
              {/* Soft red glow */}
              <span
                aria-hidden
                className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(192,10,11,0.55), rgba(192,10,11,0) 70%)",
                }}
              />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
                  By the numbers
                </p>
                <p className="mt-3 font-display font-extrabold text-[44px] md:text-[52px] leading-none tracking-[-0.02em]">
                  <StatsCounter to={2400} suffix="+" duration={1400} />
                </p>
                <p className="mt-2 text-[14px] text-white/70 max-w-[24ch]">
                  Valley homes wired since {brand.established}.
                </p>
              </div>

              <div className="relative inline-flex items-center gap-1.5 text-[14px] font-semibold text-white group-hover:gap-2.5 transition-all">
                Be next on the list
                <ArrowRight size={16} strokeWidth={2} />
              </div>
            </a>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}

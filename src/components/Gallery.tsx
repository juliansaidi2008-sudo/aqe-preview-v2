import Image from "next/image";
import ScrollFade from "./ScrollFade";

const ITEMS = [
  {
    src: "/images/hero-malibu.jpg",
    alt: "Malibu utility install",
    caption: "Malibu · Service utility install",
    aspect: "aspect-[4/5]",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    src: "/images/ev-stone.jpg",
    alt: "Stone-clad meter and EV-ready electrical work",
    caption: "Calabasas · Stone-clad meter + EV prep",
    aspect: "aspect-[4/3]",
    span: "md:col-span-5",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Service panel work",
    caption: "Woodland Hills · 200A panel upgrade",
    aspect: "aspect-[4/3]",
    span: "md:col-span-3",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Our Lady of Grace school library — commercial",
    caption: "Encino · Our Lady of Grace school library",
    aspect: "aspect-[4/5]",
    span: "md:col-span-3",
  },
  {
    src: "/images/shai-worker.jpg",
    alt: "Shai on the job",
    caption: "Sherman Oaks · ADU electrical rough-in",
    aspect: "aspect-[4/5]",
    span: "md:col-span-5",
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
            A few of the jobs we&apos;ve done across the Valley this year.
          </p>
        </ScrollFade>

        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {ITEMS.map((p, i) => (
            <ScrollFade key={p.src + i} delay={i * 60} className={p.span}>
              <figure
                className={`relative w-full ${p.aspect} overflow-hidden rounded-2xl ring-1 ring-ink/5 group`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-white text-[13px] md:text-[14px] font-medium bg-gradient-to-t from-black/60 to-transparent">
                  {p.caption}
                </figcaption>
              </figure>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}

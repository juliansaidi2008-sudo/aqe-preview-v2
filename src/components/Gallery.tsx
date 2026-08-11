import { ArrowRight } from "lucide-react";
import ScrollFade from "./ScrollFade";
import WorkGallery from "./WorkGallery";
import { brand } from "@/config/brand";
import { WORK_PHOTOS } from "@/lib/work";

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
            {WORK_PHOTOS.length} real jobs from across the Valley.
          </p>
        </ScrollFade>

        <div className="mt-12 md:mt-14">
          <WorkGallery photos={WORK_PHOTOS} />
        </div>

        {/* Editorial stats banner — closes out the gallery, earns its space */}
        <ScrollFade delay={120}>
          <a
            href={brand.phoneHref}
            className="mt-4 md:mt-5 relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 overflow-hidden rounded-2xl ring-1 ring-white/10 bg-ink text-white p-7 md:p-9 group lift"
          >
            <span
              aria-hidden
              className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(192,10,11,0.55), rgba(192,10,11,0) 70%)",
              }}
            />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
                By the numbers
              </p>
              <p className="mt-3 font-display font-extrabold text-[36px] md:text-[44px] leading-none tracking-[-0.02em] tabular-nums">
                2,400+
              </p>
              <p className="mt-2 text-[14px] text-white/70 max-w-[32ch]">
                Valley homes wired since {brand.established}.
              </p>
            </div>

            <div className="relative inline-flex items-center gap-1.5 text-[14px] font-semibold text-white group-hover:gap-2.5 transition-all shrink-0">
              Be next on the list
              <ArrowRight size={16} strokeWidth={2} />
            </div>
          </a>
        </ScrollFade>
      </div>
    </section>
  );
}

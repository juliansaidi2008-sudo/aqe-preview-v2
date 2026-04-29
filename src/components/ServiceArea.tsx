import { Check, ExternalLink } from "lucide-react";
import ScrollFade from "./ScrollFade";
import { brand } from "@/config/brand";

export default function ServiceArea() {
  return (
    <section id="area" className="py-20 md:py-28 bg-surface border-y border-hairline">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <ScrollFade className="max-w-2xl">
          <p className="eyebrow">Service area</p>
          <h2 className="mt-4 font-display font-bold text-h2-m md:text-h2-d text-ink text-balance">
            From Canoga Park to Sherman Oaks — we&apos;re likely already on your block.
          </h2>
        </ScrollFade>

        <div className="mt-12 md:mt-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* City checklist */}
          <ScrollFade className="lg:col-span-5">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {brand.cities.map((city) => (
                <li key={city} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-brand/10 text-brand inline-flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-ink font-medium">{city}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[14px] text-charcoal">
              Don&apos;t see your city? Call us — we likely cover it.
            </p>
            <a
              href={brand.phoneHref}
              className="mt-4 inline-flex items-center justify-center h-11 px-5 rounded-lg bg-ink text-white font-semibold hover:bg-charcoal transition-colors"
            >
              Call {brand.phone}
            </a>
          </ScrollFade>

          {/* Map */}
          <ScrollFade delay={120} className="lg:col-span-7">
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full rounded-2xl overflow-hidden ring-1 ring-ink/5 bg-white">
              <iframe
                src={brand.mapsEmbed}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${brand.name} service area map`}
              />
              <a
                href={brand.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink bg-white border border-hairline rounded-lg px-3 py-2 shadow-soft hover:bg-bg transition-colors"
              >
                Open in Maps
                <ExternalLink size={13} strokeWidth={2} />
              </a>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}

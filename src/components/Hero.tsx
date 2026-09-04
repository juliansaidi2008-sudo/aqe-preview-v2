import Image from "next/image";
import { MessageCircle, Phone, ShieldCheck, Clock, Wrench, Star } from "lucide-react";
import { brand } from "@/config/brand";
import { blur } from "@/lib/imageBlurs";

const TRUST = [
  { Icon: ShieldCheck, label: `Licensed CA C-10` },
  { Icon: Clock, label: "Same-day service" },
  { Icon: Wrench, label: "Family-run, since 2009" },
  { Icon: Star, label: `${brand.rating}★ on Yelp` },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">
              Serving Woodland Hills + the San Fernando Valley
            </p>

            <h1 className="font-display font-extrabold text-h1-m md:text-h1-d text-ink tracking-[-0.03em] leading-[1.02]">
              Your electrical issue.
              <br />
              Handled the right way.
              <br className="md:hidden" />
              <span className="text-brand md:ml-[0.4ch]">With respect for your home.</span>
            </h1>

            <p className="mt-6 text-[17px] md:text-[19px] text-charcoal leading-[1.55] max-w-[58ch] text-pretty">
              Licensed electricians serving homeowners throughout Woodland Hills,
              Calabasas and the San Fernando Valley. Family-run, straightforward
              service, backed by a {brand.warranty}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={brand.phoneHref}
                aria-label={`Call ${brand.phone}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-brand text-white font-semibold hover:bg-brand-hover transition-colors shadow-soft"
              >
                <Phone size={18} strokeWidth={2} />
                <span className="md:hidden">Call to Schedule</span>
                <span className="hidden md:inline text-[17px]">Call {brand.phone}</span>
              </a>
              <a
                href={brand.textHref}
                aria-label={`Text ${brand.shortName} at ${brand.phone}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-hairline bg-white text-ink font-semibold hover:border-ink/20 hover:bg-surface transition-colors shadow-soft"
              >
                <MessageCircle size={18} strokeWidth={2} />
                Text AQE
              </a>
            </div>

            {/* Trust strip */}
            <ul className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-4">
              {TRUST.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-[13px] text-charcoal">
                  <Icon size={18} strokeWidth={1.75} className="text-brand shrink-0" />
                  <span className="font-medium text-ink">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo + floating badges */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto overflow-hidden rounded-2xl ring-1 ring-ink/5 shadow-lift">
                <Image
                  src="/images/hero-malibu.jpg"
                  alt={`${brand.name} — utility-pole service install in Malibu`}
                  fill
                  priority
                  quality={82}
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blur.heroMalibu}
                />
              </div>

              {/* Floating badge: install time */}
              <div className="hidden sm:flex absolute -left-4 lg:-left-8 top-[38%] bg-white border border-hairline rounded-xl px-4 py-3 shadow-lift items-center gap-3 max-w-[220px]">
                <span className="w-9 h-9 rounded-lg bg-brand/10 text-brand inline-flex items-center justify-center shrink-0">
                  <Clock size={18} strokeWidth={2} />
                </span>
                <div>
                  <p className="font-display font-bold text-[18px] text-ink leading-none">2 hrs</p>
                  <p className="text-[12px] text-charcoal mt-1 leading-none">avg EV install</p>
                </div>
              </div>

              {/* Floating badge: rating */}
              <div className="hidden sm:flex absolute -right-3 lg:-right-6 bottom-[12%] bg-ink text-white rounded-xl px-4 py-3 shadow-lift items-center gap-3 max-w-[240px]">
                <span className="w-9 h-9 rounded-lg bg-brand inline-flex items-center justify-center shrink-0">
                  <Star size={18} strokeWidth={2} fill="white" />
                </span>
                <div>
                  <p className="font-display font-bold text-[18px] leading-none">
                    {brand.rating}★
                  </p>
                  <p className="text-[12px] text-white/70 mt-1 leading-none">
                    from {brand.reviewCount}+ reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

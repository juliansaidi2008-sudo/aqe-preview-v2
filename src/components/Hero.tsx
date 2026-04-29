import Image from "next/image";
import { Phone, ShieldCheck, Clock, Wrench, Star } from "lucide-react";
import { brand } from "@/config/brand";

const TRUST = [
  { Icon: ShieldCheck, label: `Licensed CA C-10` },
  { Icon: Clock, label: "Same-day service" },
  { Icon: Wrench, label: "Family-run, 20+ yrs" },
  { Icon: Star, label: `${brand.rating}★ on Yelp` },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-7 lg:gap-14 items-center">
          {/* Copy */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <p className="eyebrow mb-5">
              {brand.address.city} · {brand.address.state}
            </p>

            <h1 className="font-display font-extrabold text-h1-m md:text-h1-d text-ink tracking-[-0.03em] leading-[1.02]">
              Your electrical issue.
              <br />
              Fixed today.
              <br className="md:hidden" />
              <span className="text-brand md:ml-[0.4ch]">By Shai&rsquo;s team personally.</span>
            </h1>

            <p className="mt-6 text-[17px] md:text-[19px] text-charcoal leading-[1.55] max-w-[58ch] text-pretty">
              Licensed electricians serving Canoga Park, Calabasas and the San Fernando
              Valley. Family-run, no-upsell pricing, work guaranteed.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-brand text-white font-semibold hover:bg-brand-hover transition-colors shadow-soft"
              >
                Get a free quote
              </a>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-lg border border-ink/20 text-ink font-semibold hover:border-ink/40 hover:bg-surface transition-colors"
              >
                <Phone size={16} strokeWidth={2} />
                Call {brand.phone}
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

          {/* Photo + floating badges — appears FIRST on mobile (visual hook), right side on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[5/3] sm:aspect-[16/9] lg:aspect-[4/5] w-full max-w-[520px] lg:max-w-[440px] mx-auto overflow-hidden rounded-2xl ring-1 ring-ink/5 shadow-lift">
                <Image
                  src="/images/hero-malibu.jpg"
                  alt={`${brand.name} — utility-pole service install in Malibu`}
                  fill
                  priority
                  quality={82}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                  style={{ objectPosition: "center 35%" }}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAFAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAH//Z"
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

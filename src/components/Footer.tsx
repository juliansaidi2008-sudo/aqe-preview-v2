import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { brand } from "@/config/brand";

const SERVICES = [
  { href: "/#services", label: "EV charger installation" },
  { href: "/#services", label: "Panel upgrades" },
  { href: "/#services", label: "Whole-home rewiring" },
  { href: "/#services", label: "Recessed lighting" },
  { href: "/#services", label: "Diagnostics & repair" },
  { href: "/#services", label: "Remodels & additions" },
];

const COMPANY = [
  { href: "/#about", label: "About Shai" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#area", label: "Service area" },
  { href: brand.phoneHref, label: "Call now" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-bg border-t border-hairline pb-28 md:pb-10 pt-16 md:pt-20">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Logo height={36} />
            <p className="mt-5 text-[14px] text-charcoal leading-relaxed max-w-xs">
              Family-run, licensed electricians serving the San Fernando Valley
              since 2009.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-ink">
              Services
            </p>
            <ul className="mt-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="block py-3 -my-px text-[14px] text-charcoal hover:text-ink transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-ink">
              Company
            </p>
            <ul className="mt-3">
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="block py-3 -my-px text-[14px] text-charcoal hover:text-ink transition-colors"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-[12px] uppercase tracking-[0.14em] font-semibold text-ink">
              Contact
            </p>
            <ul className="mt-3 text-[14px] text-charcoal">
              <li>
                <a
                  href={brand.phoneHref}
                  className="flex items-center gap-2 py-3 hover:text-ink transition-colors"
                >
                  <Phone size={14} strokeWidth={2} className="text-brand" />
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="flex items-center gap-2 py-3 hover:text-ink transition-colors"
                >
                  <Mail size={14} strokeWidth={2} className="text-brand" />
                  <span className="break-all">{brand.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 py-3">
                <MapPin size={14} strokeWidth={2} className="text-brand mt-1 shrink-0" />
                <span>
                  {brand.address.street}, {brand.address.unit}
                  <br />
                  {brand.address.city}, {brand.address.state} {brand.address.zip}
                </span>
              </li>
              <li className="py-3 text-charcoal/80">{brand.hours.label}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[12px] text-charcoal">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="text-[12px] text-charcoal">
            {brand.license.type} · {brand.license.note}
          </p>
        </div>
      </div>
    </footer>
  );
}

export type FAQ = { q: string; a: string };

/**
 * Source of truth for the FAQ section.
 * Imported by:
 *  - src/components/FAQ.tsx (renders the section)
 *  - src/app/layout.tsx (emits FAQPage JSON-LD for Google rich results)
 */
export const FAQS: ReadonlyArray<FAQ> = [
  {
    q: "Are you licensed and insured?",
    a: "Yes — California C-10 Electrical Contractor. Liability + workers' comp are both current. License number available on request.",
  },
  {
    q: "How fast can you come out?",
    a: "Most calls get a same-day or next-day visit. Emergencies during business hours, we'll move things around.",
  },
  {
    q: "Do you pull permits?",
    a: "Always, when one's required. Panel upgrades, EV chargers on dedicated circuits, sub-panels, ADUs — permit pulled, inspector signs off, you keep the paperwork.",
  },
  {
    q: "How much does an EV charger install cost?",
    a: "Typical installs run $650–$1,400 depending on panel space, run length, and whether we need to upgrade the service. We'll give you a fixed written quote before we start.",
  },
  {
    q: "What brands of EV chargers do you install?",
    a: "Tesla Wall Connector, ChargePoint, Wallbox, JuiceBox, plus the OEM units that ship with Rivian, Ford, Hyundai, Kia. Hardwired or NEMA 14-50, your call.",
  },
  {
    q: "Do you do commercial work?",
    a: "Some — small office TI, schools, restaurants. We're residential-first, so call and we'll honestly tell you whether it's a fit.",
  },
];

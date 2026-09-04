// Single source of truth for All Quality Electrical preview site.
// Every component imports `{ brand }` from here — no hardcoded business
// strings anywhere else in src/.
export const brand = {
  name: "All Quality Electrical",
  shortName: "AQE",
  tagline: "Your electrical issue. Handled the right way, with respect for your home.",
  established: 2009,

  phone: "(818) 657-9605",
  phoneHref: "tel:18186579605",
  textHref: "sms:+18186579605",
  email: "allqualityelectrical@gmail.com",

  address: {
    street: "6931 Topanga Canyon Blvd",
    unit: "Unit 3",
    city: "Canoga Park",
    state: "CA",
    zip: "91303",
    country: "US",
  },

  hours: {
    days: "Mon–Sat",
    open: "8:00 AM",
    close: "6:00 PM",
    label: "Mon–Sat, 8am–6pm",
  },

  cities: [
    "Woodland Hills",
    "Canoga Park",
    "Calabasas",
    "West Hills",
    "Tarzana",
    "Encino",
    "Sherman Oaks",
    "Northridge",
    "Reseda",
    "Winnetka",
  ],

  rating: 4.9,
  reviewCount: 60,

  // Labor only — not a materials/parts or manufacturer-defect warranty.
  warranty: "10-year labor warranty",

  license: {
    type: "CA C-10 Electrical Contractor",
    note: "License available on request",
  },

  siteUrl: "https://aqe-preview-v2.vercel.app",

  // Map iframe src — real Google Maps, no hand-drawn SVG nonsense.
  mapsEmbed:
    "https://www.google.com/maps?q=6931+Topanga+Canyon+Blvd,+Canoga+Park,+CA+91303&z=11&output=embed",
  mapsLink:
    "https://www.google.com/maps/place/6931+Topanga+Canyon+Blvd,+Canoga+Park,+CA+91303",
} as const;

export type Brand = typeof brand;

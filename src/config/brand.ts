// Single source of truth for All Quality Electrical preview site.
// Every component imports `{ brand }` from here — no hardcoded business
// strings anywhere else in src/.
export const brand = {
  name: "All Quality Electrical",
  shortName: "AQE",
  tagline: "Your electrical issue. Fixed today. By Shai's team personally.",
  established: 2003,

  phone: "(818) 657-9605",
  phoneHref: "tel:18186579605",
  email: "allqualityelectrical@gmail.com",

  address: {
    street: "7049 Owensmouth Ave",
    city: "Canoga Park",
    state: "CA",
    zip: "91303",
    country: "US",
  },

  hours: {
    days: "Mon–Sat",
    open: "9:00 AM",
    close: "6:00 PM",
    label: "Mon–Sat, 9am–6pm",
  },

  cities: [
    "Canoga Park",
    "Calabasas",
    "Woodland Hills",
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
    "https://www.google.com/maps?q=7049+Owensmouth+Ave,+Canoga+Park,+CA+91303&z=11&output=embed",
  mapsLink:
    "https://www.google.com/maps/place/7049+Owensmouth+Ave,+Canoga+Park,+CA+91303",
} as const;

export type Brand = typeof brand;

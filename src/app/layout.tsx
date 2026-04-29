import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { brand } from "@/config/brand";
import { FAQS } from "@/lib/faqs";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const title = `${brand.name} | Licensed Electricians in ${brand.address.city}, ${brand.address.state}`;
const description = `Licensed electricians serving ${brand.address.city}, Calabasas, and the San Fernando Valley for 20+ years. EV charger install, panel upgrades, home rewiring. Call ${brand.phone}.`;

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title,
  description,
  keywords: [
    "electrician",
    "Canoga Park electrician",
    "EV charger installation",
    "panel upgrade",
    "home rewiring",
    "licensed electrician",
    "San Fernando Valley electrician",
    "Calabasas electrician",
    "Woodland Hills electrician",
  ],
  authors: [{ name: brand.name }],
  openGraph: {
    title,
    description,
    url: brand.siteUrl,
    siteName: brand.name,
    type: "website",
    locale: "en_US",
    // Image is generated dynamically by app/opengraph-image.tsx at /opengraph-image
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/aq_logo.png", type: "image/png" }],
    apple: [{ url: "/aq_logo.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#C00A0B",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: brand.name,
  image: `${brand.siteUrl}/og-image.jpg`,
  description,
  telephone: brand.phoneHref.replace("tel:", "+"),
  email: brand.email,
  url: brand.siteUrl,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address.street,
    addressLocality: brand.address.city,
    addressRegion: brand.address.state,
    postalCode: brand.address.zip,
    addressCountry: brand.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: brand.cities.map((city) => `${city}, ${brand.address.state}`),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(brand.rating),
    reviewCount: String(brand.reviewCount),
  },
  founder: { "@type": "Person", name: "Shai" },
  foundingDate: String(brand.established),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

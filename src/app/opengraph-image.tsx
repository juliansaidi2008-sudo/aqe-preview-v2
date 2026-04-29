import { ImageResponse } from "next/og";
import { brand } from "@/config/brand";

export const runtime = "edge";
export const alt = `${brand.name} — ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Custom branded OG card. Renders the AQ wordmark, a punchy tagline, and
 * the trust bar (Yelp rating + Canoga Park address) on the brand navy with a
 * red accent — so any time the link is shared (iMessage, Twitter, LinkedIn,
 * Slack, WhatsApp) the preview looks like a real business asset.
 */
export default async function OG() {
  // Edge runtime can't use process.env at module load for the host, so build
  // the absolute URL from the deployed origin via VERCEL_URL when available.
  const host =
    process.env.VERCEL_URL && !process.env.VERCEL_URL.startsWith("http")
      ? `https://${process.env.VERCEL_URL}`
      : brand.siteUrl;
  const logoUrl = `${host}/aq_logo.png`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 88% 18%, rgba(192,10,11,0.55), rgba(14,18,32,0) 55%), linear-gradient(160deg, #0E1220 0%, #131724 100%)",
          color: "#FAFAF7",
          fontFamily: '"Inter", system-ui, sans-serif',
        }}
      >
        {/* Top: logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl}
            alt={brand.name}
            width={310}
            height={62}
            style={{ borderRadius: 8 }}
          />
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <p
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#C00A0B",
              margin: 0,
            }}
          >
            Licensed electricians · Canoga Park, CA
          </p>
          <h1
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "#FAFAF7",
              margin: 0,
              maxWidth: 1000,
            }}
          >
            Your electrical issue.
            <br />
            Fixed today.{" "}
            <span style={{ color: "#FF5A5C" }}>By Shai’s team personally.</span>
          </h1>
        </div>

        {/* Bottom: trust bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            fontSize: 24,
            color: "rgba(250, 250, 247, 0.86)",
            fontWeight: 500,
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#C00A0B",
              }}
            />
            CA C-10 licensed &amp; insured
          </span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>{brand.rating}★ on Yelp · {brand.reviewCount}+ reviews</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>20+ years, family-run</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

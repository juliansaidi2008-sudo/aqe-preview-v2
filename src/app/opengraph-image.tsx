import { ImageResponse } from "next/og";
import { brand } from "@/config/brand";

export const runtime = "edge";
export const alt = `${brand.name} — ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Custom branded OG card. Renders the AQ wordmark + tagline + trust strip
 * on the brand navy with a red glow accent — so any time the link is shared
 * (iMessage, Twitter, Slack, WhatsApp) the preview looks like a real
 * business asset rather than a cropped photo.
 *
 * The logo mark is recreated in JSX rather than fetching the PNG, so we
 * don't depend on an external image being reachable from the Edge runtime.
 */
export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 80px",
          background:
            "radial-gradient(circle at 88% 16%, rgba(192,10,11,0.62), rgba(14,18,32,0) 55%), linear-gradient(160deg, #0D1120 0%, #131724 100%)",
          color: "#FAFAF7",
          fontFamily: '"Inter", "Helvetica Neue", system-ui, sans-serif',
        }}
      >
        {/* TOP — AQ logo lockup recreated in JSX */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
          }}
        >
          {/* Red square AQ mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 96,
              height: 96,
              background: "#C00A0B",
              borderRadius: 14,
              fontSize: 60,
              fontWeight: 800,
              color: "#FAFAF7",
              letterSpacing: -3,
              fontFamily: '"Helvetica Neue", system-ui, sans-serif',
            }}
          >
            AQ
          </div>
          {/* Wordmark stack */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: 800,
              fontSize: 36,
              letterSpacing: -1,
              lineHeight: 1.05,
              color: "#FAFAF7",
            }}
          >
            <span>ALL QUALITY</span>
            <span>ELECTRICAL</span>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ display: "flex", flex: 1 }} />

        {/* MIDDLE — eyebrow + headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#C00A0B",
              margin: 0,
              marginBottom: 22,
            }}
          >
            Licensed CA C-10 · Canoga Park, CA
          </p>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              color: "#FAFAF7",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
            }}
          >
            Your electrical issue.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              marginTop: 6,
              flexWrap: "wrap",
              gap: 18,
            }}
          >
            <span style={{ color: "#FAFAF7" }}>Handled the right way.</span>
            <span style={{ color: "#FF5A5C" }}>With respect for your home.</span>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ display: "flex", flex: 0.5 }} />

        {/* BOTTOM — trust strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 22,
            color: "rgba(250,250,247,0.86)",
            fontWeight: 500,
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                display: "flex",
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#C00A0B",
              }}
            />
            CA C-10 licensed &amp; insured
          </span>
          <span style={{ display: "flex", opacity: 0.4 }}>·</span>
          <span style={{ display: "flex" }}>
            {brand.rating} stars on Yelp · {brand.reviewCount}+ reviews
          </span>
          <span style={{ display: "flex", opacity: 0.4 }}>·</span>
          <span style={{ display: "flex" }}>20+ years, family-run</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

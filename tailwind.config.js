const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.join(__dirname, "src/**/*.{js,ts,jsx,tsx,mdx}")],
  theme: {
    extend: {
      colors: {
        // Brand
        brand: "#C00A0B",
        "brand-hover": "#9C0708",
        // Ink
        ink: "#131724",
        charcoal: "#4A5163",
        // Neutrals
        bg: "#FAFAF7",
        surface: "#F2F0EB",
        hairline: "#E4E1D9",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      fontSize: {
        // Display scale
        "display-d": ["88px", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-m": ["48px", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "h1-d": ["72px", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "h1-m": ["44px", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "h2-d": ["56px", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "h2-m": ["36px", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h3: ["24px", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        eyebrow: ["12px", { letterSpacing: "0.14em", lineHeight: "1.4" }],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(19, 23, 36, 0.04), 0 4px 16px rgba(19, 23, 36, 0.04)",
        lift: "0 4px 8px rgba(19, 23, 36, 0.06), 0 12px 32px rgba(19, 23, 36, 0.08)",
      },
    },
  },
  plugins: [],
};

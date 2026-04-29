import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const BASE = brand.siteUrl;
  const sections = ["", "#services", "#ev", "#reviews", "#about", "#area"];
  return sections.map((s, i) => ({
    url: `${BASE}/${s}`,
    lastModified: now,
    changeFrequency: i === 0 ? "monthly" : "monthly",
    priority: i === 0 ? 1.0 : 0.8,
  }));
}

import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const BASE = brand.siteUrl;
  const entries = [
    { path: "", priority: 1.0 },
    { path: "#services", priority: 0.8 },
    { path: "#process", priority: 0.8 },
    { path: "#reviews", priority: 0.8 },
    { path: "#about", priority: 0.8 },
    { path: "#area", priority: 0.8 },
    { path: "work", priority: 0.9 },
  ];
  return entries.map(({ path, priority }) => ({
    url: `${BASE}/${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}

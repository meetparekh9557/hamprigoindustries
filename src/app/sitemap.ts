export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { company, nav } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return nav.map((item) => ({
    url: new URL(item.href, company.url).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));
}

export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { company, nav } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // The site is exported with trailing slashes, so /about serves a redirect
  // and /about/ serves the page. Listing the redirect wastes a crawl.
  return nav.map((item) => ({
    url: new URL(item.href.endsWith("/") ? item.href : `${item.href}/`, company.url).toString(),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));
}

export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { company, nav } from "@/content/site";

/**
 * Locations only.
 *
 * Google ignores changefreq and priority outright, and says so. They were
 * noise: five entries all claiming 0.8 tell a crawler nothing it did not
 * already know from the site having five pages.
 *
 * lastmod is gone for a worse reason than being ignored. It was the build
 * time, so every page claimed to have changed every time anything was
 * deployed, including pages nothing had touched. A crawler that checks a
 * couple of those and finds them unchanged learns to disregard the field,
 * which costs more than leaving it out. It belongs here only if it is the
 * date each page's own content actually changed.
 *
 * The site is exported with trailing slashes, so /about serves a redirect
 * and /about/ serves the page. Listing the redirect wastes a crawl.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((item) => ({
    url: new URL(
      item.href.endsWith("/") ? item.href : `${item.href}/`,
      company.url,
    ).toString(),
  }));
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export, for Cloudflare Pages. Produces plain HTML, CSS and JS in
  // out/ with no Node runtime required.
  output: "export",

  // Static hosts serve /path/ as /path/index.html, so emit directories.
  trailingSlash: true,

  // next/image optimisation needs a server. Nothing is optimised at build
  // time on a static export, so images must be correctly sized at source.
  images: { unoptimized: true },

  // NOTE: redirects() is not supported with output: "export". The 301s from
  // the previous site's URLs live in public/_redirects instead, which
  // Cloudflare Pages reads.
};

export default nextConfig;

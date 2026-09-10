import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export, for Cloudflare Pages. Produces plain HTML, CSS and JS in
  // out/ with no Node runtime required.
  output: "export",

  // Static hosts serve /path/ as /path/index.html, so emit directories.
  trailingSlash: true,

  // next/image cannot resize at request time on a static export, so the
  // variants are generated ahead of the build and a custom loader picks the
  // right one. Without this every image ships at full size: a 1600px hero
  // was being sent to a 390px phone.
  //
  // deviceSizes are exactly the widths generated, so the srcset Next writes
  // and the files on disk cannot disagree.
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [480, 800, 1200, 1600],
    imageSizes: [480],
  },

  // NOTE: redirects() is not supported with output: "export". The 301s from
  // the previous site's URLs live in public/_redirects instead, which
  // Cloudflare Pages reads.
};

export default nextConfig;

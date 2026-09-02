import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The previous site was live on this domain until 2025 and these paths
    // are still indexed. Point them at their closest equivalents so old
    // links and any remaining index entries do not land on a 404.
    return [
      { source: "/services", destination: "/lamination", permanent: true },
      { source: "/service", destination: "/lamination", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/aboutus", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;

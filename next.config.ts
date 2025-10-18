import type { NextConfig } from "next";

// Configure static export for Cloudflare Pages and other static hosts
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Disable next/image optimization for static export
    unoptimized: true,
  },
};

export default nextConfig;

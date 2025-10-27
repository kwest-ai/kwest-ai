import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Disable Image Optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

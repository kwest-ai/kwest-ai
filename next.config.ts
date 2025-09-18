import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Configuration for GitHub Pages subdirectory
  basePath: '/kwest-ai',
  assetPrefix: '/kwest-ai/',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

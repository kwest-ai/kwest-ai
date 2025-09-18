import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Set basePath for GitHub Pages deployment
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

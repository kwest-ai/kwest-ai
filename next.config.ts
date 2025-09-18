import type { NextConfig } from "next";

// Check if we're building for custom domain or GitHub Pages subdirectory
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Use basePath only for GitHub Pages subdirectory (not for custom domain)
  ...(isCustomDomain ? {} : {
    basePath: '/kwest-ai',
    assetPrefix: '/kwest-ai/',
  }),
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

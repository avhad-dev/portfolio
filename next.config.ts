import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Use the repository name as the base path when deployed to GitHub Pages
  basePath: isProd ? '/portfolio' : '',
  // Disable Image Optimization API as it is not supported in static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

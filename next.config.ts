import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  }, 
  eslint: {
    ignoreDuringBuilds: true, // Ignora ESLint no comando 'next build'
  },
};

export default nextConfig;

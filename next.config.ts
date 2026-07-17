import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/demo-cloudrun/:tag/:path*', 
        destination: '/:path*',
      },
      {
        source: '/demo-cloudrun/:tag',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
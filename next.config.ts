import type { NextConfig } from "next";

const revisionTag = process.env.CLOUD_RUN_TAG;
const prefix = `/${revisionTag}`;

const nextConfig: NextConfig = {
  ...(revisionTag && {
  assetPrefix: prefix,

  async rewrites() {
    return [
      {
        source: `${prefix}/:path*`,
        destination: "/:path*",
      },
      {
        source: prefix,
        destination: "/",
      },
    ];
  }}),
};

export default nextConfig;

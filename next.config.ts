import type { NextConfig } from "next";

const serviceName = process.env.CLOUD_RUN_SERVICE || "demo-cloudrun";
const revisionTag = process.env.CLOUD_RUN_TAG || "main";

const prefix = `/${serviceName}/${revisionTag}`;

const nextConfig: NextConfig = {
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
  },
};

export default nextConfig;

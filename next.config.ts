import type { NextConfig } from "next";

const serviceName = process.env.CLOUD_RUN_SERVICE || "demo-cloudrun";
const revisionTag = process.env.CLOUD_RUN_TAG;

if (!serviceName || !revisionTag) {
  throw new Error("CLOUD_RUN_SERVICE and CLOUD_RUN_TAG must be defined");
}

const prefix = `/${serviceName}/${revisionTag}`;

const nextConfig: NextConfig = {
  assetPrefix: prefix,
};

export default nextConfig;

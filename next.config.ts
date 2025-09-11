import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "my.spline.design",
      },
    ],
  },
};

export default nextConfig;

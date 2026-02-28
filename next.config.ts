import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/shridhar-portfolio",
  assetPrefix: "/shridhar-portfolio/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: "dist",
};

export default nextConfig;
import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  assetPrefix: isProduction ? "/reservation-site/" : "",
  trailingSlash: true,
};

export default nextConfig;

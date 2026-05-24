import type { NextConfig } from "next";

// Deploying to GitHub Pages at https://sheedosa.github.io/ultra-website/
// In production we need a basePath + assetPrefix matching the repo name.
const REPO = "ultra-website";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${REPO}` : "",
  assetPrefix: isProd ? `/${REPO}/` : "",
  trailingSlash: true,
};

export default nextConfig;

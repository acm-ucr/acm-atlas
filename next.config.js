/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
  },
  basePath: "",
  assetPrefix: "",
  output: "export",
  trailingSlash: false,
};

module.exports = nextConfig;

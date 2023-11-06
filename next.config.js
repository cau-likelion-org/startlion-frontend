//next.config.js
const withTwin = require("./withTwin");

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});

module.exports = nextConfig;

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
  reactStrictMode: true,
  images: {
    domains: ["startlion.s3.ap-northeast-2.amazonaws.com"],
    // 이곳에 에러메세지의 hostname 다음 따옴표에 오는 링크를 적으면 된다
    // 나중에 서버에서 주는 해당하는 url 도메인을 가져와야 할 것!
  },
});

module.exports = nextConfig;

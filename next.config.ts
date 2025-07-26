import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  "eslint": {
    "ignoreDuringBuilds": true
  },
  "typescript": {
    "ignoreBuildErrors": true
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/lander',
        permanent: false,
      },
    ]
  },
}

export default nextConfig;

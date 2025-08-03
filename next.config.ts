import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  // Uncomment this line if your hosting provider is forcing /lander path
  // basePath: '/lander',
  async redirects() {
    return [
      {
        source: '/lander',
        destination: '/',
        permanent: true,
      },
      // Add redirect from www to non-www if needed
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.devbibek.tech',
          },
        ],
        destination: 'https://devbibek.tech/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

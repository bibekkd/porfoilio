import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  async rewrites() {
    return [
      // Rewrite /lander to serve the root page content (internal rewrite)
      {
        source: '/lander',
        destination: '/',
      },
      // Rewrite /lander/ to serve the root page content (internal rewrite)
      {
        source: '/lander/',
        destination: '/',
      },
    ]
  },
  async redirects() {
    return [
      // Redirect root to /lander if hosting provider expects it
      {
        source: '/',
        destination: '/lander',
        permanent: false, // Use temporary redirect to avoid caching issues
      },
      // Redirect www to non-www
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

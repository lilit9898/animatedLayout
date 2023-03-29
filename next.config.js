/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumb.tildacdn.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;

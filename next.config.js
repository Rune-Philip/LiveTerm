/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/LiveTerm',
  assetPrefix: '/LiveTerm/',
};

module.exports = nextConfig;

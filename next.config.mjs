/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['next-themes'],
  },
};

export default nextConfig;

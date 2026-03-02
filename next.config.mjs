/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // SSR/ISR on Vercel — no static export
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['next-themes'],
  },
};

export default nextConfig;

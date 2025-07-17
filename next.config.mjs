/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['cdn.cafecito.app'],
  },
  experimental: {
    serverComponentsExternalPackages: ['nodemailer'],
  },
  output: 'standalone',
}

export default nextConfig

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
  },
  experimental: {
    legacyBrowsers: false, // Evita incluir JS para navegadores viejos como IE11
  },
}

export default nextConfig

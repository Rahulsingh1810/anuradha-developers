/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
  allowedDevOrigins: ['192.168.0.101'],
}

export default nextConfig
//deploy - 5

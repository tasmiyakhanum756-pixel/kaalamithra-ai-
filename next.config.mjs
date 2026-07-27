import withPWA from '@ducanh2912/next-pwa'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.11.248', '192.168.29.54', '172.27.8.248'],
  turbopack: {},
}

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: false,
  runtimeCaching: [],
})(nextConfig)

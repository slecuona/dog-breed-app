/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.dog.ceo'],
  },
  async rewrites() {
    return [
      // Proxy to Backend
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/:path*'
      }
    ]
  }
}

module.exports = nextConfig

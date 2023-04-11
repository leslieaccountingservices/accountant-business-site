/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/7w8j0w0gqi9b/**'
      }
    ]
  }
}

module.exports = nextConfig

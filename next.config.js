/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`
      }
    ]
  }
}

module.exports = nextConfig
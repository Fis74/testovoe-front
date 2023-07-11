/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['testovoe-server.vercel.app'],
  },
  env: {
    NEXT_SERVER_API_URL: process.env.NEXT_SERVER_API_URL,
  },
}

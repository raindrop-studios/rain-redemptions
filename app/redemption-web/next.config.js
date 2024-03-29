/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['www.arweave.net'],
  },
  reactStrictMode: true,
  webpack: {
    target: "web",
    resolve: {
      mainFields: ["browser", "module", "main"]
    }
  }
}
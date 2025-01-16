/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensure this is enabled for using the 'app' directory
  },
};

module.exports = nextConfig;

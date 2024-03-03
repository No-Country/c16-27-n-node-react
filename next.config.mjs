/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost:4000',
        port: '',
      },
    ],
  },
};

export default nextConfig;

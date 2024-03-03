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
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'caracol.com.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'icon-library.com',
        port: '',
      },
      // {
      //   protocol: 'https',
      //   hostname: '*',
      //   port: '',
      // },
    ],
  },
};

export default nextConfig;

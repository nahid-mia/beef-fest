/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   instrumentationHook: true,
  // },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

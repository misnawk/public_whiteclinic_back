/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: '/app',

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/src/app/api/:path*',
      },
    ];
  },
};

export default nextConfig;

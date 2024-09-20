/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'blimp.b-cdn.net' }],
  },
};

export default nextConfig;

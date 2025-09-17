/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all https domains
      },
      {
        protocol: "http",
        hostname: "**", // allow all http domains (optional, not recommended)
      },
    ],
  },
};

export default nextConfig;

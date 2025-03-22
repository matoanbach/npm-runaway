/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "github.com"
      },
      {
        protocol: "https",
        hostname: "media.licdn.com"
      }
    ]
  },
  experimental: {
    // Setting it to "loose" often fixes ESM import issues
    esmExternals: "loose"
  }
};

export default nextConfig;

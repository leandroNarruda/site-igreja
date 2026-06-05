import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/campanha",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

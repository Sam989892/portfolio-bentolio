import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable API routes
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'atomix-ui.vercel.app',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Fix for lightningcss build issues on Netlify
    if (!isServer) {
      config.externals = config.externals || [];
      config.externals.push('lightningcss');
    }
    
    return config;
  },
};

export default nextConfig;

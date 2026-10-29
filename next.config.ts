import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
     remotePatterns:[
      {
        hostname:"**",
        protocol:"https"
      }
     ]
  },
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

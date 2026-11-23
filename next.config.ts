import type { NextConfig } from "next";

// The site is fully static marketing content with no request-time data,
// so Cache Components / Partial Prefetching are intentionally not enabled.
const nextConfig: NextConfig = {
  poweredByHeader: false,
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

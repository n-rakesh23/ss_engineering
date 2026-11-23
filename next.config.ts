import type { NextConfig } from "next";

/**
 * Sub-path the site is served from. GitHub Pages project sites live at
 * https://<user>.github.io/<repo>, so the deploy workflow sets
 * NEXT_PUBLIC_BASE_PATH=/<repo>. Leave it empty for local dev or a custom domain.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// The site is fully static marketing content with no request-time data,
// so Cache Components / Partial Prefetching are intentionally not enabled.
const nextConfig: NextConfig = {
  // Static HTML export (written to /out) — required for GitHub Pages.
  output: "export",
  basePath: basePath || undefined,
  // GitHub Pages serves /about/index.html for /about/ reliably.
  trailingSlash: true,
  // Static hosting has no image optimisation server.
  images: { unoptimized: true },
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

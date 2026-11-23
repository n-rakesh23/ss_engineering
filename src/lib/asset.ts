/**
 * Prefixes a /public asset path with the deploy base path (e.g. GitHub Pages
 * "/ss_engineering"). next/image does not add basePath to string `src`
 * values when images are unoptimized, so use this for every local image.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return path.startsWith("/") ? `${base}${path}` : path;
}

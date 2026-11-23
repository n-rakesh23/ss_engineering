import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { showDrafts } from "@/lib/content";

/** Preview / draft builds are never indexable. */
export default function robots(): MetadataRoute.Robots {
  if (!site.url || showDrafts) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

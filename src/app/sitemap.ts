import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { hasQualityContent, showDrafts, visibleProjects, visibleServices } from "@/lib/content";

/** Lists only canonical, published pages. Empty until the domain is confirmed. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url || showDrafts) return [];
  const paths = ["/", "/about", "/contact", "/privacy-policy"];
  const services = visibleServices();
  if (services.length) paths.push("/services", ...services.map((s) => `/services/${s.slug}`));
  if (visibleProjects().length) paths.push("/projects");
  if (hasQualityContent()) paths.push("/quality-safety");
  return paths.map((p) => ({ url: `${site.url}${p === "/" ? "" : p}` }));
}

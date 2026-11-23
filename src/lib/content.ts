import { site } from "@/content/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { credentials, qualityPractices } from "@/content/company";
import type { Fact } from "@/content/types";

/**
 * Draft content (unconfirmed placeholders) is visible in development, or in
 * a review build with NEXT_PUBLIC_SHOW_DRAFT_CONTENT=true. A normal
 * production build hides it completely.
 */
export const showDrafts =
  process.env.NODE_ENV === "development" ||
  process.env.NEXT_PUBLIC_SHOW_DRAFT_CONTENT === "true";

export function isVisible(item: { confirmed: boolean }): boolean {
  return item.confirmed || showDrafts;
}

/** Returns the fact value if it may be rendered, otherwise null. */
export function fact<T>(f: Fact<T>): T | null {
  return isVisible(f) ? f.value : null;
}

export function visible<T extends { confirmed: boolean }>(items: T[]): T[] {
  return items.filter(isVisible);
}

export const visibleServices = () => visible(services);

export const visibleProjects = () =>
  projects.filter((p) => (p.confirmed && p.clientPermission) || showDrafts);

export const hasQualityContent = () =>
  visible(credentials).length > 0 || visible(qualityPractices).length > 0;

export type NavItem = { label: string; href: string };

export function getNavigation(): NavItem[] {
  const items: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];
  if (visibleServices().length > 0) items.push({ label: "Services", href: "/services" });
  if (visibleProjects().length > 0) items.push({ label: "Projects", href: "/projects" });
  if (hasQualityContent()) items.push({ label: "Quality & Safety", href: "/quality-safety" });
  items.push({ label: "Contact", href: "/contact" });
  return items;
}

/** Contact details that may be rendered. */
export function getContactDetails() {
  const c = site.contact;
  return {
    phone: fact(c.phone),
    phoneHref: c.phoneHref.confirmed ? c.phoneHref.value : null,
    email: fact(c.email),
    emailHref: c.email.confirmed ? `mailto:${c.email.value}` : null,
    whatsapp: fact(c.whatsapp),
    address: fact(c.address),
    hours: fact(c.hours),
  };
}

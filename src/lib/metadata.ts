import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

/** Builds unique per-page metadata with canonical + Open Graph. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: site.url ? { canonical: path } : undefined,
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en",
    },
    twitter: { card: "summary", title, description },
  };
}

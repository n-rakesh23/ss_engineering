/**
 * Site photography. Files live in /public/images (WebP, converted from the
 * PNGs supplied by the company).
 */
export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export const media = {
  /**
   * Home hero. Cover image from the company profile. It appears to be a
   * generic / illustrative industrial scene rather than a photo of an
   * S.S. Engineering site, so it is used decoratively with neutral alt text
   * and NO caption claiming it as company work.
   * TODO(client): replace with a genuine site photograph when available.
   */
  hero: {
    src: "/images/industrial-site.webp",
    alt: "Engineers in safety gear reviewing plans beside large pipelines at an industrial plant under construction",
    width: 798,
    height: 445,
  },
  /** Genuine company photo — caption from the company profile (page 2). */
  safetyBriefing: {
    src: "/images/site-safety-briefing.webp",
    alt: "Site supervisors in high-visibility vests briefing a group of workers in blue hard hats at an industrial site",
    width: 587,
    height: 465,
    caption: "Disciplined workforce and on-site safety briefing",
  },
} satisfies Record<string, Photo>;

import type { Fact } from "./types";

/**
 * Central company configuration.
 * TODO(client): every `confirmed: false` value below must be replaced with
 * information from the completed discovery questionnaire
 * (11_CLIENT_DISCOVERY_QUESTIONNAIRE.md) before it can appear publicly.
 */
export const site = {
  /** Brand name. Never append "WORKS" or any other suffix. */
  name: "S.S. Engineering",
  nameUpper: "S.S. ENGINEERING",
  /** Confirmed in the project brief. */
  businessType: "Contractual agency",

  /**
   * Production URL. Set NEXT_PUBLIC_SITE_URL once the domain is confirmed.
   * While unset, the site is treated as a non-indexable preview.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || null,

  logo: {
    /**
     * TODO(client): place the approved master logo at /public/logos/ and set
     * the path here (SVG preferred). Never redraw or recolour the logo.
     */
    src: null as string | null,
    width: 64,
    height: 64,
  },

  tagline: {
    value: "Engineering and contract services you can rely on",
    confirmed: false,
  } satisfies Fact,

  description: {
    value:
      "S.S. Engineering supports [CUSTOMER TYPE / INDUSTRY] with [CONFIRMED SERVICE CATEGORIES] across [CONFIRMED SERVICE AREA].",
    confirmed: false,
  } satisfies Fact,

  intro: {
    value:
      "S.S. Engineering is a contractual agency focused on [CONFIRMED BUSINESS SCOPE]. We work with [CONFIRMED CUSTOMER TYPES] to support [CONFIRMED OUTCOMES / DELIVERABLES].",
    confirmed: false,
  } satisfies Fact,

  established: { value: "[YEAR]", confirmed: false } satisfies Fact,
  serviceArea: { value: "[CONFIRMED SERVICE AREA]", confirmed: false } satisfies Fact,

  contact: {
    phone: { value: "[APPROVED PHONE]", confirmed: false } satisfies Fact,
    /** E.164 format for tel: links, e.g. +911234567890 */
    phoneHref: { value: "", confirmed: false } satisfies Fact,
    email: { value: "[APPROVED BUSINESS EMAIL]", confirmed: false } satisfies Fact,
    whatsapp: { value: "[APPROVED WHATSAPP NUMBER]", confirmed: false } satisfies Fact,
    address: {
      value: "[APPROVED OFFICE ADDRESS]",
      confirmed: false,
    } satisfies Fact,
    hours: { value: "[BUSINESS HOURS]", confirmed: false } satisfies Fact,
  },

  social: [] as { label: string; href: string }[],

  form: {
    /** TODO(client): decide whether phone is required on the enquiry form. */
    phoneRequired: false,
  },
} as const;

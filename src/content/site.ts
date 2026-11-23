import type { Fact } from "./types";

/**
 * Central company configuration.
 * Source: "S S ENGINEERING_details.pdf" (company profile supplied by the
 * company). Values with `confirmed: false` were not in the profile and are
 * still awaiting information.
 */
export const site = {
  /** Brand name as shown on the approved logo. Never append "WORKS". */
  name: "S.S. Engineering",
  nameUpper: "S.S. ENGINEERING",
  businessType: "Labour force, technical manpower & industrial contract works",
  constitution: "Sole Proprietorship",

  /**
   * Production URL. Set NEXT_PUBLIC_SITE_URL once the domain is confirmed.
   * While unset, the site is treated as a non-indexable preview.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || null,

  logo: {
    /**
     * Raster logo extracted from the company profile PDF.
     * TODO(client): replace with the vector (SVG) master when supplied.
     */
    src: "/logos/ss-engineering-logo.jpg" as string | null,
    width: 369,
    height: 369,
  },

  tagline: {
    value: "Labour Force, Technical Manpower & Industrial Contract Works",
    confirmed: true,
  } satisfies Fact,

  description: {
    value:
      "Delivering reliable manpower, precision execution and complete safety across construction sites and industrial plants.",
    confirmed: true,
  } satisfies Fact,

  intro: {
    value:
      "S.S. Engineering is a contract technical labour service provider for mechanical works and labour force in industrial plants. We deliver skilled manpower and complete execution support, from mobilisation to project completion.",
    confirmed: true,
  } satisfies Fact,

  established: { value: "2025", confirmed: true } satisfies Fact,
  headquarters: { value: "Jagatsinghpur, Odisha", confirmed: true } satisfies Fact,
  coreSector: { value: "Construction & Industrial Plants", confirmed: true } satisfies Fact,
  serviceArea: { value: "Pan-India execution", confirmed: true } satisfies Fact,

  contact: {
    phone: { value: "+91 88276 12134", confirmed: true } satisfies Fact,
    /** E.164 format for tel: links */
    phoneHref: { value: "+918827612134", confirmed: true } satisfies Fact,
    email: { value: "manoj.swain604@gmail.com", confirmed: true } satisfies Fact,
    /**
     * WhatsApp — the profile lists no separate number, so this uses the
     * business phone. TODO(client): confirm this number is on WhatsApp.
     */
    whatsapp: { value: "+91 88276 12134", confirmed: true } satisfies Fact,
    /** Digits only, with country code, for wa.me links. */
    whatsappHref: { value: "918827612134", confirmed: true } satisfies Fact,
    address: { value: "Jagatsinghpur, Odisha, India", confirmed: true } satisfies Fact,
    /** Confirmed by the company. */
    hours: { value: "Monday to Saturday, 9:00 AM – 6:00 PM", confirmed: true } satisfies Fact,
  },

  /** Pre-filled text for the WhatsApp and email buttons. */
  messages: {
    whatsapp: "Hello S.S. Engineering, I would like to discuss a manpower / contract works requirement.",
    emailSubject: "Enquiry from the S.S. Engineering website",
    emailBody: "Hello S.S. Engineering,\n\nI would like to discuss the following requirement:\n\n",
  },

  social: [] as { label: string; href: string }[],

  form: {
    /** Manpower enquiries are usually followed up by phone. TODO(client): confirm. */
    phoneRequired: false,
  },
} as const;

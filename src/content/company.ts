import type { Credential, Fact, Practice } from "./types";

/** About page content — from the company profile, section 01. */
export const about = {
  opening: {
    value:
      "S.S. Engineering, established in 2025, is a labour force and contract works service provider based in Jagatsinghpur, Odisha. We provide contract technical labour for mechanical works and labour force in industrial plants, delivering skilled manpower and complete execution support for industrial projects.",
    confirmed: true,
  } satisfies Fact,
  background: {
    value:
      "With a strong on-ground team and a disciplined work culture, we support our clients from mobilisation to project completion. Our team understands site requirements, safety standards and work timelines, and we make sure every job is completed with quality, safety and responsibility.",
    confirmed: true,
  } satisfies Fact,
  /** Our commitment — quoted from the profile. */
  commitment: {
    value:
      "We do not only supply manpower — we also take full responsibility for attendance, discipline and work performance, so our clients can focus on completing their project.",
    confirmed: true,
  } satisfies Fact,
  /** TODO(client): not in the profile. */
  mission: { value: "[CLIENT-APPROVED MISSION]", confirmed: false } satisfies Fact,
  /** TODO(client): not in the profile. */
  vision: { value: "[CLIENT-APPROVED VISION]", confirmed: false } satisfies Fact,
  values: [
    {
      confirmed: true,
      title: "Long-term partnerships",
      description: "We believe in long-term partnerships, not one-time work.",
    },
    {
      confirmed: true,
      title: "Reliable manpower",
      description:
        "Consistent performance and complete site support, so clients can work without manpower worries.",
    },
    {
      confirmed: true,
      title: "Quality, safety & responsibility",
      description: "Every job is completed with quality, safety and responsibility.",
    },
  ] satisfies Practice[],
  leadership: [{ confirmed: true, name: "Manoj Swain", title: "Proprietor" }],
};

/** Why choose us — from the company profile, section 04. */
export const differentiators: Practice[] = [
  {
    confirmed: true,
    title: "Fast mobilisation from Jagatsinghpur",
    description:
      "Our presence in Odisha's industrial belt enables rapid deployment of manpower to project sites.",
  },
  {
    confirmed: true,
    title: "Experienced, verified workforce",
    description:
      "Trained, background-verified technical and general workforce, ready for heavy plant environments.",
  },
  {
    confirmed: true,
    title: "Safety and discipline",
    description:
      "Strict adherence to PPE norms, site safety guidelines and a disciplined daily work culture.",
  },
  {
    confirmed: true,
    title: "Manpower on short notice",
    description:
      "Flexible scaling for urgent shutdowns, peak project phases and specialised technical requirements.",
  },
  {
    confirmed: true,
    title: "Transparent contracts and billing",
    description:
      "Clear scope agreements, accurate attendance tracking and straightforward billing.",
  },
];

/**
 * Registrations, licences and certifications.
 * TODO(client): none are listed in the profile. Add GST / labour licence /
 * other registrations only after verifying the documents.
 */
export const credentials: Credential[] = [
  {
    confirmed: false,
    name: "[CERTIFICATION / REGISTRATION]",
    issuer: "[ISSUING BODY]",
    reference: "[CERTIFICATE NUMBER]",
    validity: "[VALID UNTIL]",
    scope: "[SCOPE]",
  },
];

/** Safety and quality practices described in the company profile. */
export const qualityPractices: Practice[] = [
  {
    confirmed: true,
    title: "On-site safety briefings",
    description: "Workforce safety briefings on site, with a commitment to zero-incident industrial operations.",
  },
  {
    confirmed: true,
    title: "PPE and site safety compliance",
    description: "Strict adherence to PPE norms and each site's safety guidelines.",
  },
  {
    confirmed: true,
    title: "Attendance and discipline",
    description:
      "Accurate attendance tracking and full responsibility for workforce discipline and work performance.",
  },
];

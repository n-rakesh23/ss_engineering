import type { Credential, Fact, Practice } from "./types";

/** About page content. TODO(client): all values require approval. */
export const about = {
  opening: {
    value:
      "S.S. Engineering is a contractual agency operating in [CONFIRMED SECTOR(S)]. The company works to understand each client's requirements and deliver agreed scopes through a structured, accountable approach.",
    confirmed: false,
  } satisfies Fact,
  background: { value: "[COMPANY BACKGROUND — CLIENT TO PROVIDE]", confirmed: false } satisfies Fact,
  mission: { value: "[CLIENT-APPROVED MISSION]", confirmed: false } satisfies Fact,
  vision: { value: "[CLIENT-APPROVED VISION]", confirmed: false } satisfies Fact,
  values: [
    { confirmed: false, title: "[VALUE]", description: "[WHAT THIS MEANS IN PRACTICE]" },
    { confirmed: false, title: "[VALUE]", description: "[WHAT THIS MEANS IN PRACTICE]" },
    { confirmed: false, title: "[VALUE]", description: "[WHAT THIS MEANS IN PRACTICE]" },
  ] satisfies Practice[],
  leadership: [
    { confirmed: false, name: "[APPROVED NAME]", title: "[APPROVED TITLE]" },
  ],
};

/** Evidence-backed differentiators for the home page. */
export const differentiators: Practice[] = [
  { confirmed: false, title: "[VERIFIED CAPABILITY / EXPERIENCE]", description: "[SUPPORTING DETAIL]" },
  { confirmed: false, title: "[VERIFIED DELIVERY APPROACH]", description: "[SUPPORTING DETAIL]" },
  { confirmed: false, title: "[VERIFIED QUALITY OR SAFETY PRACTICE]", description: "[SUPPORTING DETAIL]" },
  { confirmed: false, title: "[VERIFIED GEOGRAPHIC / OPERATIONAL ADVANTAGE]", description: "[SUPPORTING DETAIL]" },
];

/**
 * Registrations, licences and certifications. Publish only after the
 * document is verified and permission to display is given.
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

/** Documented quality and safety practices actually followed. */
export const qualityPractices: Practice[] = [
  { confirmed: false, title: "[DOCUMENTED PRACTICE]", description: "[HOW IT IS APPLIED]" },
  { confirmed: false, title: "[DOCUMENTED PRACTICE]", description: "[HOW IT IS APPLIED]" },
];

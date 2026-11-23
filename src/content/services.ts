import type { Service } from "./types";

/**
 * TODO(client): replace with the confirmed service list.
 * Do not assume what "contractual agency" covers (civil, fabrication,
 * manpower, electrical, etc.). One entry per confirmed service; a detail
 * page is generated for each confirmed entry.
 */
export const services: Service[] = [1, 2, 3].map((n) => {
  const id = String(n).padStart(2, "0");
  return {
    slug: `service-${id}`,
    confirmed: false,
    title: `[SERVICE ${id}]`,
    summary: "[VERIFIED 1–2 SENTENCE DESCRIPTION]",
    overview: "[VERIFIED DESCRIPTION OF THIS SERVICE]",
    scope: ["[CONFIRMED TASK]", "[CONFIRMED TASK]", "[CONFIRMED TASK]"],
    deliverables: ["[CONFIRMED DELIVERABLE]", "[CONFIRMED DELIVERABLE]"],
    sectors: ["[CONFIRMED SECTOR]", "[CONFIRMED SECTOR]"],
    approach: [
      "[CONFIRMED PROCESS STEP]",
      "[CONFIRMED PROCESS STEP]",
      "[CONFIRMED PROCESS STEP]",
    ],
  };
});

import type { Project } from "./types";

/**
 * Projects — from the company profile, section 03.
 * A project is published only when BOTH `confirmed` and `clientPermission`
 * are true.
 *
 * TODO(client): the blueprint requires written permission from the client
 * before naming them on the website. Set `clientPermission: true` once
 * Tata Projects Limited has approved publication. Do not use the Tata logo.
 */
export const projects: Project[] = [
  {
    slug: "cgpl-mundra",
    confirmed: true,
    clientPermission: false,
    title: "Manpower & contract works at CGPL Mundra",
    client: "Tata Projects Limited",
    location: "CGPL Mundra, Gujarat",
    scope: "Labour force, contract works and technical manpower support.",
    workPerformed: "Labour force, contract works and technical manpower support.",
    outcome:
      "Recognised as “Best Quality Conscious Subcontractor” at Tata Projects’ Quality Month Celebrations 2026 (FGD – CGPL Mundra).",
    period: "Ongoing",
    /** Site image supplied by the company (site_image.png). */
    image: {
      src: "/images/industrial-site.webp",
      alt: "Engineers in safety gear reviewing plans beside large pipelines at an industrial plant under construction",
      width: 798,
      height: 445,
    },
  },
];

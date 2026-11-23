import type { Project } from "./types";

/**
 * TODO(client): approved case studies only. Never add fictional sample
 * projects. A project is published only when BOTH `confirmed` and
 * `clientPermission` are true. The /projects page and its nav link are
 * hidden while no project is publishable.
 */
export const projects: Project[] = [
  {
    slug: "project-template",
    confirmed: false,
    clientPermission: false,
    title: "[PROJECT TITLE]",
    client: "[CLIENT NAME OR ANONYMISED SECTOR — WITH PERMISSION]",
    location: "[LOCATION]",
    scope: "[CONTRACT SCOPE]",
    workPerformed: "[WORK PERFORMED]",
    outcome: "[OUTCOME — MEASURABLE ONLY IF EVIDENCED]",
    period: "[COMPLETION DATE / STATUS]",
  },
];

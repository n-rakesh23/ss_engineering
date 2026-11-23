import type { Service } from "./types";

/**
 * Services — from the company profile, sections 02 and 03.
 * Scope bullets are the profile's own wording. Deliverables, sectors and
 * approach are only filled where the profile states them.
 */
export const services: Service[] = [
  {
    slug: "labour-force",
    confirmed: true,
    title: "Labour Force Supply",
    summary:
      "Skilled, semi-skilled and unskilled labour for construction sites and industrial plants, on a daily, monthly or project contract basis.",
    overview:
      "We supply labour for construction sites and industrial plants, from general workforce to skilled hands, and take responsibility for attendance, discipline and work performance on site.",
    scope: [
      "Supply of skilled, semi-skilled and unskilled labour",
      "Manpower for construction sites and industrial plants",
      "Labour on daily, monthly and project contract basis",
    ],
    deliverables: [],
    sectors: ["Construction sites", "Industrial plants"],
    approach: [],
  },
  {
    slug: "contract-works",
    confirmed: true,
    title: "Contract Works",
    summary:
      "Mechanical fabrication and erection, plant installation, maintenance and shutdown works, and material handling.",
    overview:
      "We execute mechanical and plant contract works with trained site teams, supporting projects through installation, maintenance and shutdown phases.",
    scope: [
      "Mechanical fabrication and erection works",
      "Plant installation, maintenance and shutdown works",
      "Loading, unloading and material handling works",
      "Material shifting for proto assembly",
    ],
    deliverables: [],
    sectors: ["Industrial plants"],
    approach: [],
  },
  {
    slug: "technical-manpower",
    confirmed: true,
    title: "Technical Manpower",
    summary:
      "Fitters, welders, electricians, riggers, scaffolders and other trades, with supervisors and site in-charges.",
    overview:
      "We provide trained technical trades for industrial plant environments, along with supervision so work stays organised and on schedule.",
    scope: [
      "Fitter, welder, electrician and mechanical work",
      "Rigger, grinder man, scaffolder and helper",
      "Supervisor and site in-charge",
    ],
    deliverables: [],
    sectors: ["Industrial plants"],
    approach: [],
  },
  {
    slug: "rotary-equipment",
    confirmed: true,
    title: "Rotary Equipment",
    summary:
      "Installation, alignment, maintenance and overhauling support for pumps, motors, compressors, fans and blowers.",
    overview:
      "Our specialist teams install, align and maintain rotary equipment, and support repair and overhauling work.",
    scope: [
      "Installation, alignment and maintenance of rotary equipment",
      "Pumps, motors, compressors, fans and blowers",
      "Rotary equipment repair and overhauling support",
    ],
    deliverables: [],
    sectors: [],
    approach: [],
  },
  {
    slug: "erection-commissioning",
    confirmed: true,
    title: "Erection, Alignment & Commissioning",
    summary:
      "Erection and commissioning of gas-to-gas heaters, alignment of static equipment to project specifications, and punch point clearance.",
    overview:
      "We carry out erection, alignment and commissioning works to project specifications, through to punch point clearance.",
    scope: [
      "Erection and commissioning of gas-to-gas heater",
      "Alignment of static equipment as per project specifications",
      "Punch point clearance for equipment",
    ],
    deliverables: [],
    sectors: [],
    approach: [],
  },
];

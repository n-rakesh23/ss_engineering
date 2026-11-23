/**
 * Every business fact on this site is a `Fact`.
 *
 * `confirmed: false` means the value is a placeholder awaiting written
 * confirmation from S.S. Engineering. Unconfirmed facts are NEVER rendered
 * in a production build. They are only shown (clearly marked as drafts) in
 * development or when NEXT_PUBLIC_SHOW_DRAFT_CONTENT=true for internal review.
 *
 * To publish a fact: replace the value with client-approved wording and set
 * `confirmed: true`.
 */
export type Fact<T = string> = {
  value: T;
  confirmed: boolean;
};

export type Service = {
  slug: string;
  confirmed: boolean;
  title: string;
  summary: string;
  overview: string;
  scope: string[];
  deliverables: string[];
  sectors: string[];
  approach: string[];
};

export type Project = {
  slug: string;
  confirmed: boolean;
  /** Written permission from the client to publish this project. */
  clientPermission: boolean;
  title: string;
  client: string;
  location: string;
  scope: string;
  workPerformed: string;
  outcome?: string;
  period?: string;
  image?: { src: string; alt: string; width: number; height: number };
};

export type Credential = {
  confirmed: boolean;
  name: string;
  issuer: string;
  reference: string;
  validity: string;
  scope: string;
};

export type Practice = {
  confirmed: boolean;
  title: string;
  description: string;
};

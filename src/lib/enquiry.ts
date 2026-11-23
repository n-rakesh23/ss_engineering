/**
 * Enquiry submission adapter.
 *
 * FRONTEND PREVIEW ONLY: this phase has no backend. `submitEnquiry` does not
 * send, store or log any personal data. A future, separately approved phase
 * can replace this function body with a real API call without changing the
 * ContactForm component.
 */
export type EnquiryInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  details: string;
  consent: boolean;
};

export type EnquiryResult = { status: "demo" } | { status: "error"; message: string };

export const DEMO_CONFIRMATION =
  "Thank you. This is a frontend preview; enquiry delivery will be enabled in a later phase.";

export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  // Intentionally discard the input — nothing leaves the browser.
  void input;
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { status: "demo" };
}

export type EnquiryErrors = Partial<Record<keyof EnquiryInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{7,20}$/;

export function validateEnquiry(input: EnquiryInput, phoneRequired: boolean): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (input.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!input.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(input.email.trim()))
    errors.email = "Please enter a valid email address, for example name@company.com.";
  if (phoneRequired && !input.phone.trim()) errors.phone = "Please enter a phone number.";
  else if (input.phone.trim() && !PHONE_RE.test(input.phone.trim()))
    errors.phone = "Please enter a valid phone number using digits, spaces, + or -.";
  if (input.details.trim().length < 20)
    errors.details = "Please describe your requirement in at least 20 characters.";
  else if (input.details.length > 3000)
    errors.details = "Please keep your description under 3,000 characters.";
  if (!input.consent) errors.consent = "Please confirm you have read the privacy policy.";
  return errors;
}

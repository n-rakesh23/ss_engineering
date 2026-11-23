"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Info, Loader2 } from "lucide-react";
import {
  DEMO_CONFIRMATION,
  submitEnquiry,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryInput,
} from "@/lib/enquiry";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { Field, FieldError, Input, Select, Textarea, describedBy } from "./Field";

type Status = "idle" | "submitting" | "demo-success" | "error";

const EMPTY: EnquiryInput = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  location: "",
  details: "",
  consent: false,
};

const FIELD_ORDER: (keyof EnquiryInput)[] = ["name", "company", "email", "phone", "service", "location", "details", "consent"];

export function ContactForm({
  serviceOptions,
  phoneRequired,
}: {
  serviceOptions: { value: string; label: string }[];
  phoneRequired: boolean;
}) {
  const [values, setValues] = useState<EnquiryInput>(EMPTY);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    // After the first submit attempt, re-validate live so errors clear as fixed.
    if (submitted) setErrors(validateEnquiry(next, phoneRequired));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    const found = validateEnquiry(values, phoneRequired);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((k) => found[k]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const result = await submitEnquiry(values);
      if (result.status === "demo") {
        setStatus("demo-success");
        requestAnimationFrame(() => successRef.current?.focus());
      } else {
        setErrorMessage(result.message);
        setStatus("error");
        requestAnimationFrame(() => summaryRef.current?.focus());
      }
    } catch {
      setErrorMessage("Something went wrong. Please check your details and try again.");
      setStatus("error");
    }
  }

  function reset() {
    setValues(EMPTY);
    setErrors({});
    setSubmitted(false);
    setStatus("idle");
  }

  if (status === "demo-success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-card border border-line bg-surface p-8 text-center focus:outline-none sm:p-10"
      >
        <CheckCircle2 aria-hidden className="mx-auto size-12 text-brand" />
        <h3 className="mt-4 text-2xl font-bold">Preview submission complete</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">{DEMO_CONFIRMATION}</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Your details were not sent or stored.
        </p>
        <SecondaryButton type="button" onClick={reset} className="mt-7">
          Start a new enquiry
        </SecondaryButton>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;
  const busy = status === "submitting";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="form-preview-note" className="space-y-6">
      <div
        id="form-preview-note"
        className="flex gap-3 rounded-lg border border-brand/20 bg-brand-tint px-4 py-3 text-sm text-navy"
      >
        <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
        <p>
          <strong>Website preview:</strong> this form is for demonstration only. Enquiries are not
          sent or stored yet.
        </p>
      </div>

      <div ref={summaryRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {submitted && errorCount > 0 && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            Please correct {errorCount === 1 ? "1 field" : `${errorCount} fields`} highlighted below.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{errorMessage}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" required error={errors.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name", errors.name)}
          />
        </Field>
        <Field id="company" label="Company / organisation">
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email", errors.email)}
          />
        </Field>
        <Field id="phone" label="Phone" required={phoneRequired} error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required={phoneRequired}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy("phone", errors.phone)}
          />
        </Field>
        <Field id="service" label="Service of interest">
          <Select
            id="service"
            name="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
            <option value="other">Other / not sure</option>
          </Select>
        </Field>
        <Field id="location" label="Project location">
          <Input
            id="location"
            name="location"
            autoComplete="address-level2"
            value={values.location}
            onChange={(e) => update("location", e.target.value)}
          />
        </Field>
      </div>

      <Field
        id="details"
        label="Requirement details"
        required
        error={errors.details}
        hint="Briefly describe the scope, timeline and anything else that would help us understand your requirement."
      >
        <Textarea
          id="details"
          name="details"
          required
          maxLength={3000}
          value={values.details}
          onChange={(e) => update("details", e.target.value)}
          aria-invalid={!!errors.details}
          aria-describedby={describedBy(
            "details",
            errors.details,
            "Briefly describe the scope, timeline and anything else that would help us understand your requirement.",
          )}
        />
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={describedBy("consent", errors.consent)}
            className="mt-0.5 size-5 shrink-0 cursor-pointer rounded border-line accent-brand"
          />
          <label htmlFor="consent" className="cursor-pointer text-sm leading-relaxed text-charcoal">
            I have read the{" "}
            <Link href="/privacy-policy" className="font-semibold text-brand underline underline-offset-2">
              privacy policy
            </Link>{" "}
            and agree to my details being used to respond to this enquiry.
            <span className="ml-1 text-red-700" aria-hidden>*</span>
          </label>
        </div>
        <FieldError id="consent" error={errors.consent} />
      </div>

      <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          <span className="text-red-700" aria-hidden>*</span> Required fields
        </p>
        <PrimaryButton type="submit" disabled={busy} aria-disabled={busy} className="sm:min-w-52">
          {busy ? (
            <>
              <Loader2 aria-hidden className="size-4 animate-spin" />
              Checking…
            </>
          ) : (
            "Send Enquiry (Preview)"
          )}
        </PrimaryButton>
      </div>
    </form>
  );
}

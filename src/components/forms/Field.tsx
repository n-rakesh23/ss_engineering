import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { AlertCircle } from "lucide-react";

const control =
  "block w-full rounded-lg border bg-white px-4 py-3 text-base text-charcoal placeholder:text-cool-grey/80 transition-[border-color,box-shadow] duration-150 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 aria-[invalid=true]:border-red-600 aria-[invalid=true]:focus:ring-red-600/15";

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
};

export function Field({ id, label, required, error, hint, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy">
        {label}
        {required ? (
          <span className="ml-1 text-red-700" aria-hidden>*</span>
        ) : (
          <span className="ml-1.5 font-normal text-muted">(optional)</span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-muted">
          {hint}
        </p>
      )}
      <FieldError id={id} error={error} />
    </div>
  );
}

export function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700">
      <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
      {error}
    </p>
  );
}

export function describedBy(id: string, error?: string, hint?: string) {
  return error ? `${id}-error` : hint ? `${id}-hint` : undefined;
}

export function Input({ className = "", ...props }: ComponentPropsWithoutRef<"input">) {
  return <input className={`${control} border-line ${className}`} {...props} />;
}

export function Textarea({ className = "", ...props }: ComponentPropsWithoutRef<"textarea">) {
  return <textarea className={`${control} min-h-40 resize-y border-line ${className}`} {...props} />;
}

export function Select({ className = "", children, ...props }: ComponentPropsWithoutRef<"select">) {
  return (
    <select
      className={`${control} appearance-none border-line bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' stroke='%23667788' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:20px] bg-[right_14px_center] bg-no-repeat pr-11 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

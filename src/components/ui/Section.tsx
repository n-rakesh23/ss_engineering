import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "white" | "surface" | "navy";

const tones: Record<Tone, string> = {
  white: "bg-white",
  surface: "bg-surface",
  navy: "bg-navy text-white bg-blueprint",
};

export function Section({
  children,
  tone = "white",
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

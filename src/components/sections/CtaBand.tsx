import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { InlineContactLinks } from "@/components/ui/ContactButtons";

export function CtaBand({
  title = "Have a requirement to discuss?",
  text = "Share a few details about your scope and the S.S. Engineering team can review your enquiry.",
  cta = "Send an Enquiry",
}: {
  title?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-brand px-6 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-70" />
          <div className="relative max-w-2xl">
            <h2 id="cta-title" className="text-3xl font-bold !text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-lg text-blue-100">{text}</p>
            <InlineContactLinks className="mt-6" />
          </div>
          <div className="relative mt-8 shrink-0 lg:mt-0">
            <ButtonLink href="/contact" variant="inverted">
              {cta}
              <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

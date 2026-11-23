import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-surface bg-blueprint-light">
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="font-display text-sm font-bold tracking-[0.2em] text-brand">ERROR 404</p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-lg text-lg text-muted">
          The page you are looking for does not exist or is not available yet.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Send an Enquiry
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

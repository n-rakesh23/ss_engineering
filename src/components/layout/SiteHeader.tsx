import { getNavigation } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { DesktopNavLinks } from "./NavLinks";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  const items = getNavigation();
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <Container className="flex h-[72px] items-center justify-between gap-3 lg:gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <DesktopNavLinks items={items} />
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/contact" className="min-h-11 px-5 text-sm">
            Send an Enquiry
          </ButtonLink>
        </div>
        <MobileNavigation items={items} />
      </Container>
    </header>
  );
}

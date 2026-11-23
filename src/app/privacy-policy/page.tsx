import { site } from "@/content/site";
import { getContactDetails, showDrafts } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata = pageMetadata({
  title: `Privacy Policy | ${site.name}`,
  description: `How ${site.name} handles information on this website.`,
  path: "/privacy-policy",
});

/**
 * Describes the website's ACTUAL current data handling (frontend preview:
 * nothing is transmitted or stored).
 * TODO(client): the policy owner must review and approve this text, and it
 * must be rewritten before any backend, analytics or form delivery is added.
 */
export default function PrivacyPolicyPage() {
  const { email, emailHref } = getContactDetails();

  return (
    <>
      <PageHero title="Privacy policy" crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <Section>
        <div className="max-w-3xl space-y-10 text-[17px] leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_p]:mt-3 [&_p]:text-charcoal">
          {showDrafts && (
            <p className="rounded-lg border border-dashed border-amber-400 bg-amber-50 px-4 py-3 text-sm !text-amber-900">
              Draft: this policy reflects the current frontend preview and must be approved by the
              policy owner before launch.
            </p>
          )}
          <div>
            <h2>About this policy</h2>
            <p>
              This policy explains how the {site.name} website handles information you provide or that
              is generated when you visit it.
            </p>
          </div>
          <div>
            <h2>Enquiry form</h2>
            <p>
              The enquiry form on this website is currently a preview. Information you type into the
              form is checked in your browser for completeness only. It is not sent to {site.name},
              not sent to any third party, and not stored by this website.
            </p>
            <p>
              When enquiry delivery is enabled in future, this policy will be updated to explain what
              information is collected, why, how long it is kept, and who can access it.
            </p>
          </div>
          <div>
            <h2>Cookies and analytics</h2>
            <p>This website does not currently use analytics or advertising cookies.</p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              For questions about this policy, please contact {site.name}
              {email ? (
                <>
                  {" "}at{" "}
                  {emailHref ? (
                    <a href={emailHref} className="font-semibold text-brand underline underline-offset-2">
                      {email}
                    </a>
                  ) : (
                    email
                  )}
                </>
              ) : null}
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

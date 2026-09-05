import type { Metadata } from "next";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import {
  company,
  contact,
  enquiryForm,
  serviceOptions,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${company.name} in Mumbai for laminated fabric enquiries. Tell us what you are making and we will propose a construction and send a sample.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={`Contact ${company.name}`}
        lede={enquiryForm.intro}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                {enquiryForm.heading}
              </h2>
              <div className="mt-8">
                <EnquiryForm services={serviceOptions.all} />
              </div>
            </div>

            <div className="lg:border-l lg:border-line lg:pl-12">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Get in touch
              </h2>
              <address className="mt-5 space-y-4 text-base not-italic text-ink">
                <p>
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="font-medium transition-colors hover:text-brand"
                  >
                    {contact.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="break-all font-medium transition-colors hover:text-brand"
                  >
                    {contact.email}
                  </a>
                </p>
              </address>

              <h2 className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Address
              </h2>
              <address className="mt-5 space-y-1 text-base not-italic leading-relaxed text-muted">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact has no closing section of its own, and the form must stay on
          a light ground. So the band here carries the phone number instead,
          which is the real alternative to the form. */}
      <ClosingCta
        heading="Would you rather speak to someone?"
        body={["Call us and describe what you need. There is no form to fill in first."]}
        ctaLabel={contact.phone}
        ctaHref={`tel:${contact.phoneHref}`}
      />
    </>
  );
}

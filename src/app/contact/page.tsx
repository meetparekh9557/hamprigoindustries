import type { Metadata } from "next";
import { ContactActions } from "@/components/contact-actions";
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
      <PageHero flush title={`Contact ${company.name}`} lede={enquiryForm.intro} />

      {/* No top padding: the hero above is the same blue and already
          carries its own, so keeping both leaves a dead gap. */}
      <section className="bg-brand-blue pb-16 text-white sm:pb-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {enquiryForm.heading}
              </h2>
              <div className="mt-8">
                <EnquiryForm services={serviceOptions.all} tone="dark" />
              </div>
            </div>

            <div className="lg:border-l lg:border-white/20 lg:pl-12">
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Get in touch
              </h2>
              <ContactActions />

              <address className="mt-6 space-y-2 text-base not-italic text-white">
                <p>
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="font-medium transition-colors hover:text-white/70"
                  >
                    {contact.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="break-all font-medium transition-colors hover:text-white/70"
                  >
                    {contact.email}
                  </a>
                </p>
              </address>

              <h2 className="mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Address
              </h2>
              <address className="mt-5 space-y-1 text-base not-italic leading-relaxed text-white/75">
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

    </>
  );
}

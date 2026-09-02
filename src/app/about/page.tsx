import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { about, company } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Founded in ${company.foundedYear}, ${company.name} manufactures customized laminated fabric for automotive, apparel, home furnishing and industrial applications.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Laminating fabric since ${company.foundedYear}`}
        title={about.title}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-12">
            {about.sections.map((section, index) => (
              <div key={section.heading ?? `intro-${index}`}>
                {section.heading ? (
                  <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                    {section.heading}
                  </h2>
                ) : null}
                <div className={section.heading ? "mt-5 space-y-4" : "space-y-4"}>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-base leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
            Our Values
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {about.values.map((value) => (
              <div key={value.title} className="border-t-2 border-brand pt-5">
                <h3 className="text-lg font-semibold text-ink-strong">
                  {value.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {about.closing.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {about.closing.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10">
              <CtaLink href="/contact">Request a sample</CtaLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

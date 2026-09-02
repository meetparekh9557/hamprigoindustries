import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { PageHero } from "@/components/page-hero";
import { bondedBras } from "@/content/site";

export const metadata: Metadata = {
  title: "Seamless Bonded Bra Manufacturer",
  description:
    "Seamless, tagless bras made with bonding instead of stitching, built on PU foam lamination we produce in house for irreversible bonding and washing fastness.",
  alternates: { canonical: "/seamless-bonded-bras" },
};

export default function SeamlessBondedBrasPage() {
  return (
    <>
      <PageHero
        eyebrow="Finished products"
        title={bondedBras.title}
        lede={bondedBras.intro}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl divide-y divide-line">
            {bondedBras.sections.map((section) => (
              <div key={section.heading} className="py-10 first:pt-0">
                <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4">
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

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
            {bondedBras.close.heading}
          </h2>
          <div className="mt-5 max-w-2xl space-y-4">
            {bondedBras.close.body.map((paragraph) => (
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
        </Container>
      </section>
    </>
  );
}

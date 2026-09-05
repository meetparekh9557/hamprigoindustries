import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { ClosingCta } from "@/components/closing-cta";
import { PageHero } from "@/components/page-hero";
import {
  bondedBras,
  bondingTechnologies,
  serviceOptions,
} from "@/content/site";

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
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div className="divide-y divide-line">
              {bondedBras.sections.map((section) => (
                <div key={section.heading} className="py-10 first:pt-0 last:pb-0">
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

            {/* Sticky so the product stays with the reader while the
                argument for it scrolls past. The right-hand column was
                empty before. */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src="/img/bonded-bra.jpg"
                  alt="A seamless bonded bra, showing no stitched seams"
                  fill
                  sizes="(min-width: 64rem) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Named only. No approved explanation has been supplied for
                  any of them. */}
              <h2 className="spec-label mt-8 text-muted">
                Technologies We Use
              </h2>
              <ul className="mt-4 grid gap-px bg-line">
                {bondingTechnologies.map((technology, i) => (
                  <li
                    key={technology}
                    className="flex items-baseline gap-4 bg-white py-4"
                  >
                    <span className="spec-label text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-semibold text-ink-strong">
                      {technology}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta
        heading={bondedBras.close.heading}
        body={[...bondedBras.close.body]}
        form={{ lockedService: serviceOptions.bondedBras }}
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import {
  bondedBrasPage as page,
  bondingTechnologies,
  serviceOptions,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Seamless Bonded Bra Manufacturer",
  description:
    "Seamless bonded bras made with bonding instead of stitching, built on lamination we produce in house for irreversible bonding and washing fastness.",
  alternates: { canonical: "/seamless-bonded-bras" },
};

/**
 * One idea carries this page: Hamprigo does not only make the finished bra,
 * it controls the laminated material the bra is built from. Both visual
 * sequences say the same thing, from the material end and from the customer
 * end.
 *
 * The three technologies are named and nothing more. No descriptions, no
 * specifications, no machine photographs: none have been approved.
 */
export default function SeamlessBondedBrasPage() {
  return (
    <>
      {/* 01. Hero. The product, large, as a manufactured object. */}
      <section className="relative bg-brand-blue text-white">
        <div className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
          <Image
            src="/img/bonded-bra.jpg"
            alt="A seamless bonded bra with no stitched seams and clean bonded edges"
            fill
            sizes="(min-width: 64rem) 50vw, 100vw"
            className="object-cover"
            priority
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#152559] via-[#152559]/40 to-transparent lg:bg-gradient-to-r lg:via-[#152559]/25"
          />
        </div>
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="lg:max-w-[32rem]">
            <p className="spec-label text-white/60">{page.hero.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              {page.hero.heading}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              {page.hero.body}
            </p>
            <div className="mt-10">
              <CtaLink href={page.hero.cta.href}>{page.hero.cta.label}</CtaLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 02. Why the laminate decides the bra, with the material sequence
          that shows the bra beginning as fabric. */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <span aria-hidden="true" className="block h-0.5 w-10 bg-brand" />
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {page.why.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {page.why.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <ul className="mt-14 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {page.why.chain.map((step, i) => (
              <li key={step.label}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={step.src}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 40rem) 32vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="spec-label mt-3 text-brand">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-base font-semibold text-ink-strong">
                  {step.label}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 03. Technologies. Names only. */}
      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
            {page.technologies.heading}
          </h2>
          <ul className="mt-10 grid gap-px bg-line sm:grid-cols-3">
            {bondingTechnologies.map((technology, i) => (
              <li key={technology} className="bg-surface py-8 sm:pr-8">
                <span className="spec-label text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-xl font-semibold leading-snug text-ink-strong">
                  {technology}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 04. The same point from the customer's end. */}
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                {page.together.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {page.together.body}
              </p>
            </div>

            <ol className="self-center border-t border-line">
              {page.together.chain.map((step, i) => (
                <li
                  key={step}
                  className="flex items-baseline gap-5 border-b border-line py-5"
                >
                  <span className="spec-label text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold text-ink-strong">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <ClosingCta
        heading={page.close.heading}
        body={[...page.close.body]}
        form={{ lockedService: serviceOptions.bondedBras }}
      />
    </>
  );
}

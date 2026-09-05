import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { RequestSample } from "@/components/request-sample";
import {
  bondedBrasPage as page,
  bondingTechnologies,
  serviceOptions,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Seamless Bonded Bra Manufacturer",
  description:
    "Hamprigo manufactures seamless bonded bras using material we laminate ourselves, bringing material development, lamination and finished construction together under one supplier.",
  alternates: { canonical: "/seamless-bonded-bras" },
};

/**
 * One story carries this page: Hamprigo laminates the material and then
 * makes the bra out of it. Everything here is in service of that.
 *
 * Three visual moments and no more. The hero product shot, the material
 * composition that shows fabric becoming laminate becoming garment, and
 * the finished product at scale. The stage sequence in section 03 and the
 * three technologies are set in type rather than pictures: the sequence
 * would otherwise repeat the same three photographs the composition has
 * just shown, and no descriptions or machine photography have been
 * approved for the technologies. They are named, and that is all.
 */
export default function SeamlessBondedBrasPage() {
  return (
    <>
      {/* 01. Split hero. Type on the left, the product on the right, at
          size, with nothing laid over it.

          The image is positioned rather than made a grid column, so the
          heading sits in an ordinary Container and lines up with the left
          edge of every other section on the site. Text inside a grid
          column centres within that column, not the page. */}
      <section className="relative bg-brand-blue text-white">
        <div className="relative h-80 sm:h-[26rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
          <Image
            src="/img/bonded-bra.jpg"
            alt="A seamless bonded bra with clean bonded edges and no stitched seams"
            fill
            sizes="(min-width: 64rem) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <Container className="relative py-16 sm:py-20 lg:min-h-[36rem] lg:py-28">
          <div className="lg:flex lg:min-h-[28rem] lg:max-w-[30rem] lg:flex-col lg:justify-center">
            <p className="spec-label text-white/60">{page.hero.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {page.hero.heading}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {page.hero.body}
            </p>
            <div>
              <Link
                href={page.hero.cta.href}
                className="mt-10 inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold tracking-wide text-brand-ink transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {page.hero.cta.label}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 02. The material explanation. Copy on one side, the composition
          on the other: face fabric, the laminate it becomes, the garment
          it ends as. This is the key visual on the page. */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="spec-label text-brand">{page.material.eyebrow}</p>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink-strong sm:text-4xl">
                {page.material.heading}
              </h2>
              <div className="mt-7 space-y-5">
                {page.material.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-base leading-relaxed text-muted sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <ol>
              {page.material.composition.map((step, i) => (
                <li key={step.label}>
                  {/* A hairline and a mark between stages, not an arrow
                      graphic. The reading order does the explaining. */}
                  {i > 0 ? (
                    <div
                      aria-hidden="true"
                      className="flex flex-col items-center py-6"
                    >
                      <span className="h-10 w-px bg-line" />
                      <span className="mt-1 h-2 w-2 rotate-45 border-b border-r border-brand" />
                    </div>
                  ) : null}
                  <p className="spec-label text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1.5 text-xl font-semibold text-ink-strong">
                    {step.label}
                  </p>
                  <div className="relative mt-4 aspect-[16/10] overflow-hidden">
                    <Image
                      src={step.src}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 64rem) 48vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* 03. The same relationship from the customer's end, in type. */}
      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {page.construction.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {page.construction.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <ol className="mt-14 grid border-t border-line sm:grid-cols-3">
            {page.construction.sequence.map((stage, i) => (
              <li
                key={stage.label}
                className="border-b border-line py-8 sm:border-b-0 sm:py-10 sm:pr-8 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-8"
              >
                <p className="spec-label text-brand">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-xl font-semibold leading-snug text-ink-strong sm:text-2xl">
                  {stage.label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {stage.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 04. Technologies. Named, nothing more. */}
      <section className="border-t border-line py-14 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="spec-label text-brand">{page.technologies.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-strong">
              {page.technologies.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {page.technologies.body}
            </p>
          </div>

          <ul className="mt-8 flex flex-col border-t border-line sm:flex-row sm:flex-wrap">
            {bondingTechnologies.map((technology, i) => (
              <li
                key={technology.name}
                className="flex items-baseline gap-4 border-b border-line py-4 sm:flex-1 sm:border-b-0 sm:pr-6 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-6"
              >
                <span className="spec-label text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-semibold text-ink-strong">
                  {technology.name}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 05. The finished product, at scale, with the copy kept out of
          its way. */}
      <section className="border-t border-line bg-surface py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={page.finished.image.src}
                alt={page.finished.image.alt}
                fill
                sizes="(min-width: 64rem) 55vw, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="spec-label text-brand">{page.finished.eyebrow}</p>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-ink-strong sm:text-3xl">
                {page.finished.heading}
              </h2>
              <div className="mt-5 space-y-4">
                {page.finished.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-base leading-relaxed text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 06. The blue hand-over to the footer. Form behind the button. */}
      <RequestSample
        heading={page.close.heading}
        body={page.close.body}
        ctaLabel={page.close.cta}
        lockedService={serviceOptions.bondedBras}
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { RequestSample } from "@/components/request-sample";
import { SpinViewer } from "@/components/spin-viewer";
import { HeroCta, SplitHero } from "@/components/split-hero";
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
      {/* 01. Hero. Same construction as About and Lamination, on the
          brand red. */}
      <SplitHero
        ground="red"
        title={page.hero.heading}
        body={page.hero.body}
        image="/img/bonded-bra.jpg"
        alt="A seamless bonded bra with clean bonded edges and no stitched seams"
        actions={
          <HeroCta ground="red" href={page.hero.cta.href}>
            {page.hero.cta.label}
          </HeroCta>
        }
      />

      {/* 02. The material explanation. Copy on one side, the finished
          product on the other. */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
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

            {/* Portrait product shot on a white ground. The frame matches
                the file's own proportions, so nothing is cropped and there
                are no bars either side. Once the 360 sequence is in place
                this is the same element, turnable. */}
            <SpinViewer
              frames={page.material.product.frames}
              alt={page.material.product.alt}
              className="mx-auto aspect-[3/4] w-full max-w-md bg-white lg:max-w-none"
            />
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

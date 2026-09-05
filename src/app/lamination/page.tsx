import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { LayerStack } from "@/components/layer-stack";
import { laminationPage as page, serviceOptions } from "@/content/site";

export const metadata: Metadata = {
  title: "Fabric Lamination Services | PU Foam, Film, EVA",
  description:
    "PU foam, fabric to fabric, film and EVA lamination onto woven, non-woven, knitted fabric and Rexine. Any width, custom densities and thicknesses.",
  alternates: { canonical: "/lamination" },
};

/**
 * Editorial rather than catalogue. Each technique is a full-width band with
 * the material photograph on one side and the explanation on the other,
 * alternating down the page, so a buyer can scan the four constructions
 * without reading a word if they choose to.
 *
 * Nothing is claimed that the brief did not supply. In particular there is
 * no maximum width, no applications, no industries and no capacity.
 */
export default function LaminationPage() {
  return (
    <>
      {/* 01. Hero. The material itself, full width. The factory photograph
          belongs to the homepage; this page opens on what is being made. */}
      <section className="relative bg-brand-blue text-white">
        <div className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
          <Image
            src="/img/pu-foam.jpg"
            alt="Knitted fabric peeled back to show the PU foam laminated behind it"
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
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink href={page.hero.primary.href}>
                {page.hero.primary.label}
              </CtaLink>
              <CtaLink href={page.hero.secondary.href} variant="quiet">
                {page.hero.secondary.label}
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 02. The four techniques, introduced before they are explained. */}
      <section id="techniques" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="spec-label text-brand">{page.intro.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {page.intro.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {page.intro.body}
            </p>
          </div>

          <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {page.techniques.map((technique) => (
              <li key={technique.slug} className="bg-white py-6 lg:px-6 lg:py-0">
                <Link href={`#${technique.slug}`} className="group block">
                  <span className="spec-label text-brand">
                    {technique.number}
                  </span>
                  <p className="mt-2 text-lg font-semibold text-ink-strong transition-colors group-hover:text-brand">
                    {technique.label}
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 03 to 06. One band per technique, alternating. */}
      {page.techniques.map((technique, i) => {
        const imageFirst = i % 2 === 1;
        return (
          <section
            key={technique.slug}
            id={technique.slug}
            className={`scroll-mt-24 border-t border-line py-16 sm:py-20 ${
              i % 2 === 1 ? "bg-surface" : ""
            }`}
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={technique.image}
                      alt={technique.alt}
                      fill
                      sizes="(min-width: 64rem) 48vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <p className="spec-label text-brand">
                    {technique.number} / {technique.label}
                  </p>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                    {technique.heading}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {technique.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-relaxed text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {"points" in technique && technique.points ? (
                    <ul className="mt-7 space-y-2.5">
                      {technique.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-base text-ink-strong"
                        >
                          <span aria-hidden="true" className="text-brand">
                            &mdash;
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {"note" in technique && technique.note ? (
                    <p className="mt-7 border-l-2 border-brand pl-5 text-lg font-semibold text-ink-strong">
                      {technique.note}
                    </p>
                  ) : null}

                  {"films" in technique && technique.films ? (
                    <dl className="mt-8 grid gap-px bg-line sm:grid-cols-2">
                      {technique.films.map((film) => (
                        <div key={film.name} className="bg-inherit py-4 sm:pr-6">
                          <dt className="spec-label text-brand">{film.name}</dt>
                          <dd className="mt-2 text-base text-ink-strong">
                            {film.body}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  {"layers" in technique && technique.layers ? (
                    <div className="mt-8 max-w-xs">
                      <LayerStack layers={technique.layers} />
                    </div>
                  ) : null}
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* 07. Your fabric or ours. */}
      <section className="border-t border-line py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {page.materials.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {page.materials.body}
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {page.materials.blocks.map((block) => (
              <div key={block.title} className="bg-white py-8 md:pr-10">
                <h3 className="spec-label text-brand">{block.title}</h3>
                <p className="mt-4 text-xl leading-snug text-ink-strong">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 08. Width. A strip running the full viewport, to carry the idea.
          No figure is given: the brief withholds one until the client
          supplies it. */}
      <section className="border-t border-line bg-surface pt-16 sm:pt-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {page.width.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {page.width.body}
            </p>
          </div>
        </Container>
        <div className="relative mt-12 h-40 w-full sm:h-56">
          <Image
            src="/img/fabric-to-fabric.jpg"
            alt="Laminated material running the full width"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 09. Layers into one material. Three frames, no film, as briefed. */}
      <section className="border-t border-line py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {page.construction.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {page.construction.body}
            </p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {page.construction.steps.map((step) => (
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
                <p className="spec-label mt-3 text-ink-strong">{step.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 10. Start with a sample. */}
      <ClosingCta
        heading={page.close.heading}
        body={[page.close.body]}
        form={{ services: serviceOptions.lamination }}
      />
    </>
  );
}

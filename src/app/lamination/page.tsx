import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { HeroCta, SplitHero } from "@/components/split-hero";
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
 * Nothing is claimed that the client did not supply. The applications under
 * each technique are the approved ones, word for word; there is no maximum
 * width, no industries and no capacity.
 */
export default function LaminationPage() {
  return (
    <>
      {/* 01. Hero. Same construction as About and Seamless Bonded Bras,
          on the brand red. */}
      <SplitHero
        ground="red"
        title={page.hero.heading}
        body={page.hero.body}
        image="/img/pu-foam.jpg"
        alt="Knitted fabric peeled back to show the PU foam laminated behind it"
        actions={
          <>
            <HeroCta ground="red" href={page.hero.primary.href}>
              {page.hero.primary.label}
            </HeroCta>
            <HeroCta ground="red" variant="quiet" href={page.hero.secondary.href}>
              {page.hero.secondary.label}
            </HeroCta>
          </>
        }
      />

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

          <ol className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {page.techniques.map((technique) => (
              <li
                key={technique.slug}
                className="border-b border-line py-5 last:border-b-0 sm:border-b-0 sm:py-6 sm:pr-6 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-6"
              >
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

                  {/* What the construction is actually made into. The
                      applications the client approved, set as a list rather
                      than a sentence so they can be scanned. */}
                  <div className="mt-8 border-t border-line pt-6">
                    <p className="spec-label text-muted">Used To Make</p>
                    <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                      {technique.usedFor.map((use) => (
                        <li
                          key={use}
                          className="rounded-sm border border-line px-3 py-1.5 text-sm font-medium text-ink-strong"
                        >
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>

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
          <div className="mt-10 grid border-t border-line md:grid-cols-2">
            {page.materials.blocks.map((block) => (
              <div
                key={block.title}
                className="border-b border-line py-7 last:border-b-0 md:border-b-0 md:pr-10 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-10"
              >
                <h3 className="spec-label text-brand">{block.title}</h3>
                <p className="mt-4 text-xl leading-snug text-ink-strong">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 08. Width. No photograph: every material shot on this page is
          already carried by a technique above, and a letterboxed strip of
          one of them repeated was decoration rather than information. The
          statement is set as type instead. No figure is given, because the
          client has not supplied one. */}
      <section className="border-t border-line py-14 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-baseline lg:gap-16">
            <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {page.width.heading}
            </h2>
            <p className="text-lg leading-relaxed text-ink-strong sm:text-xl">
              {page.width.body}
            </p>
          </div>
        </Container>
      </section>

      {/* 09. Layers into one material. The stages are drawn as the stack
          they describe, the last one solid to say that the layers have
          become a single material. Three small photographs in a row said
          none of that and repeated the technique images. */}
      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                {page.construction.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {page.construction.body}
              </p>
            </div>

            <ol>
              {page.construction.steps.map((step, i) => {
                const last = i === page.construction.steps.length - 1;
                return (
                  <li
                    key={step.label}
                    className={`flex items-baseline gap-5 border border-line px-6 ${
                      i > 0 ? "-mt-px" : ""
                    } ${
                      last
                        ? "border-brand-blue bg-brand-blue py-8 text-white"
                        : "bg-white py-6 text-ink-strong"
                    }`}
                  >
                    <span
                      className={`spec-label ${last ? "text-white/60" : "text-muted"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-semibold ${last ? "text-xl sm:text-2xl" : "text-lg"}`}
                    >
                      {step.label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { SplitHero } from "@/components/split-hero";
import { CtaLink } from "@/components/cta-link";
import {
  aboutPage as page,
  bondingTechnologies,
  company,
  workItems,
} from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Founded in ${company.foundedYear}, ${company.name} laminates woven, non-woven and knitted fabrics and Rexine, and manufactures seamless bonded bras using material laminated in house.`,
  alternates: { canonical: "/about" },
};

/** The four lamination techniques, for the expertise grid. */
const capabilities = workItems.filter((item) => item.slug !== "seamless-bonded-bras");

export default function AboutPage() {
  return (
    <>
      {/* 01. Hero. The works photograph, large, because its job is to say
          that this is a real factory. */}
      <SplitHero
        title={page.hero.heading}
        body={page.hero.body}
        image="/img/works.jpg"
        alt={`The ${company.name} works`}
      />

      {/* 02. Our story. Typographic, not another factory photograph. No
          intermediate milestones: none have been supplied. */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="spec-label text-brand">{page.story.eyebrow}</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                {page.story.heading}
              </h2>
              <div className="mt-10 border-t border-line pt-8">
                <p className="text-6xl font-bold leading-none tracking-tight text-ink-strong sm:text-7xl">
                  {company.foundedYear}
                </p>
                <span
                  aria-hidden="true"
                  className="my-6 block h-px w-full bg-line sm:my-8"
                />
                <p className="spec-label text-muted">Today</p>
              </div>
            </div>
            <div className="space-y-5">
              {page.story.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 03. Expertise. Four material photographs, each linking into the
          matching section of the lamination page. */}
      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="spec-label text-brand">{page.expertise.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {page.expertise.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {page.expertise.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, i) => (
              <li key={item.slug}>
                <Link href={item.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 64rem) 24vw, (min-width: 40rem) 48vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="spec-label mt-4 text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug text-ink-strong transition-colors group-hover:text-brand">
                    {item.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 04. The finished product, without turning this into the bra page. */}
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/img/bonded-bra.jpg"
                alt="A seamless bonded bra, showing no stitched seams"
                fill
                sizes="(min-width: 64rem) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                {page.finished.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {page.finished.body}
              </p>

              <p className="spec-label mt-10 text-muted">Technologies</p>
              <ul className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
                {bondingTechnologies.map((technology, i) => (
                  <li key={technology.name}>
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={technology.image}
                        alt={technology.alt}
                        fill
                        sizes="(min-width: 64rem) 15vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="spec-label mt-3 block text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-sm font-semibold leading-snug text-ink-strong">
                      {technology.name}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <CtaLink href={page.finished.cta.href} variant="outline">
                  {page.finished.cta.label}
                </CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. How we work. */}
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="spec-label text-brand">{page.how.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {page.how.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {page.how.body}
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {page.how.blocks.map((block) => (
              <div key={block.title} className="bg-white py-8 md:pr-8">
                <h3 className="spec-label text-brand">{block.title}</h3>
                <p className="mt-4 text-lg leading-snug text-ink-strong">
                  {block.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted">
            {page.how.close}
          </p>
          <div className="mt-8">
            <CtaLink href={page.how.cta.href}>{page.how.cta.label}</CtaLink>
          </div>
        </Container>
      </section>

      {/* 06. Quality. Material texture on one side, type on the other. */}
      <section className="border-b border-line bg-surface">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto lg:min-h-[26rem]">
            <Image
              src="/img/eva.jpg"
              alt="Close crop of a laminated material"
              fill
              sizes="(min-width: 64rem) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center py-16 sm:py-20">
            <Container className="lg:mx-0 lg:max-w-none lg:px-12">
              <p className="spec-label text-brand">{page.quality.eyebrow}</p>
              <h2 className="mt-4 max-w-xl text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                {page.quality.heading}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                {page.quality.body}
              </p>
            </Container>
          </div>
        </div>
      </section>

      <ClosingCta
        heading={page.close.heading}
        body={[page.close.body]}
        ctaLabel={page.close.cta.label}
        ctaHref={page.close.cta.href}
      />
    </>
  );
}

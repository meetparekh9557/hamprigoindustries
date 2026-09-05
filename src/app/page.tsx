import Image from "next/image";
import Link from "next/link";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { WorkRail } from "@/components/work-rail";
import {
  bondedBrasHome,
  hero,
  homeClose,
  materialStory,
  serviceOptions,
  whyHamprigo,
} from "@/content/site";

/**
 * Two layout rules run through this page. Visual sections go edge to edge;
 * text sits in a Container at a readable width inside them. That is what
 * stops the site reading as a narrow column parked in the middle of a wide
 * screen, without letting the paragraphs run to 200 characters.
 */
export default function HomePage() {
  return (
    <>
      {/* 01. Hero. Both halves of the business in the first screen: the
          material on the left of the visual, the finished product on the
          right, blended rather than butted together. */}
      <section className="relative bg-brand-blue text-white">
        <div className="grid lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
          <div className="order-2 flex items-center py-16 sm:py-20 lg:order-1 lg:py-28">
            <Container className="lg:mr-0 lg:max-w-[38rem] lg:pr-12">
              <p className="spec-label text-white/60">{hero.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {hero.subhead}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CtaLink href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </CtaLink>
                <CtaLink href={hero.secondaryCta.href} variant="quiet">
                  {hero.secondaryCta.label}
                </CtaLink>
              </div>
            </Container>
          </div>

          <div className="relative order-1 min-h-[18rem] sm:min-h-[24rem] lg:order-2 lg:min-h-[38rem]">
            <Image
              src="/img/pu-foam.jpg"
              alt="Knitted fabric peeled back to show the PU foam laminated behind it"
              fill
              sizes="(min-width: 64rem) 55vw, 100vw"
              className="object-cover"
              priority
            />
            {/* The bra fades into the laminate instead of sitting beside it,
                so the two halves read as one composition. */}
            <Image
              src="/img/bonded-bra.jpg"
              alt="A seamless bonded bra"
              fill
              sizes="(min-width: 64rem) 28vw, 50vw"
              className="object-cover"
              style={{
                // The fade has to sit where the two images meet. Clipping
                // first and fading from the element's own left edge put the
                // whole gradient in the clipped-away part, leaving a hard
                // seam, so the mask does both jobs and there is no clip.
                maskImage:
                  "linear-gradient(to right, transparent 42%, black 64%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 42%, black 64%)",
                objectPosition: "60% center",
              }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 lg:bg-gradient-to-r lg:from-[#152559] lg:via-transparent lg:to-transparent"
            />
          </div>
        </div>
      </section>

      {/* 02. The rail. Edge to edge, heading in a container.
          Light ground on purpose: blue here ran straight on from the hero
          and gave the page a 1,469px block of unbroken colour. The cards
          carry their own blue scrim, so the rail still reads dark against
          it without the whole section being blue. */}
      <section className="bg-surface pb-20 pt-16 sm:pb-24">
        <Container>
          <div className="pt-2">
            <span aria-hidden="true" className="block h-0.5 w-10 bg-brand" />
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              What we work with
            </h2>
          </div>
        </Container>
        <div className="mt-12">
          <WorkRail />
        </div>
      </section>

      {/* 03. What connects the four techniques. */}
      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <div className="rule-tick max-w-3xl pt-6">
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {materialStory.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {materialStory.body}
            </p>
          </div>
        </Container>

        <div className="mt-14 grid gap-px bg-line sm:grid-cols-3">
          {[
            { src: "/img/fabric-to-fabric.jpg", alt: "Woven fabric" },
            { src: "/img/eva.jpg", alt: "Foam, fabric or film" },
            { src: "/img/film.jpg", alt: "The finished laminated material" },
          ].map((image, i) => (
            <figure key={image.src} className="relative bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 40rem) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="spec-label absolute left-0 top-0 m-4 bg-ink-strong px-3 py-2 text-white">
                {materialStory.chain[i]}
              </figcaption>
            </figure>
          ))}
        </div>

        <Container>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <p className="spec-label text-muted">
              {materialStory.techniques}
            </p>
            <Link
              href={materialStory.cta.href}
              className="text-sm font-semibold text-brand"
            >
              {materialStory.cta.label}
              <span aria-hidden="true" className="ml-1.5">
                &rarr;
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* 04. The finished product. */}
      <section className="border-b border-line bg-surface py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
              <Image
                src="/img/bonded-bra.jpg"
                alt="A seamless bonded bra, showing no stitched seams"
                fill
                sizes="(min-width: 64rem) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <span aria-hidden="true" className="block h-0.5 w-10 bg-brand" />
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                {bondedBrasHome.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {bondedBrasHome.body}
              </p>

              <ul className="mt-10 grid gap-px bg-line">
                {bondedBrasHome.technologies.map((technology, i) => (
                  <li
                    key={technology}
                    className="flex items-baseline gap-5 bg-surface py-5"
                  >
                    <span className="spec-label text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-semibold text-ink-strong">
                      {technology}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <CtaLink href={bondedBrasHome.cta.href} variant="outline">
                  {bondedBrasHome.cta.label}
                </CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. Why Hamprigo. The factory photograph runs full bleed behind it,
          under a heavy scrim, so it reads as ground rather than as a
          portrait of the building. */}
      <section className="relative isolate overflow-hidden py-20 text-white sm:py-24">
        <Image
          src="/img/factory.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-brand-blue/95"
        />
        <Container>
          <div className="max-w-3xl">
            <span aria-hidden="true" className="block h-0.5 w-10 bg-brand" />
            <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
              {whyHamprigo.heading}
            </h2>
          </div>
          <dl className="mt-14 grid gap-10 sm:grid-cols-3">
            {whyHamprigo.items.map((item) => (
              <div key={item.label}>
                <dt className="text-xl font-semibold">{item.label}</dt>
                <dd className="mt-3 text-base leading-relaxed text-white/75">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 06. Closing band, shared with every other page. */}
      <ClosingCta
        heading={homeClose.heading}
        body={[homeClose.body]}
        form={{ services: serviceOptions.all }}
      />
    </>
  );
}

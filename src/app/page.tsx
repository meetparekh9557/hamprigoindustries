import Image from "next/image";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { ICONS, type IconName } from "@/components/icons";
import { WorkRail } from "@/components/work-rail";
import {
  about,
  bondingTechnologies,
  company,
  hero,
  homeClose,
  homeHeadings,
  materialChain,
  serviceOptions,
  twoServices,
  whyHamprigo,
} from "@/content/site";

/**
 * Two layout rules run through this page. Visual sections go edge to edge;
 * text sits in a Container so every heading and paragraph on the site starts
 * and ends on the same two vertical lines. The hero used to break that by
 * pinning its container to the right, which left its text 50px inside every
 * other section's; it now uses a plain Container and constrains the column
 * inside it instead.
 */
export default function HomePage() {
  return (
    <>
      {/* 01. Hero. The works on the right, captioned, as in the supplied
          design.

          The image is positioned rather than gridded. A Container inside a
          grid column centres within that column, not the page, which put the
          hero's text 144px inside every other section's. Absolute-positioning
          the image lets the text sit in an ordinary Container and line up. */}
      <section className="relative bg-brand-blue text-white">
        <div className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
          <Image
            src="/img/factory.jpg"
            alt={`The ${company.name} works`}
            fill
            sizes="(min-width: 64rem) 50vw, 100vw"
            className="object-cover"
            priority
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#152559] via-[#152559]/40 to-transparent lg:bg-gradient-to-r lg:via-[#152559]/25"
          />
          <p className="absolute bottom-6 right-6 text-right">
            <span className="spec-label block text-white/70">Our facility</span>
            <span className="mt-1 block font-mono text-sm text-white">
              Since {company.foundedYear}
            </span>
          </p>
        </div>

        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="lg:max-w-[32rem]">
            <p className="spec-label text-white/60">{hero.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
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
          </div>
        </Container>
      </section>

      {/* 02. What we work with. The overview, before any paragraphs. */}
      {/* No bottom padding: the rail is the end of this section, and
          padding after it read as a stray grey band. */}
      <section className="bg-surface pt-16 sm:pt-20">
        <Container>
          <div className="pt-2">
            <span aria-hidden="true" className="block h-0.5 w-10 bg-brand" />
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {homeHeadings.work}
            </h2>
          </div>
        </Container>
        <div className="mt-12">
          <WorkRail />
        </div>
      </section>

      {/* 03. Our services. The two capabilities, each with its own visual. */}
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <span aria-hidden="true" className="block h-0.5 w-10 bg-brand" />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
            {homeHeadings.services}
          </h2>
        </Container>

        {/* 01 Textile Lamination, with the material progression. */}
        <Container className="mt-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
            <div>
              <p className="spec-label text-muted">{twoServices[0].eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink-strong">
                {twoServices[0].title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {twoServices[0].body}
              </p>
              <div className="mt-8">
                <CtaLink href={twoServices[0].cta.href} variant="outline">
                  {twoServices[0].cta.label}
                </CtaLink>
              </div>
            </div>

            <ul className="grid grid-cols-3 items-start gap-3 sm:gap-5">
              {materialChain.map((step) => (
                <li key={step.label}>
                  <div className="relative aspect-square overflow-hidden rounded-sm">
                    <Image
                      src={step.src}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 64rem) 18vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="spec-label mt-3 text-ink-strong">{step.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        {/* 02 Seamless Bonded Bras. The technologies take the visual slot
            the product photograph had, so this block mirrors Service 01:
            the argument on the left, the three things on the right. The
            product itself is already on the rail above and on its own
            page, so the photograph was the third showing of it. */}
        <Container className="mt-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
            <div>
              <p className="spec-label text-muted">{twoServices[1].eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink-strong">
                {twoServices[1].title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {twoServices[1].body}
              </p>
              <div className="mt-8">
                <CtaLink href={twoServices[1].cta.href} variant="outline">
                  {twoServices[1].cta.label}
                </CtaLink>
              </div>
            </div>

            <div>
              <p className="spec-label text-muted">Technologies We Use</p>
              {/* Named only. No approved explanation has been supplied for
                  any of the three. */}
              <ul className="mt-4 grid grid-cols-3 gap-3 sm:gap-5">
                {bondingTechnologies.map((technology, i) => (
                  <li
                    key={technology}
                    className="border-t-2 border-brand bg-surface p-5 sm:p-6"
                  >
                    <span className="spec-label text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-base font-semibold leading-snug text-ink-strong">
                      {technology}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 04. Why the structure is worth something to the buyer. Compact. */}
      <section className="border-b border-line bg-surface py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="spec-label text-brand">{whyHamprigo.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {whyHamprigo.heading}
            </h2>
          </div>
          <dl className="mt-12 grid gap-10 md:grid-cols-3">
            {whyHamprigo.items.map((item) => {
              const Icon = ICONS[item.icon as IconName];
              return (
                <div key={item.label}>
                  <Icon className="h-8 w-8 text-brand" />
                  <dt className="mt-5 text-lg font-semibold text-ink-strong">
                    {item.label}
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-muted">
                    {item.body}
                  </dd>
                </div>
              );
            })}
          </dl>
        </Container>
      </section>

      {/* 05. What we stand for. Values come last, once the visitor knows what
          the business actually does. */}
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <span aria-hidden="true" className="block h-0.5 w-10 bg-brand" />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
            {homeHeadings.values}
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {about.values.map((value, i) => (
              <div key={value.title} className="border-t-2 border-brand pt-5">
                <span className="spec-label text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-ink-strong">
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

      {/* 06. Closing band, shared with every other page. */}
      <ClosingCta
        heading={homeClose.heading}
        body={[homeClose.body]}
        form={{ services: serviceOptions.all }}
      />
    </>
  );
}

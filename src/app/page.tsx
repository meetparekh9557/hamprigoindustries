import Image from "next/image";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { ICONS, type IconName } from "@/components/icons";
import { WorkRail } from "@/components/work-rail";
import {
  company,
  hero,
  homeClose,
  serviceOptions,
  twoServices,
  whyChoose,
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

        <Container className="relative py-16 sm:py-20 lg:py-28">
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

      {/* 02. The rail, edge to edge. */}
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

      {/* 03. The two sides of the business, as icons rather than photographs.
          The rail above already carries the imagery. */}
      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <div className="grid gap-px bg-line md:grid-cols-2">
            {twoServices.map((service) => {
              const Icon = ICONS[service.icon as IconName];
              return (
                <div
                  key={service.title}
                  className="flex flex-col bg-white p-8 sm:p-10"
                >
                  <Icon className="h-10 w-10 text-brand" />
                  <p className="spec-label mt-6 text-muted">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-muted">
                    {service.body}
                  </p>
                  <div className="mt-8">
                    <CtaLink href={service.cta.href} variant="outline">
                      {service.cta.label}
                    </CtaLink>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 04. Why choose our services. Restored from the previous site. */}
      <section className="border-b border-line bg-surface py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <span aria-hidden="true" className="block h-0.5 w-10 bg-brand" />
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {whyChoose.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {whyChoose.intro}
            </p>
          </div>

          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.items.map((item) => {
              const Icon = ICONS[item.icon as IconName];
              return (
                <li key={item.title} className="flex items-start gap-4">
                  <Icon className="h-7 w-7 shrink-0 text-brand" />
                  <h3 className="text-lg font-semibold leading-snug text-ink-strong">
                    {item.title}
                  </h3>
                </li>
              );
            })}
          </ul>

          <p className="mt-14 max-w-3xl text-base leading-relaxed text-muted">
            {whyChoose.close}
          </p>
        </Container>
      </section>

      {/* 05. One supplier from material to finished product. */}
      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="spec-label text-brand">{whyHamprigo.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {whyHamprigo.heading}
            </h2>
          </div>
          <dl className="mt-14 grid gap-10 md:grid-cols-3">
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

      {/* 06. Closing band, shared with every other page. */}
      <ClosingCta
        heading={homeClose.heading}
        body={[homeClose.body]}
        form={{ services: serviceOptions.all }}
      />
    </>
  );
}

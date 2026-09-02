import Link from "next/link";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import {
  capabilities,
  company,
  hero,
  industries,
  services,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Hero. The h1 leads on the product term rather than a slogan,
          because that is what buyers search for. */}
      <section className="bg-ink-strong text-white">
        <Container className="py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {hero.since}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
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
      </section>

      {/* The four techniques. */}
      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
            Our lamination services
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Four techniques, all under one roof.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/lamination#${service.slug}`}
                className="group flex flex-col bg-white p-7 transition-colors hover:bg-surface"
              >
                <h3 className="text-lg font-semibold text-ink-strong">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
                <span className="mt-5 text-sm font-semibold text-brand">
                  Read more
                  <span
                    aria-hidden="true"
                    className="ml-1.5 inline-block transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities that apply across every technique. Deliberately not
          presented as a fifth service. */}
      <section className="border-b border-line bg-surface py-20 sm:py-24">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
            {capabilities.heading}
          </h2>
          <p className="mt-3 text-base text-muted">{capabilities.intro}</p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {capabilities.items.map((item) => (
              <div key={item.title} className="border-t-2 border-brand pt-5">
                <h3 className="text-lg font-semibold text-ink-strong">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Seamless bonded bras. The only finished product on the site. */}
      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Finished products
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              We also manufacture seamless bonded bras
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Bonded construction replaces sewn seams with permanent bonds, so
              there are no visible seam lines and nothing to chafe. Built on
              material we laminate ourselves, which is what lets a bonded edge
              survive repeated laundering.
            </p>
            <div className="mt-8">
              <CtaLink href="/seamless-bonded-bras" variant="outline">
                About our bonded bras
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries. */}
      <section className="border-b border-line py-16">
        <Container>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Industries we supply
          </h2>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {industries.map((item) => (
              <li
                key={item}
                className="text-sm font-medium text-ink-strong sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Closing CTA. Sample request is the primary ask, not a spec. */}
      <section className="bg-ink-strong py-20 text-white sm:py-24">
        <Container>
          <h2 className="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
            Tell us what your material has to do
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            Send us the substrate and the end application and we will laminate a
            sample for you to handle and test. You do not need a finished
            specification to start a conversation with {company.name}.
          </p>
          <div className="mt-10">
            <CtaLink href="/contact">Request a sample</CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}

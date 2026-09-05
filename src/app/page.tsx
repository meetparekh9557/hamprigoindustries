import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { LaminateDiagram, type Layer } from "@/components/laminate-diagram";
import { ServiceRail } from "@/components/service-rail";
import { capabilities, company, hero, serviceLayers } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Hero. Split: the claim on the left, the product itself on the right.
          The h1 leads on the product term rather than a slogan, because that
          is what buyers search for. */}
      <section className="border-b border-line bg-ink-strong text-white">
        <Container className="py-20 sm:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="spec-label text-brand">{hero.since}</p>
              <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
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

            {/* The signature visual: what a laminate actually is. */}
            <div className="rounded-sm bg-white p-7">
              <LaminateDiagram
                layers={[...serviceLayers["pu-foam-laminated-fabric"]] as Layer[]}
                caption="Cross-section: fabric bonded to PU foam"
              />
              <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                The red line is the bond. It is the part that has to survive
                cutting, stitching and the wash, and it is the part we control.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The four techniques, as one rail. Each is a sliver until it is
          hovered, then it opens into a full card with its cross-section. */}
      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <div className="rule-tick pt-6">
            <p className="spec-label text-muted">What we bond</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              Four techniques, all under one roof
            </h2>
          </div>

          <div className="mt-12">
            <ServiceRail />
          </div>
        </Container>
      </section>

      {/* Capabilities that apply across every technique. Deliberately not
          presented as a fifth service. */}
      <section className="border-b border-line bg-ink-strong py-20 text-white sm:py-24">
        <Container>
          <div className="pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            <p className="spec-label text-brand">Across all four</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
              {capabilities.heading}
            </h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {capabilities.items.map((item, i) => (
              <div key={item.title}>
                <span className="spec-label text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="spec-label text-brand">Finished products</p>
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
            <div className="rounded-sm border border-line bg-surface p-7">
              <LaminateDiagram
                layers={[
                  { kind: "fabric", label: "Face fabric", weight: 1 },
                  { kind: "foam", label: "PU foam", weight: 2.2 },
                  { kind: "fabric", label: "Lining", weight: 1 },
                ]}
                caption="Bonded construction, no stitched seam"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA. Sample request is the primary ask, not a spec. */}
      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="rule-tick pt-6">
            <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              Tell us what your material has to do
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Send us the substrate and the end application and we will laminate
              a sample for you to handle and test. You do not need a finished
              specification to start a conversation with {company.name}.
            </p>
            <div className="mt-10">
              <CtaLink href="/contact">Request a sample</CtaLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

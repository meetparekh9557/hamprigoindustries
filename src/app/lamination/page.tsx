import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ClosingCta } from "@/components/closing-cta";
import { LaminateDiagram, type Layer } from "@/components/laminate-diagram";
import { PageHero } from "@/components/page-hero";
import {
  capabilities,
  laminationClose,
  serviceLayers,
  serviceOptions,
  services,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Fabric Lamination Services | PU Foam, Film, EVA",
  description:
    "PU foam, fabric to fabric, film and EVA lamination onto woven, non-woven, knitted fabric and Rexine. Any width, custom densities and thicknesses.",
  alternates: { canonical: "/lamination" },
};

export default function LaminationPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Fabric Lamination Services"
        lede="We laminate woven, non-woven, knitted fabric, and Rexine to PU foam, EVA foam, films, and other fabrics. Everything is bonded to your specification, at any width you need."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="divide-y divide-line">
            {services.map((service, index) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 py-12 first:pt-0"
              >
                <p className="spec-label text-brand">
                  Construction {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                  {service.title}
                </h2>

                <div className="mt-7 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
                  <div>
                    <div className="space-y-4">
                      {service.body.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 40)}
                          className="text-base leading-relaxed text-muted"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <p className="mt-6 text-base font-medium text-ink-strong">
                      {service.applications}
                    </p>
                    <p className="mt-6 text-sm italic leading-relaxed text-muted">
                      {service.cta}
                    </p>
                  </div>

                  <div className="rounded-sm border border-line bg-surface p-6">
                    <LaminateDiagram
                      layers={
                        [
                          ...serviceLayers[
                            service.slug as keyof typeof serviceLayers
                          ],
                        ] as Layer[]
                      }
                      caption={`${service.title} cross-section`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16 sm:py-20">
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
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta
        heading={laminationClose.heading}
        body={[...laminationClose.body]}
        form={{ services: serviceOptions.lamination }}
      />
    </>
  );
}

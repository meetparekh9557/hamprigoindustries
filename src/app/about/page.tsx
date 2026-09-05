import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { ClosingCta } from "@/components/closing-cta";
import { PageHero } from "@/components/page-hero";
import { ICONS, type IconName } from "@/components/icons";
import { about, company, whyChoose } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Founded in ${company.foundedYear}, ${company.name} manufactures customized laminated fabric for automotive, apparel, home furnishing and industrial applications.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Laminating fabric since ${company.foundedYear}`}
        title={about.title}
      />

      {/* The material itself, full bleed, between the hero and the story.
          The About copy is about what Hamprigo makes, so it should be
          visible before the reader has to imagine it. */}
      <div className="relative aspect-[21/9] w-full sm:aspect-[3/1]">
        <Image
          src="/img/pu-foam.jpg"
          alt="Knitted fabric peeled back to show the PU foam laminated behind it"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl space-y-12">
            {about.sections.map((section, index) => (
              <div key={section.heading ?? `intro-${index}`}>
                {section.heading ? (
                  <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
                    {section.heading}
                  </h2>
                ) : null}
                <div className={section.heading ? "mt-5 space-y-4" : "space-y-4"}>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-base leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose our services, from the previous site. The values that
          used to sit here now lead the homepage's closing stretch, so the
          two are not duplicated across pages. */}
      <section className="border-y border-line bg-surface py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
              {whyChoose.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {whyChoose.intro}
            </p>
          </div>

          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
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

          <p className="mt-12 max-w-3xl text-base leading-relaxed text-muted">
            {whyChoose.close}
          </p>
        </Container>
      </section>

      <ClosingCta
        heading={about.closing.heading}
        body={[...about.closing.body]}
      />
    </>
  );
}

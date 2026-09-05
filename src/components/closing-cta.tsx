import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "./container";
import { CtaLink } from "./cta-link";
import { EnquiryForm } from "./enquiry-form";

/**
 * The band every page ends on, immediately above the footer.
 *
 * It is the blue from the logo mark. The footer is white, and the sections
 * that used to close each page were the pale surface tone, so a page ended
 * on two light blocks running into each other. This gives the hand-over
 * some weight and puts the brand's blue somewhere it is actually seen.
 *
 * It exists as a component rather than as markup repeated per page so that
 * "every page ends on the blue" is structural. A new page picks it up by
 * using this; there is nothing to remember.
 *
 * Two modes. Given a `form`, the pitch sits on the left and the enquiry form
 * on the right in a white card: the form stays on a light ground, which is
 * where form controls behave, and the page still closes on the blue. Without
 * one, it falls back to a link, which is what About and Contact use, since
 * About takes no enquiries and Contact already has the form above.
 *
 * The blue is a translucent wash over a photograph rather than a flat fill,
 * so the material reads through it. 88 percent: enough to keep white text at
 * roughly the same contrast as the solid colour gave, light enough that the
 * fabric is plainly there rather than hinted at.
 */
export function ClosingCta({
  heading,
  body,
  ctaLabel = "Request a sample",
  ctaHref = "/contact",
  form,
}: {
  heading: string;
  /** Paragraphs. Nodes rather than strings, so a page can interpolate. */
  body: ReactNode[];
  ctaLabel?: string;
  ctaHref?: string;
  /** Renders the enquiry form instead of the link. */
  form?: {
    services?: readonly string[];
    lockedService?: string;
  };
}) {
  const pitch = (
    <div className={form ? undefined : "max-w-3xl"}>
      {/* Red tick, as on the light rules elsewhere. The hairline version is
          invisible on this ground, so only the tick survives. */}
      <span aria-hidden="true" className="block h-0.5 w-10 bg-brand" />

      <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
        {heading}
      </h2>

      <div className="mt-5 space-y-4">
        {body.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-white/75">
            {paragraph}
          </p>
        ))}
      </div>

      {form ? null : (
        <div className="mt-10">
          <CtaLink href={ctaHref}>{ctaLabel}</CtaLink>
        </div>
      )}
    </div>
  );

  return (
    <section className="relative isolate overflow-hidden py-16 text-white sm:py-20">
      <Image
        src="/img/textile.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-brand-blue/[0.88]"
      />
      <Container>
        {form ? (
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            {pitch}
            <div className="rounded-sm bg-white p-6 text-ink sm:p-8">
              <EnquiryForm
                services={form.services}
                lockedService={form.lockedService}
              />
            </div>
          </div>
        ) : (
          pitch
        )}
      </Container>
    </section>
  );
}

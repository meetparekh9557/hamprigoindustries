import type { ReactNode } from "react";
import { Container } from "./container";
import { CtaLink } from "./cta-link";

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
 */
export function ClosingCta({
  heading,
  body,
  ctaLabel = "Request a sample",
  ctaHref = "/contact",
}: {
  heading: string;
  /** Paragraphs. Nodes rather than strings, so a page can interpolate. */
  body: ReactNode[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-brand-blue py-20 text-white sm:py-24">
      <Container>
        <div className="max-w-3xl">
          {/* Red tick, as on the light rules elsewhere. The hairline version
              is invisible on this ground, so only the tick survives. */}
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

          <div className="mt-10">
            <CtaLink href={ctaHref}>{ctaLabel}</CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

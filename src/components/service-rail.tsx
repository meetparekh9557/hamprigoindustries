import Link from "next/link";
import { LaminateDiagram, type Layer } from "./laminate-diagram";
import { serviceLayers, services } from "@/content/site";

/**
 * The four techniques as one expanding rail.
 *
 * Collapsed, each technique is a tall sliver with its material name running
 * up the spine. Hovering one widens it into a full card and pushes its
 * neighbours aside.
 *
 * The card is a fixed-width block sitting past the sliver's own width, and
 * the panel clips it. So the caption is laid out exactly once, at the width
 * it will finally be read at, and widening the panel reveals that layout
 * rather than reflowing it. Animating the panel's width with the text inside
 * it would rewrap every line on every frame of the reveal.
 *
 * No JavaScript: the whole interaction is :hover and :focus-within, so it
 * works before hydration and for keyboard users. Below the lg breakpoint the
 * rail becomes a plain stack, because sliding panels need a pointer and a
 * wide viewport to mean anything. All of that lives in globals.css.
 */
export function ServiceRail() {
  return (
    <div className="service-rail">
      {services.map((service, index) => (
        <Link
          key={service.slug}
          href={`/lamination#${service.slug}`}
          className="service-panel"
        >
          <span className="service-panel__index spec-label">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* The h3 below already carries the name for assistive tech. */}
          <span className="service-panel__spine" aria-hidden="true">
            {service.short}
          </span>

          <div className="service-panel__card">
            <h3 className="text-xl font-semibold text-ink-strong">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.summary}
            </p>

            <div className="service-panel__figure">
              <LaminateDiagram
                layers={
                  [
                    ...serviceLayers[
                      service.slug as keyof typeof serviceLayers
                    ],
                  ] as Layer[]
                }
                caption={`Construction 0${index + 1}`}
              />
            </div>

            <span className="service-panel__more">
              Read more
              <span aria-hidden="true" className="service-panel__arrow">
                &rarr;
              </span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

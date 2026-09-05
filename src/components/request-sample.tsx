"use client";

import { useRef, useState } from "react";
import { Container } from "./container";
import { EnquiryForm } from "./enquiry-form";

/**
 * The closing band on the Seamless Bonded Bras page.
 *
 * It keeps the standing rule that a page hands over to the footer on the
 * logo blue, but drops the photograph the shared closing band carries: on
 * this page the finished product is the photography, and a generic textile
 * shot directly under it was doing nothing.
 *
 * The form is behind the button rather than printed underneath the copy.
 * A full seven field form dumped at the end of a capability page reads as
 * a wall; asked for, it reads as the next step. Once opened it stays open,
 * and focus moves into the first field so the keyboard path is unbroken.
 */
export function RequestSample({
  heading,
  body,
  ctaLabel,
  lockedService,
}: {
  heading: string;
  body: readonly string[];
  ctaLabel: string;
  lockedService: string;
}) {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="request-a-sample"
      className="scroll-mt-20 bg-brand-blue py-16 text-white sm:py-20"
    >
      <Container>
        <div className="max-w-2xl">
          <span aria-hidden="true" className="block h-0.5 w-10 bg-brand" />
          <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
            {heading}
          </h2>
          <div className="mt-5 space-y-4">
            {body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-white/75"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {open ? null : (
            <button
              type="button"
              onClick={() => {
                setOpen(true);
                // The panel is not in the tree until this render commits.
                requestAnimationFrame(() => {
                  formRef.current
                    ?.querySelector<HTMLInputElement>("input, select, textarea")
                    ?.focus();
                });
              }}
              className="mt-10 inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold tracking-wide text-brand-ink transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {ctaLabel}
            </button>
          )}
        </div>

        {open ? (
          <div ref={formRef} className="mt-12 max-w-3xl">
            <EnquiryForm lockedService={lockedService} tone="dark" />
          </div>
        ) : null}
      </Container>
    </section>
  );
}

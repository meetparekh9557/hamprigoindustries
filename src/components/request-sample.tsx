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
 * Same shape as the closing band on the other pages: the pitch on the left,
 * the form in a white card on the right, so the controls sit on a light
 * ground where they behave and the page still closes on the blue.
 */
export function RequestSample({
  heading,
  body,
  lockedService,
}: {
  heading: string;
  body: readonly string[];
  lockedService: string;
}) {
  return (
    <section
      id="request-a-sample"
      className="scroll-mt-20 bg-brand-blue py-16 text-white sm:py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
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
          </div>

          <div className="rounded-sm bg-white p-6 text-ink sm:p-8">
            <EnquiryForm lockedService={lockedService} page="Seamless Bonded Bras" />
          </div>
        </div>
      </Container>
    </section>
  );
}

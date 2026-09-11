import { Container } from "./container";

/**
 * The questions a buyer asks.
 *
 * Built on `details` and `summary` rather than on state. It needs no
 * JavaScript, so it works on the first paint rather than after hydration;
 * the keyboard and screen reader behaviour is the browser's own rather than
 * something reimplemented; and the answers stay in the markup while closed,
 * so the FAQ structured data still matches what the page says.
 *
 * Each opens independently. Grouping them by `name` so that opening one
 * closes the last would hide an answer the visitor is still reading.
 */
export function Faq({
  heading,
  items,
}: {
  heading: string;
  items: readonly { q: string; a: string }[];
}) {
  return (
    <section className="border-t border-line bg-surface py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-bold tracking-tight text-ink-strong sm:text-3xl">
          {heading}
        </h2>

        <div className="mt-10 border-t border-line">
          {items.map((item) => (
            <details key={item.q} className="faq group border-b border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-semibold leading-snug text-ink-strong transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="mt-1 h-5 w-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45"
                >
                  <path
                    d="M10 4v12M4 10h12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </summary>
              <p className="max-w-3xl pb-6 text-base leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

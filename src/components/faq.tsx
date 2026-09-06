import { Container } from "./container";

/**
 * The questions a buyer asks, answered in plain sight.
 *
 * Rendered as real text rather than a click-to-open accordion: an answer
 * hidden behind a summary element is harder for a person to scan and gives
 * an answer engine less to work with. The same array feeds the FAQ
 * structured data, so what is claimed and what is shown are the same words.
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
        <dl className="mt-10 grid gap-x-16 gap-y-8 border-t border-line pt-8 lg:grid-cols-2">
          {items.map((item) => (
            <div key={item.q}>
              <dt className="text-lg font-semibold leading-snug text-ink-strong">
                {item.q}
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-muted">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

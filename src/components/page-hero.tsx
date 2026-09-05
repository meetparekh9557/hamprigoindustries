import { Container } from "./container";

export function PageHero({
  eyebrow,
  title,
  lede,
  flush = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  /** Drops the bottom rule, for when the section below is the same blue. */
  flush?: boolean;
}) {
  return (
    <section
      className={`bg-ink-strong text-white ${flush ? "" : "border-b border-line"}`}
    >
      <Container className="py-16 sm:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {lede}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./container";

/**
 * The hero every inner page opens on: type on the left, a photograph
 * filling the right half and washing into the ground behind the text.
 *
 * It exists as one component because the three pages that use it had drifted
 * into three slightly different versions of the same layout. Anything that
 * should look the same on About, Lamination and Seamless Bonded Bras is
 * settled here once.
 *
 * The image is positioned rather than made a grid column, so the heading
 * sits in an ordinary Container and lines up with the left edge of every
 * other section on the site. Text inside a grid column centres within that
 * column, not the page.
 */
const GROUNDS = {
  blue: {
    section: "bg-brand-blue",
    /** Matches --brand-blue. Tailwind cannot interpolate a custom property
     *  into a gradient stop, so the value is repeated here. */
    wash: "from-[#152559] via-[#152559]/40 lg:via-[#152559]/25",
    button:
      "bg-brand text-brand-ink hover:bg-brand-dark focus-visible:outline-white",
  },
  red: {
    section: "bg-brand",
    /** Matches --brand. */
    wash: "from-[#c00305] via-[#c00305]/40 lg:via-[#c00305]/25",
    button:
      "bg-white text-brand hover:bg-white/90 focus-visible:outline-white",
  },
} as const;

export function SplitHero({
  title,
  body,
  image,
  alt,
  ground = "blue",
  actions,
}: {
  title: string;
  body: string;
  image: string;
  alt: string;
  ground?: keyof typeof GROUNDS;
  /** Optional buttons under the copy. */
  actions?: ReactNode;
}) {
  const g = GROUNDS[ground];

  return (
    <section className={`relative text-white ${g.section}`}>
      <div className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 64rem) 50vw, 100vw"
          className="object-cover"
          priority
        />
        <span
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-t to-transparent lg:bg-gradient-to-r ${g.wash}`}
        />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="lg:max-w-[32rem]">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            {body}
          </p>
          {actions ? (
            <div className="mt-10 flex flex-wrap gap-3">{actions}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/** A hero button. Solid reads on the ground it is given; quiet is the
 *  outlined companion. Kept here so the pairing stays with the hero. */
export function HeroCta({
  href,
  children,
  variant = "solid",
  ground = "blue",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "quiet";
  ground?: keyof typeof GROUNDS;
}) {
  const style =
    variant === "solid"
      ? GROUNDS[ground].button
      : "border border-white/40 text-white hover:border-white focus-visible:outline-white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${style}`}
    >
      {children}
    </Link>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { seo, thankYouPage as page } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: seo.thankYou.title },
  description: seo.thankYou.description,
  alternates: { canonical: "/thank-you/" },
  // A confirmation page has nothing to offer a search result, and
  // landing on one from search is confusing.
  robots: { index: false, follow: true },
};

/**
 * Where an enquiry lands once it has been sent.
 *
 * The tick draws itself rather than simply appearing, which is what makes it
 * read as confirmation of something that just happened rather than as
 * decoration that was always on the page. Everything is centred on the one
 * axis, so the eye lands on the tick and falls straight to the heading.
 *
 * The animation is defined inline rather than in globals.css because nothing
 * else on the site uses it, and it is disabled outright for anyone who has
 * asked for reduced motion.
 */
export default function ThankYouPage() {
  return (
    <>
      <style>{`
        @keyframes ty-ring {
          from { transform: scale(0.7); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        @keyframes ty-tick {
          from { stroke-dashoffset: 30; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes ty-pulse {
          0%   { transform: scale(1);   opacity: 0.45; }
          70%  { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .ty-ring  { animation: ty-ring 420ms cubic-bezier(0.2, 0.8, 0.3, 1) both; }
        .ty-tick  { stroke-dasharray: 30; animation: ty-tick 420ms ease-out 320ms both; }
        .ty-pulse { animation: ty-pulse 1.6s ease-out 640ms infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ty-ring, .ty-tick, .ty-pulse { animation: none; }
          .ty-tick { stroke-dashoffset: 0; }
          .ty-pulse { opacity: 0; }
        }
      `}</style>

      <section className="bg-brand-blue py-24 text-center text-white sm:py-32">
        <Container>
          <div className="mx-auto max-w-xl">
            <span className="relative mx-auto block h-20 w-20">
              <span
                aria-hidden="true"
                className="ty-pulse absolute inset-0 rounded-full bg-white/40"
              />
              <svg
                viewBox="0 0 48 48"
                className="ty-ring relative h-20 w-20"
                role="img"
                aria-label="Enquiry sent"
              >
                <circle cx="24" cy="24" r="23" fill="#ffffff" />
                <path
                  className="ty-tick"
                  d="M14 24.5 L21 31.5 L34 17.5"
                  fill="none"
                  stroke="#152559"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <h1 className="mt-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {page.heading}
            </h1>

            <div className="mt-6 space-y-4">
              {page.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-white/80 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <CtaLink href={page.cta.href}>{page.cta.label}</CtaLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

import Image from "next/image";

/**
 * The Hamprigo logo, as supplied.
 *
 * This is the client's own artwork, not a redrawing of it. The source is a
 * scan on white paper; the white has been keyed out to alpha so the lockup
 * can sit on any ground without carrying a white rectangle with it. Nothing
 * else about the mark has been altered, scan specks included.
 *
 * The dark parts of the mark are close to black, so on a dark ground the
 * lockup needs a light panel behind it rather than a recolour. SiteFooter
 * does that. Recolouring would be a change to the logo.
 */

/** Intrinsic size of public/brand/logo.png. */
const NATURAL = { width: 800, height: 318 };

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Hamprigo Industries, Textile Lamination"
      width={NATURAL.width}
      height={NATURAL.height}
      priority
      className={`h-auto w-full ${className}`}
    />
  );
}

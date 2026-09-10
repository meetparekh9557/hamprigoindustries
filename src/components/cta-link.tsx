import Link from "next/link";

type Variant = "solid" | "outline" | "quiet";

const styles: Record<Variant, string> = {
  solid:
    "bg-brand text-brand-ink hover:bg-brand-dark focus-visible:outline-brand",
  outline:
    "border border-line bg-white text-ink hover:border-ink focus-visible:outline-ink",
  quiet:
    "border border-white/30 text-white hover:border-white focus-visible:outline-white",
};

/**
 * Prefetch is off. These sit above the fold, so Next fetched both service
 * pages the moment the homepage rendered: 149KB of HTML arriving while the
 * hero image was still downloading, on the connection where that hurts
 * most. Links further down the page keep their prefetch, since by the time
 * a visitor scrolls to them the page has long since painted.
 */
export function CtaLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <Link
      prefetch={false}
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

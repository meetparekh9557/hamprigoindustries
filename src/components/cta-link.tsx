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
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

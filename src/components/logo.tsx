/**
 * Hamprigo mark, rebuilt as SVG.
 *
 * The supplied artwork is a scan on a white ground: it cannot sit on the dark
 * header or footer without showing a white box, and it softens when scaled.
 * This is a geometric reconstruction, so it stays sharp at any size and takes
 * its colours from context.
 *
 * It is a reconstruction, not the original vector. If the client can find the
 * .ai, .eps or .svg from whoever drew it, that should replace this.
 */

export function LogoMark({
  className = "",
  navy = "currentColor",
}: {
  className?: string;
  /** The diamond. Defaults to currentColor so it inverts on dark grounds. */
  navy?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Hamprigo Industries"
    >
      {/* Diamond, formed of four planes. */}
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill={navy} />

      {/* Vertical channel separating the red column from the diamond. */}
      <path d="M36 4 L64 4 L64 96 L36 96 Z" fill="var(--color-background)" />

      {/* Red column, dropping to a point at the base. */}
      <path d="M40 12 L60 12 L60 74 L50 90 L40 74 Z" fill="var(--color-brand)" />

      {/* Horizontal bar crossing the mark, interrupted by the column. */}
      <path d="M4 44 L36 44 L36 56 L4 56 Z" fill={navy} />
      <path d="M64 44 L96 44 L96 56 L64 56 Z" fill={navy} />
    </svg>
  );
}

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  /** "dark" for light backgrounds, "light" for dark backgrounds. */
  tone?: "dark" | "light";
}) {
  const wordmark = tone === "light" ? "text-white" : "text-brand";
  const descriptor = tone === "light" ? "text-white/60" : "text-ink-strong";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark
        className="h-9 w-9 shrink-0"
        navy={tone === "light" ? "#ffffff" : "var(--color-ink-strong)"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[15px] font-extrabold uppercase tracking-[0.02em] ${wordmark}`}
        >
          Hamprigo Industries
        </span>
        <span
          className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] ${descriptor}`}
        >
          Textile Lamination
        </span>
      </span>
    </span>
  );
}

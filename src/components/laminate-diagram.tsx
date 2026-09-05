/**
 * Cross-section of a laminate stack.
 *
 * This is the site's signature visual. The business bonds materials in
 * layers, so the site shows the layers. It also does real work: a sourcing
 * buyer sees the construction at a glance, which a stock photograph of a
 * factory never communicates.
 *
 * Drawn as SVG rather than photographed, because there is no photography
 * and because a diagram is more honest about what is actually being sold.
 */

type LayerKind = "fabric" | "foam" | "film" | "eva";

export type Layer = {
  kind: LayerKind;
  /** Empty draws the layer without naming it. */
  label: string;
  /** Relative thickness. Roughly proportional to the real material. */
  weight: number;
};

const FILLS: Record<LayerKind, string> = {
  fabric: "url(#weave)",
  foam: "url(#cells)",
  film: "var(--color-brand)",
  eva: "url(#dense)",
};

const STROKES: Record<LayerKind, string> = {
  fabric: "#3b4252",
  foam: "#8a93a5",
  film: "var(--color-brand-dark)",
  eva: "#5b6270",
};

export function LaminateDiagram({
  layers,
  caption,
  className = "",
}: {
  layers: Layer[];
  caption: string;
  className?: string;
}) {
  const width = 420;
  const gutter = 14;
  const gap = 3;
  const totalWeight = layers.reduce((sum, l) => sum + l.weight, 0);
  const drawable = 150 - gap * (layers.length - 1);

  // Stack each layer below the previous one. Built by reduction rather than
  // by mutating a running offset, so nothing is reassigned mid-map.
  const rects = layers.reduce<Array<Layer & { y: number; h: number }>>(
    (acc, layer) => {
      const previous = acc[acc.length - 1];
      const y = previous ? previous.y + previous.h + gap : 12;
      const h = (layer.weight / totalWeight) * drawable;
      return [...acc, { ...layer, y, h }];
    },
    [],
  );

  const last = rects[rects.length - 1];
  const height = (last ? last.y + last.h : 12) + 12;

  return (
    <figure className={className}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        role="img"
        aria-label={caption}
      >
        <defs>
          {/* Woven texture: crossed threads. */}
          <pattern
            id="weave"
            width="7"
            height="7"
            patternUnits="userSpaceOnUse"
          >
            <rect width="7" height="7" fill="#e9ecf1" />
            <path
              d="M0 3.5h7M3.5 0v7"
              stroke="#b9c0cc"
              strokeWidth="1.4"
            />
          </pattern>

          {/* Open-cell foam. */}
          <pattern id="cells" width="11" height="11" patternUnits="userSpaceOnUse">
            <rect width="11" height="11" fill="#f4f6f8" />
            <circle cx="3" cy="3" r="2.1" fill="none" stroke="#c3cad6" strokeWidth="1.1" />
            <circle cx="8.5" cy="8" r="1.7" fill="none" stroke="#c3cad6" strokeWidth="1.1" />
          </pattern>

          {/* Closed-cell EVA: tighter, denser. */}
          <pattern id="dense" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill="#eef1f5" />
            <circle cx="2.5" cy="2.5" r="1.2" fill="#c3cad6" />
            <circle cx="6" cy="6" r="1.2" fill="#c3cad6" />
          </pattern>
        </defs>

        {rects.map((r, i) => (
          <g key={`${r.label}-${i}`}>
            <rect
              x={gutter}
              y={r.y}
              width={width - gutter * 2}
              height={r.h}
              fill={FILLS[r.kind]}
              stroke={STROKES[r.kind]}
              strokeWidth="1"
              rx="1.5"
            />
            {r.label ? (
              <text
                x={gutter + 12}
                y={r.y + r.h / 2 + 4}
                className="fill-ink-strong font-mono"
                style={{ fontSize: 11, letterSpacing: "0.04em" }}
              >
                {r.label.toUpperCase()}
              </text>
            ) : null}
          </g>
        ))}

        {/* Bond markers between layers. The bond is the product. */}
        {rects.slice(0, -1).map((r, i) => (
          <line
            key={`bond-${i}`}
            x1={gutter}
            x2={width - gutter}
            y1={r.y + r.h + gap / 2}
            y2={r.y + r.h + gap / 2}
            stroke="var(--color-brand)"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
        ))}
      </svg>
      <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

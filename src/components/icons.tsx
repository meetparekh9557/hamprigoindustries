/**
 * Line icons, drawn rather than pulled from a library.
 *
 * All 24x24, 1.5 stroke, currentColor, so they take the brand red from
 * whatever sets the colour and stay in step with the type around them. A
 * whole icon package would be a dependency and several hundred kilobytes
 * for the eleven marks this site actually uses.
 */
type IconProps = { className?: string };

const base = (className = "") => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className,
});

/** Stacked layers: lamination itself. */
export const IconLayers = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" />
    <path d="M3 12.5 12 17l9-4.5" />
    <path d="M3 17 12 21.5 21 17" />
  </svg>
);

/** A garment: the finished product side of the business. */
export const IconGarment = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M9 3.5 12 6l3-2.5 4.5 2.2a1 1 0 0 1 .5 1.1l-.9 3.6-2.6-.6V20a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1V9.8l-2.6.6L4 6.8a1 1 0 0 1 .5-1.1L9 3.5Z" />
  </svg>
);

export const IconCalendar = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

/** Two swatches, one over the other: your fabric or ours. */
export const IconSwatch = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <rect x="3" y="3" width="12" height="12" rx="1.5" />
    <path d="M9 21h10a2 2 0 0 0 2-2V9" />
    <path d="M9 15v6M15 9h6" />
  </svg>
);

/** Sliders: specified to your requirement. */
export const IconSliders = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h10M18 18h2" />
    <circle cx="16" cy="6" r="2" />
    <circle cx="10" cy="12" r="2" />
    <circle cx="16" cy="18" r="2" />
  </svg>
);

export const IconAward = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
  </svg>
);

export const IconAdjust = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 3v5M12 16v5M4.2 7.5l4.3 2.5M15.5 14l4.3 2.5M19.8 7.5 15.5 10M8.5 14l-4.3 2.5" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconCheckBadge = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="m12 2.5 2.4 1.8 3-.2.9 2.9 2.4 1.8-1.1 2.8 1.1 2.8-2.4 1.8-.9 2.9-3-.2L12 21.5 9.6 19.7l-3 .2-.9-2.9-2.4-1.8L4.4 12.4 3.3 9.6l2.4-1.8.9-2.9 3 .2L12 2.5Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconShield = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M12 2.5 4.5 5.5v6c0 4.6 3.1 8.6 7.5 10 4.4-1.4 7.5-5.4 7.5-10v-6L12 2.5Z" />
  </svg>
);

export const IconLeaf = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M20.5 3.5c0 9-5.5 13-11 13a5.5 5.5 0 0 1 0-11c4 0 6-2 11-2Z" />
    <path d="M4 20c3.5-5 7-7.5 11-9" />
  </svg>
);

export const IconSupport = ({ className }: IconProps) => (
  <svg {...base(className)}>
    <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
    <path d="M4 13h2.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5ZM20 13h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1v-5Z" />
    <path d="M20 19v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
  </svg>
);

/** Name to component, so content can reference an icon as a string. */
export const ICONS = {
  layers: IconLayers,
  garment: IconGarment,
  calendar: IconCalendar,
  swatch: IconSwatch,
  sliders: IconSliders,
  award: IconAward,
  adjust: IconAdjust,
  checkBadge: IconCheckBadge,
  shield: IconShield,
  leaf: IconLeaf,
  support: IconSupport,
} as const;

export type IconName = keyof typeof ICONS;

/**
 * A cross-section, set as type rather than drawn as a diagram.
 *
 * The brief asked for something visually refined rather than an engineering
 * textbook figure, so this is three labels separated by hairlines: the
 * stacking order is the whole message and a rendered illustration would only
 * add decoration around it. The bond rule is not exaggerated.
 */
export function LayerStack({ layers }: { layers: readonly string[] }) {
  return (
    <div className="border-y border-line py-1">
      {layers.map((layer, i) => (
        <p
          key={`${layer}-${i}`}
          className={`spec-label py-3.5 text-ink-strong ${
            i > 0 ? "border-t border-line" : ""
          }`}
        >
          {layer}
        </p>
      ))}
    </div>
  );
}

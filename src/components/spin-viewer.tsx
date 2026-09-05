"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A drag-to-rotate product viewer.
 *
 * It is not a 3D model. It plays a sequence of photographs taken around the
 * product, which is what a 360 product shoot produces and what reads as
 * real: a generated mesh of a bra would misrepresent the cup shape, the
 * bonded edge and the way the material sits, which are the things this page
 * is claiming to be good at.
 *
 * Interaction is Pointer Events, so mouse, pen and touch are one code path.
 * `touch-action: pan-y` keeps vertical scrolling working on a phone while a
 * horizontal drag spins the product. A full-width drag is one full turn.
 *
 * Every frame is fetched and decoded before the viewer becomes interactive.
 * Swapping to a frame the browser has not decoded yet shows a blank for a
 * moment, which reads as broken rather than slow.
 *
 * With fewer than two frames it renders the single image and nothing else,
 * so the page is correct before the sequence exists.
 */
export function SpinViewer({
  frames,
  alt,
  className = "",
}: {
  frames: readonly string[];
  alt: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [touched, setTouched] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  /** Pointer x and the frame we were on when the drag started. */
  const drag = useRef<{ x: number; from: number } | null>(null);

  const spinnable = frames.length > 1;

  useEffect(() => {
    if (!spinnable) return;
    let cancelled = false;
    Promise.all(
      frames.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          }),
      ),
    ).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [frames, spinnable]);

  /** Wraps, so the product turns past its own start in both directions. */
  const step = (by: number) =>
    setIndex((i) => (((i + by) % frames.length) + frames.length) % frames.length);

  if (!spinnable) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={frames[0]} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      ref={box}
      role="img"
      aria-label={`${alt}. Drag, or use the left and right arrow keys, to rotate.`}
      tabIndex={0}
      className={`relative touch-pan-y select-none overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-brand ${
        ready ? "cursor-grab active:cursor-grabbing" : "cursor-progress"
      } ${className}`}
      onPointerDown={(e) => {
        if (!ready) return;
        drag.current = { x: e.clientX, from: index };
        e.currentTarget.setPointerCapture(e.pointerId);
        setTouched(true);
      }}
      onPointerMove={(e) => {
        const d = drag.current;
        const el = box.current;
        if (!d || !el) return;
        const width = el.clientWidth || 1;
        // One full drag across the viewer is one full revolution.
        const turned = ((e.clientX - d.x) / width) * frames.length;
        setIndex(
          (((d.from - Math.round(turned)) % frames.length) + frames.length) %
            frames.length,
        );
      }}
      onPointerUp={() => {
        drag.current = null;
      }}
      onPointerCancel={() => {
        drag.current = null;
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setTouched(true);
          step(-1);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          setTouched(true);
          step(1);
        }
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={frames[index]}
        alt=""
        draggable={false}
        className="h-full w-full object-cover"
      />

      {/* The hint has to be said once: nothing about a product photograph
          suggests it can be turned. It goes on first interaction. */}
      {touched ? null : (
        <p
          className={`pointer-events-none absolute inset-x-0 bottom-4 text-center text-xs font-semibold uppercase tracking-[0.16em] transition-opacity ${
            ready ? "text-muted opacity-100" : "text-muted opacity-60"
          }`}
        >
          {ready ? "Drag to rotate" : "Loading"}
        </p>
      )}
    </div>
  );
}

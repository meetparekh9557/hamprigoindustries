"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * A drag-to-rotate product viewer.
 *
 * It is not a 3D model. It plays a sequence of views taken around the
 * product, which is what a 360 shoot produces and what reads as real: a
 * generated mesh of a bra would misstate the cup shape, the bonded edge and
 * the way the material sits, which are the things this page is claiming to
 * be good at.
 *
 * Three things make it feel smooth rather than steppy, and all three matter
 * more on a phone than on a desktop:
 *
 *   - Position is kept as a fraction in a ref, and the visible frame is only
 *     committed once per animation frame. A pointermove fires far more often
 *     than the screen paints, and re-rendering on every one of them is what
 *     makes a drag stutter.
 *   - A flick carries on turning and decays, so a short thumb swipe can spin
 *     the product right round. On a phone you cannot drag the width of the
 *     viewer in one go, and without this it stops dead every few degrees.
 *   - Frames are decoded, not merely downloaded, before the viewer becomes
 *     interactive. Swapping to an undecoded frame shows a blank for a beat,
 *     which reads as broken rather than slow.
 *
 * `touch-action: pan-y` keeps vertical scrolling working while a horizontal
 * drag turns the product. With fewer than two frames it renders the single
 * image and nothing else, so the page is correct before a sequence exists.
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
  const n = frames.length;
  const spinnable = n > 1;

  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [touched, setTouched] = useState(false);

  const box = useRef<HTMLDivElement>(null);
  /** Fractional frame position. The integer frame is derived from it. */
  const pos = useRef(0);
  /** Frames per millisecond, for the flick. */
  const velocity = useRef(0);
  const raf = useRef<number | null>(null);
  const drag = useRef<{ x: number; t: number } | null>(null);

  const wrap = (v: number) => ((v % n) + n) % n;

  /** Commit the visible frame at most once per painted frame. */
  const commit = useCallback(() => {
    if (raf.current !== null) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = null;
      setIndex(wrap(Math.round(pos.current)));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  const stopGlide = () => {
    velocity.current = 0;
    if (raf.current !== null) {
      cancelAnimationFrame(raf.current);
      raf.current = null;
    }
  };

  const glide = useCallback(() => {
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      pos.current += velocity.current * dt;
      // Halves roughly every 90ms of coasting.
      velocity.current *= Math.pow(0.992, dt);
      setIndex(wrap(Math.round(pos.current)));
      raf.current =
        Math.abs(velocity.current) > 0.0008 ? requestAnimationFrame(step) : null;
    };
    raf.current = requestAnimationFrame(step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  useEffect(() => {
    if (!spinnable) return;
    const el = box.current;
    if (!el) return;
    let cancelled = false;

    /**
     * The sequence is close to a megabyte, so it is not fetched until the
     * viewer is near the screen. Someone who never scrolls this far pays
     * nothing for it.
     */
    const preload = () =>
      Promise.all(
        frames.map(
          (src) =>
            new Promise<void>((resolve) => {
              const img = new Image();
              img.onload = () => img.decode().then(resolve, () => resolve());
              img.onerror = () => resolve();
              img.src = src;
            }),
        ),
      ).then(() => {
        if (!cancelled) setReady(true);
      });

    if (typeof IntersectionObserver === "undefined") {
      preload();
      return () => {
        cancelled = true;
      };
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          preload();
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, [frames, spinnable]);

  useEffect(
    () => () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    },
    [],
  );

  if (!spinnable) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={frames[0]} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  const nudge = (by: number) => {
    stopGlide();
    pos.current = wrap(pos.current + by);
    setTouched(true);
    setIndex(wrap(Math.round(pos.current)));
  };

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
        stopGlide();
        drag.current = { x: e.clientX, t: e.timeStamp };
        e.currentTarget.setPointerCapture(e.pointerId);
        setTouched(true);
      }}
      onPointerMove={(e) => {
        const d = drag.current;
        const el = box.current;
        if (!d || !el) return;
        const width = el.clientWidth || 1;
        // Dragging the full width of the viewer is one full revolution.
        const moved = ((d.x - e.clientX) / width) * n;
        const dt = Math.max(e.timeStamp - d.t, 1);
        pos.current += moved;
        // Smoothed, so one jittery sample cannot throw the flick.
        velocity.current = velocity.current * 0.7 + (moved / dt) * 0.3;
        drag.current = { x: e.clientX, t: e.timeStamp };
        commit();
      }}
      onPointerUp={() => {
        drag.current = null;
        if (Math.abs(velocity.current) > 0.002) glide();
      }}
      onPointerCancel={() => {
        drag.current = null;
        stopGlide();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          nudge(-1);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          nudge(1);
        }
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={frames[index]}
        alt=""
        draggable={false}
        decoding="sync"
        className="h-full w-full object-cover"
      />

      {/* Said once: nothing about a product photograph suggests it turns. */}
      {touched ? null : (
        <p className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          {ready ? "Drag to rotate" : "Loading"}
        </p>
      )}
    </div>
  );
}

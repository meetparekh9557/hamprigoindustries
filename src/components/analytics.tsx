"use client";

import { useEffect } from "react";
import { analytics } from "@/content/site";

/**
 * Google Analytics, kept off the critical path.
 *
 * Google's own snippet puts gtag.js in the head and marks it async. Async
 * only means it does not block parsing: it still opens a second connection
 * to a third-party host and pulls about 100KB while the browser is trying to
 * fetch the hero image, which on a phone is precisely the moment that
 * bandwidth is worth most. It was costing roughly a second of largest paint.
 *
 * The queue is set up immediately, so the pageview is recorded with the
 * right timestamp whatever happens next. Only the script itself waits, until
 * the page has loaded and the browser is idle, or until the visitor touches
 * something, whichever comes first. gtag replays the queue when it arrives,
 * so nothing is lost.
 */
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export function Analytics() {
  useEffect(() => {
    if (document.getElementById("ga-src")) return;

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", analytics.measurementId);

    let done = false;
    const load = () => {
      if (done) return;
      done = true;
      cleanup();
      const s = document.createElement("script");
      s.id = "ga-src";
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}`;
      document.head.appendChild(s);
    };

    const events = ["pointerdown", "keydown", "touchstart", "scroll"] as const;
    const cleanup = () => {
      for (const e of events) window.removeEventListener(e, load);
    };
    for (const e of events) {
      window.addEventListener(e, load, { once: true, passive: true });
    }

    // Whichever comes first: the visitor doing something, or the page
    // settling. The timeout is the backstop for a browser without
    // requestIdleCallback.
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    const idle = w.requestIdleCallback
      ? w.requestIdleCallback(load, { timeout: 3000 })
      : w.setTimeout(load, 2000);

    return () => {
      cleanup();
      if (w.cancelIdleCallback) w.cancelIdleCallback(idle);
      else clearTimeout(idle);
    };
  }, []);

  return null;
}

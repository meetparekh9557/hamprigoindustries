"use client";

import widths from "./image-widths.json";

/**
 * Serves a WebP variant sized to what the layout actually needs.
 *
 * The site is a static export, so Next cannot resize anything at request
 * time and every image was being sent at full size: a 1600px hero to a
 * 390px phone, 363KB for something displayed 390px wide. The variants are
 * generated ahead of the build and this maps each request to the smallest
 * one that still covers the slot.
 *
 * The manifest exists because not every photograph has every width. Asking
 * for a variant that was never generated would 404 and leave a hole in the
 * page, so this only ever returns a file known to be there, and hands back
 * the original untouched for anything outside /img (the logo, which is a
 * PNG of flat colour and larger as WebP than as PNG).
 */
const AVAILABLE: Record<string, number[]> = widths;

export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}): string {
  const have = AVAILABLE[src];
  if (!have) return src;
  const chosen = have.find((w) => w >= width) ?? have[have.length - 1];
  return src.replace(/\.jpe?g$/i, `-${chosen}.webp`);
}

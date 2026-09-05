"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { workItems } from "@/content/site";

/**
 * The five things Hamprigo makes, as one edge-to-edge rail.
 *
 * Two interactions, one design. On a pointer device each item is a tall
 * sliver that widens into a full card on hover, pushing its neighbours
 * aside. On touch there is no hover, so the same cards become a snapping
 * horizontal scroller and the centred one is the active one.
 *
 * The card text is a fixed-width block sitting past the sliver's own width,
 * clipped by the panel. So it is composed once, at the width it will finally
 * be read at, and widening the panel reveals that composition rather than
 * reflowing it. Animating the width with the text inside rewraps every line
 * on every frame, which is the usual failure of this pattern.
 *
 * Desktop needs no JavaScript: it is :hover and :focus-within in CSS, so it
 * works before hydration. Only the touch rail needs the observer below, and
 * if that never runs the cards are still readable and still scroll.
 */
export function WorkRail() {
  return (
    <>
      <div className="work-rail" data-mode="hover">
        {workItems.map((item, i) => (
          <Link key={item.slug} href={item.href} className="work-panel">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 76rem) 70vw, 90vw"
              className="work-panel__image"
              priority={i === 0}
            />
            <span aria-hidden="true" className="work-panel__scrim" />

            <span className="work-panel__index spec-label">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="work-panel__spine" aria-hidden="true">
              {item.spine}
            </span>

            <div className="work-panel__card">
              <h3 className="text-2xl font-bold leading-tight">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                {item.summary}
              </p>
              <span className="work-panel__more">
                Read more
                <span aria-hidden="true" className="work-panel__arrow">
                  &rarr;
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <TouchRail />
    </>
  );
}

/**
 * The touch version. Scroll snapping does the positioning; the observer only
 * decides which card is active, so a failure here dims nothing and breaks
 * nothing. Cards are 82vw, which leaves a slice of the next one visible so
 * it is obvious the rail scrolls.
 */
function TouchRail() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Chromium will not lazy-load the final card in a horizontal scroller
    // even once it is fully in view, so card 05 rendered with no image and
    // never requested one. Nudging the images to eager fixes it. Guarded on
    // the rail actually being displayed, so the desktop build does not
    // download five pictures it hides.
    if (getComputedStyle(root).display !== "none") {
      root.querySelectorAll("img").forEach((img) => {
        img.loading = "eager";
      });
    }

    const cards = Array.from(root.querySelectorAll("[data-card]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.card));
          }
        }
      },
      // A narrow band down the middle: whichever card crosses it is active.
      { root, rootMargin: "0px -45% 0px -45%", threshold: 0 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="touch-rail" data-mode="swipe">
      {workItems.map((item, i) => (
        <Link
          key={item.slug}
          href={item.href}
          data-card={i}
          data-active={i === active ? "true" : undefined}
          className="touch-card"
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="82vw"
            className="work-panel__image"
          />
          <span aria-hidden="true" className="touch-card__scrim" />
          <div className="touch-card__body">
            <span className="spec-label text-white/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-xl font-bold leading-tight">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {item.summary}
            </p>
            <span className="work-panel__more">
              Read more
              <span aria-hidden="true" className="work-panel__arrow">
                &rarr;
              </span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

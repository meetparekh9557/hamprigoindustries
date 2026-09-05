"use client";

import { useEffect, useState } from "react";
import { isOpenNow } from "@/lib/business-hours";

/**
 * Whether Hamprigo is open, as a hook.
 *
 * Returns null until the browser has run, because the pages are prerendered
 * at build time and the HTML cannot know what time it is. Callers should
 * treat null as open: if scripting fails the buttons keep working, which
 * loses nothing worse than a call that goes unanswered. Failing the other
 * way would silently kill every enquiry route on the site.
 *
 * Re-checks every minute so a page left open across six o'clock updates
 * itself rather than going stale.
 */
export function useOpenNow(): boolean | null {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setOpen(isOpenNow());
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  return open;
}

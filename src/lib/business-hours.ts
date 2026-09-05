/**
 * When the live-contact buttons work.
 *
 * Monday to Saturday, 08:00 to 18:00 IST. Sunday is closed all day.
 *
 * India has no daylight saving, so IST is a fixed +05:30, but this asks Intl
 * for the zone rather than hard-coding the offset: it states the intent, and
 * it is the visitor's clock that is unreliable here, not India's.
 */
export const TIME_ZONE = "Asia/Kolkata";
export const OPENS_AT_HOUR = 8;
export const CLOSES_AT_HOUR = 18;
/** 0 is Sunday. */
export const CLOSED_DAYS = [0];

export const HOURS_LABEL = "Monday to Saturday, 8 AM to 6 PM IST";

const DAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

/** The weekday and hour in India, whatever clock the visitor is on. */
export function istParts(now: Date) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: TIME_ZONE,
      weekday: "short",
      hour: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .map((part) => [part.type, part.value]),
  );
  return {
    day: DAY_INDEX[parts.weekday ?? "Mon"] ?? 1,
    // h23 should never give 24, but a stray one would wrap to a valid hour
    // rather than silently reading as "after closing".
    hour: Number(parts.hour ?? "0") % 24,
  };
}

export function isOpenNow(now: Date = new Date()): boolean {
  const { day, hour } = istParts(now);
  if (CLOSED_DAYS.includes(day)) return false;
  return hour >= OPENS_AT_HOUR && hour < CLOSES_AT_HOUR;
}

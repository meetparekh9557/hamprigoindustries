"use client";

import { contact, whatsapp } from "@/content/site";
import { HOURS_LABEL } from "@/lib/business-hours";
import { useOpenNow } from "./use-open-now";

/**
 * Call Us and WhatsApp Us, on the contact page.
 *
 * Both go dead outside business hours. A dead button with no explanation is
 * baffling, so the line underneath says when they come back. The phone
 * number and email below this stay live and readable either way: someone
 * reading at nine in the evening still needs to write the number down.
 */
const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export function ContactActions() {
  const open = useOpenNow();
  const closed = open === false;

  const whatsappHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
    whatsapp.messages.default,
  )}`;

  const dead = "cursor-not-allowed opacity-40";

  return (
    <>
      <div className="mt-5 flex flex-wrap gap-3">
        {closed ? (
          <span
            aria-disabled="true"
            className={`${base} bg-white text-ink-strong ${dead}`}
          >
            <PhoneIcon />
            Call Us
          </span>
        ) : (
          <a
            href={`tel:${contact.phoneHref}`}
            className={`${base} bg-white text-ink-strong hover:bg-white/90 focus-visible:outline-white`}
          >
            <PhoneIcon />
            Call Us
          </a>
        )}

        {closed ? (
          <span
            aria-disabled="true"
            className={`${base} text-white ${dead}`}
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon />
            WhatsApp Us
          </span>
        ) : (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${base} text-white hover:opacity-90 focus-visible:outline-[#25D366]`}
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon />
            WhatsApp Us
          </a>
        )}
      </div>

      {closed ? (
        <p className="mt-3 text-sm text-white/70">
          We are closed just now. Calls and WhatsApp are answered{" "}
          {HOURS_LABEL}. Send the form below and we will reply when we reopen.
        </p>
      ) : null}
    </>
  );
}

"use client";

import { useState } from "react";
import { contact, enquiryPlaceholders as ph } from "@/content/site";

/**
 * Static export, so there is no server action. The form posts JSON directly
 * to whatever endpoint NEXT_PUBLIC_ENQUIRY_ENDPOINT names. Any handler that
 * accepts a JSON POST will work.
 *
 * With the variable unset the form refuses to submit and shows the phone
 * number and email instead. That is deliberate: a form that appears to work
 * but drops enquiries is worse than one that tells you to call.
 *
 * The Service field is scoped by whoever renders the form. Pass `services`
 * for a dropdown, or `lockedService` for a page where the answer is already
 * known. A locked field is read only rather than disabled, because a disabled
 * control is left out of the submission entirely and the enquiry would
 * arrive with no service on it.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;

/** City and country are asked for but not insisted on. Seven mandatory
 *  fields is a lot to put in front of someone who just wants a price. */
const REQUIRED: Array<[string, string]> = [
  ["name", "Name"],
  ["mobile", "Mobile"],
  ["email", "Email"],
  ["service", "Service"],
  ["message", "Message"],
];

const fieldClass =
  "mt-2 w-full rounded-sm border border-line bg-white px-3.5 py-2.5 text-base text-ink outline-none transition-colors focus:border-ink-strong";
const lockedClass =
  "mt-2 w-full cursor-default rounded-sm border border-line bg-surface px-3.5 py-2.5 text-base font-medium text-ink-strong outline-none";

/**
 * The inputs are white boxes either way, so only the surrounding type
 * changes with the ground. On blue the error red drops to 2.3:1 and is
 * unreadable, hence the light tint: that holds 8.6:1.
 */
const TONE = {
  light: {
    label: "block text-sm font-medium text-ink-strong",
    error: "mt-1.5 text-sm text-brand",
    banner:
      "rounded-sm border border-brand/30 bg-brand/5 px-4 py-3 text-sm leading-relaxed text-ink-strong",
    panel: "rounded-sm border border-line bg-surface p-8",
    panelHeading: "text-lg font-semibold text-ink-strong",
    panelBody: "mt-3 text-base leading-relaxed text-muted",
  },
  dark: {
    label: "block text-sm font-medium text-white",
    error: "mt-1.5 text-sm text-[#ffb4b4]",
    banner:
      "rounded-sm border border-white/30 bg-white/10 px-4 py-3 text-sm leading-relaxed text-white",
    panel: "rounded-sm border border-white/20 bg-white/10 p-8",
    panelHeading: "text-lg font-semibold text-white",
    panelBody: "mt-3 text-base leading-relaxed text-white/75",
  },
} as const;

type Status = "idle" | "sending" | "sent" | "error";

export function EnquiryForm({
  services,
  lockedService,
  tone = "light",
}: {
  /** Options for the Service dropdown. Ignored when lockedService is set. */
  services?: readonly string[];
  /** Fixes Service to this value and makes it unchangeable. */
  lockedService?: string;
  /** "dark" when the form sits directly on a dark ground. */
  tone?: keyof typeof TONE;
}) {
  const t = TONE[tone];
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const read = (key: string) => String(data.get(key) ?? "").trim();

    // Honeypot. Bots fill hidden fields; people do not.
    if (read("website")) {
      setStatus("sent");
      setMessage("Thank you. We will be in touch.");
      return;
    }

    const nextErrors: Record<string, string> = {};
    for (const [name, label] of REQUIRED) {
      if (!read(name)) nextErrors[name] = `${label} is required.`;
    }

    const email = read("email");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    // Loose on purpose: numbers arrive with spaces, dashes and country codes.
    const mobile = read("mobile");
    if (mobile && (mobile.match(/\d/g) ?? []).length < 7) {
      nextErrors.mobile = "Enter a valid mobile number.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      return;
    }

    if (!ENDPOINT) {
      setStatus("error");
      setMessage(
        `Our enquiry form is not accepting messages yet. Please email ${contact.email} or call ${contact.phone} and we will respond.`,
      );
      return;
    }

    setStatus("sending");
    setMessage("");

    const payload = {
      name: read("name"),
      mobile,
      email,
      city: read("city"),
      country: read("country"),
      service: read("service"),
      message: read("message"),
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
      setMessage(
        "Thank you. Your enquiry has been sent and we will come back to you shortly.",
      );
    } catch {
      setStatus("error");
      setMessage(
        `We could not send your enquiry just now. Please email ${contact.email} or call ${contact.phone}.`,
      );
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className={t.panel}>
        <h3 className={t.panelHeading}>Enquiry received</h3>
        <p className={t.panelBody}>{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === "error" && message ? (
        <p role="alert" className={t.banner}>
          {message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={t.label} htmlFor="name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder={ph.name}
            className={fieldClass}
          />
          {errors.name ? <p className={t.error}>{errors.name}</p> : null}
        </div>

        <div>
          <label className={t.label} htmlFor="mobile">
            Mobile <span aria-hidden="true">*</span>
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            autoComplete="tel"
            placeholder={ph.mobile}
            className={fieldClass}
          />
          {errors.mobile ? <p className={t.error}>{errors.mobile}</p> : null}
        </div>
      </div>

      <div>
        <label className={t.label} htmlFor="email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={ph.email}
          className={fieldClass}
        />
        {errors.email ? <p className={t.error}>{errors.email}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={t.label} htmlFor="city">
            City
          </label>
          <input
            id="city"
            name="city"
            autoComplete="address-level2"
            placeholder={ph.city}
            className={fieldClass}
          />
        </div>

        <div>
          <label className={t.label} htmlFor="country">
            Country
          </label>
          <input
            id="country"
            name="country"
            autoComplete="country-name"
            placeholder={ph.country}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className={t.label} htmlFor="service">
          Service <span aria-hidden="true">*</span>
        </label>
        {lockedService ? (
          <input
            id="service"
            name="service"
            readOnly
            aria-readonly="true"
            tabIndex={-1}
            value={lockedService}
            className={lockedClass}
          />
        ) : (
          <select
            id="service"
            name="service"
            defaultValue=""
            className={fieldClass}
          >
            <option value="">{ph.service}</option>
            {(services ?? []).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        {errors.service ? <p className={t.error}>{errors.service}</p> : null}
      </div>

      <div>
        <label className={t.label} htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={ph.message}
          className={fieldClass}
        />
        {errors.message ? <p className={t.error}>{errors.message}</p> : null}
      </div>

      {/* Honeypot, off screen and hidden from assistive tech. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold tracking-wide text-brand-ink transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}

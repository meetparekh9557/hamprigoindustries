"use client";

import { useState } from "react";
import { contact, enquiryForm } from "@/content/site";

/**
 * Static export, so there is no server action. The form posts JSON directly
 * to whatever endpoint NEXT_PUBLIC_ENQUIRY_ENDPOINT names. Any handler that
 * accepts a JSON POST will work.
 *
 * With the variable unset the form refuses to submit and shows the phone
 * number and email instead. That is deliberate: a form that appears to work
 * but drops enquiries is worse than one that tells you to call.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT;

const REQUIRED: Array<[string, string]> = [
  ["name", "Name"],
  ["company", "Company"],
  ["email", "Email"],
  ["need", "What do you need"],
  ["making", "What are you making"],
];

const fieldClass =
  "mt-2 w-full rounded-sm border border-line bg-white px-3.5 py-2.5 text-base text-ink outline-none transition-colors focus:border-ink";
const labelClass = "block text-sm font-medium text-ink-strong";

type Status = "idle" | "sending" | "sent" | "error";

export function EnquiryForm() {
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
      company: read("company"),
      email,
      phone: read("phone"),
      need: read("need"),
      making: read("making"),
      baseFabric: read("baseFabric"),
      width: read("width"),
      volume: read("volume"),
      notes: read("notes"),
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
      <div role="status" className="rounded-sm border border-line bg-surface p-8">
        <h3 className="text-lg font-semibold text-ink-strong">
          Enquiry received
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === "error" && message ? (
        <p
          role="alert"
          className="rounded-sm border border-brand/30 bg-brand/5 px-4 py-3 text-sm leading-relaxed text-ink-strong"
        >
          {message}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" className={fieldClass} />
          {errors.name ? (
            <p className="mt-1.5 text-sm text-brand">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="company">
            Company <span aria-hidden="true">*</span>
          </label>
          <input id="company" name="company" className={fieldClass} />
          {errors.company ? (
            <p className="mt-1.5 text-sm text-brand">{errors.company}</p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" type="email" className={fieldClass} />
          {errors.email ? (
            <p className="mt-1.5 text-sm text-brand">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone or WhatsApp
          </label>
          <input id="phone" name="phone" className={fieldClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="need">
          What do you need? <span aria-hidden="true">*</span>
        </label>
        <select id="need" name="need" defaultValue="" className={fieldClass}>
          <option value="">Please choose</option>
          {enquiryForm.needOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.need ? (
          <p className="mt-1.5 text-sm text-brand">{errors.need}</p>
        ) : null}
      </div>

      <div>
        <label className={labelClass} htmlFor="making">
          What are you making? <span aria-hidden="true">*</span>
        </label>
        <input
          id="making"
          name="making"
          placeholder="For example, mattress protectors or trolley bag panels"
          className={fieldClass}
        />
        {errors.making ? (
          <p className="mt-1.5 text-sm text-brand">{errors.making}</p>
        ) : null}
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label className={labelClass} htmlFor="baseFabric">
            Base fabric, if known
          </label>
          <input id="baseFabric" name="baseFabric" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="width">
            Width required
          </label>
          <input id="width" name="width" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="volume">
            Approximate annual volume
          </label>
          <input id="volume" name="volume" className={fieldClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="notes">
          Anything else
        </label>
        <textarea id="notes" name="notes" rows={4} className={fieldClass} />
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

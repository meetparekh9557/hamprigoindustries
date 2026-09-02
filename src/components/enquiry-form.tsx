"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import { enquiryForm } from "@/content/site";

const initialState: EnquiryState = { status: "idle", message: "" };

const fieldClass =
  "mt-2 w-full rounded-sm border border-line bg-white px-3.5 py-2.5 text-base text-ink outline-none transition-colors focus:border-ink";
const labelClass = "block text-sm font-medium text-ink-strong";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm text-brand">{message}</p>;
}

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitEnquiry,
    initialState,
  );
  const errors = state.fieldErrors ?? {};

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-sm border border-line bg-surface p-8"
      >
        <h3 className="text-lg font-semibold text-ink-strong">
          Enquiry received
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="rounded-sm border border-brand/30 bg-brand/5 px-4 py-3 text-sm leading-relaxed text-ink-strong"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" required className={fieldClass} />
          <FieldError message={errors.name} />
        </div>

        <div>
          <label className={labelClass} htmlFor="company">
            Company <span aria-hidden="true">*</span>
          </label>
          <input id="company" name="company" required className={fieldClass} />
          <FieldError message={errors.company} />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
          />
          <FieldError message={errors.email} />
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
        <select id="need" name="need" required className={fieldClass}>
          <option value="">Please choose</option>
          {enquiryForm.needOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FieldError message={errors.need} />
      </div>

      <div>
        <label className={labelClass} htmlFor="making">
          What are you making? <span aria-hidden="true">*</span>
        </label>
        <input
          id="making"
          name="making"
          required
          placeholder="For example, mattress protectors or trolley bag panels"
          className={fieldClass}
        />
        <FieldError message={errors.making} />
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

      {/* Honeypot, visually hidden and skipped by assistive tech. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold tracking-wide text-brand-ink transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}

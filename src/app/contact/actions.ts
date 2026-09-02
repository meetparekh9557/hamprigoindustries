"use server";

import { contact, enquiryForm } from "@/content/site";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

const REQUIRED_FIELDS: Array<{ name: string; label: string }> = [
  { name: "name", label: "Name" },
  { name: "company", label: "Company" },
  { name: "email", label: "Email" },
  { name: "need", label: "What do you need" },
  { name: "making", label: "What are you making" },
];

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  // Honeypot. Bots fill hidden fields; people do not.
  if (readField(formData, "website")) {
    return { status: "success", message: "Thank you. We will be in touch." };
  }

  const fieldErrors: Record<string, string> = {};

  for (const field of REQUIRED_FIELDS) {
    if (!readField(formData, field.name)) {
      fieldErrors[field.name] = `${field.label} is required.`;
    }
  }

  const email = readField(formData, "email");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  const need = readField(formData, "need");
  if (need && !enquiryForm.needOptions.includes(need as never)) {
    fieldErrors.need = "Choose one of the listed options.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  const endpoint = process.env.ENQUIRY_WEBHOOK_URL;

  // No delivery mechanism configured yet. Fail loudly and hand the visitor a
  // way to reach the business, rather than accepting an enquiry that goes
  // nowhere. Set ENQUIRY_WEBHOOK_URL to a form handler to enable delivery.
  if (!endpoint) {
    return {
      status: "error",
      message: `Our enquiry form is not accepting messages yet. Please email ${contact.email} or call ${contact.phone} and we will respond.`,
    };
  }

  const payload = {
    name: readField(formData, "name"),
    company: readField(formData, "company"),
    email,
    phone: readField(formData, "phone"),
    need,
    making: readField(formData, "making"),
    baseFabric: readField(formData, "baseFabric"),
    width: readField(formData, "width"),
    volume: readField(formData, "volume"),
    notes: readField(formData, "notes"),
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Enquiry endpoint returned ${response.status}`);
    }
  } catch {
    return {
      status: "error",
      message: `We could not send your enquiry just now. Please email ${contact.email} or call ${contact.phone}.`,
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your enquiry has been sent and we will come back to you shortly.",
  };
}

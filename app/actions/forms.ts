"use server";

import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

function required(value: FormDataEntryValue | null, label: string) {
  const text = String(value ?? "").trim();
  if (!text) return { error: `${label} is required.`, value: "" };
  return { error: "", value: text };
}

function optional(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

async function persistSubmission(
  type: "intake" | "contact",
  payload: Record<string, string>,
) {
  const dir = path.join(process.cwd(), "data", "submissions");
  await mkdir(dir, { recursive: true });
  const line = JSON.stringify({
    type,
    receivedAt: new Date().toISOString(),
    ...payload,
  });
  await appendFile(path.join(dir, `${type}.jsonl`), `${line}\n`, "utf8");
}

export async function submitIntake(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const fullName = required(formData.get("fullName"), "Full name");
  const phone = required(formData.get("phone"), "Phone number");
  const email = optional(formData.get("email"));
  const branch = optional(formData.get("branch"));
  const housing = required(formData.get("housing"), "Housing situation");
  const recovery = optional(formData.get("recovery"));
  const emergencyName = optional(formData.get("emergencyName"));
  const emergencyPhone = optional(formData.get("emergencyPhone"));
  const notes = optional(formData.get("notes"));
  const consent = formData.get("consent");

  const fieldErrors: Record<string, string> = {};
  if (fullName.error) fieldErrors.fullName = fullName.error;
  if (phone.error) fieldErrors.phone = phone.error;
  if (housing.error) fieldErrors.housing = housing.error;
  if (!consent) fieldErrors.consent = "Please confirm you consent to be contacted.";

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  try {
    await persistSubmission("intake", {
      fullName: fullName.value,
      phone: phone.value,
      email,
      branch,
      housing: housing.value,
      recovery,
      emergencyName,
      emergencyPhone,
      notes,
    });
  } catch {
    return {
      status: "error",
      message:
        "We couldn’t save your request right now. Please call us at 714-876-7622.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your intake request was received. Our team will follow up soon—or call 714-876-7622 if you need help right away.",
  };
}

export async function submitContact(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = required(formData.get("name"), "Name");
  const phone = optional(formData.get("phone"));
  const email = optional(formData.get("email"));
  const topic = required(formData.get("topic"), "Topic");
  const message = required(formData.get("message"), "Message");

  const fieldErrors: Record<string, string> = {};
  if (name.error) fieldErrors.name = name.error;
  if (topic.error) fieldErrors.topic = topic.error;
  if (message.error) fieldErrors.message = message.error;
  if (!phone && !email) {
    fieldErrors.phone = "Provide a phone number or email so we can reply.";
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  try {
    await persistSubmission("contact", {
      name: name.value,
      phone,
      email,
      topic: topic.value,
      message: message.value,
    });
  } catch {
    return {
      status: "error",
      message:
        "We couldn’t send your message right now. Please call us at 714-876-7622.",
    };
  }

  return {
    status: "success",
    message:
      "Message received. We’ll get back to you soon—or call 714-876-7622 anytime.",
  };
}

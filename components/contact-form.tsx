"use client";

import { useActionState } from "react";
import {
  submitContact,
  type FormState,
} from "@/app/actions/forms";

const initialState: FormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="form-success" role="status">
        <p>{state.message}</p>
        <a className="button button--primary" href="tel:+17148767622">
          Call 714-876-7622
        </a>
      </div>
    );
  }

  return (
    <form className="site-form" action={formAction} noValidate>
      <div className="form-grid">
        <label className="field">
          <span>Name *</span>
          <input name="name" type="text" autoComplete="name" required />
          {state.fieldErrors?.name ? <em>{state.fieldErrors.name}</em> : null}
        </label>

        <label className="field">
          <span>Topic *</span>
          <select name="topic" defaultValue="" required>
            <option value="" disabled>
              Select a topic
            </option>
            <option value="General question">General question</option>
            <option value="Refer a veteran">Refer a veteran</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Donate / partner">Donate / partner</option>
            <option value="Other">Other</option>
          </select>
          {state.fieldErrors?.topic ? <em>{state.fieldErrors.topic}</em> : null}
        </label>

        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
          {state.fieldErrors?.phone ? <em>{state.fieldErrors.phone}</em> : null}
        </label>

        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" />
          {state.fieldErrors?.email ? <em>{state.fieldErrors.email}</em> : null}
        </label>

        <label className="field field--full">
          <span>Message *</span>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="How can we help?"
          />
          {state.fieldErrors?.message ? (
            <em>{state.fieldErrors.message}</em>
          ) : null}
        </label>
      </div>

      {state.status === "error" && state.message ? (
        <p className="form-banner form-banner--error" role="alert">
          {state.message}
        </p>
      ) : null}

      <button className="button button--primary" type="submit" disabled={pending}>
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

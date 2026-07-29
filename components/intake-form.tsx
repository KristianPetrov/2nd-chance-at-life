"use client";

import { useActionState } from "react";
import {
  submitIntake,
  type FormState,
} from "@/app/actions/forms";

const initialState: FormState = { status: "idle", message: "" };

export function IntakeForm() {
  const [state, formAction, pending] = useActionState(submitIntake, initialState);

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
          <span>Full name *</span>
          <input name="fullName" type="text" autoComplete="name" required />
          {state.fieldErrors?.fullName ? (
            <em>{state.fieldErrors.fullName}</em>
          ) : null}
        </label>

        <label className="field">
          <span>Phone *</span>
          <input name="phone" type="tel" autoComplete="tel" required />
          {state.fieldErrors?.phone ? <em>{state.fieldErrors.phone}</em> : null}
        </label>

        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" />
          {state.fieldErrors?.email ? <em>{state.fieldErrors.email}</em> : null}
        </label>

        <label className="field">
          <span>Branch of service</span>
          <select name="branch" defaultValue="">
            <option value="" disabled>
              Select branch
            </option>
            <option value="Army">Army</option>
            <option value="Navy">Navy</option>
            <option value="Air Force">Air Force</option>
            <option value="Marines">Marines</option>
            <option value="Coast Guard">Coast Guard</option>
            <option value="Space Force">Space Force</option>
            <option value="National Guard / Reserve">
              National Guard / Reserve
            </option>
            <option value="Other / Prefer not to say">
              Other / Prefer not to say
            </option>
          </select>
        </label>

        <label className="field field--full">
          <span>Housing situation *</span>
          <select name="housing" defaultValue="" required>
            <option value="" disabled>
              Select current situation
            </option>
            <option value="Currently homeless">Currently homeless</option>
            <option value="At risk of homelessness">
              At risk of homelessness
            </option>
            <option value="Temporary / transitional housing">
              Temporary / transitional housing
            </option>
            <option value="Staying with friends or family">
              Staying with friends or family
            </option>
            <option value="Other">Other</option>
          </select>
          {state.fieldErrors?.housing ? (
            <em>{state.fieldErrors.housing}</em>
          ) : null}
        </label>

        <label className="field field--full">
          <span>Recovery support needed</span>
          <select name="recovery" defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option value="Looking for sober living">
              Looking for sober living
            </option>
            <option value="Actively in recovery">Actively in recovery</option>
            <option value="Exploring support options">
              Exploring support options
            </option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </label>

        <label className="field">
          <span>Emergency contact name</span>
          <input name="emergencyName" type="text" autoComplete="off" />
        </label>

        <label className="field">
          <span>Emergency contact phone</span>
          <input name="emergencyPhone" type="tel" autoComplete="off" />
        </label>

        <label className="field field--full">
          <span>How can we help?</span>
          <textarea
            name="notes"
            rows={4}
            placeholder="Share anything that will help us support you."
          />
        </label>
      </div>

      <label className="field field--check">
        <input name="consent" type="checkbox" value="yes" required />
        <span>
          I consent to be contacted by 2nd Chance at Life about support and
          intake follow-up. *
        </span>
      </label>
      {state.fieldErrors?.consent ? (
        <em className="field-error">{state.fieldErrors.consent}</em>
      ) : null}

      {state.status === "error" && state.message ? (
        <p className="form-banner form-banner--error" role="alert">
          {state.message}
        </p>
      ) : null}

      <button className="button button--primary" type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit intake request"}
      </button>
    </form>
  );
}

"use client";

import { type FormEvent, useId, useState } from "react";
import { TwoTone } from "@/components/sections";

const FORM_NAME = "contact";

const topicOptions = [
  { value: "", label: "Select..." },
  { value: "recruiting", label: "Recruiting for a role" },
  { value: "project", label: "Need help with a project" },
  { value: "consulting", label: "Consulting or advisory" },
  { value: "collaboration", label: "Collaboration or speaking" },
  { value: "other", label: "Something else" },
] as const;

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactCTA() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      // Static export writes real HTML, so Netlify can receive POSTs on any page path.
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          [...formData.entries()].map(([key, value]) => [
            key,
            typeof value === "string" ? value : value.name,
          ]),
        ).toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed (${response.status})`);
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact-cta" aria-labelledby={`${formId}-title`}>
      <TwoTone
        id={`${formId}-title`}
        bright="Let's work"
        dim="together"
      />
      <p className="lede contact-lede">
        Hiring for a full-time role, or need a contract engineer? Send a note
        and I&apos;ll get back to you.
      </p>

      <form
        className="contact-form"
        name={FORM_NAME}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />

        <div className="contact-honeypot" aria-hidden="true">
          <label htmlFor={`${formId}-bot`}>
            Don&apos;t fill this out if you&apos;re human
          </label>
          <input
            id={`${formId}-bot`}
            type="text"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="contact-form-row">
          <label className="contact-field">
            <span className="contact-label">Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              disabled={status === "submitting"}
            />
          </label>
          <label className="contact-field">
            <span className="contact-label">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@email.com"
              required
              disabled={status === "submitting"}
            />
          </label>
        </div>

        <div className="contact-form-row">
          <label className="contact-field">
            <span className="contact-label">
              Phone <span className="contact-optional">optional</span>
            </span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="Phone number"
              disabled={status === "submitting"}
            />
          </label>
          <label className="contact-field">
            <span className="contact-label">Topic</span>
            <select
              name="topic"
              defaultValue=""
              required
              disabled={status === "submitting"}
            >
              {topicOptions.map((option) => (
                <option
                  key={option.value || "empty"}
                  value={option.value}
                  disabled={option.value === ""}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="contact-field">
          <span className="contact-label">Message</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me a bit about what you need"
            required
            disabled={status === "submitting"}
          />
        </label>

        <button
          type="submit"
          className="stamp contact-submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>

        {status === "sent" ? (
          <p className="contact-form-note" role="status">
            Thanks — I&apos;ll reply soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="contact-form-note contact-form-error" role="alert">
            Something went wrong. Please try again in a moment.
          </p>
        ) : null}
      </form>
    </section>
  );
}

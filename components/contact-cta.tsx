"use client";

import { type FormEvent, useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CheckIcon } from "@/components/icons";
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
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    if (status === "sent") {
      successRef.current?.focus();
    }
  }, [status]);

  useEffect(() => {
    if (pathname !== "/" || window.location.hash !== "#contact") {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  function syncValidity() {
    // Phone is optional; HTML required + type=email cover the rest.
    setCanSubmit(formRef.current?.checkValidity() ?? false);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      return;
    }

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
      setCanSubmit(false);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="contact-cta"
      aria-labelledby={`${formId}-title`}
    >
      <TwoTone
        id={`${formId}-title`}
        bright="Let's work"
        dim="together"
      />
      <p className="lede contact-lede">
        Hiring for a full-time role, or need a contract engineer? Send a note
        and I&apos;ll get back to you.
      </p>

      {status === "sent" ? (
        <div
          className="contact-success"
          role="status"
          aria-live="polite"
          tabIndex={-1}
          ref={successRef}
        >
          <span className="contact-success-mark" aria-hidden="true">
            <CheckIcon className="contact-success-icon" />
          </span>
          <h3 className="contact-success-title">Message sent</h3>
          <p className="contact-success-copy">
            Thanks for reaching out — I&apos;ll read this and reply soon.
          </p>
          <button
            type="button"
            className="contact-success-reset"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          ref={formRef}
          className="contact-form"
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onInput={syncValidity}
          onChange={syncValidity}
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
            className={`stamp contact-submit${status === "submitting" ? " contact-submit-busy" : ""}`}
            disabled={status === "submitting" || !canSubmit}
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>

          {status === "error" ? (
            <p className="contact-form-note contact-form-error" role="alert">
              Something went wrong. Please try again in a moment.
            </p>
          ) : null}
        </form>
      )}
    </section>
  );
}

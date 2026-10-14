"use client";

import { useState } from "react";
import { inquiryServices, studio } from "@/content/site";
import { validateInquiry, type InquiryInput } from "@/lib/inquiry";

const empty: InquiryInput = {
  name: "",
  email: "",
  company: "",
  service: "",
  brief: "",
};

const fields: { name: keyof InquiryInput; label: string; autoComplete: string }[] = [
  { name: "name", label: "Name", autoComplete: "name" },
  { name: "email", label: "Work email", autoComplete: "email" },
  { name: "company", label: "Company", autoComplete: "organization" },
];

export function InquiryForm() {
  const [values, setValues] = useState<InquiryInput>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryInput, string>>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "unconfigured" | "failed"
  >("idle");

  function update(name: keyof InquiryInput, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateInquiry(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        error?: string;
        fields?: Partial<Record<keyof InquiryInput, string>>;
      };

      if (response.ok) {
        setStatus("sent");
        return;
      }

      if (data.fields) {
        setErrors(data.fields);
        setStatus("idle");
        return;
      }

      if (response.status === 503 || data.error === "not_configured") {
        setStatus("unconfigured");
        return;
      }

      setStatus("failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-green bg-cream px-6 py-8" role="status">
        <h2 className="font-serif text-3xl tracking-tight">Brief received.</h2>
        <p className="mt-3 leading-relaxed text-muted">
          We will reply at {values.email.trim()}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      {fields.map((field) => (
        <label key={field.name} className="block">
          <span className="text-sm">{field.label}</span>
          <input
            name={field.name}
            type={field.name === "email" ? "email" : "text"}
            autoComplete={field.autoComplete}
            value={values[field.name]}
            aria-invalid={errors[field.name] ? true : undefined}
            aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
            onChange={(event) => update(field.name, event.target.value)}
            className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink outline-none focus:border-green"
          />
          {errors[field.name] ? (
            <span id={`${field.name}-error`} className="mt-2 block text-sm text-danger" role="alert">
              {errors[field.name]}
            </span>
          ) : null}
        </label>
      ))}

      <label className="block">
        <span className="text-sm">Service</span>
        <select
          name="service"
          value={values.service}
          aria-invalid={errors.service ? true : undefined}
          aria-describedby={errors.service ? "service-error" : undefined}
          onChange={(event) => update("service", event.target.value)}
          className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink outline-none focus:border-green"
        >
          <option value="">Choose one</option>
          {inquiryServices.map((service) => (
            <option key={service.id} value={service.id}>
              {service.label}
            </option>
          ))}
        </select>
        {errors.service ? (
          <span id="service-error" className="mt-2 block text-sm text-danger" role="alert">
            {errors.service}
          </span>
        ) : null}
      </label>

      <label className="block">
        <span className="text-sm">Brief</span>
        <textarea
          name="brief"
          rows={6}
          value={values.brief}
          aria-invalid={errors.brief ? true : undefined}
          aria-describedby={errors.brief ? "brief-error" : undefined}
          onChange={(event) => update("brief", event.target.value)}
          className="mt-2 w-full resize-y border border-line bg-paper px-3 py-3 text-ink outline-none focus:border-green"
        />
        {errors.brief ? (
          <span id="brief-error" className="mt-2 block text-sm text-danger" role="alert">
            {errors.brief}
          </span>
        ) : null}
      </label>

      {status === "unconfigured" ? (
        <p className="text-sm leading-relaxed text-danger" role="alert">
          The inbox is not connected yet. Write to{" "}
          <a href={`mailto:${studio.email}`} className="underline">
            {studio.email}
          </a>{" "}
          and include the same details.
        </p>
      ) : null}

      {status === "failed" ? (
        <p className="text-sm leading-relaxed text-danger" role="alert">
          The brief did not send. Write to{" "}
          <a href={`mailto:${studio.email}`} className="underline">
            {studio.email}
          </a>{" "}
          instead.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-green px-5 py-3 text-sm text-paper transition-transform duration-200 hover:-translate-y-0.5 hover:bg-green-deep disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Sending…" : "Send the brief"}
      </button>
    </form>
  );
}

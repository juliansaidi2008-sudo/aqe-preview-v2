"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, PhoneCall } from "lucide-react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function CallbackForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/request-callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) throw new Error("Callback request failed");

      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  if (submissionState === "success") {
    return (
      <div
        className="hidden md:flex min-h-12 flex-1 items-center gap-3 rounded-lg border border-brand/20 bg-white px-4 py-2 shadow-soft"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 size={20} className="shrink-0 text-brand" aria-hidden="true" />
        <p className="text-[14px] font-semibold leading-snug text-ink">
          Thanks — Shai’s team will call you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden md:flex min-w-0 flex-1 items-start gap-2"
      aria-label="Request a callback"
    >
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="callback-website">Website</label>
        <input id="callback-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="min-w-0 flex-1">
        <label htmlFor="callback-name" className="sr-only">Name</label>
        <input
          id="callback-name"
          name="name"
          type="text"
          required
          maxLength={80}
          autoComplete="name"
          placeholder="Your name"
          className="h-12 w-full rounded-lg border border-hairline bg-white px-3 text-[14px] text-ink shadow-soft outline-none transition placeholder:text-charcoal/70 focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
      </div>

      <div className="min-w-0 flex-1">
        <label htmlFor="callback-phone" className="sr-only">Phone number</label>
        <input
          id="callback-phone"
          name="phone"
          type="tel"
          required
          maxLength={30}
          autoComplete="tel"
          inputMode="tel"
          placeholder="Phone number"
          className="h-12 w-full rounded-lg border border-hairline bg-white px-3 text-[14px] text-ink shadow-soft outline-none transition placeholder:text-charcoal/70 focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
      </div>

      <button
        type="submit"
        disabled={submissionState === "submitting"}
        className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-ink bg-ink px-4 text-[14px] font-semibold text-white shadow-soft transition-colors hover:bg-charcoal disabled:cursor-wait disabled:opacity-70"
      >
        {submissionState === "submitting" ? (
          <Loader2 size={16} className="animate-spin" aria-hidden="true" />
        ) : (
          <PhoneCall size={16} aria-hidden="true" />
        )}
        {submissionState === "submitting" ? "Sending…" : "Request a callback"}
      </button>

      {submissionState === "error" && (
        <p className="absolute mt-14 text-[12px] font-medium text-brand" role="alert">
          Couldn’t send that. Please call us instead.
        </p>
      )}
    </form>
  );
}

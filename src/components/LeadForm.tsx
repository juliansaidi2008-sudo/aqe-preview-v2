"use client";

import { FormEvent, useState } from "react";

// Where leads land while no Formspree endpoint is configured.
// When the project is sold, swap the env var on Vercel and this fallback never fires.
const FALLBACK_LEAD_EMAIL = "julian.saidi2008@gmail.com";

const SERVICES = [
  { value: "", label: "What do you need?" },
  { value: "EV charger install", label: "EV charger install" },
  { value: "Panel upgrade", label: "Panel upgrade" },
  { value: "Whole-home rewiring", label: "Whole-home rewiring" },
  { value: "Recessed lighting", label: "Recessed lighting" },
  { value: "Diagnostics & repair", label: "Diagnostics & repair" },
  { value: "Remodel / addition", label: "Remodel / addition" },
  { value: "Other / not sure", label: "Other / not sure" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [viaMailto, setViaMailto] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const service = (fd.get("service") || "").toString();
    const zip = (fd.get("zip") || "").toString().trim();

    if (!name) return setError("Please enter your name.");
    if (phone.replace(/\D/g, "").length < 10)
      return setError("Phone needs at least 10 digits.");
    if (!service) return setError("Pick what you need help with.");
    if (zip.replace(/\D/g, "").length < 5)
      return setError("ZIP needs at least 5 digits.");

    setStatus("submitting");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    const hasRealEndpoint = !!endpoint && !endpoint.includes("REPLACE_ME");

    fd.append("lead_source", "AQE Preview Site");

    // Path 1 — Formspree endpoint configured: POST and we're done.
    if (hasRealEndpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: fd,
        });
        if (!res.ok) throw new Error(`Submission failed (${res.status})`);
        setStatus("success");
      } catch (err) {
        setStatus("error");
        setError(err instanceof Error ? err.message : "Something went wrong.");
      }
      return;
    }

    // Path 2 — fallback to mailto so the lead actually reaches a human while
    // Formspree is being set up. Opens the visitor's mail app pre-filled.
    try {
      const subject = encodeURIComponent(
        `New AQE lead — ${service} — ${name}`
      );
      const body = encodeURIComponent(
        [
          `Service: ${service}`,
          `Name: ${name}`,
          `Phone: ${phone}`,
          `ZIP: ${zip}`,
          ``,
          `Source: AQE Preview Site`,
          `Submitted: ${new Date().toLocaleString()}`,
        ].join("\n")
      );
      window.location.href = `mailto:${FALLBACK_LEAD_EMAIL}?subject=${subject}&body=${body}`;
      // Give the email client a beat to open before we flip the UI.
      await new Promise((r) => setTimeout(r, 400));
      setViaMailto(true);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white/[0.04] border border-white/12 rounded-2xl p-7 md:p-8 text-white">
        <p className="font-display font-bold text-[22px]">Got it.</p>
        <p className="mt-2 text-[15px] text-white/75 leading-[1.6]">
          {viaMailto
            ? "Just hit send in the email draft we opened — we'll call within 1 business hour."
            : "Shai will call you within 1 business hour."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="bg-white/[0.04] border border-white/12 rounded-2xl p-7 md:p-8"
    >
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">
        Free, no-obligation quote
      </p>
      <p className="mt-2 text-[18px] font-display font-bold text-white">
        Tell us what you need
      </p>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Full name"
          required
          className="field field-on-dark"
        />
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Phone"
          required
          className="field field-on-dark"
        />
        <select name="service" required className="field field-on-dark sm:col-span-2">
          {SERVICES.map((s) => (
            <option key={s.value} value={s.value} className="text-ink">
              {s.label}
            </option>
          ))}
        </select>
        <input
          name="zip"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          placeholder="ZIP"
          required
          className="field field-on-dark"
          maxLength={10}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 w-full h-12 rounded-lg bg-brand text-white font-semibold hover:bg-brand-hover transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Get my quote"}
      </button>

      {error && (
        <p role="alert" className="mt-3 text-[13px] text-brand bg-brand/10 px-3 py-2 rounded-md">
          {error}
        </p>
      )}

      <p className="mt-4 text-[12px] text-white/55 leading-relaxed">
        We call within 1 business hour. No spam, no list-selling.
      </p>
    </form>
  );
}

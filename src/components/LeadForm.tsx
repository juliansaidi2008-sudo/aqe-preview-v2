"use client";

import { FormEvent, useState } from "react";

const VEHICLES = [
  { value: "", label: "Vehicle make" },
  { value: "Tesla", label: "Tesla" },
  { value: "Rivian", label: "Rivian" },
  { value: "Ford", label: "Ford" },
  { value: "Hyundai-Kia", label: "Hyundai / Kia" },
  { value: "Other", label: "Other" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const vehicle = (fd.get("vehicle") || "").toString();
    const zip = (fd.get("zip") || "").toString().trim();

    if (!name) return setError("Please enter your name.");
    if (phone.replace(/\D/g, "").length < 10)
      return setError("Phone needs at least 10 digits.");
    if (!vehicle) return setError("Pick a vehicle make.");
    if (zip.replace(/\D/g, "").length < 5)
      return setError("ZIP needs at least 5 digits.");

    setStatus("submitting");

    const endpoint =
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
      "https://formspree.io/f/REPLACE_ME";

    fd.append("lead_source", "AQE Preview Site");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok && !endpoint.includes("REPLACE_ME")) {
        throw new Error(`Submission failed (${res.status})`);
      }
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
          Shai will call you within 1 business hour.
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
        Get a quote for your EV install
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
        <select name="vehicle" required className="field field-on-dark">
          {VEHICLES.map((v) => (
            <option key={v.value} value={v.value} className="text-ink">
              {v.label}
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

"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { site, web3formsKey, whatsappLink } from "@/lib/site-config";
import { services } from "@/content/services";

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam: if filled, silently "succeed".
    if ((data.get("botcheck") as string)?.length) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    data.append("access_key", web3formsKey);
    data.append("subject", `New Solar Enquiry — ${site.name}`);
    data.append("from_name", site.name);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-600" />
        <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold text-ink">
          Thank you!
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          Your enquiry has been received. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-brand-600 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" required placeholder="Your name" />
        <Field label="Phone" name="phone" type="tel" required placeholder="10-digit mobile" />
      </div>
      <Field label="Email" name="email" type="email" placeholder="you@example.com" />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">
          Interested In <span className="text-red-500">*</span>
        </label>
        <select
          name="service"
          required
          defaultValue=""
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your requirement, monthly electricity bill, roof area, etc."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" /> {errorMsg}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="h-5 w-5" /> Send Enquiry
            </>
          )}
        </button>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
        >
          WhatsApp Us
        </a>
      </div>

      <p className="text-center text-xs text-ink-soft/70">
        We respect your privacy. Your details are only used to respond to your enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}

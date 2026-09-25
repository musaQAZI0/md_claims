"use client";

import { FormEvent, useState } from "react";
import { Building2, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };

export function Contact() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus({ type: "loading" });
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const result = await response.json() as { success: boolean; message: string };
      setStatus({ type: result.success ? "success" : "error", message: result.message });
      if (result.success) form.reset();
    } catch {
      setStatus({ type: "error", message: "We could not submit the form. Please try again." });
    }
  }
  return <section id="contact" className="section contact-page-section scroll-mt-20 bg-soft"><Container><div className="mt-6 grid items-start gap-6 overflow-visible lg:grid-cols-[.8fr_1.2fr]"><aside className="contact-panel sticky top-24 self-start"><p className="eyebrow eyebrow-dark">Start a conversation</p><h2 className="mt-3 text-3xl font-extrabold">Contact MD Billing</h2><p className="mt-4 text-lg leading-7 text-slate-300">Tell us a little about your practice and the support you are looking for.</p><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10"><Building2 size={27} /></span><h3 className="mt-8 text-2xl font-extrabold">Let&apos;s discuss your practice needs.</h3><p className="mt-4 leading-7 text-slate-300">Contact details below are editable placeholders and should be replaced before launch.</p><dl className="mt-10 space-y-6">{[[Phone, "Phone", "[Add Phone Number]"], [Mail, "Email", "[Add Email Address]"], [MapPin, "Address", "[Add Business Address]"], [Clock3, "Business Hours", "[Add Business Hours]"]].map(([Icon, label, value]) => <div key={label as string} className="flex gap-4"><Icon className="mt-1 shrink-0 text-teal" size={20} /><div><dt className="text-sm text-slate-400">{label as string}</dt><dd className="mt-1 font-bold">{value as string}</dd></div></div>)}</dl></aside><form onSubmit={submit} className="max-h-[72vh] overflow-y-auto rounded-3xl border border-border bg-white p-6 shadow-xl shadow-navy/5 sm:grid-cols-2 sm:p-10" noValidate><Field label="Full Name" name="fullName" required /><Field label="Practice Name" name="practiceName" required /><Field label="Email Address" name="email" type="email" required /><Field label="Phone Number" name="phone" type="tel" /><Field label="NPI Number" name="npi" required placeholder="10-digit NPI" /><Field label="Medical Specialty" name="specialty" className="sm:col-span-2" /><label className="sm:col-span-2"><span className="field-label">Message <span aria-hidden="true">*</span></span><textarea name="message" required minLength={10} rows={5} className="input resize-y" placeholder="How can MD Billing support your practice?" /></label><div className="sm:col-span-2"><button type="submit" disabled={status.type === "loading"} className="button button-primary w-full justify-center sm:w-auto">{status.type === "loading" ? "Submitting..." : "Contact MD Billing ->"}</button>{status.message && <p role="status" className={`mt-4 text-sm font-bold ${status.type === "success" ? "text-teal-dark" : "text-red-700"}`}>{status.message}</p>}</div></form></div></Container></section>;
}

function Field({ label, name, type = "text", required = false, className = "", placeholder = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string; placeholder?: string }) {
  return <label className={className}><span className="field-label">{label}{required && <span aria-hidden="true"> *</span>}</span><input name={name} type={type} required={required} className="input" placeholder={placeholder} autoComplete={name === "email" ? "email" : name === "phone" ? "tel" : name === "fullName" ? "name" : "organization"} /></label>;
}




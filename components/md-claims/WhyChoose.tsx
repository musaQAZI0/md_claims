import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const benefits = [
  ["Streamlined Workflows", "Structured administrative processes that support a more organized billing operation."],
  ["Responsive Support", "Clear, timely communication around the work being handled for your practice."],
  ["Practice-Focused Solutions", "Support shaped around the practical needs and priorities of your team."],
  ["Revenue Cycle Support", "Administrative coordination across essential billing and claims activities."],
] as const;

export function WhyChoose() {
  return <section id="why-choose" className="section scroll-mt-20 bg-soft"><Container><div className="overflow-hidden rounded-3xl shadow-xl shadow-navy/10 lg:grid lg:grid-cols-[1.15fr_.85fr]"><div className="bg-navy p-8 text-white sm:p-12"><p className="eyebrow eyebrow-dark">Our approach</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Why Choose MD Billing?</h2><div className="mt-8 grid gap-7 sm:grid-cols-2">{benefits.map(([title, text]) => <div key={title} className="flex gap-4"><span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal"><Check size={16} strokeWidth={3} /></span><div><h3 className="font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{text}</p></div></div>)}</div></div><div className="flex flex-col justify-center bg-[#eaf7fb] p-8 sm:p-12"><p className="eyebrow">Let&apos;s talk</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy">Request a Consultation</h2><p className="mt-5 leading-7 text-muted">Connect with MD Billing to discuss your practice&apos;s billing and claims-management needs.</p><Button href="/md-claims/contact/" className="mt-8 w-fit">Request a Consultation</Button></div></div></Container></section>;
}



import { Hero } from "@/components/md-claims/Hero";
import { Header } from "@/components/md-claims/Header";
import { Footer } from "@/components/md-claims/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { serviceDetails } from "@/data/serviceDetails";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const serviceImages: Record<string, string> = { "front-office-management": "/heroes/contact.jpg", "medical-coding": "/heroes/documents.jpg", "medical-billing": "/heroes/billing.jpg", "credentialing-solutions": "/heroes/team.jpg", "billing-reports": "/heroes/reports.jpg", "practice-audit": "/heroes/documents.jpg" };

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = services.find((service) => service.slug === slug); return { title: item ? `${item.title} | MD Claims` : "Service | MD Claims", description: item?.description }; }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = services.find((service) => service.slug === slug); if (!item) notFound(); const detail = serviceDetails[slug as keyof typeof serviceDetails];
  return <><Header /><main className="bg-white"><Hero image={serviceImages[slug] ?? "/heroes/internal-hero-generated.jpg"} eyebrow="MD Claims service" title={item.title} accent="for Healthcare Practices" description={detail.intro} /><section className="section bg-soft"><Container><div className="mx-auto max-w-4xl text-center"><p className="eyebrow">Why this matters</p><h2 className="section-title mt-3">Support that keeps administrative work moving</h2><p className="mt-5 text-lg leading-8 text-muted">{detail.why}</p></div></Container></section><section className="section"><Container><div className="mx-auto max-w-5xl text-center"><div><p className="eyebrow">What we support</p><h2 className="section-title mt-3">A practical approach to {item.title.toLowerCase()}</h2><p className="mt-5 leading-8 text-muted">MD Claims works with healthcare practices to coordinate the administrative details behind this service. We keep communication clear and make the workflow easier to review and improve over time.</p></div><div className="mx-auto mt-8 grid max-w-4xl gap-4 text-left sm:grid-cols-2">{detail.items.map((benefit) => <div key={benefit} className="benefit-card flex items-start gap-3"><CheckCircle2 className="shrink-0 text-teal" size={21} /><span className="font-bold text-navy">{benefit}</span></div>)}</div></div></Container></section><section className="section bg-soft"><Container><div className="mx-auto max-w-4xl"><div className="mb-8 text-center"><p className="eyebrow">Common questions</p><h2 className="section-title mt-3">Frequently asked questions</h2></div><div className="space-y-3">{detail.faqs.map((question) => <details key={question} className="group rounded-xl border border-border bg-white p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-navy"><span>{question}</span><HelpCircle size={19} className="shrink-0 text-medical-blue" /></summary><p className="mt-4 max-w-3xl leading-7 text-muted">We start by understanding your current workflow, priorities, and practice needs, then discuss the most useful way MD Claims can support this area.</p></details>)}</div></div></Container></section><section className="section"><Container><div className="cta-panel"><div><p className="eyebrow eyebrow-dark">Ready to get started?</p><h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Let&apos;s discuss your practice workflow.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">Connect with MD Claims to talk through your billing and administrative support needs.</p></div><Button href="/md-claims/contact/" variant="light">Request a Consultation <ArrowRight size={16} /></Button></div></Container></section></main><Footer /></>;
}








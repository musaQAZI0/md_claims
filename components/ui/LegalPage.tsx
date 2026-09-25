import { HeroImage } from "./HeroImage";
import Link from "next/link";
import { ArrowLeft, HeartPulse } from "lucide-react";
import { Container } from "./Container";

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: string[] }) {
  return <main className="min-h-screen bg-soft"><header className="border-b border-border bg-white"><Container className="flex h-[76px] items-center justify-between"><Link href="/md-claims/" className="flex items-center gap-2.5"><span className="brand-mark brand-mark-small"><HeartPulse size={21} /></span><span className="text-xl font-extrabold text-navy">MD Billing</span></Link><Link href="/md-claims/" className="inline-flex items-center gap-2 text-sm font-bold text-medical-blue"><ArrowLeft size={16} /> Back to site</Link></Container></header><section className="hero-section"><Container className="hero-layout"><div className="hero-copy"><span className="placeholder-badge">Placeholder legal content</span><h1 className="mt-5 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">{title}</h1><p className="mt-5 text-lg leading-8 text-muted">{intro} Have qualified legal counsel review and replace this content before publishing the website.</p></div><HeroImage image="/heroes/internal-hero-generated.jpg" /></Container></section><Container className="py-16 sm:py-24"><article className="mx-auto max-w-3xl rounded-3xl border border-border bg-white p-7 shadow-sm sm:p-12"><div className="space-y-8">{sections.map((section) => <section key={section}><h2 className="text-xl font-extrabold text-navy">{section}</h2><p className="mt-3 leading-7 text-muted">Final legal language for this section will be added before launch.</p></section>)}</div></article></Container></main>;
}




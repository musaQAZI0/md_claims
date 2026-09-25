import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse, ScanLine, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "MD Professional Services | Healthcare Services",
  description: "Explore MD Professional Services and access professional medical billing and claims-management support through MD Billing.",
};

export default function HomePage() {
  return (
    <main className="gateway-shell">
      <Container className="relative z-10 flex min-h-screen flex-col py-4 sm:py-6">
        <header className="-mx-5 flex items-center gap-3 sm:-mx-8" aria-label="MD Medical Services">
          <span className="brand-mark"><HeartPulse size={25} aria-hidden="true" /></span>
          <span className="text-lg font-extrabold tracking-tight text-navy">MD Professional Services</span>
        </header>
        <section className="flex flex-1 flex-col justify-center py-4 sm:py-8" aria-labelledby="services-title">
          <div className="animate-fade-up mx-auto mb-4 max-w-3xl text-center sm:mb-6"><div className="hero-copy">
            <h1 id="services-title" className="mt-2 text-4xl font-extrabold tracking-[-0.04em] text-navy sm:text-5xl lg:text-6xl">Choose Your Service</h1>
          </div>
          </div>
          <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-2">
            <Link href="/md-claims/" className="gateway-card gateway-card-animated group" aria-label="Enter MD Billing">
              <div className="service-icon"><ShieldCheck size={29} aria-hidden="true" /></div>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-medical-blue">Available now</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy">MD Billing</h2>
              <p className="mt-2 font-bold text-body">Medical Billing &amp; Claims Management</p>
              <p className="mt-4 flex-1 leading-7 text-muted">Professional medical billing, claims management, and revenue cycle support designed to help healthcare practices streamline administrative workflows.</p>
              <span className="mt-8 inline-flex items-center gap-2 font-bold text-medical-blue">Explore MD Billing <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
            </Link>
            <article className="gateway-card gateway-card-animated gateway-card-delay cursor-default bg-white/60" aria-labelledby="sonography-title">
              <div className="service-icon muted-icon"><ScanLine size={29} aria-hidden="true" /></div>
              <span className="mt-8 w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-muted">Coming Soon</span>
              <h2 id="sonography-title" className="mt-3 text-3xl font-extrabold tracking-tight text-navy">MD Sonography</h2>
              <p className="mt-2 font-bold text-body">Sonography &amp; Diagnostic Imaging</p>
              <p className="mt-4 flex-1 leading-7 text-muted">The MD Sonography website will be added later as a separate service within MD Medical Services.</p>
              <span className="mt-8 inline-flex items-center gap-2 font-bold text-muted">Launching later <span aria-hidden="true">?</span></span>
            </article></div></section>
        <footer className="text-center text-sm text-muted">&copy; {new Date().getFullYear()} MD Medical Services</footer>
      </Container>
    </main>
  );
}




















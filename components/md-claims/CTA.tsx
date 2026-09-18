import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return <section className="bg-white pb-20 sm:pb-28"><Container><div className="cta-panel"><div><p className="eyebrow eyebrow-dark">Support for your practice</p><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Ready to Simplify Your Billing Workflow?</h2><p className="mt-4 max-w-2xl leading-7 text-slate-300">Connect with MD Claims to discuss your healthcare practice&apos;s billing, claims-management, and revenue-cycle support needs.</p></div><Button href="/md-claims/contact/" variant="light" className="shrink-0">Request a Consultation</Button></div></Container></section>;
}


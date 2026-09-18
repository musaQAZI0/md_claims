import { HeroImage } from "@/components/ui/HeroImage";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero({ eyebrow = "MD Claims", title = "Simplifying Medical Billing.", accent = "Supporting Your Practice.", description = "Professional medical billing, claims management, and administrative support built around your healthcare practice.", image = "/heroes/billing.jpg" }: { eyebrow?: string; title?: string; accent?: string; description?: string; image?: string }) {
  return (
    <section id="home" className="hero-section scroll-mt-24" style={{ backgroundImage: `linear-gradient(90deg,rgba(247,251,253,.86) 0%,rgba(247,251,253,.68) 48%,rgba(247,251,253,.18) 100%),url("${image}")` }} aria-labelledby="hero-title">
      <Container className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p><h1 id="hero-title" className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-navy sm:text-5xl lg:text-[52px] xl:text-[60px]">{title} <span className="text-medical-blue">{accent}</span></h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{description}</p>
          <div className="mt-7 flex flex-col flex-wrap gap-3 sm:flex-row">
            <Button href="/md-claims/contact/">Request a Consultation</Button>
            <Button href="/md-claims/#services" variant="secondary">Explore Our Services</Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-body">
            <span className="inline-flex items-center gap-2"><Check size={17} className="text-teal" /> Clear communication</span>
            <span className="inline-flex items-center gap-2"><Check size={17} className="text-teal" /> Practice-focused support</span>
          </div>
        </div>
        <HeroImage image="/heroes/internal-hero-generated.jpg" />
      </Container>
    </section>
  );
}









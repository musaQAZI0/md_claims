import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return <section id="services" className="section scroll-mt-20 bg-soft"><Container><SectionHeading eyebrow="What We Support" title="Professional Medical Billing Solutions" description="Flexible administrative services designed to support the operational needs of healthcare practices." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ slug, title, description, icon: Icon }) => <article key={title} className="service-card group"><span className="service-icon service-icon-small"><Icon size={23} /></span><h3 className="mt-5 text-lg font-extrabold text-navy">{title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-muted">{description}</p><Link href={`/md-claims/services/${slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-medical-blue" aria-label={`Learn more about ${title}`}>Learn More <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link></article>)}</div></Container></section>;
}

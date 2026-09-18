import { FileText, MessagesSquare, RefreshCw, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  { title: "Medical Billing", icon: FileText }, { title: "Claims Management", icon: ShieldCheck },
  { title: "Revenue Cycle Support", icon: RefreshCw }, { title: "Clear Communication", icon: MessagesSquare },
];

export function About() {
  return <section id="about" className="section scroll-mt-20 bg-white"><Container><div className="grid items-center gap-12 lg:grid-cols-2"><div><SectionHeading eyebrow="About MD Claims" title="Administrative support built around your practice" align="left" /><p className="mt-6 leading-8 text-muted">MD Claims supports healthcare practices with medical billing, claims management, and revenue cycle administration. Our focus is a clear, well-organized workflow that helps practice teams spend less time navigating billing tasks.</p><p className="mt-4 leading-8 text-muted">Through responsive communication and practice-focused support, we help coordinate the administrative details that keep claims activity moving forward.</p></div><div className="grid gap-4 sm:grid-cols-2">{benefits.map(({ title, icon: Icon }) => <article key={title} className="benefit-card"><span className="service-icon service-icon-small"><Icon size={22} /></span><h3 className="mt-5 font-extrabold text-navy">{title}</h3></article>)}</div></div></Container></section>;
}

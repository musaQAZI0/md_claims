import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return <section className="section bg-white" aria-labelledby="process-title"><Container><div id="process-title"><SectionHeading eyebrow="A clear path forward" title="How It Works" description="A practical five-step approach to understanding your needs and establishing ongoing administrative support." /></div><ol className="process-grid mt-12">{processSteps.map((step, index) => <li key={step.title} className="process-card process-card-animated" style={{ animationDelay: `${index * 120}ms` }}><span className="process-number">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 font-extrabold text-navy">{step.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{step.description}</p></li>)}</ol></Container></section>;
}


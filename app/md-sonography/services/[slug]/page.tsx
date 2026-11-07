import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Subpage from '@/components/sonography/Subpage';
import { ArrowRight, Check } from 'lucide-react';
import PageIntro from '@/components/sonography/PageIntro';
import { services, examinationGuides } from '@/components/sonography/Content';
export const dynamicParams = false;
export function generateStaticParams() { return services.map(service => ({ slug: service.id })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
 const { slug } = await params;
 const service = services.find(item => item.id === slug);
 return { title: service?.title ?? 'Examination not found', description: service ? `Explore ${service.title.toLowerCase()}, questions to ask before your scan, preparation, and reporting arrangements.` : undefined };
}
export default async function Examination({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const service = services.find(item => item.id === slug);
 const guide = examinationGuides.find(item => item.id === slug);
 if (!service || !guide) notFound();
 const Icon=service.icon;
 return <Subpage kind={'examination-page examination-'+service.id}>
 <nav aria-label="Breadcrumb" className="section-wrap breadcrumb"><Link href="/md-sonography/services">Examinations</Link><span>/</span><span aria-current="page">{service.title}</span></nav>
 <PageIntro eyebrow="EXAMINATION / PATIENT GUIDE" title={service.title} description={service.description}/>
 <section className="section-wrap section-space examination-layout"><div><section className="examination-overview" data-reveal><span className="exam-symbol"><Icon size={32}/></span><p className="eyebrow">UNDERSTAND YOUR EXAMINATION</p><h2 className="section-title">Start with your referral.</h2><p>{guide.intro}</p></section><section className="question-panel" data-reveal><p className="eyebrow">TAKE THESE QUESTIONS WITH YOU</p><h2>Before arranging your scan</h2><ul>{guide.questions.map((q,i)=><li key={q}><span>0{i+1}</span>{q}</li>)}</ul></section>
 <div className="exam-next-grid"><section data-reveal><p className="eyebrow">BEFORE YOUR SCAN</p><h2>Preparation is personal.</h2><p>Ask for instructions for your particular examination. Check anything unclear with the clinic before your visit.</p><Link className="text-link" href="/md-sonography/patient-information/preparation">Preparation checklist <ArrowRight size={17}/></Link></section><section data-reveal><p className="eyebrow">AFTER YOUR SCAN</p><h2>Know what happens next.</h2><p>Ask when your report will be available, who receives it, and who will explain the findings.</p><Link className="text-link" href="/md-sonography/patient-information/results">Reports and next steps <ArrowRight size={17}/></Link></section></div></div>
 <aside className="examination-facts"><p className="eyebrow">PLAN YOUR VISIT</p><h2>The essentials.</h2><dl><dt>Availability</dt><dd>Confirm with the clinic</dd><dt>Referral</dt><dd>Have the exact examination name ready</dd><dt>Fees & duration</dt><dd>Ask before arranging a visit</dd><dt>Preparation</dt><dd>Request scan-specific instructions</dd></dl><div className="fact-note"><Check size={17}/><p>Online booking is coming soon.</p></div><Link href={'/md-sonography/appointment?service='+service.id} className="btn btn-primary">Appointment information <ArrowRight size={17}/></Link></aside></section>
 <section className="section-wrap section-space" data-reveal><div className="section-heading"><div><p className="eyebrow mb-3">KEEP EXPLORING</p><h2>Other examination guides.</h2></div></div><nav className="related-examinations" aria-label="Other examinations">{services.filter(s=>s.id!==service.id).map(s=><Link key={s.id} href={'/md-sonography/services/'+s.id}><s.icon size={24}/><span>{s.title}</span><ArrowRight size={18}/></Link>)}</nav></section></Subpage>;
}

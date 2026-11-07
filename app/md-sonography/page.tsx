import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ClipboardList, MessageCircle, CalendarDays, Check } from 'lucide-react';
import PageHero from '@/components/sonography/PageHero';
import { ServiceCards, VisitSteps, FAQ } from '@/components/sonography/Content';

export default function Home() {
 return <>
  <PageHero panoramic eyebrow="ULTRASOUND / PATIENT INFORMATION" title="Understand your scan. Feel more prepared." description="Explore ultrasound examinations, find practical visit guidance, and know which questions to ask. Your next step starts here." image="/md-sonography/images/heroes/home-clean-v2.png" alt="Illustrative ultrasound examination in a bright, calm clinic" primaryHref="#services" primaryLabel="Explore examinations" secondary={{ label: 'Prepare for a visit', href: '/md-sonography/patient-information' }} note="Online appointments are coming soon."/>
  <section id="services" className="page-section service-section"><div className="section-wrap">
   <div className="section-heading"><div><p className="eyebrow mb-3">FIND YOUR EXAMINATION</p><h2>Start with the scan on your referral.</h2><p>Simple guides to what each examination involves and what to ask.</p></div><Link href="/md-sonography/services" className="text-link">All examinations <ArrowRight size={17}/></Link></div>
   <ServiceCards/>
   <p className="service-note">Please confirm the requested examination and availability with the clinic before arranging a visit.</p>
  </div></section>
  <section className="page-section approach-section"><div className="section-wrap approach-layout">
   <div className="about-visual"><Image src="/md-sonography/images/photography/sonographer.jpg" alt="Sonographer operating an ultrasound scanner" fill sizes="(min-width: 1024px) 520px, 100vw" className="section-image"/></div>
   <div><p className="eyebrow mb-3">A CLEARER WAY FORWARD</p><h2 className="text-3xl md:text-4xl font-bold mb-5">A little understanding.<br/>A lot less guesswork.</h2><p className="text-slate-600 leading-relaxed mb-7">You deserve to understand the next step. Start with practical information you can take into a conversation with your clinic.</p>
    <ul className="approach-list">{[['Know what to ask', 'Understand your examination before arranging a visit.'], ['Arrive prepared', 'Keep your referral, previous reports, and questions together.'], ['Plan beyond the scan', 'Ask how your report will reach your referring clinician.']].map(([title, text]) => <li key={title}><Check size={19} aria-hidden="true"/><div><h3>{title}</h3><p>{text}</p></div></li>)}</ul>
    <Link href="/md-sonography/about" className="text-link mt-6">About our approach <ArrowRight size={17}/></Link>
   </div>
  </div></section>
  <section className="page-section"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow mb-3">BEFORE, DURING & AFTER</p><h2>Your visit, made easier to plan.</h2></div><Link href="/md-sonography/patient-information" className="text-link">Read the visit guide <ArrowRight size={17}/></Link></div><VisitSteps/></div></section>
  <section className="page-section bg-pearl"><div className="section-wrap home-faq-layout"><div><p className="eyebrow mb-3">GOOD QUESTIONS. CLEAR NEXT STEPS.</p><h2 className="text-3xl font-bold mb-5">A few things you might be wondering.</h2><p className="text-slate-600 leading-relaxed">Start with the essentials. Your clinic can confirm the details for your specific examination.</p><Link href="/md-sonography/faq" className="text-link mt-5">All patient questions <ArrowRight size={17}/></Link></div><FAQ items={[
   ['How should I prepare?', 'Preparation depends on the examination. Ask the clinic for instructions for the exact scan on your referral.'],
   ['What should I bring?', 'Check whether you need your referral, identification, or previous imaging reports. Keep your questions handy.'],
   ['Can I book online?', 'Online appointment requests are coming soon. Visit the appointments page for the current booking status.'],
  ]}/></div></section>
  <section className="page-section"><div className="section-wrap"><div className="next-step-panel"><div><p className="eyebrow mb-3">YOUR NEXT STEP</p><h2 className="text-3xl font-bold mb-4">Plan your next step with confidence.</h2><p>Booking and clinic contact details will be available soon. In the meantime, find the information you need for your visit.</p><Link href="/md-sonography/appointment" className="btn btn-primary mt-6">Appointment information <ArrowRight size={17}/></Link></div><nav aria-label="Plan your next step" className="next-step-links">{[[ClipboardList, 'Prepare for your scan', '/md-sonography/patient-information/preparation'], [CalendarDays, 'Appointment availability', '/md-sonography/appointment'], [MessageCircle, 'Clinic contact information', '/md-sonography/contact']].map(([Icon, label, href]) => { const Symbol = Icon as typeof ClipboardList; return <Link href={String(href)} key={String(href)}><Symbol size={21} aria-hidden="true"/><span>{String(label)}</span><ArrowRight size={17} aria-hidden="true"/></Link>; })}</nav></div></div></section>
 </>;
}

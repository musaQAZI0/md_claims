import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, ArrowRight, Check, ClipboardList } from 'lucide-react';
import PageIntro from '@/components/sonography/PageIntro';
import Subpage from '@/components/sonography/Subpage';
import { services } from '@/components/sonography/Content';
export const metadata: Metadata = { title: 'Appointments' };
export default function Appointment({ searchParams }: { searchParams: { service?: string } }) {
 const selected=services.find(s=>s.id===searchParams.service);
 return <Subpage kind="appointments-page"><PageIntro eyebrow="05 / APPOINTMENTS" title="Your next step, thoughtfully planned." description="Get the essentials ready before arranging a scan. Online appointment requests will be available here soon."/>
 <section className="section-wrap section-space appointment-layout"><div data-reveal><p className="eyebrow">BEFORE YOU BOOK</p><h2 className="section-title">Three things to have ready.</h2><ol className="booking-steps">{[['Your examination','Have the exact examination name or your referral ready.'],['Your questions','Ask about availability, fees, referral requirements, and how long to allow.'],['Your preparation','Confirm instructions for your specific examination before your visit.']].map(([title,text],i)=><li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol><Link className="text-link" href="/md-sonography/patient-information/preparation">Read the preparation checklist <ArrowRight size={17}/></Link></div>
 <aside className="booking-status" data-reveal><div className="booking-status-top"><CalendarDays size={28}/><span className="status-pill">Coming soon</span></div><h2>Online appointment requests</h2><p>Our booking service is being prepared. Available times and request options will appear here once it opens.</p>{selected && <div className="selected-scan"><ClipboardList size={19}/><div><span>YOUR EXAMINATION OF INTEREST</span><strong>{selected.title}</strong></div></div>}<div className="booking-divider"><Check size={18}/><p>No appointment is booked through this page yet.</p></div><Link href="/md-sonography/services" className="btn btn-primary">{selected ? 'Explore other examinations' : 'Explore examination guides'}<ArrowRight size={17}/></Link></aside></section>
 <section className="section-wrap section-space" data-reveal><div className="help-strip"><div><p className="eyebrow">PLAN WITH CONFIDENCE</p><h2>Need a little more information first?</h2><p>Find questions about referrals, attending your scan, and receiving your report.</p></div><Link href="/md-sonography/faq" className="text-link">Patient questions <ArrowRight size={17}/></Link></div></section></Subpage>;
}

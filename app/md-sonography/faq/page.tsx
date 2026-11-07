import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Subpage from '@/components/sonography/Subpage';
import FAQExplorer from '@/components/sonography/FAQExplorer';
import PageIntro from '@/components/sonography/PageIntro';
export const metadata: Metadata = { title: 'Frequently Asked Questions', description: 'Questions about ultrasound appointments, preparation, referrals, and reporting at MD Sonography.' };
const groups: { id: string; title: string; questions: [string, string][] }[] = [
 { id: 'appointments', title: 'Appointments and services', questions: [
 ['Can I make a booking on this website?', 'Online appointment requests are coming soon. Booking options will appear on the appointments page when the service opens.'],
 ['Which examinations are available?', 'The website introduces obstetric, general, heart, and Doppler ultrasound categories. These are examples; the clinic must confirm its offered examinations before a visit is arranged.'],
 ['Do I need a referral?', 'MD Sonography referral requirements have not yet been confirmed. Have any existing referral ready and check the requirements with the clinic.'],
 ['How much does a scan cost?', 'Pricing and payment arrangements are awaiting confirmation. Ask for the cost of the exact examination, what it includes, and any payment requirements before arranging a visit.'],
 ] },
 { id: 'preparation', title: 'Preparing and attending', questions: [
 ['Where do I find preparation instructions?', 'Ask the clinic for instructions for the exact examination you are having. General checklists on this website help you prepare questions; they do not replace your individual instructions.'],
 ['What documents should I bring?', 'Check whether the clinic needs identification, a referral, prior reports, or previous imaging. Have your referring clinician details available where relevant.'],
 ['Can I request support for my visit?', 'Ask about accessibility, an interpreter, a companion, or a chaperone before your appointment so arrangements can be discussed.'],
 ['How long should I allow?', 'The examination and appointment arrangements affect the time needed. Confirm the expected duration and arrival time with the clinic.'],
 ] },
 { id: 'reports', title: 'Reports and follow-up', questions: [
 ['When will I get my report?', 'MD Sonography reporting times are not confirmed. Ask when to expect your report and which contact route to use if it has not arrived.'],
 ['Who will discuss my findings?', 'Confirm who will explain the report and whether you should arrange a follow-up with your referring clinician.'],
 ['Can a report be shared with my clinician?', 'Ask the clinic about its process, any consent requirements, and the details needed to share a report. The website does not currently store or send reports.'],
 ] },
];
export default function Questions() {
 return <Subpage kind="faq-page"><PageIntro eyebrow="06 / QUESTIONS & ANSWERS" title="Good questions deserve clear answers." description="Search by a word or choose a topic. Find a starting point for appointments, preparation, and what comes after your scan."/>
 <section className="section-wrap section-space"><FAQExplorer groups={groups}/></section><section className="section-wrap section-space" data-reveal><div className="help-strip"><div><p className="eyebrow">KEEP EXPLORING</p><h2>A practical guide for every stage.</h2><p>Find checklists for preparation, attending your scan, and your report.</p></div><Link href="/md-sonography/patient-information" className="text-link">Your visit guide <ArrowRight size={17}/></Link></div></section></Subpage>;
}

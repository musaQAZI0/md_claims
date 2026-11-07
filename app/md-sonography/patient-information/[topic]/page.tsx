import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Subpage from '@/components/sonography/Subpage';
import { ArrowRight, Check } from 'lucide-react';
import PageIntro from '@/components/sonography/PageIntro';
import PatientNav from '@/components/sonography/PatientNav';
const guides = {
 preparation: { title: 'Before your ultrasound', description: 'A practical checklist to help you arrive with the information you need.', sections: [
  { title: 'Confirm the exact examination', text: 'Keep the examination name or referral available when speaking with the clinic. Check availability, referral requirements, fees, and how much time to allow for your visit.' },
  { title: 'Get your own preparation instructions', text: 'Preparation depends on the scan. Ask the clinic whether there are any food, drink, or bladder instructions for your examination. Check with your clinician before making changes to medication.' },
  { title: 'Organise what to bring', text: 'Ask whether you need identification, a referral, previous imaging, or relevant reports. Keep the details of your referring clinician available if a report needs to be shared.' },
  { title: 'Plan for your comfort', text: 'Ask in advance about accessibility, interpreter support, a companion, or a chaperone. Tell the clinic about arrangements that would help you attend.' },
  { title: 'If instructions are unclear', text: 'Contact the clinic before travelling. If you have not been able to follow the preparation, explain this so the clinic can advise you on the next step.' },
 ] },
 'your-visit': { title: 'On the day of your scan', description: 'Know what to discuss when you arrive and before you leave.', sections: [
  { title: 'At arrival', text: 'Have your appointment details and any requested documents ready. Confirm the examination you are attending for and mention any preparation questions.' },
  { title: 'Understand the examination', text: 'Ask the person performing the scan to explain what will happen. For an external scan, gel and a handheld probe are generally used on the skin. The approach depends on the examination.' },
  { title: 'Speak about your comfort', text: 'You can ask questions or ask for the examination to stop. Let the person scanning you know if you feel uncomfortable, and discuss any privacy or support needs.' },
  { title: 'Leave with a plan', text: 'Check the expected reporting process and who you should speak with about the findings. Keep any follow-up instructions with your appointment information.' },
 ] },
 results: { title: 'Your report and next steps', description: 'The questions to ask about receiving and discussing your scan report.', sections: [
  { title: 'Confirm the reporting arrangements', text: 'Ask when the report is expected, how it will be delivered, and who will receive it. MD Sonography reporting times and delivery methods are not yet confirmed.' },
  { title: 'Know who will explain the findings', text: 'Ask which healthcare professional will discuss the report with you and whether you need to arrange a follow-up appointment.' },
  { title: 'Keep your information together', text: 'Retain any report, appointment information, and follow-up instructions you receive. Ask how to request a copy if you need one for your ongoing care.' },
  { title: 'If you are waiting for a report', text: 'Use the contact route agreed with your clinic to ask about progress. Have the date of your examination and the examination name available.' },
 ] },
};
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(guides).map(topic => ({ topic })); }
export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
 const { topic } = await params;
 const guide = guides[topic as keyof typeof guides];
 return { title: guide?.title ?? 'Guide not found', description: guide?.description };
}
export default async function PatientGuide({ params }: { params: Promise<{ topic: string }> }) {
 const { topic } = await params;
 const guide = guides[topic as keyof typeof guides];
 if (!guide) notFound();
 return <Subpage kind={'patient-guide '+topic}><nav aria-label="Breadcrumb" className="section-wrap breadcrumb"><Link href="/md-sonography/patient-information">Patient information</Link><span>/</span><span aria-current="page">{guide.title}</span></nav><PageIntro eyebrow="YOUR PRACTICAL GUIDE" title={guide.title} description={guide.description}/>
 <section className="section-wrap section-space reading-layout"><aside className="reading-sidebar"><p className="eyebrow">IN THIS GUIDE</p><nav aria-label="Guide contents">{guide.sections.map((section,i)=><a key={section.title} href={'#step-'+(i+1)}><span>0{i+1}</span>{section.title}</a>)}</nav><Link href="/md-sonography/patient-information" className="text-link">All patient guides <ArrowRight size={16}/></Link></aside><article className="reading-content">{guide.sections.map((section,i)=><section key={section.title} id={'step-'+(i+1)} className="reading-step" data-reveal><span className="reading-step-number">0{i+1}</span><div><h2>{section.title}</h2><p>{section.text}</p></div></section>)}<div className="guide-takeaway" data-reveal><Check size={24}/><div><h2>Leave with a clear next step.</h2><p>Keep your questions together and confirm arrangements for your own examination with the clinic.</p></div></div><p className="source-note">General background: <a href="https://www.nhs.uk/tests-and-treatments/ultrasound-scan/">NHS ultrasound guide</a>. Follow the instructions for your own examination.</p></article></section>
 <section className="section-wrap section-space" data-reveal><div className="section-heading"><div><p className="eyebrow mb-3">CONTINUE YOUR JOURNEY</p><h2>What would you like to know next?</h2></div></div><PatientNav current={'/md-sonography/patient-information/'+topic}/></section></Subpage>;
}

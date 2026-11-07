import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Baby, Scan, HeartPulse, Activity } from 'lucide-react';
export const services = [
 { id: 'obstetric', title: 'Obstetric Ultrasound', description: 'Pregnancy imaging, with the scan type and timing guided by your maternity care team.', heroImage: '/md-sonography/images/heroes/home-clean-v2.png', image: '/md-sonography/images/photography/prenatal-ultrasound.jpg', icon: Baby },
 { id: 'general', title: 'General Ultrasound', description: 'Imaging of the abdomen or pelvis, based on the examination your clinician requests.', heroImage: '/md-sonography/images/heroes/general-clean-v2.png', image: '/md-sonography/images/photography/ultrasound-care.jpg', icon: Scan },
 { id: 'echocardiography', title: 'Echocardiography', description: 'Scans to assess the heart and how it functions.', heroImage: '/md-sonography/images/heroes/echocardiography-clean-v2.png', image: '/md-sonography/images/photography/sonographer.jpg', icon: HeartPulse },
 { id: 'doppler', title: 'Doppler Ultrasound', description: 'Scans to assess blood flow through blood vessels.', heroImage: '/md-sonography/images/heroes/doppler-clean-v2.png', image: '/md-sonography/images/photography/ultrasound-care.jpg', icon: Activity },
];
export function ServiceCards({ detailed = false }: { detailed?: boolean }) {
 return <div className="service-grid">{services.map(({ id, title, description, image, icon: Icon }, index) => <article key={id} className="service-card">
  <Link href={'/md-sonography/services/' + id} className="service-card-link">
   <div className="service-card-photo"><Image src={id === 'doppler' ? '/md-sonography/images/photography/ultrasound-examination.jpg' : image} alt="" fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw" className="object-cover"/></div>
   <div className="service-card-body"><div className="service-card-meta"><Icon size={21} aria-hidden="true"/><span>0{index + 1}</span></div><h3>{title}</h3><p>{description}</p><span className="service-card-action">{detailed ? 'Read examination guide' : 'Explore this scan'}<ArrowRight size={17} aria-hidden="true"/></span></div>
  </Link>
 </article>)}</div>;
}
export function AppointmentCTA() {
 return <section className="bg-mint py-14"><div className="section-wrap flex flex-col md:flex-row md:items-center justify-between gap-6"><div><p className="eyebrow mb-3">YOUR NEXT STEP</p><h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to plan your visit?</h2><p className="text-slate-600">Find practical guidance on preparation, referrals, and what to bring.</p></div><Link href="/md-sonography/patient-information" className="btn btn-primary self-start shrink-0">Plan your visit <ArrowRight size={17}/></Link></div></section>;
}
export function VisitSteps() {
 return <div className="grid md:grid-cols-3 gap-5">{[['01', 'Confirm your scan', 'Have your examination name or referral ready. Check service availability, fees, and appointment arrangements with the clinic.'], ['02', 'Plan ahead', 'Ask for preparation instructions for your exact scan, what to bring, and any support you need during your visit.'], ['03', 'Know your next steps', 'Before leaving, ask when your report will be ready, who receives it, and who will explain the findings to you.']].map(([n, title, text]) => <div key={n} className="visit-step"><span className="step-number">{n}</span><h3 className="text-lg font-bold mt-4 mb-2">{title}</h3><p className="text-sm text-slate-600 leading-relaxed">{text}</p></div>)}</div>;
}
export function FAQ({ items }: { items?: [string, string][] }) {
 const questions = items ?? [
 ['How should I prepare for my ultrasound?', 'Preparation varies by examination. Contact the clinic for instructions before changing food, drink, or medication.'],
 ['What should I bring?', 'Ask whether a referral, identification, or previous imaging reports are required for your visit.'],
 ['Do I need a referral?', 'Referral requirements for MD Sonography are awaiting confirmation. Check with the clinic before arranging a scan, and have any existing referral available.'],
 ['How will I receive my results?', 'Ask the clinic when your report will be available, how it will be shared, and which healthcare professional will discuss it with you. Reporting arrangements have not yet been confirmed for MD Sonography.'],
 ['Can someone come with me?', 'If you would like a companion, chaperone, interpreter, or accessibility support, ask about arrangements before your appointment.'],
 ['Can I book online?', 'Online appointment requests are coming soon. Booking options will appear on the appointments page when available.'],
 ];
 return <div className="visit-faq">{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>;
}

export const examinationGuides = [
 { id: 'obstetric', title: 'Obstetric ultrasound', intro: 'Pregnancy scans have different purposes at different stages. Your maternity care team can explain which examination is appropriate and when it should take place.', questions: ['What is the exact scan requested by my maternity care team?', 'When should this examination take place?', 'What preparation and accompanying-person arrangements apply?'] },
 { id: 'general', title: 'General ultrasound', intro: 'An abdominal or pelvic examination focuses on a particular area. Giving the clinic the exact wording of your referral helps clarify which appointment you need.', questions: ['Does the clinic perform the examination on my referral?', 'Are there specific food, drink, or bladder preparation instructions?', 'What previous reports or images should I bring?'] },
 { id: 'echocardiography', title: 'Echocardiography', intro: 'This category concerns ultrasound imaging of the heart. Confirm the requested examination and whether the clinic provides it before making arrangements.', questions: ['Which type of heart examination has been requested?', 'Is this examination available at the clinic?', 'Who will receive and explain the report?'] },
 { id: 'doppler', title: 'Doppler ultrasound', intro: 'This category concerns assessment of blood flow. The body area and examination name matter when checking whether a clinic can carry out the requested scan.', questions: ['Which area or blood vessels need to be examined?', 'Does the clinic offer the exact scan requested?', 'What preparation and reporting arrangements apply?'] },
];
export function ExaminationGuide() {
 return <div className="examination-guides">{examinationGuides.map(({id,title,intro,questions}, index) => <article id={id} key={id} className="examination-guide"><div><p className="eyebrow mb-3">EXAMINATION GUIDE / 0{index + 1}</p><h3 className="text-2xl font-bold mb-4">{title}</h3><p className="text-slate-600 leading-relaxed">{intro}</p><Link href={'/md-sonography/services/' + id} className="text-link mt-5">Read the full examination guide <ArrowRight size={17}/></Link></div><div><h4 className="font-bold mb-4">Questions to ask before arranging a scan</h4><ul className="space-y-3 list-disc pl-5 text-slate-600">{questions.map(question => <li key={question}>{question}</li>)}</ul></div></article>)}</div>;
}

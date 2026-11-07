import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export const patientLinks = [
 { href: '/md-sonography/patient-information/preparation', title: 'Before your scan', text: 'A practical checklist for planning your visit.' },
 { href: '/md-sonography/patient-information/your-visit', title: 'On the day', text: 'Questions about the examination and your comfort.' },
 { href: '/md-sonography/patient-information/results', title: 'Reports and next steps', text: 'Know what to confirm about receiving your report.' },
 { href: '/md-sonography/faq', title: 'Frequently asked questions', text: 'Appointments, referrals, preparation, and more.' },
];
export default function PatientNav({ current }: { current?: string }) {
 return <nav aria-label="Patient guides" className="grid sm:grid-cols-2 gap-5">{patientLinks.filter(link => link.href !== current).map(link => <Link key={link.href} href={link.href} className="guide-link"><h3>{link.title}<ArrowRight size={18} aria-hidden="true"/></h3><p>{link.text}</p></Link>)}</nav>;
}

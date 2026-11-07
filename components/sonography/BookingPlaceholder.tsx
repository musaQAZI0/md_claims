import Link from 'next/link';
import { CalendarDays, MessageCircle, ArrowRight } from 'lucide-react';

export default function BookingPlaceholder({ appointment = false }: { appointment?: boolean }) {
 const Icon = appointment ? CalendarDays : MessageCircle;
 return <aside className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-white shadow-sm" aria-labelledby="availability-title">
  <span className="inline-flex bg-mint text-teal p-4 rounded-2xl mb-6"><Icon size={28} aria-hidden="true"/></span>
  <p className="eyebrow mb-3">COMING SOON</p>
  <h2 id="availability-title" className="text-2xl font-bold mb-4">{appointment ? 'Online appointment requests' : 'Online inquiries'}</h2>
  <p className="text-slate-600 leading-relaxed mb-6">{appointment ? 'Our booking service is being prepared. Appointment requests and available times will appear here once online booking opens.' : 'Our contact service is being prepared. Clinic contact details and online inquiries will be available here soon.'}</p>
  <div className="rounded-xl bg-pearl p-5 mb-6"><p className="font-semibold mb-2">In the meantime</p><p className="text-sm text-slate-600">Explore examination information and prepare your questions before arranging a visit.</p></div>
  <Link href="/md-sonography/patient-information" className="text-link">Read the visit guide <ArrowRight size={17} aria-hidden="true"/></Link>
 </aside>;
}

import Link from "next/link";
import { ArrowLeft, HeartPulse } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

const quick = [["Home", "#home"], ["About", "#about"], ["Services", "#services"], ["Specialties", "#specialties"], ["Contact", "/md-claims/contact/"]] as const;


export function Footer() {
  return <footer className="bg-[#061726] text-white"><Container className="py-8 sm:py-10"><div><div><Link href="/md-claims/" className="flex items-center gap-2.5"><span className="brand-mark brand-mark-small"><HeartPulse size={21} /></span><span className="text-xl font-extrabold">MD Billing</span></Link><p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Professional medical billing, claims management, and revenue cycle support for healthcare practices.</p><p className="mt-5 text-sm text-slate-400">[Add Email]<br />[Add Phone]</p></div><div className="mt-6 grid grid-cols-3 gap-3 sm:gap-6"> <FooterColumn title="Quick Links">{quick.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</FooterColumn><FooterColumn title="Our Services">{services.map((item) => <Link key={item.slug} href={`/md-claims/services/${item.slug}`}>{item.title}</Link>)}</FooterColumn><FooterColumn title="Legal"><Link href="/privacy-policy/">Privacy Policy</Link><Link href="/terms-of-service/">Terms of Service</Link></FooterColumn></div></div><div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>Copyright {new Date().getFullYear()} MD Billing. All rights reserved.</p><Link href="/" className="inline-flex items-center gap-2 font-bold text-slate-300 hover:text-white"><ArrowLeft size={16} /> MD Medical Services</Link></div></Container></footer>;
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) { return <div><h3 className="font-extrabold">{title}</h3><div className="mt-3 flex flex-col gap-2 text-xs sm:text-sm text-slate-400 [&_a]:transition-colors [&_a:hover]:text-white">{children}</div></div>; }






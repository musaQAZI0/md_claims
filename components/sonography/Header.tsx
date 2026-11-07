'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { BrandMark } from '@/components/ui/BrandMark';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [['Home', '/md-sonography/'], ['About', '/md-sonography/about'], ['Services', '/md-sonography/services'], ['Plan Your Visit', '/md-sonography/patient-information'], ['FAQs', '/md-sonography/faq'], ['Appointments', '/md-sonography/appointment'], ['Contact', '/md-sonography/contact']];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  return <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
    <div className="section-wrap h-20 flex items-center justify-between gap-5">
      <Link href="/md-sonography/" className="flex items-center gap-2.5 shrink-0" aria-label="MD Sonography home" onClick={() => setOpen(false)}><BrandMark /><span className="text-xl font-extrabold tracking-tight text-navy">MD Sonography</span></Link>
      <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-4">
        {links.map(([name, href]) => <Link className="text-sm font-semibold hover:text-teal" href={href} aria-current={(pathname.replace(/\/$/, "") === href.replace(/\/$/, "") || (href !== "/md-sonography/" && pathname.startsWith(href + "/"))) ? "page" : undefined} key={name}>{name}</Link>)}
      </nav>
      <button ref={menuButton} type="button" className="xl:hidden menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X size={21} /> : <Menu size={21} />}<span>{open ? 'Close' : 'Menu'}</span></button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="xl:hidden mobile-navigation">
      {links.map(([name, href]) => <Link key={name} href={href} aria-current={(pathname.replace(/\/$/, "") === href.replace(/\/$/, "") || (href !== "/md-sonography/" && pathname.startsWith(href + "/"))) ? "page" : undefined} onClick={() => setOpen(false)} className="text-sm font-semibold">{name}</Link>)}
    </nav>}
  </header>;
}

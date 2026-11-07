import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
type Props = { eyebrow: string; title: string; description: string; primaryHref?: string; primaryLabel?: string; note?: string; secondary?: { label: string; href: string } };
export default function PageIntro({ eyebrow, title, description, primaryHref, primaryLabel = 'Plan your visit', secondary, note }: Props) {
 return <header className="editorial-heading section-wrap"><p className="eyebrow">{eyebrow}</p><div className="editorial-heading-grid"><h1>{title}</h1><div><p className="editorial-description">{description}</p>{(primaryHref || secondary) && <div className="page-intro-actions">{primaryHref && <Link href={primaryHref} className="text-link">{primaryLabel}<ArrowRight size={17} aria-hidden="true"/></Link>}{secondary && secondary.href !== primaryHref && <Link href={secondary.href} className="page-intro-secondary">{secondary.label}</Link>}</div>}{note && <p className="hero-note">{note}</p>}</div></div></header>;
}

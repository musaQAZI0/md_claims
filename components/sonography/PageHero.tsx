import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = { eyebrow: string; title: string; description: string; image: string; alt: string; primaryHref?: string; primaryLabel?: string; note?: string; panoramic?: boolean; secondary?: { label: string; href: string } };
export default function PageHero({ eyebrow, title, description, image, alt, secondary, primaryHref = '/md-sonography/patient-information', primaryLabel = 'Plan your visit', note, panoramic = true }: Props) {
  return <section className={`home-hero${panoramic ? ' hero-panoramic' : ''}`}><div className="section-wrap home-hero-layout">
    <div className="home-hero-copy"><p className="eyebrow mb-5">{eyebrow}</p><h1 className="font-bold leading-[1.1] tracking-tight mb-6">{title}</h1><p className="text-slate-600 leading-relaxed max-w-lg mb-8">{description}</p><div className="flex flex-wrap gap-3"><Link href={primaryHref} className="btn btn-primary">{primaryLabel} <ArrowRight size={17}/></Link>{secondary && secondary.href !== primaryHref && <Link href={secondary.href} className="btn btn-outline">{secondary.label}</Link>}</div>{note && <p className="hero-note">{note}</p>}</div>
    <div className="hero-visual"><Image src={image} alt={alt} fill priority sizes={panoramic ? '100vw' : '(min-width: 1200px) 560px, (min-width: 1024px) 50vw, 100vw'} className="hero-image"/></div>
  </div></section>;
}

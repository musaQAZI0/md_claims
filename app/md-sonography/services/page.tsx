import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import PageIntro from '@/components/sonography/PageIntro';
import Subpage from '@/components/sonography/Subpage';
import { services } from '@/components/sonography/Content';
export const metadata: Metadata = { title: 'Services' };
export default function Services() {
 return <Subpage kind="services-page"><PageIntro eyebrow="02 / EXAMINATION DIRECTORY" title="Find the scan on your referral." description="Explore the examination categories below. Your referring clinician can help you understand which scan is appropriate."/>
 <section className="section-wrap section-space catalog-layout"><aside className="directory-sidebar"><p className="eyebrow">IN THIS DIRECTORY</p><nav aria-label="Examination directory">{services.map((s,i)=><a key={s.id} href={'#'+s.id}><span>0{i+1}</span>{s.title}</a>)}</nav><p className="small-note">Availability and offered examinations must be confirmed with the clinic.</p></aside><div className="catalog-list">{services.map(({id,title,description,image,icon:Icon},i)=><article id={id} className="catalog-row" key={id} data-reveal><div className="catalog-copy"><span className="catalog-number">0{i+1} <Icon size={22}/></span><h2>{title}</h2><p>{description}</p><Link className="text-link" href={'/md-sonography/services/'+id}>Read the examination guide <ArrowUpRight size={19}/></Link></div><Link href={'/md-sonography/services/'+id} className="catalog-photo" aria-label={'Explore '+title}><Image src={image} alt="" fill sizes="(min-width: 900px) 260px, 100vw" className="object-cover"/></Link></article>)}</div></section>
 <section className="section-wrap section-space" data-reveal><div className="help-strip"><div><p className="eyebrow">NOT SURE WHERE TO START?</p><h2>Keep the wording of your referral handy.</h2><p>Confirm the exact examination, preparation, and referral requirements before arranging a visit.</p></div><Link href="/md-sonography/patient-information/preparation" className="text-link">Preparation checklist <ArrowRight size={17}/></Link></div></section></Subpage>;
}

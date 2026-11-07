"use client";
import { useEffect, useRef } from 'react';

export default function Subpage({ children, kind = '' }: { children: React.ReactNode; kind?: string }) {
 const root = useRef<HTMLDivElement>(null);
 useEffect(() => {
  if (!root.current || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); } });
  }, { threshold: .08 });
  root.current.querySelectorAll('[data-reveal]').forEach(node => observer.observe(node));
  return () => observer.disconnect();
 }, []);
 return <div ref={root} className={`subpage ${kind}`}>{children}</div>;
}

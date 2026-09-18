export function HeroImage({ image, className = "" }: { image: string; className?: string }) {
  return <div aria-hidden="true" className={`hero-image ${className}`} style={{ backgroundImage: `url("${image}")` }} />;
}

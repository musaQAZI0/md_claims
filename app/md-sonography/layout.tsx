import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/sonography/Header';
import Footer from '@/components/sonography/Footer';
import './globals.css';
const sora = localFont({ src: '../../public/md-sonography/fonts/sora/Sora-Variable.ttf', variable: '--font-sora', display: 'swap', weight: '100 800' });
export const metadata: Metadata = { title: { default: 'MD Sonography | Precision in Every Image', template: '%s | MD Sonography' }, description: 'Explore ultrasound imaging, patient information, and appointment options with MD Sonography.', icons: { icon: [{ url: '/md-sonography/brand/favicon-v2.ico', sizes: '16x16 32x32 48x48' }, { url: '/md-sonography/brand/icon-v2.svg', type: 'image/svg+xml', sizes: 'any' }], shortcut: '/md-sonography/brand/favicon-v2.ico', apple: [{ url: '/md-sonography/brand/apple-touch-icon-v2.png', sizes: '180x180', type: 'image/png' }] } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <div className={`${sora.variable} sonography-site`}><a href="#main-content" className="skip-link">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/></div>;
}

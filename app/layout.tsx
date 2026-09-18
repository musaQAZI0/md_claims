import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: { default: "MD Medical Services", template: "%s" },
  description: "Professional healthcare administrative services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={manrope.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}

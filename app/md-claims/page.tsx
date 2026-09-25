import type { Metadata } from "next";
import { About } from "@/components/md-claims/About";
import { Footer } from "@/components/md-claims/Footer";
import { Header } from "@/components/md-claims/Header";
import { Hero } from "@/components/md-claims/Hero";
import { Process } from "@/components/md-claims/Process";
import { Services } from "@/components/md-claims/Services";
import { Specialties } from "@/components/md-claims/Specialties";
import { WhyChoose } from "@/components/md-claims/WhyChoose";

export const metadata: Metadata = {
  title: "MD Billing | Medical Billing & Claims Management",
  description: "Professional medical billing, claims management, and revenue cycle support for healthcare practices.",
};

export default function MDClaimsPage() {
  return <><Header /><main><Hero /><About /><Services /><Specialties preview /><WhyChoose /><Process /></main><Footer /></>;
}






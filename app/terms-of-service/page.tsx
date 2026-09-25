import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
export const metadata: Metadata = { title: "Terms of Service | MD Billing", description: "Terms of service placeholder for MD Billing." };
export default function TermsPage() { return <LegalPage title="Terms of Service" intro="This page is a placeholder for the final MD Billing terms of service." sections={["Use of This Website", "Service Information", "Intellectual Property", "Limitations", "Contact Information"]} />; }


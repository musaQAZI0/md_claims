import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
export const metadata: Metadata = { title: "Privacy Policy | MD Billing", description: "Privacy policy placeholder for MD Billing." };
export default function PrivacyPolicyPage() { return <LegalPage title="Privacy Policy" intro="This page is a placeholder for the final MD Billing privacy policy." sections={["Information We Collect", "How Information Is Used", "Data Retention and Security", "Your Choices", "Contact Information"]} />; }


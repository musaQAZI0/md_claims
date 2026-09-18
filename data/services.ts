import { BarChart3, Building2, ClipboardCheck, FileCheck2, Handshake, ScanSearch } from "lucide-react";

export const services = [
  { slug: "front-office-management", title: "Front Office Management", description: "Support for organized front-office workflows, appointment coordination, and insurance verification tasks.", icon: Building2 },
  { slug: "medical-coding", title: "Medical Coding", description: "Careful coding support that helps healthcare practices maintain clear and consistent claim documentation.", icon: ClipboardCheck },
  { slug: "medical-billing", title: "Medical Billing", description: "Structured billing support for accurate submissions, claim follow-up, and smoother administrative workflows.", icon: FileCheck2 },
  { slug: "credentialing-solutions", title: "Credentialing Solutions", description: "Administrative support for provider enrollment and credentialing workflows, coordinated around practice needs.", icon: Handshake },
  { slug: "billing-reports", title: "Billing Reports", description: "Clear reporting support to help practices review billing activity and make informed operational decisions.", icon: BarChart3 },
  { slug: "practice-audit", title: "Practice Audit", description: "A structured review of billing workflows to identify opportunities for stronger organization and follow-through.", icon: ScanSearch },
] as const;
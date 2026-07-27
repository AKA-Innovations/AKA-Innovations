import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Redesigned Parallax & Storytelling Services Components
import ServicesHero from "@/components/services/ServicesHero";
import ServicesStoryline from "@/components/services/ServicesStoryline";
import DeliveryMethodology from "@/components/services/DeliveryMethodology";
import ServicesTrust from "@/components/services/ServicesTrust";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Engineering Services | AKA Innovations",
  description: "Expert engineering services across 5 disciplines: AI/ML systems, cloud-native web infrastructure, cross-platform mobility, enterprise SaaS/ERPs, and UI/UX design systems.",
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Engineering Services",
      "description": "Expert engineering services across AI/ML systems, cloud-native web infrastructure, cross-platform mobility, enterprise SaaS/ERPs, and UI/UX design systems.",
      "url": "https://www.akainnovations.com/services",
      "provider": {
        "@type": "Organization",
        "name": "AKA Innovations"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.akainnovations.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.akainnovations.com/services"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen w-full flex flex-col bg-white dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 font-geist selection:bg-cyan-400/20 selection:text-cyan-600 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* 5-Phase Parallax & Storytelling Engineering Services */}
      <ServicesHero />
      <ServicesStoryline />
      <DeliveryMethodology />
      <ServicesTrust />
      <ServicesCTA />

      <Footer />
    </main>
  );
}
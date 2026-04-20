import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EngineeringServices } from "@/components/engineering/EngineeringServices";

export const metadata: Metadata = {
  title: "Engineering Services | AKA Innovations",
  description: "Expert engineering services including web development, cloud solutions, Enterprise SaaS, Software ERPs, AI/ML integration, and system architecture.",
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Engineering Services",
      "description": "Expert engineering services including web development, cloud solutions, Enterprise SaaS, Software ERPs, AI/ML integration, and system architecture.",
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
    <div className="min-h-screen w-full flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <EngineeringServices />
      <Footer />
    </div>
  );
}
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EngineeringServices } from "@/components/engineering/EngineeringServices";

export const metadata: Metadata = {
  title: "Engineering Services | AKA Innovations",
  description: "Expert engineering services including web development, cloud solutions, AI/ML integration, and system architecture.",
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Engineering Services",
    "description": "Expert engineering services including web development, cloud solutions, AI/ML integration, and system architecture.",
    "url": "https://aka-innovations.com/services",
    "provider": {
      "@type": "Organization",
      "name": "AKA Innovations"
    }
  };

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
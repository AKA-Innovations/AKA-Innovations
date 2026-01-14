import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { FeaturedSolutions } from "@/components/layout/FeaturedSolutions";
import { Services } from "@/components/layout/Services";
import { Contact } from "@/components/layout/Contact";
import { Team } from "@/components/layout/Team";
import { HowWeWork } from "@/components/layout/HowWeWork";
import { ConceptBuilds } from "@/components/layout/ConceptBuilds";

import { AmbientBackground } from "@/components/layout/AmbientBackground";

export const metadata: Metadata = {
  title: "AKA Innovations | Product-First Engineering Team",
  description: "We are an engineering team helping businesses design, build, and scale custom digital systems. No fluff, just shipping.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AKA Innovations",
    "description": "Product-first engineering team for early and mid-stage businesses.",
    "url": "https://aka-innovations.com",
    "publisher": {
      "@type": "Organization",
      "name": "AKA Innovations",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aka-innovations.com/logo.svg"
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmbientBackground />
      <Header />
      <Hero />
      <HowWeWork />
      <ConceptBuilds />
      <FeaturedSolutions />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

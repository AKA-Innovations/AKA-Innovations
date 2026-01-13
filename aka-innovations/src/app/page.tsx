import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { FeaturedSolutions } from "@/components/layout/FeaturedSolutions";
import { Services } from "@/components/layout/Services";
import { Contact } from "@/components/layout/Contact";
import { Team } from "@/components/layout/Team";

import { AmbientBackground } from "@/components/layout/AmbientBackground";

export const metadata: Metadata = {
  title: "AKA Innovations | Digital Engineering & Product Solutions",
  description: "Transforming ideas into digital reality. AKA Innovations specializes in high-quality software engineering and product health assessments.",
};

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <AmbientBackground />
      <Header />
      <Hero />
      <FeaturedSolutions />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

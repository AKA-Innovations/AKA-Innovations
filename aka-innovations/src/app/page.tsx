"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { FeaturedSolutions } from "@/components/layout/FeaturedSolutions";
import { Services } from "@/components/layout/Services";
import { Contact } from "@/components/layout/Contact";
import { Team } from "@/components/layout/Team";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col  bg-[#e8eaed]">
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

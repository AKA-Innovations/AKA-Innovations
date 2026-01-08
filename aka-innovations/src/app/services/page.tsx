"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EngineeringServices } from "@/components/engineering/EngineeringServices";

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <EngineeringServices />
      <Footer />
    </div>
  );
}
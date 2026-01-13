import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { HealthHero } from "@/components/producthealth/HealthHero";
import { ProblemsSection } from "@/components/producthealth/ProblemsSection";
import { DifferenceSection } from "@/components/producthealth/DifferenceSection";

export const metadata: Metadata = {
    title: "Product Health Check | AKA Innovations",
    description: "Assess and improve your software's health. Identify technical debt, optimize performance, and ensure scalability with our comprehensive product health check.",
};

import { PlatformCapabilitiesSection } from "@/components/producthealth/PlatformCapabilitiesSection";
import { TargetAudienceSection } from "@/components/producthealth/TargetAudienceSection";
import { TrustSection } from "@/components/producthealth/TrustSection";
import { HealthFooter } from "@/components/producthealth/HealthFooter";
import { Footer } from "@/components/layout/Footer";
import FeaturesSection from "@/components/producthealth/FeaturesSection";

export default function HealthConnectPage() {
    return (
        <div className="min-h-screen bg-(--color-health-bg)">
            <Header />
            <HealthHero />
            <ProblemsSection />
            <DifferenceSection />
            <FeaturesSection />
            <PlatformCapabilitiesSection />
            <TargetAudienceSection />
            <TrustSection />
            <Footer />
        </div>
    );
}
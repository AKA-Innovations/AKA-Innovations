import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { HealthHero } from "@/components/producthealth/HealthHero";
import { ProblemsSection } from "@/components/producthealth/ProblemsSection";
import { DifferenceSection } from "@/components/producthealth/DifferenceSection";

export const metadata: Metadata = {
    title: "Product Health Check | Healthcare Monitoring Systems | AKA Innovations",
    description: "Assess and improve your software's health. Identify technical debt, optimize performance, and scale with our comprehensive product health check and healthcare monitoring systems.",
    alternates: { canonical: '/producthealth' },
};

import { PlatformCapabilitiesSection } from "@/components/producthealth/PlatformCapabilitiesSection";
import { TargetAudienceSection } from "@/components/producthealth/TargetAudienceSection";
import { TrustSection } from "@/components/producthealth/TrustSection";
import { HealthFooter } from "@/components/producthealth/HealthFooter";
import { Footer } from "@/components/layout/Footer";
import FeaturesSection from "@/components/producthealth/FeaturesSection";

export default function HealthConnectPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Product Health Check & Healthcare Monitoring System",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": "Comprehensive product health check service, identifying technical debt and optimizing performance for enterprise applications and healthcare monitoring systems.",
        "provider": {
            "@type": "Organization",
            "name": "AKA Innovations"
        },
        "url": "https://www.akainnovations.com/producthealth"
    };

    return (
        <div className="min-h-screen bg-(--color-health-bg)">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
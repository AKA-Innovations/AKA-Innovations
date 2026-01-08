import { Header } from "@/components/layout/Header";
import { HealthHero } from "@/components/producthealth/HealthHero";
import { ProblemsSection } from "@/components/producthealth/ProblemsSection";
import { DifferenceSection } from "@/components/producthealth/DifferenceSection";

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
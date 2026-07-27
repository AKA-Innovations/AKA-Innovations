import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Redesigned Non-AI Product Health Components
import { HealthHero } from '@/components/producthealth/HealthHero';
import { ProblemsSection } from '@/components/producthealth/ProblemsSection';
import { DifferenceSection } from '@/components/producthealth/DifferenceSection';
import FeaturesSection from '@/components/producthealth/FeaturesSection';
import { LiveTriage } from '@/components/producthealth/LiveTriage';
import { TargetAudienceSection } from '@/components/producthealth/TargetAudienceSection';
import { TrustSection } from '@/components/producthealth/TrustSection';
import { FinalCTA } from '@/components/producthealth/FinalCTA';

export const metadata: Metadata = {
    title: 'Health-Connect PaaS | Continuous Care & Tele-Triage Platform | AKA Innovations',
    description: 'A continuous care healthcare platform-as-a-service (PaaS). Connect patients with clinicians, stream wearable telemetry, automate triage alerts, and sync EHR records.',
    keywords: [
        'Healthcare PaaS', 'Health-Connect', 'Continuous Care Platform', 
        'Tele-triage Software', 'EMR EHR Integration', 'HIPAA Compliant Healthcare Platform', 
        'Remote Patient Telemetry', 'Clinical Workflow Automation', 'Digital Health Infrastructure'
    ],
    openGraph: {
        title: 'Health-Connect PaaS | Continuous Care & Tele-Triage Platform',
        description: 'Transform digital care delivery. Continuous vitals telemetry, automated tele-triage, and native EMR interoperability.',
        url: 'https://www.akainnovations.com/producthealth',
        siteName: 'AKA Innovations',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Health-Connect PaaS Healthcare Platform',
        description: 'A Continuous Care Healthcare Platform — Not Just Another Consultation App.',
    },
    alternates: { canonical: '/producthealth' },
};

export default function HealthConnectPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'AKA Innovations Health-Connect PaaS',
        'applicationCategory': 'HealthApplication',
        'operatingSystem': 'Web, iOS, Android',
        'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock',
        },
        'description': 'Continuous care healthcare platform-as-a-service connecting patients, clinicians, and enterprise hospital systems.',
        'provider': {
            '@type': 'Organization',
            'name': 'AKA Innovations',
            'url': 'https://www.akainnovations.com'
        },
        'url': 'https://www.akainnovations.com/producthealth'
    };

    return (
        <main className="min-h-screen bg-white dark:bg-[#07111f] text-slate-900 dark:text-slate-100 font-jakarta selection:bg-cyan-400/20 selection:text-cyan-600 transition-colors duration-300">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            
            {/* Redesigned 8-section architecture */}
            <HealthHero />
            <ProblemsSection />
            <DifferenceSection />
            <FeaturesSection />
            <LiveTriage />
            <TargetAudienceSection />
            <TrustSection />
            <FinalCTA />
            
            <Footer />
        </main>
    );
}
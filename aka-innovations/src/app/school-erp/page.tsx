import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Newly Redesigned School ERP components
import Hero from '@/components/school-erp/Hero';
import ProblemStatement from '@/components/school-erp/ProblemStatement';
import TraditionalVsAgentic from '@/components/school-erp/TraditionalVsAgentic';
import AgentWorkforce from '@/components/school-erp/AgentWorkforce';
import ModuleOperations from '@/components/school-erp/ModuleOperations';
import AgentSimulations from '@/components/school-erp/AgentSimulations';
import HowItWorks from '@/components/school-erp/HowItWorks';
import SecurityGovernance from '@/components/school-erp/SecurityGovernance';
import BenefitsList from '@/components/school-erp/BenefitsList';
import FeatureDirectory from '@/components/school-erp/FeatureDirectory';
import ComparisonTable from '@/components/school-erp/ComparisonTable';
import SEOAuthority from '@/components/school-erp/SEOAuthority';
import FAQSection from '@/components/school-erp/FAQSection';
import FinalCTA from '@/components/school-erp/FinalCTA';

export const metadata: Metadata = {
    title: 'Modern School ERP Software with Agentic AI | AKA Innovations',
    description: 'The School ERP that works both ways. Combine traditional school management software (dashboards, forms, reports) with actionable Agentic AI for teachers, parents, and principals.',
    keywords: [
        'School ERP', 'School ERP Software', 'School Management Software', 
        'School ERP India', 'Best School ERP', 'Online School ERP', 
        'Cloud School ERP', 'AI School ERP', 'AI Powered School ERP', 
        'Agentic AI ERP', 'Agentic School ERP', 'School ERP with AI', 
        'AI School Management Software', 'Generative AI ERP', 'School Automation Software', 
        'Attendance Management System', 'Examination Management System', 
        'School Operating System', 'Education ERP', 'Student Information System', 'School Administration Software'
    ],
    openGraph: {
        title: 'Modern School ERP Software with Agentic AI | AKA Innovations',
        description: 'Transform school management. Seamlessly toggle between traditional dashboards and natural-language AI agents. The School ERP that works both ways.',
        url: 'https://www.akainnovations.com/school-erp',
        siteName: 'AKA Innovations',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Modern School ERP Software with Agentic AI',
        description: 'Combine traditional school management software dashboards with actionable Agentic AI.',
    },
    alternates: { canonical: '/school-erp' },
};

export default function SchoolERPPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'AKA Innovations Agentic School ERP & Operating System',
        'applicationCategory': 'EducationalApplication',
        'operatingSystem': 'Web, iOS, Android',
        'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock',
        },
        'description': 'A category-defining School ERP platform combining traditional administrative workflows (Student records, Fees, Exams, Timetables) with natural language Agentic AI execution.',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'ratingCount': '184',
        },
        'author': {
            '@type': 'Organization',
            'name': 'AKA Innovations',
            'url': 'https://www.akainnovations.com',
        },
    };

    return (
        <main className="min-h-screen bg-[#080d1a] text-white font-inter selection:bg-blue-500/20 selection:text-blue-300">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            
            {/* Redesigned structured sections */}
            <Hero />
            <ProblemStatement />
            <TraditionalVsAgentic />
            <AgentWorkforce />
            <ModuleOperations />
            
            <div id="simulation">
                <AgentSimulations />
            </div>
            
            <HowItWorks />
            <SecurityGovernance />
            <BenefitsList />
            <FeatureDirectory />
            <ComparisonTable />
            <SEOAuthority />
            <FAQSection />
            <FinalCTA />
            
            <Footer />
        </main>
    );
}

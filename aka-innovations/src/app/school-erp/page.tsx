import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Redesigned School ERP Components with Theme Support & Finger Paint font
import Hero from '@/components/school-erp/Hero';
import ProblemStatement from '@/components/school-erp/ProblemStatement';
import DualEngine from '@/components/school-erp/DualEngine';
import AgentWorkforce from '@/components/school-erp/AgentWorkforce';
import ModuleGrid from '@/components/school-erp/ModuleGrid';
import LiveDemo from '@/components/school-erp/LiveDemo';
import SocialProof from '@/components/school-erp/SocialProof';
import FAQ from '@/components/school-erp/FAQ';
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
        <main className="min-h-screen bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-geist selection:bg-amber-400/20 selection:text-amber-600 transition-colors duration-300">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            
            {/* Dual Theme Light & Dark Compatible Components */}
            <Hero />
            <ProblemStatement />
            <DualEngine />
            <AgentWorkforce />
            <ModuleGrid />
            <LiveDemo />
            <SocialProof />
            <FAQ />
            <FinalCTA />
            
            <Footer />
        </main>
    );
}

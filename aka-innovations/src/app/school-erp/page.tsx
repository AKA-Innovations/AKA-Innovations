import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Hero from '@/components/school-erp/Hero';
import ProblemStatement from '@/components/school-erp/ProblemStatement';
import Solution from '@/components/school-erp/Solution';
import StudentApp from '@/components/school-erp/StudentApp';
import DashboardHighlights from '@/components/school-erp/DashboardHighlights';
import SmartFeatures from '@/components/school-erp/SmartFeatures';
import TechStack from '@/components/school-erp/TechStack';
import UniqueSellingPoints from '@/components/school-erp/UniqueSellingPoints';
import CallToAction from '@/components/school-erp/CallToAction';

export const metadata: Metadata = {
    title: 'Modern School ERP Software & Mobile App | AKA Innovations',
    description: 'A complete, scalable, and intelligent school management system. Unified attendance, academics, fees, and communication for modern Indian institutions.',
    keywords: ['School ERP', 'School Management Software', 'Student Information System', 'School Mobile App', 'Attendance Management', 'Fee Management Software', 'AKA Innovations'],
    openGraph: {
        title: 'Modern School ERP Software & Mobile App | AKA Innovations',
        description: 'Transform your school operations with our unified, cloud-based ERP ecosystem. Trusted by modern institutions.',
        url: 'https://www.akainnovations.com/school-erp',
        siteName: 'AKA Innovations',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Modern School ERP Software & Mobile App',
        description: 'Unified attendance, academics, and fees management for forward-thinking schools.',
    },
    alternates: { canonical: '/school-erp' },
};

export default function SchoolERPPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'Modern School ERP & Mobile Ecosystem',
        'applicationCategory': 'EducationalApplication',
        'operatingSystem': 'Web, iOS, Android',
        'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock',
        },
        'description': 'A complete, scalable, and intelligent digital ecosystem for modern schools. Unified attendance, academics, communication, and fees management.',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'ratingCount': '124',
        },
        'author': {
            '@type': 'Organization',
            'name': 'AKA Innovations',
            'url': 'https://www.akainnovations.com',
        },
    };

    return (
        <main className="min-h-screen bg-white text-slate-900 font-inter selection:bg-blue-100 selection:text-blue-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <Hero />
            <ProblemStatement />
            <Solution />
            <StudentApp />
            <DashboardHighlights />
            <SmartFeatures />
            <TechStack />
            <UniqueSellingPoints />
            <CallToAction />
            <Footer />
        </main>
    );
}

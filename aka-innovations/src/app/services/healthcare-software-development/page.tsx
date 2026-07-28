import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { Stethoscope, ShieldCheck, Activity, Cpu, ArrowRight, HeartPulse, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare Software Development & Medical Apps | AKA Innovations',
  description: 'Custom HIPAA-compliant medical app development, AI diagnostics integration, telemedicine solutions, and EHR/EMR platforms designed for healthcare providers.',
  keywords: [
    'Medical App Development',
    'Healthcare Software Engineering',
    'HIPAA Compliant Medical App',
    'Telemedicine Software Development',
    'AI Healthcare Solutions',
    'EHR EMR Integration',
    'Medical Device Software',
    'Digital Health Solutions India',
    'Healthcare SaaS Engineering'
  ],
  alternates: { canonical: '/services/healthcare-software-development' },
  openGraph: {
    title: 'Healthcare Software & Medical App Development | AKA Innovations',
    description: 'Engineering secure, HIPAA-compliant digital health applications, telemedicine suites, and AI diagnostic infrastructure.',
    url: 'https://www.akainnovations.com/services/healthcare-software-development',
    type: 'website',
  }
};

export default function HealthcareSoftwarePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Healthcare Software & Medical App Development Services',
    'serviceType': 'Software Development',
    'provider': {
      '@type': 'Organization',
      'name': 'AKA Innovations',
      'url': 'https://www.akainnovations.com'
    },
    'areaServed': ['IN', 'US', 'Global'],
    'description': 'Custom HIPAA & HL7/FHIR compliant medical application development, AI diagnostics integration, patient portals, and telemedicine suites.',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Healthcare Engineering Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Telemedicine & Virtual Care Platforms'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'AI-Powered Diagnostics & Medical Imaging'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'HIPAA-Compliant Patient Companion Apps'
          }
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-geist selection:bg-cyan-500/30 selection:text-cyan-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Stethoscope className="w-4 h-4" /> Healthcare & Medical Tech Engineering
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Medical Apps & Healthcare</span> Software
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          We engineer HIPAA-compliant digital health applications, AI-assisted diagnostic tools, telemedicine platforms, and seamless EMR/EHR integrations that scale securely.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:opacity-95 transition-all flex items-center gap-2"
          >
            Consult Healthcare Engineers <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 bg-slate-900 border border-slate-800 text-slate-300 font-semibold rounded-xl hover:bg-slate-850 transition-all"
          >
            Explore All Engineering Services
          </Link>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
            <ShieldCheck className="w-10 h-10 text-cyan-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">HIPAA & Regulatory Compliance</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              End-to-end data encryption at rest and in transit, strict RBAC controls, and audit trails conforming to HIPAA, HL7, and FHIR interoperability standards.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all">
            <Activity className="w-10 h-10 text-teal-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Telemedicine & Virtual Care</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Real-time WebRTC audio/video consultations, automated appointment scheduling, digital prescription dispatch, and integrated payment billing.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all">
            <Cpu className="w-10 h-10 text-emerald-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">AI Diagnostic Infrastructure</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Integration of computer vision and NLP models for medical image triaging, patient symptom analysis, and automated clinical summaries.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto bg-slate-900/30 rounded-3xl border border-slate-850">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Global Healthcare Providers Partner with AKA Innovations</h2>
          <p className="text-slate-400">Transforming medical workflows into reliable, scalable digital products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Custom Patient Portals & Mobile Apps (iOS & Android)',
            'EHR / EMR Seamless Data Synchronization',
            'IoT Medical Device & Wearable Data Pipelines',
            'AI-Driven Symptom Checker & Triage Assistants',
            'Multi-tenant Hospital & Clinic Operating Systems',
            'Secure Cloud Migration for Health Networks'
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
              <span className="text-slate-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-cyan-950/40 to-slate-900 border border-cyan-500/30">
          <HeartPulse className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Medical App or Healthcare SaaS?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Book an engineering strategy call to evaluate technical requirements, security compliance, and AI integration possibilities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-all"
          >
            Start Medical Project Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle, Clock, MessageSquare, Terminal } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import AgentSimulations from './AgentSimulations';
import SecurityGovernance from './SecurityGovernance';
import FAQSection from './FAQSection';

interface FAQItem {
  q: string;
  a: string;
}

interface ArticleSection {
  title: string;
  paragraphs: string[];
}

export interface SEOPageConfig {
  title: string;
  subtitle: string;
  badge: string;
  bullets: string[];
  primaryCTA: string;
  secondaryCTA: string;
  articleTitle: string;
  articleSections: ArticleSection[];
  internalLinks: { label: string; href: string }[];
  faqs: FAQItem[];
  simulationIndex?: number;
}

export default function SEOLandingTemplate({ config }: { config: SEOPageConfig }) {
  const [consoleMode, setConsoleMode] = useState<'traditional' | 'agentic'>('agentic');

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-white font-inter selection:bg-blue-500/20 selection:text-blue-300 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#080d1a] flex flex-col justify-center pt-24 pb-16 transition-colors duration-300">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/5 dark:from-blue-600/10 to-transparent -z-10" />

        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
              <span className="text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
                {config.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-slate-900 dark:text-white font-dm-sans mb-6">
              <span className="block">{config.title}</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-dm-sans max-w-lg">
              {config.subtitle}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8 text-sm font-semibold text-slate-700 dark:text-slate-300">
              {config.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  {bullet}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact?subject=School+ERP"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.25)]"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
              >
                {config.primaryCTA}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => {
                  const element = document.getElementById('simulation');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-600/20 dark:hover:border-white/20 bg-slate-100 dark:bg-white/[0.03] transition-all"
              >
                {config.secondaryCTA}
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-slate-500 dark:text-slate-400 font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-500" /> Secure Data Pipeline
              </span>
              <span>•</span>
              <span>RBAC Compliant</span>
              <span>•</span>
              <span>Zero Training Needed</span>
            </div>
          </div>

          {/* Right Column: Console Preview Mockup */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-blue-500 to-indigo-600 opacity-10 dark:opacity-20 blur-xl -z-10" />
            <div className="bg-white dark:bg-[#0f172a] rounded-[24px] border border-slate-200 dark:border-white/[0.08] shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-between transition-colors duration-300">
              <div className="px-6 py-4 bg-slate-50 dark:bg-[#0a0f1d] border-b border-slate-100 dark:border-white/[0.05] flex items-center justify-between">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setConsoleMode('traditional')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${consoleMode === 'traditional' ? 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
                  >
                    Traditional ERP
                  </button>
                  <button 
                    onClick={() => setConsoleMode('agentic')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${consoleMode === 'agentic' ? 'bg-indigo-600 text-white shadow' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
                  >
                    <Terminal className="w-3.5 h-3.5" /> AI Agentic View
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-center">
                {consoleMode === 'traditional' ? (
                  <div className="space-y-4">
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">Dashboard Operations Panel</h4>
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/[0.08] shadow-inner bg-slate-500/5 aspect-[1.4] flex items-center justify-center">
                      <img 
                        src="/images/school_erp_dashboard_3d.png" 
                        alt="ERP Mockup" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h4 className="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-1">
                      <Sparkles className="w-4 h-4 text-indigo-500" /> Actionable AI Agent Active
                    </h4>
                    <div className="bg-slate-50 dark:bg-[#0b1120] border border-slate-200 dark:border-white/[0.04] rounded-xl p-4 font-mono text-xs text-slate-650 dark:text-slate-300">
                      <p className="text-slate-400 dark:text-slate-500 mb-2">// Natural language instructions</p>
                      <p className="text-slate-850 dark:text-white font-medium mb-1.5 flex items-center gap-2">
                        <span className="text-indigo-550 dark:text-indigo-400">&gt;</span> &quot;Query status of current school operations.&quot;
                      </p>
                      <p className="text-slate-850 dark:text-white font-medium mb-1.5 flex items-center gap-2">
                        <span className="text-indigo-550 dark:text-indigo-400">&gt;</span> &quot;Compile details into spreadsheet format.&quot;
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-6 py-3 bg-slate-50 dark:bg-[#0a0f1d] border-t border-slate-100 dark:border-white/[0.05] text-[10px] text-slate-500 flex justify-between items-center font-mono">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> System synced</span>
                <span>100% Secure Logs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Link Quick Finder Banner */}
      <section className="bg-blue-600/10 dark:bg-blue-500/5 py-6 border-y border-blue-500/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center justify-center gap-1.5 flex-wrap">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
            Topical Solutions & Modules:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {config.internalLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link href={link.href} className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline">
                  {link.label}
                </Link>
                {index < config.internalLinks.length - 1 && <span className="text-slate-400 text-xs">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Workflow Simulation */}
      <div id="simulation">
        <AgentSimulations />
      </div>

      {/* Governance & Trust Safeguards */}
      <SecurityGovernance />

      {/* Educational SEO Authority below the fold */}
      <section className="py-24 bg-white dark:bg-[#0a0f1d] border-t border-slate-200 dark:border-white/[0.05] relative overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-slate-700 dark:text-slate-300">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-655 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              Definitive Guide
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
              {config.articleTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-655 dark:text-slate-400 text-sm lg:text-base leading-relaxed">
            {config.articleSections.map((sec, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-[#0f172a]/40 border border-slate-200 dark:border-white/[0.05] rounded-[24px] p-6 lg:p-8 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{sec.title}</h3>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-24 bg-slate-50 dark:bg-[#080d1a] relative overflow-hidden text-center border-t border-slate-200 dark:border-white/[0.05] transition-colors duration-300">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
            Unlock Smarter Institutional Workflows
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Configure optional Agentic AI capabilities directly on top of your existing legacy school database and dashboards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?subject=School+ERP"
              className="px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-550/20"
              style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
            >
              Book Demo Tour
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

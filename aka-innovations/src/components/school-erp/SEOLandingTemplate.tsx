'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle, Clock, Terminal, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import AgentSimulations from './AgentSimulations';
import SecurityGovernance from './SecurityGovernance';
import FAQSection from './FAQSection';
import { useTheme } from 'next-themes';

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
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <main className="min-h-screen bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-geist selection:bg-amber-400/20 selection:text-amber-600 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[92dvh] bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex items-center pt-28 pb-16 overflow-hidden font-geist transition-colors duration-300 border-b border-slate-100 dark:border-slate-800/80">
        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Handwritten Kicker */}
                <div className="inline-flex items-center gap-2 mb-4 font-caveat text-2xl text-amber-500 dark:text-amber-300 -rotate-2">
                  <Sparkles className="w-5 h-5 text-amber-500 dark:text-amber-400 animate-pulse" />
                  <span>{config.badge}</span>
                </div>

                {/* Finger Paint Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.2] mb-6 font-finger-paint">
                  {config.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-lg">
                  {config.subtitle}
                </p>

                {/* Bullet Checklist */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {config.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      {bullet}
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Link
                    href="/contact?subject=School+ERP"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-finger-paint text-sm font-extrabold text-black bg-amber-400 hover:bg-amber-300 transition-all duration-150 active:scale-[0.97] shadow-lg shadow-amber-400/20"
                  >
                    {config.primaryCTA}
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => {
                      const element = document.getElementById('simulation');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-finger-paint text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-150 active:scale-[0.97]"
                  >
                    {config.secondaryCTA}
                  </button>
                </div>

                {/* Trust Bar */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-geist">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Enterprise RBAC Security
                  </span>
                  <span>•</span>
                  <span className="font-caveat text-xl text-emerald-600 dark:text-emerald-300 font-bold">
                    ⚡ 30-Second Task Speed
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Console Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -top-6 -right-2 z-20 font-caveat text-xl text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-500/40 px-3.5 py-1.5 rounded-xl rotate-3 shadow-lg pointer-events-none font-bold">
                ✏️ Live System Preview!
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
                className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d1424] shadow-2xl shadow-slate-200 dark:shadow-slate-950"
              >
                {/* Window Header */}
                <div className="px-4 py-3 bg-slate-100 dark:bg-[#080d1a] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-geist-mono text-slate-500 dark:text-slate-400">aka-school-os.app</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setConsoleMode('traditional')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${consoleMode === 'traditional' ? 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={() => setConsoleMode('agentic')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${consoleMode === 'agentic' ? 'bg-amber-400 text-black shadow' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
                    >
                      <Terminal className="w-3.5 h-3.5" /> AI Agent
                    </button>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-center min-h-[280px]">
                  {consoleMode === 'traditional' ? (
                    <div className="space-y-4">
                      <h4 className="text-slate-900 dark:text-white font-finger-paint font-bold text-sm">Dashboard Operations Panel</h4>
                      <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-inner bg-slate-500/5 aspect-[1.4] flex items-center justify-center">
                        <Image
                          src={isDark ? "/images/erp_hero_dashboard.png" : "/images/erp_hero_dashboard_light.png"}
                          alt="ERP Mockup Dashboard"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h4 className="text-amber-600 dark:text-amber-400 font-finger-paint font-bold text-sm flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-amber-500" /> Actionable AI Agent Active
                      </h4>
                      <div className="bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-slate-800/60 rounded-xl p-4 font-mono text-xs text-slate-600 dark:text-slate-300">
                        <p className="text-slate-400 dark:text-slate-500 mb-2">// Natural language instructions</p>
                        <p className="text-slate-800 dark:text-white font-medium mb-1.5 flex items-center gap-2">
                          <span className="text-amber-500 dark:text-amber-400">&gt;</span> &quot;Query status of current school operations.&quot;
                        </p>
                        <p className="text-slate-800 dark:text-white font-medium mb-1.5 flex items-center gap-2">
                          <span className="text-amber-500 dark:text-amber-400">&gt;</span> &quot;Compile details into spreadsheet format.&quot;
                        </p>
                        <p className="text-emerald-600 dark:text-emerald-400 mt-3 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" /> Executing... done in 0.9s
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-6 py-3 bg-slate-50 dark:bg-[#080d1a] border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-500 flex justify-between items-center font-mono">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> System synced</span>
                  <span>100% Secure Logs</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Link Quick Finder Banner */}
      <section className="bg-slate-50 dark:bg-[#0e1424] py-5 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-caveat text-lg text-amber-600 dark:text-amber-300 font-bold flex items-center gap-1.5 mr-2">
              <Sparkles className="w-4 h-4" /> Explore:
            </span>
            {config.internalLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-finger-paint text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors font-bold"
                >
                  {link.label}
                </Link>
                {index < config.internalLinks.length - 1 && (
                  <span className="text-slate-300 dark:text-slate-600 text-xs">•</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-slate-300 dark:text-slate-600 text-xs">•</span>
            <Link
              href="/school-erp"
              className="text-sm font-finger-paint text-amber-600 dark:text-amber-300 hover:text-amber-500 dark:hover:text-amber-200 font-bold transition-colors"
            >
              ← School ERP Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Workflow Simulation */}
      <div id="simulation">
        <AgentSimulations />
      </div>

      {/* Governance & Trust */}
      <SecurityGovernance />

      {/* Educational SEO Article Content */}
      <section className="py-24 bg-slate-50 dark:bg-[#0e1424] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">

          <div className="mb-16">
            <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block mb-3 font-bold -rotate-1">
              📚 Deep-dive guide!
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-finger-paint leading-snug">
              {config.articleTitle}
            </h2>
            <div className="h-1 w-16 bg-amber-400 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.articleSections.map((sec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 lg:p-8 space-y-4 hover:border-amber-400/40 transition-colors duration-200 shadow-sm dark:shadow-none"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-finger-paint">{sec.title}</h3>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* Final CTA — matches FinalCTA.tsx from /school-erp */}
      <section className="py-28 bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 text-center transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">

          <span className="font-caveat text-3xl text-amber-600 dark:text-amber-300 block mb-3 rotate-[-1deg] font-bold">
            🚀 Upgrade your school management today!
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight font-finger-paint">
            Ready to Modernize Your School Infrastructure?
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-10 max-w-xl mx-auto">
            Deploy full-fledged traditional school ERP management with native mobile applications and actionable Agentic AI execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?subject=School+ERP"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-finger-paint font-extrabold text-black bg-amber-400 hover:bg-amber-300 transition-all duration-150 active:scale-[0.97] text-base shadow-lg shadow-amber-400/20"
            >
              Book a Live Demo
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/school-erp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-finger-paint text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-150 active:scale-[0.97] text-base"
            >
              Explore School ERP Hub
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center gap-8 text-xs text-slate-500 dark:text-slate-400 font-medium font-geist">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Isolated Tenant Sandbox
            </span>
            <span>•</span>
            <span>Zero Operational Downtime Migration</span>
            <span>•</span>
            <span>100% RBAC Access Control</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

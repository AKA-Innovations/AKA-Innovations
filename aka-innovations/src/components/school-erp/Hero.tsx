'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
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
          
          {/* Left Column: Finger Paint Headline + Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Handwritten Kicker */}
              <div className="inline-flex items-center gap-2 mb-4 font-caveat text-2xl text-amber-500 dark:text-amber-300 -rotate-2">
                <Sparkles className="w-5 h-5 text-amber-500 dark:text-amber-400 animate-pulse" />
                <span>The smart school operating system!</span>
              </div>

              {/* Finger Paint Main Title (Finger Paint by Carrois Apostrophe) */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.2] mb-6 font-finger-paint">
                Run Your School. <br />
                <span className="text-amber-500 dark:text-amber-300 block mt-2">
                  Automate with AI Agents.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-lg">
                Traditional dashboards for administrative records, paired with friendly autonomous AI agents for instant classroom execution.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/contact?subject=School+ERP"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-finger-paint text-sm font-extrabold text-black bg-amber-400 hover:bg-amber-300 transition-all duration-150 active:scale-[0.97] shadow-lg shadow-amber-400/20"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => {
                    const el = document.getElementById('dual-engine');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-finger-paint text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-150 active:scale-[0.97]"
                >
                  See Dual-Engine
                </button>
              </div>

              {/* Minimal Trust Bar */}
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

          {/* Right Column: Dynamic Dashboard Preview matching Theme */}
          <div className="lg:col-span-6 relative">
            
            {/* Playful Handwritten Sticker Note */}
            <div className="absolute -top-6 -right-2 z-20 font-caveat text-xl text-amber-900 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-500/40 px-3.5 py-1.5 rounded-xl rotate-3 shadow-lg pointer-events-none font-bold">
              ✏️ Live Principal View!
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
                <span className="text-xs font-finger-paint text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/30">
                  {isDark ? 'Dark Mode' : 'Light Mode'} Active
                </span>
              </div>

              <div className="relative aspect-[16/10] bg-white dark:bg-[#090d16]">
                <Image
                  src={isDark ? "/images/erp_hero_dashboard.png" : "/images/erp_hero_dashboard_light.png"}
                  alt="AKA School ERP Operating System Dashboard"
                  fill
                  className="object-cover object-top transition-opacity duration-300"
                  priority
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
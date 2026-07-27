'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Activity, HeartPulse } from 'lucide-react';
import { useTheme } from 'next-themes';

export const HealthHero = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section className="relative min-h-[90dvh] bg-white dark:bg-[#07111f] text-slate-900 dark:text-slate-100 flex items-center pt-32 pb-20 overflow-hidden font-jakarta transition-colors duration-300 border-b border-slate-100 dark:border-slate-800">
      {/* Background Clinical Grid */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Doctor Rx Handwriting + Clinical Headline */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Doctor Rx Stamp & Note */}
              <div className="inline-flex items-center gap-2 mb-4 font-doctor text-2xl text-cyan-600 dark:text-cyan-300 font-bold -rotate-1">
                <span className="text-3xl font-serif">℞</span>
                <span>Continuous Care Healthcare Platform — Not Just Consultation</span>
              </div>

              {/* Clinical Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-6 font-jakarta">
                Connecting Patients with the Right Care at the Right Moment.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-lg">
                Health-Connect is an enterprise Platform-as-a-Service (PaaS) unifying tele-triage, continuous vitals tracking, EHR integration, and post-consultation care.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/contact?subject=Health+Connect+PaaS"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-jakarta text-sm font-extrabold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-150 active:scale-[0.97] shadow-lg shadow-cyan-400/20"
                >
                  Schedule Clinical Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => {
                    const el = document.getElementById('live-triage');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-jakarta text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-150 active:scale-[0.97]"
                >
                  Test Triage Simulator
                </button>
              </div>

              {/* Clinical Trust Bar */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> HIPAA & GDPR Compliant
                </span>
                <span>•</span>
                <span className="font-doctor text-xl text-emerald-600 dark:text-emerald-400 font-bold">
                  🩺 250k+ Active Care Consults
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Doctor Tablet & Vitals Preview */}
          <div className="lg:col-span-6 relative">
            
            {/* Prescription Pad Sticker Callout */}
            <div className="absolute -top-6 -right-2 z-20 font-doctor text-xl text-cyan-900 dark:text-cyan-200 bg-cyan-100 dark:bg-cyan-950/90 border border-cyan-300 dark:border-cyan-500/40 px-3.5 py-1.5 rounded-xl rotate-2 shadow-lg pointer-events-none font-bold">
              💊 Real-Time Doctor Vitals Feed!
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d172a] shadow-2xl shadow-slate-200 dark:shadow-slate-950"
            >
              {/* Clinical Window Bar */}
              <div className="px-4 py-3 bg-slate-100 dark:bg-[#07111f] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <HeartPulse className="w-4 h-4 text-cyan-500 animate-pulse" />
                  <span>Health-Connect Clinical PaaS v3.4</span>
                </div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/30">
                  {isDark ? 'Dark Clinical Mode' : 'Light Clinical Mode'}
                </span>
              </div>

              <div className="relative aspect-[4/3] bg-white dark:bg-[#07111f]">
                <Image
                  src="/images/health_doctor_tablet.png"
                  alt="Doctor reviewing continuous care vitals on tablet"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
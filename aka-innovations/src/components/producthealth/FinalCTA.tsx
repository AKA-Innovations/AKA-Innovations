'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="py-28 bg-slate-50 dark:bg-[#07111f] text-slate-900 dark:text-slate-100 font-jakarta border-b border-slate-200 dark:border-slate-800 text-center transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        
        <span className="font-doctor text-3xl text-cyan-600 dark:text-cyan-300 block mb-3 -rotate-1 font-bold">
          🩺 Upgrade your clinical telemetry & care delivery!
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight font-jakarta">
          Ready to Modernize Your Healthcare Platform?
        </h2>

        <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-10 max-w-xl mx-auto">
          Deploy Health-Connect PaaS with continuous vitals telemetry, automated tele-triage, and native HL7 / FHIR EMR integration.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact?subject=Health+Connect+Demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-jakarta font-extrabold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-150 active:scale-[0.97] text-base shadow-lg shadow-cyan-400/20"
          >
            Schedule Clinical Demo
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/contact?subject=Health+PaaS+Architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-jakarta text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-150 active:scale-[0.97] text-base"
          >
            Request PaaS Architecture Specification
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center gap-8 text-xs text-slate-500 dark:text-slate-400 font-medium font-jakarta">
          <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Isolated Tenant Database Vault
          </span>
          <span>•</span>
          <span>Zero Operational Downtime Migration</span>
          <span>•</span>
          <span>HIPAA & GDPR Compliant</span>
        </div>

      </div>
    </section>
  );
};

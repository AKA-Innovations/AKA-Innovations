'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  return (
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
            href="/contact?subject=School+ERP+Tour"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-finger-paint text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-150 active:scale-[0.97] text-base"
          >
            Request Migration Guide
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
  );
}

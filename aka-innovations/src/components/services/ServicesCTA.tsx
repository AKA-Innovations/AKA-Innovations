'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="py-28 bg-white dark:bg-[#07111f] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 text-center transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        
        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-3">
          Engineering Partnership
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight font-geist">
          Ready to Build High-Performance Software?
        </h2>

        <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-10 max-w-xl mx-auto">
          Schedule an architecture review with our principal engineers. We will analyze your system requirements and provide a fixed-scope roadmap.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact?subject=Engineering+Services+Consultation"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-150 active:scale-[0.97] text-base shadow-lg shadow-cyan-400/20"
          >
            Schedule Technical Audit
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/contact?subject=Architecture+Blueprint"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-150 active:scale-[0.97] text-base"
          >
            Request Architecture Sample
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center gap-8 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Fixed-Scope SLA Guarantees
          </span>
          <span>•</span>
          <span>Zero Lock-In Codebase Handover</span>
          <span>•</span>
          <span>Dedicated L3 Principal Support</span>
        </div>

      </div>
    </section>
  );
}

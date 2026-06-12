'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="cta" className="py-24 bg-slate-50 dark:bg-[#080d1a] relative overflow-hidden text-center border-t border-slate-200 dark:border-white/[0.05] transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-605 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          The Operating System for the AI Era
        </div>

        <h2 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
          Ready to Upgrade Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-650 dark:from-blue-400 dark:to-indigo-400">School Administration?</span>
        </h2>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto font-dm-sans leading-relaxed">
          Get a fully features school ERP platform with native student, parent, and teacher applications, powered by actionable Agentic AI. Keep the workflows you trust, and execute daily administration at double the speed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact?subject=School+ERP"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-550/20 dark:shadow-blue-900/50 hover:shadow-blue-600/50 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            Book Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact?subject=School+ERP"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 dark:text-slate-300 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl hover:bg-slate-200 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            <MessageSquare className="mr-2 w-5 h-5" />
            See AI in Action
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-semibold">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-500" /> Secure Sandbox Validation
          </span>
          <span>•</span>
          <span>Zero Training Setup</span>
          <span>•</span>
          <span>Full Legacy Dashboard Integrations</span>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}

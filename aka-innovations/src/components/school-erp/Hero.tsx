'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, LayoutDashboard, ShieldCheck, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [consoleMode, setConsoleMode] = useState<'traditional' | 'agentic'>('agentic');
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 60]);
  const yMockup = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#080d1a] flex flex-col justify-center pt-24 pb-16 transition-colors duration-300">
      {/* Background glow and grids */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/5 dark:from-blue-600/10 to-transparent -z-10" />

      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left column: Messaging & CTA */}
        <motion.div style={{ y: yText }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
            <span className="text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
              Complete School ERP. Optional Agentic Automation.
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-slate-900 dark:text-white font-dm-sans mb-6 overflow-hidden">
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="block"
            >
              Run Your School Today.
            </motion.span>
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400"
            >
              Automate Operations Tomorrow.
            </motion.span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-dm-sans max-w-lg">
            Use the ERP traditionally through dashboards, forms, and tables. Use AI when you want to execute workloads via text commands. Switch between both seamlessly.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              Admissions
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              Attendance
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              Fees
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              Exams
            </div>
            <div className="flex items-center gap-2 col-span-2 md:col-span-1">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              Parent Communication
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="#cta"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(96,165,250,0.25)]"
              style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
            >
              Book Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => {
                const element = document.getElementById('simulation');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-600/20 dark:hover:border-white/20 bg-slate-100 dark:bg-white/[0.03] transition-all"
            >
              See AI in Action
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
        </motion.div>

        {/* Right column: Interactive Console Preview Toggle */}
        <motion.div style={{ y: yMockup }} className="relative">
          <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-blue-500 to-indigo-600 opacity-10 dark:opacity-20 blur-xl -z-10" />
          
          <div className="bg-white dark:bg-[#0f172a] rounded-[24px] border border-slate-200 dark:border-white/[0.08] shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-between transition-colors duration-300">
            {/* Window Top Bar */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-[#0a0f1d] border-b border-slate-100 dark:border-white/[0.05] flex items-center justify-between transition-colors duration-300">
              <div className="flex gap-2">
                <button 
                  onClick={() => setConsoleMode('traditional')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${consoleMode === 'traditional' ? 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5" /> Traditional ERP
                </button>
                <button 
                  onClick={() => setConsoleMode('agentic')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${consoleMode === 'agentic' ? 'bg-indigo-600 text-white shadow' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'}`}
                >
                  <Terminal className="w-3.5 h-3.5 animate-pulse" /> Agentic AI View
                </button>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Window Content */}
            <div className="p-6 flex-1 flex flex-col justify-center">
              {consoleMode === 'traditional' ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.04]">
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold text-sm">School Management Console</h4>
                      <p className="text-[10px] text-slate-500">Traditional view - click menus to execute</p>
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10">Connected</span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/[0.08] shadow-inner bg-slate-500/5 aspect-[1.4] flex items-center justify-center">
                    <img 
                      src="/images/school_erp_dashboard_3d.png" 
                      alt="AKA School ERP 3D Dashboard Mockup" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.04]">
                    <div>
                      <h4 className="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-indigo-500" /> Agentic AI Execution
                      </h4>
                      <p className="text-[10px] text-slate-500">Autonomous processing from natural language</p>
                    </div>
                    <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-500/10">Active</span>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-[#0b1120] border border-slate-200 dark:border-white/[0.04] rounded-xl p-4 font-mono text-xs text-slate-600 dark:text-slate-300">
                    <p className="text-slate-400 dark:text-slate-500 mb-2">// Suggestion commands</p>
                    <p className="text-slate-800 dark:text-white font-medium mb-1.5 flex items-center gap-2">
                      <span className="text-indigo-500 dark:text-indigo-400">&gt;</span> &quot;Mark attendance for Grade 8A.&quot;
                    </p>
                    <p className="text-slate-800 dark:text-white font-medium mb-1.5 flex items-center gap-2">
                      <span className="text-indigo-500 dark:text-indigo-400">&gt;</span> &quot;Show students below 75% attendance in Class 10.&quot;
                    </p>
                    <p className="text-slate-800 dark:text-white font-medium flex items-center gap-2">
                      <span className="text-indigo-500 dark:text-indigo-400">&gt;</span> &quot;Schedule exams for Grade 9 next week.&quot;
                    </p>
                  </div>

                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-500/20 rounded-xl flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-ping shrink-0" />
                    <p className="text-[11px] text-indigo-700 dark:text-indigo-300">AI Agents parse details, verify roles & run core ERP services automatically.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Window Status Bar */}
            <div className="px-6 py-3 bg-slate-50 dark:bg-[#0a0f1d] border-t border-slate-100 dark:border-white/[0.05] text-[10px] text-slate-500 flex justify-between items-center font-mono transition-colors duration-300">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Auto-sync enabled</span>
              <span>100% Audit logs locked</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
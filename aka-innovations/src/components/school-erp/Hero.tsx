'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal, LayoutDashboard, ShieldCheck, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [consoleMode, setConsoleMode] = useState<'traditional' | 'agentic'>('agentic');

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080d1a] flex flex-col justify-center pt-24 pb-16">
      {/* Background glow and grids */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/10 to-transparent -z-10" />

      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left column: Messaging & CTA */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-wider">
              Enterprise School ERP + Agentic AI
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] text-white font-dm-sans mb-6">
            The School ERP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400">
              That Works Both Ways.
            </span>
          </h1>

          <p className="text-lg text-slate-400 mb-8 leading-relaxed font-dm-sans max-w-lg">
            Use the ERP traditionally through dashboards, forms, and tables. Use AI when you want to execute workloads via text commands. Switch between both seamlessly.
          </p>

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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-white/10 text-white/70 hover:text-white hover:border-white/20 bg-white/[0.03] transition-all"
            >
              See AI in Action
            </button>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-slate-500 font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-500" /> Secure Data Pipeline
            </span>
            <span>•</span>
            <span>RBAC Compliant</span>
            <span>•</span>
            <span>Zero Training Needed</span>
          </div>
        </div>

        {/* Right column: Interactive Console Preview Toggle */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 blur-xl -z-10" />
          
          <div className="bg-[#0f172a] rounded-[24px] border border-white/[0.08] shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-between">
            {/* Window Top Bar */}
            <div className="px-6 py-4 bg-[#0a0f1d] border-b border-white/[0.05] flex items-center justify-between">
              <div className="flex gap-2">
                <button 
                  onClick={() => setConsoleMode('traditional')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${consoleMode === 'traditional' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5" /> Traditional ERP
                </button>
                <button 
                  onClick={() => setConsoleMode('agentic')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${consoleMode === 'agentic' ? 'bg-indigo-600 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  <Terminal className="w-3.5 h-3.5 animate-pulse" /> Agentic AI View
                </button>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-700" />
                <span className="w-2 h-2 rounded-full bg-slate-700" />
                <span className="w-2 h-2 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Window Content */}
            <div className="p-6 flex-1 flex flex-col justify-center">
              {consoleMode === 'traditional' ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                    <div>
                      <h4 className="text-white font-bold text-sm">School Management Console</h4>
                      <p className="text-[10px] text-slate-500">Traditional view - click menus to execute</p>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10">Connected</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl border border-white/[0.05] bg-white/[0.02]">
                      <span className="text-[10px] text-slate-500 block mb-1">Academics</span>
                      <span className="text-sm font-bold text-white">Class Timetables</span>
                    </div>
                    <div className="p-4 rounded-xl border border-white/[0.05] bg-white/[0.02]">
                      <span className="text-[10px] text-slate-500 block mb-1">Finance</span>
                      <span className="text-sm font-bold text-white">Fee Collections</span>
                    </div>
                    <div className="p-4 rounded-xl border border-white/[0.05] bg-white/[0.02]">
                      <span className="text-[10px] text-slate-500 block mb-1">Academics</span>
                      <span className="text-sm font-bold text-white">Student Directory</span>
                    </div>
                    <div className="p-4 rounded-xl border border-white/[0.05] bg-white/[0.02]">
                      <span className="text-[10px] text-slate-500 block mb-1">Academics</span>
                      <span className="text-sm font-bold text-white">Exam Scheduling</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                    <div>
                      <h4 className="text-indigo-400 font-bold text-sm flex items-center gap-1">
                        <Sparkles className="w-4 h-4" /> Agentic AI Execution
                      </h4>
                      <p className="text-[10px] text-slate-500">Autonomous processing from natural language</p>
                    </div>
                    <span className="text-[10px] text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-500/10">Active</span>
                  </div>
                  
                  <div className="bg-[#0b1120] border border-white/[0.04] rounded-xl p-4 font-mono text-xs text-slate-300">
                    <p className="text-slate-500 mb-2">// Suggestion commands</p>
                    <p className="text-white font-medium mb-1.5 flex items-center gap-2">
                      <span className="text-indigo-400">&gt;</span> &quot;Mark attendance for Grade 8A.&quot;
                    </p>
                    <p className="text-white font-medium mb-1.5 flex items-center gap-2">
                      <span className="text-indigo-400">&gt;</span> &quot;Show students below 75% attendance in Class 10.&quot;
                    </p>
                    <p className="text-white font-medium flex items-center gap-2">
                      <span className="text-indigo-400">&gt;</span> &quot;Schedule exams for Grade 9 next week.&quot;
                    </p>
                  </div>

                  <div className="p-3 bg-indigo-950/20 border border-indigo-500/20 rounded-xl flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping shrink-0" />
                    <p className="text-[11px] text-indigo-300">AI Agents parse details, verify roles & run core ERP services automatically.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Window Status Bar */}
            <div className="px-6 py-3 bg-[#0a0f1d] border-t border-white/[0.05] text-[10px] text-slate-500 flex justify-between items-center font-mono">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Auto-sync enabled</span>
              <span>100% Audit logs locked</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
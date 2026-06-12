'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Cpu, ShieldCheck, Cog, Database, CheckSquare, ArrowRight } from 'lucide-react';
import FlowDiagram3D from './FlowDiagram3D';

const workflowSteps = [
  {
    title: "User Action Input",
    desc: "A teacher, principal, coordinator, or parent issues a request in conversational, natural language.",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI Agent Intent Parsing",
    desc: "The AI interprets intent, extracts variables (dates, student IDs, class sections), and selects workflows.",
    icon: Cpu,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Permission & RBAC Check",
    desc: "Verifies standard database access rules. Every action follows identical security profiles as legacy dashboards.",
    icon: ShieldCheck,
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Workflow Engine Resolves",
    desc: "Executes calculations, coordinates timetables, resolves scheduling conflicts, or generates fee templates.",
    icon: Cog,
    color: "from-yellow-500 to-amber-500"
  },
  {
    title: "ERP Core Service Execution",
    desc: "Makes API integrations to database tables, registers admissions, commits logs, and modifies tables.",
    icon: Database,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "System Confirmation & Audit",
    desc: "Dispatches app notifications, logs security audit entries, and returns detailed status confirmation.",
    icon: CheckSquare,
    color: "from-teal-500 to-cyan-500"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0f1d] border-t border-slate-200 dark:border-white/[0.05] relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.02),transparent_60%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Execution Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
            How AKA Innovations <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Agentic AI Works</span>
          </h2>
          <p className="text-lg text-slate-650 dark:text-slate-400 font-dm-sans leading-relaxed">
            Every query goes through a strict verification, validation, and processing pipeline before database modification.
          </p>
        </div>

        {/* 3D Flow Diagram component */}
        <div className="mb-20">
          <FlowDiagram3D />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div 
                key={index} 
                className="bg-slate-50 dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/[0.05] rounded-[24px] p-6 lg:p-8 relative group hover:border-slate-400 dark:hover:border-slate-700 transition-colors duration-300 flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300 dark:text-slate-800 font-mono">0{index + 1}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-dm-sans mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>

                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-full border border-slate-200 dark:border-white/[0.05]">
                    <ArrowRight className="w-4 h-4 text-slate-450 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer, Terminal, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

const comparePoints = [
  {
    feature: "Data Retrieval",
    traditional: "Navigate menus ➔ Open report ➔ Select filters ➔ Click Export ➔ Download PDF",
    agentic: "Speak command ➔ Instant report rendering on screen in 1.2 seconds"
  },
  {
    feature: "Taking Attendance",
    traditional: "Find classroom ➔ Select Grade ➔ Check active list ➔ Check off names ➔ Submit Form",
    agentic: "Voice/Text: 'Mark Rahul & Sonia absent in Grade 8B' ➔ Done & Parent notified"
  },
  {
    feature: "Scheduling Exams",
    traditional: "Consult spreadsheets ➔ Track holidays ➔ Check room lists ➔ Reconcile teachers ➔ Resolve conflicts manually",
    agentic: "Voice/Text: 'Schedule Term 2 Math & English exams for next week' ➔ Auto-scheduled with conflict solver"
  },
  {
    feature: "Parent Queries",
    traditional: "Parent calls desk ➔ Desk operator logs in ➔ Searches database ➔ Relays info manually",
    agentic: "Parent asks app directly ➔ Real-time secure student status served instantly"
  }
];

export default function TraditionalVsAgentic() {
  return (
    <section className="py-24 bg-[#0a0f1d] border-t border-b border-white/[0.05] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            The School ERP That Works Both Ways
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight font-dm-sans mb-6">
            Traditional Workflows + <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Agentic AI</span>
          </h2>
          <p className="text-lg text-slate-400 font-dm-sans leading-relaxed">
            We haven&apos;t removed the workflows you already trust. Your staff can continue using standard dashboards, menu structures, and reports, while gaining the speed of autonomous AI Agents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Traditional Card */}
          <div className="bg-[#0f172a]/80 backdrop-blur border border-white/[0.06] rounded-[24px] p-8 hover:border-slate-700 transition-colors duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                  <MousePointer className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Traditional ERP Workflows</h3>
                  <p className="text-xs text-slate-500">Perfect for heavy structured operations</p>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-semibold px-2.5 py-1 rounded bg-slate-800">STANDARD</span>
            </div>

            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span><strong className="text-white font-semibold">Interactive Dashboards</strong>: Color-coded analytics panels for quick visual tracking.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span><strong className="text-white font-semibold">Structured Forms</strong>: Multi-step registration, admission inputs, and fee portals.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span><strong className="text-white font-semibold">Tabular Reports</strong>: Search, filter, and export detailed spreadsheets for audit boards.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span><strong className="text-white font-semibold">Explicit Menus</strong>: Hierarchical layout mapping Student info, Library, HR, and Payroll.</span>
              </li>
            </ul>
          </div>

          {/* Agentic Card */}
          <div className="bg-[#1e1b4b]/40 backdrop-blur border border-indigo-500/20 rounded-[24px] p-8 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)] transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Terminal className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Agentic AI Capabilities</h3>
                  <p className="text-xs text-indigo-300">Execute multi-step tasks in seconds</p>
                </div>
              </div>
              <span className="text-xs text-indigo-400 font-semibold px-2.5 py-1 rounded bg-indigo-500/20">AGENTIC</span>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong className="text-white font-semibold">Natural Language Commands</strong>: Speak or write to your ERP exactly as you would to an assistant.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong className="text-white font-semibold">Autonomous Workflow Engine</strong>: The AI calculates logic, verifies details, and executes tasks.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong className="text-white font-semibold">Intelligent Assistance</strong>: Get reminders, auto-generate notices, draft schedules instantly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span><strong className="text-white font-semibold">No Chatbot Placeholders</strong>: The system executes actual database updates, not just answering questions.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Side-by-Side Table Grid */}
        <div className="bg-[#0f172a]/60 backdrop-blur rounded-[24px] border border-white/[0.05] overflow-hidden">
          <div className="p-6 border-b border-white/[0.05]">
            <h4 className="font-bold text-white text-lg">Compare Workflows</h4>
            <p className="text-slate-400 text-xs mt-1">See how AKA Agentic AI speeds up daily operations</p>
          </div>
          <div className="divide-y divide-white/[0.05]">
            {comparePoints.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4 items-center">
                <span className="text-white font-bold text-sm">{item.feature}</span>
                <div>
                  <span className="text-xs text-slate-500 block mb-1 font-semibold uppercase tracking-wider">Traditional Method</span>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.traditional}</p>
                </div>
                <div>
                  <span className="text-xs text-indigo-400 block mb-1 font-semibold uppercase tracking-wider">AKA Agentic Workflow</span>
                  <p className="text-slate-200 text-xs leading-relaxed font-medium flex items-center gap-1">
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 inline shrink-0" />
                    {item.agentic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

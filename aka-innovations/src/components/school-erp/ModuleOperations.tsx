'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, FileText, Send, Calendar, 
  MapPin, GraduationCap, DollarSign, Users, 
  Sparkles, ShieldCheck, Database, Award
} from 'lucide-react';

const modulesList = [
  {
    title: "Attendance Management",
    icon: CheckCircle,
    traditional: "Navigate to attendance registers, filter grade levels, select section, manually tick absent checkboxes, click submit.",
    agentic: "Voice command: 'Mark attendance for Grade 8A. Dev is absent.' AI executes, flags student register, and triggers push updates to parent-student companion app."
  },
  {
    title: "Examinations & Timetable",
    icon: Calendar,
    traditional: "Consolidate spreadsheets, check school holiday schedule, resolve room layout logistics, allocate staff shifts manually.",
    agentic: "Voice command: 'Generate examination calendar for Grade 9 Term 2.' AI checks room capacity, holiday lists, and schedules exams automatically."
  },
  {
    title: "Homework & Classwork",
    icon: FileText,
    traditional: "Fill in task forms, upload PDF study resources, set deadline parameters, and trigger alerts to parents using separate menus.",
    agentic: "Voice command: 'Add a math assignment on Fractions due Friday for Class 6.' AI schedules, uploads attachments, and updates parent-student portal feeds."
  },
  {
    title: "Fee Management & Receivables",
    icon: DollarSign,
    traditional: "Generate fee templates, assign bills, reconcile bank deposits, track late fee details, and send manual email reminders.",
    agentic: "Voice command: 'Remind parents with outstanding fee bills for Quarter 2.' AI fetches records, verifies dues, and broadcasts receipts."
  },
  {
    title: "Student Admissions & Records",
    icon: Users,
    traditional: "Transcribe manual registration forms, upload documents, check student allocations, allocate roll numbers manually.",
    agentic: "Voice command: 'Admit new student Kiara Patel under Grade 3.' AI creates files, sets roll, and creates parent-student accounts."
  },
  {
    title: "School Communications",
    icon: Send,
    traditional: "Write notifications, select parent and teacher groups, verify approval queues, and broadcast via email/SMS.",
    agentic: "Voice command: 'Announce Parent-Teacher Meeting scheduled for Saturday 10 AM.' AI drafts invitation card and broadcasts to all."
  },
  {
    title: "Analytics & Compliance Reporting",
    icon: Database,
    traditional: "Filter database tables, compile historical marks, build charts, export reports, and print government compliance documentation.",
    agentic: "Voice command: 'Show compliance report for aggregate attendance of Grade 10.' AI generates charts, and formats compliance reports."
  }
];

export default function ModuleOperations() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0f1d] border-t border-slate-200 dark:border-white/[0.05] relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.03),transparent_70%)]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Module Breakdown
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
            AI-Powered Operations <br />Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Every Single Module</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-dm-sans leading-relaxed">
            See how AKA upgrades the core modules of standard education ERPs with actionable agents.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm font-bold text-indigo-700 dark:text-indigo-400">
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25">✔ Attendance</span>
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25">✔ Examination</span>
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25">✔ Fees</span>
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25">✔ Parent App</span>
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25">✔ Analytics</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modulesList.map((mod, index) => {
            const IconComp = mod.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50 dark:bg-[#0f172a]/80 border border-slate-200 dark:border-white/[0.06] rounded-[24px] p-6 lg:p-8 hover:border-slate-400 dark:hover:border-slate-700 transition-colors duration-300 flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-dm-sans">{mod.title}</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider block mb-1">Traditional Workflow</span>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{mod.traditional}</p>
                    </div>

                    <div className="border-t border-slate-200 dark:border-white/[0.04] pt-4">
                      <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1 mb-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        Agentic AI Workflow
                      </span>
                      <p className="text-slate-800 dark:text-slate-200 text-xs leading-relaxed font-medium">{mod.agentic}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold border-t border-slate-200 dark:border-white/[0.04] pt-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-500" />
                  RBAC Validated & Audited Actions
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { Check, X, ShieldAlert } from 'lucide-react';

const compareCriteria = [
  {
    feature: "Data Logging & Forms",
    traditional: "Manual forms (slow)",
    aiErp: "Forms + basic insights",
    aka: "Auto-forms & Agent actions"
  },
  {
    feature: "Taking Attendance",
    traditional: "15 mins (manual forms)",
    aiErp: "15 mins (with logs)",
    aka: "10 seconds (conversational)"
  },
  {
    feature: "Timetable & Exam Conflicts",
    traditional: "Manual scheduler (3-4 days)",
    aiErp: "Schedules with reviews",
    aka: "Auto-scheduler (2 mins)"
  },
  {
    feature: "Security Rules & Permissions",
    traditional: "Yes (role dashboards)",
    aiErp: "Yes (generic access)",
    aka: "Yes (agent RBAC matching)"
  },
  {
    feature: "Actionable AI (Does Work)",
    traditional: "No (forms only)",
    aiErp: "No (recommends details)",
    aka: "Yes (executes database edits)"
  },
  {
    feature: "Audit logs & Traceability",
    traditional: "Standard updates logs",
    aiErp: "AI query logs",
    aka: "Immutable security trail"
  }
];

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0f1d] border-t border-slate-200 dark:border-white/[0.05] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Compare ERP Systems
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
            How AKA Redefines <span className="text-blue-600 dark:text-blue-400">School ERP Software</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-dm-sans leading-relaxed">
            See how AKA Agentic School ERP compares against traditional and basic AI solutions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto bg-slate-50 dark:bg-[#0f172a]/60 backdrop-blur rounded-[28px] border border-slate-200 dark:border-white/[0.08] p-4 lg:p-8 shadow-sm dark:shadow-none">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/[0.08] text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="py-4 px-4">Feature / Capabilities</th>
                <th className="py-4 px-4">Traditional ERP</th>
                <th className="py-4 px-4">Basic AI ERP</th>
                <th className="py-4 px-4 text-slate-900 dark:text-white bg-blue-500/10 rounded-t-xl">AKA Agentic ERP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/[0.05] text-xs lg:text-sm">
              {compareCriteria.map((crit, idx) => (
                <tr key={idx} className="hover:bg-slate-100/50 dark:hover:bg-white/[0.02] transition-colors duration-200">
                  <td className="py-5 px-4 font-bold text-slate-800 dark:text-slate-300">{crit.feature}</td>
                  <td className="py-5 px-4 text-slate-600 dark:text-slate-400">{crit.traditional}</td>
                  <td className="py-5 px-4 text-slate-600 dark:text-slate-400">{crit.aiErp}</td>
                  <td className="py-5 px-4 text-slate-900 dark:text-white bg-blue-500/5 font-semibold border-l border-r border-blue-500/20">{crit.aka}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

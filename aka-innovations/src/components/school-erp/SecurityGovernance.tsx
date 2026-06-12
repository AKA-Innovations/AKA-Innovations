'use client';

import React from 'react';
import { ShieldAlert, Key, ClipboardList, Database, FileSpreadsheet, Lock } from 'lucide-react';

const governanceItems = [
  {
    title: "Role-Based Access Control (RBAC)",
    desc: "AI agents match your database permissions exactly. A teacher cannot read financial data, and a parent cannot see other student marks. No backdoor queries.",
    icon: Key
  },
  {
    title: "Mandatory Approval Workflows",
    desc: "Crucial edits (fee revisions, grade alterations, syllabus omissions) flag verification requests to administration before database modification.",
    icon: ShieldAlert
  },
  {
    title: "100% Immutable Audit Trails",
    desc: "Every AI prompt, validation, database operation, and confirmation is logged to historical logs database for total traceability.",
    icon: ClipboardList
  },
  {
    title: "Complete Data Isolation & Privacy",
    desc: "Your school database is isolated. We do not use student personal identification numbers or academic records to train public AI models.",
    icon: Database
  }
];

export default function SecurityGovernance() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#080d1a] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Lock className="w-3.5 h-3.5" />
            Enterprise Security
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
            Enterprise Governance <span className="text-red-600 dark:text-red-400">and Guardrails</span>
          </h2>
          <p className="text-lg text-slate-655 dark:text-slate-400 font-dm-sans leading-relaxed">
            Every AI action follows the identical rules, validation constraints, and database permissions as traditional ERP dashboards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {governanceItems.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/[0.05] rounded-[24px] p-6 lg:p-8 flex gap-6 hover:border-red-500/20 hover:shadow-lg dark:hover:shadow-none transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-dm-sans mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

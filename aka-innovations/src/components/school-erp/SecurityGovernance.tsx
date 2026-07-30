'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Key, ClipboardList, Database, Lock } from 'lucide-react';

const governanceItems = [
  {
    title: "Role-Based Access Control (RBAC)",
    desc: "AI agents match your database permissions exactly. A teacher cannot read financial data, and a parent cannot see other student marks. No backdoor queries.",
    icon: Key,
    stat: "Zero Privilege Escalation"
  },
  {
    title: "Mandatory Approval Workflows",
    desc: "Crucial edits (fee revisions, grade alterations, syllabus omissions) flag verification requests to administration before database modification.",
    icon: ShieldAlert,
    stat: "Human-in-the-Loop"
  },
  {
    title: "100% Immutable Audit Trails",
    desc: "Every AI prompt, validation, database operation, and confirmation is logged to historical logs database for total traceability.",
    icon: ClipboardList,
    stat: "Tamper-Proof Logs"
  },
  {
    title: "Complete Data Isolation & Privacy",
    desc: "Your school database is isolated. We do not use student personal identification numbers or academic records to train public AI models.",
    icon: Database,
    stat: "GDPR-Class Isolation"
  }
];

export default function SecurityGovernance() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0e1424] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block mb-3 font-bold -rotate-1">
            🔐 Enterprise-grade protection!
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-finger-paint leading-snug">
            Enterprise Governance and Guardrails
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Every AI action follows the identical rules, validation constraints, and database permissions as traditional ERP dashboards.
          </p>
        </div>

        {/* Governance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {governanceItems.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className="bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 lg:p-8 flex gap-5 hover:border-amber-400/40 transition-colors duration-200 shadow-sm dark:shadow-none group"
              >
                <div className="flex flex-col items-start gap-3 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="font-caveat text-base font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                    ✓ {item.stat}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-finger-paint mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Banner */}
        <div className="mt-12 max-w-5xl mx-auto p-6 bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-finger-paint font-bold text-slate-900 dark:text-white text-sm">Security First Architecture</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Your student data never leaves your isolated tenant environment</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span className="font-caveat text-base text-emerald-600 dark:text-emerald-400 font-bold">✓ RBAC Enforced</span>
            <span className="font-caveat text-base text-emerald-600 dark:text-emerald-400 font-bold">✓ End-to-End Encrypted</span>
            <span className="font-caveat text-base text-emerald-600 dark:text-emerald-400 font-bold">✓ No Public AI Training</span>
          </div>
        </div>

      </div>
    </section>
  );
}

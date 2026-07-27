'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const agents = [
  {
    id: 'teacher',
    role: 'Teacher Assistant Agent',
    badge: 'Daily Academic Operations',
    desc: 'Teachers dictate class updates in natural language. The agent updates attendance registries, logs homework assignments, and sends instant parent notifications.',
    capabilities: [
      'Voice-to-text attendance marking',
      'Automated homework distribution',
      'Parent absence alerts via WhatsApp',
      'Classroom performance logs'
    ],
    metric: '12 mins saved / class'
  },
  {
    id: 'exam',
    role: 'Exam Controller Agent',
    badge: 'Assessment & Marks Compilation',
    desc: 'Input raw assessment scores and let the agent calculate GPAs, rank distributions, pass percentages, and generate standardized PDF report cards with anomaly detection.',
    capabilities: [
      'Instant report card PDF compilation',
      'Grade anomaly and score drop alerts',
      'CBSE / ICSE / IB board grading rules',
      'Class achievement summary reports'
    ],
    metric: '100% score accuracy'
  },
  {
    id: 'accounts',
    role: 'Accounts & Fee Agent',
    badge: 'Financial Governance',
    desc: 'Track fee installments, send automated reminders before due dates, reconcile online payment gateways, and flag ledger discrepancies before month-end audits.',
    capabilities: [
      'Targeted payment reminder queues',
      'Automated digital receipt PDF generation',
      'Payment gateway reconciliation logs',
      'Defaulter report aggregation'
    ],
    metric: '40% faster fee collection'
  },
  {
    id: 'coordinator',
    role: 'School Coordinator Agent',
    badge: 'Resource & Timetable Scheduling',
    desc: 'Specify teacher availability, lab capacity, and subject quotas. The agent evaluates thousands of schedule permutations to build an optimal conflict-free timetable.',
    capabilities: [
      'Conflict-free timetable generation',
      'Instant teacher substitution allocation',
      'Lab and sports ground scheduling',
      'Exam hall seating plan generator'
    ],
    metric: '< 2 mins setup time'
  }
];

export default function AgentWorkforce() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0e1424] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block mb-2 font-bold">
            🤖 Meet your dedicated administrative team!
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-finger-paint">
            Specialized Autonomous Workforce
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Instead of a generic chatbot, AKA provides task-specific agents trained on administrative workflows and protected by strict permission boundaries.
          </p>
        </div>

        {/* Stacked Cards with Light & Dark Mode */}
        <div className="space-y-8 relative">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="sticky rounded-2xl bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-sm dark:shadow-2xl overflow-hidden transition-colors duration-300"
              style={{
                top: `calc(4.5rem + ${index * 1}rem)`,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Agent Details */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-400/10 border border-amber-300 dark:border-amber-400/30 text-amber-900 dark:text-amber-300 font-caveat text-xl inline-block font-bold">
                    {agent.badge}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-finger-paint">
                    {agent.role}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-geist">
                    {agent.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <h4 className="font-caveat text-xl text-emerald-700 dark:text-emerald-400 mb-3 font-bold">
                      Core Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {agent.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-geist">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metric Summary Side */}
                <div className="lg:col-span-5 rounded-xl bg-slate-50 dark:bg-[#0d1424] p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between h-full">
                  <div>
                    <span className="font-caveat text-xl text-amber-600 dark:text-amber-300 block mb-1 font-bold">
                      OPERATIONAL IMPACT
                    </span>
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 font-finger-paint mb-2">
                      {agent.metric}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Validated across active deployment benchmark reports.
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-geist">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> RBAC Enforced
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400" /> Instant Execution
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

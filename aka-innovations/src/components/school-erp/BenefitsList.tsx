'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckSquare, Sparkles, TrendingUp, Users, CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: "Reduce Administrative Workload",
    desc: "Cut administrative operations from hours to seconds by letting teachers speak to perform records management.",
    metric: "40% Time Saved"
  },
  {
    title: "Increase Teacher Productivity",
    desc: "Teachers spend less time looking at spreadsheets and dashboards, leaving more hours for quality student lectures.",
    metric: "15hrs/week Back"
  },
  {
    title: "Improve Parent Engagement",
    desc: "Parents get instant updates regarding exam schedules, pending homework assignments, and fees in simple dialogue.",
    metric: "3x More Engagement"
  },
  {
    title: "Reduce Training Requirements",
    desc: "Natural-language AI eliminates training overhead. If your administrative staff can write messages, they can use our ERP.",
    metric: "Zero Training"
  }
];

export default function BenefitsList() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0f1d] border-t border-slate-200 dark:border-white/[0.05] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-650 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Key Outcomes
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
            Concrete Outcomes For <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">Your Institution</span>
          </h2>
          <p className="text-lg text-slate-655 dark:text-slate-400 font-dm-sans leading-relaxed">
            Move away from database entries and focus on executing high-performing educational administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((ben, index) => {
            const getPercentage = (metric: string) => {
              if (metric.includes("40%")) return 40;
              if (metric.includes("15hrs")) return 75;
              if (metric.includes("3x")) return 90;
              return 100;
            };

            return (
              <div 
                key={index}
                className="bg-slate-50 dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/[0.05] rounded-[24px] p-6 flex flex-col justify-between hover:border-emerald-500/20 hover:shadow-lg dark:hover:shadow-none transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-14 h-14 shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-200 dark:text-slate-800"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <motion.path
                          className="text-emerald-500 dark:text-emerald-400"
                          strokeWidth="3.5"
                          strokeDasharray={`${getPercentage(ben.metric)}, 100`}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-black text-slate-800 dark:text-slate-200">
                          {getPercentage(ben.metric)}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono text-lg font-black block">{ben.metric}</span>
                      <span className="text-[9px] text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wider">Metric Result</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-dm-sans mb-2">{ben.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{ben.desc}</p>
                </div>
                
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold border-t border-slate-200 dark:border-white/[0.04] pt-4 mt-6">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
                  Proven Results
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

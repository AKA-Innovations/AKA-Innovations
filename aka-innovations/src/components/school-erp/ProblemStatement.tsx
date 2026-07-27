'use client';

import React from 'react';
import { motion } from 'framer-motion';

const painPoints = [
  {
    code: "✏️ 01",
    title: "Administrative Overload",
    desc: "Teachers spend 35%+ of their daily schedule manually filling attendance registers and paper marksheets."
  },
  {
    code: "✏️ 02",
    title: "Click Fatigue",
    desc: "Navigating nested drop-down menus just to approve a leave application or publish exam timetables."
  },
  {
    code: "✏️ 03",
    title: "Fragmented Analytics",
    desc: "Student records, fees, and transport data live in separate silos, requiring manual CSV exports."
  },
  {
    code: "✏️ 04",
    title: "Communication Lag",
    desc: "Circulars and fee reminders get lost in chaotic messaging groups without delivery confirmation."
  }
];

export default function ProblemStatement() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0e1424] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Handwritten Kicker + Finger Paint Headline */}
        <div className="max-w-3xl mb-16">
          <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block mb-2 -rotate-1 font-bold">
            Why traditional school software fails teachers...
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-finger-paint">
            Legacy ERPs turn educators into data entry clerks.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Most school platforms act as static logbooks requiring constant manual clicks, form filling, and report exports.
          </p>
        </div>

        {/* Time Comparison Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="p-8 rounded-2xl bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-slate-800 mb-16 shadow-sm dark:shadow-xl transition-colors duration-300"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-sm font-finger-paint text-slate-800 dark:text-slate-200 uppercase tracking-wide">
              Daily Administrative Time Investment
            </h3>
            <span className="font-caveat text-2xl text-emerald-600 dark:text-emerald-400 font-bold">
              ✨ 96.6% Time Saved!
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-medium mb-2">
                <span className="text-slate-700 dark:text-slate-300 font-geist">Legacy Multi-Tab Form Entry</span>
                <span className="text-amber-600 dark:text-amber-400 font-finger-paint text-xs">15 Minutes / Class</span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="h-full bg-amber-500 rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-2">
                <span className="text-slate-700 dark:text-slate-300 font-geist">AKA Autonomous Agent Execution</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-finger-paint text-xs">30 Seconds / Class</span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "3.3%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-full bg-emerald-500 dark:bg-emerald-400 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.code}
              className="p-6 rounded-xl bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-slate-800 hover:border-amber-400/50 transition-colors duration-200 shadow-sm dark:shadow-none"
            >
              <span className="font-caveat text-2xl text-amber-600 dark:text-amber-400 block mb-2 font-bold">{point.code}</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 font-finger-paint">{point.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{point.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

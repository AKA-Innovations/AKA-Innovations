'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, HelpCircle, Layers, CheckSquare, SearchX, AlertCircle } from 'lucide-react';

const painPoints = [
  {
    title: "Administrative Overload",
    desc: "Teachers spend up to 40% of their workday doing manual data logs instead of lecturing.",
    icon: Clock
  },
  {
    title: "Excessive Click Fatigue",
    desc: "Opening simple report cards, scheduling, or adding homework logs takes up to 7 click steps.",
    icon: Layers
  },
  {
    title: "Fragmented Analytics",
    desc: "Data resides in separate departments. Compiling simple summaries requires manual exports.",
    icon: SearchX
  },
  {
    title: "Communication Lag",
    desc: "Notices, holiday lists, and class cancellations get lost in chaotic messaging groups.",
    icon: AlertCircle
  }
];

export default function ProblemStatement() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#080d1a] relative overflow-hidden transition-colors duration-300">
      {/* Decorative Organic SVG wave paths & Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70 dark:opacity-100">
        {/* Soft Glowing Ambient Blobs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-500/10 dark:bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Organic Curve Shape */}
        <svg
          className="absolute -top-1 w-full text-slate-100 dark:text-[#0b1329]/50 transition-colors duration-300"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,120 Q1080,200 720,120 T0,80 Z"
            fill="currentColor"
          />
        </svg>

        {/* Bottom Organic Curve Shape */}
        <svg
          className="absolute -bottom-1 w-full text-slate-100 dark:text-[#0b1329]/50 transition-colors duration-300"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 Q360,40 720,120 T1440,80 L1440,200 L0,200 Z"
            fill="currentColor"
          />
        </svg>
        
        {/* Animated flow lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M -100,150 Q 300,50 720,250 T 1540,150"
            fill="none"
            stroke="url(#problem-grad-1)"
            strokeWidth="3"
            strokeDasharray="12 12"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -240 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          />
          <motion.path
            d="M -100,350 Q 400,500 800,200 T 1540,400"
            fill="none"
            stroke="url(#problem-grad-2)"
            strokeWidth="2"
            strokeDasharray="8 8"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 160 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          />
          <defs>
            <linearGradient id="problem-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="problem-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
            The Status Quo Bottleneck
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
            Traditional School ERPs <span className="text-red-500 dark:text-red-400">Are Not Working</span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 font-dm-sans leading-relaxed">
            Most school software platforms act as passive logbooks. Staff have to navigate dozens of tabs, fill structured templates manually, and compile reports. This results in heavy overhead.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/[0.05] rounded-[24px] p-6 lg:p-8 mb-16 shadow-sm dark:shadow-none transition-colors duration-300"
        >
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6 text-center">
            Daily Time Consumption Comparison
          </h4>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-700 dark:text-slate-300">Traditional Attendance & Logging</span>
                <span className="text-red-500 dark:text-red-400">15 Minutes / Class</span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-700 dark:text-slate-300">AKA Agentic AI Command</span>
                <span className="text-emerald-600 dark:text-emerald-400">30 Seconds / Class</span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "5%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => {
            const IconComp = point.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/[0.05] rounded-[24px] p-6 lg:p-8 hover:border-red-500/20 hover:shadow-lg dark:hover:shadow-none transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 dark:text-red-400 flex items-center justify-center mb-6">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-dm-sans mb-2">{point.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, LayoutDashboard } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function DualEngine() {
  const [activeTab, setActiveTab] = useState<'agentic' | 'traditional'>('agentic');
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section id="dual-engine" className="py-24 bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block mb-2 font-bold">
            ✨ Two powerful engines in one platform!
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-finger-paint">
            The School ERP that Works Both Ways.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Use standard form-based dashboards for traditional administration, or switch to natural language AI agents for instant operational execution.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-xl bg-slate-100 dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 inline-flex items-center gap-2">
            <button
              onClick={() => setActiveTab('agentic')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-finger-paint transition-all duration-150 active:scale-[0.97] ${
                activeTab === 'agentic'
                  ? 'bg-amber-400 text-black font-extrabold shadow-lg shadow-amber-400/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" /> Agentic AI Engine
            </button>
            <button
              onClick={() => setActiveTab('traditional')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-finger-paint transition-all duration-150 active:scale-[0.97] ${
                activeTab === 'traditional'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-700 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" /> Legacy Dashboard View
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-50 dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg dark:shadow-2xl transition-colors duration-300">
          <AnimatePresence mode="wait">
            {activeTab === 'agentic' ? (
              <motion.div
                key="agentic"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-10 items-center"
              >
                <div className="lg:col-span-5 space-y-6">
                  <span className="font-caveat text-2xl text-emerald-600 dark:text-emerald-400 block -rotate-1 font-bold">
                    ⚡ Autonomous AI Agent Mode
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug font-finger-paint">
                    Say what needs doing. The agent executes updates.
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                      Voice or text attendance logging across classes
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                      Automated fee reminder queues sent to parents
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                      Instant report card compilation with score error checks
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#080d1a] aspect-[16/10] relative shadow-md">
                  <Image
                    src={isDark ? "/images/erp_agentic_mode.png" : "/images/erp_agentic_mode_light.png"}
                    alt="Agentic AI Command Center"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="traditional"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-10 items-center"
              >
                <div className="lg:col-span-5 space-y-6">
                  <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block -rotate-1 font-bold">
                    📊 Structured Tabular View
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug font-finger-paint">
                    Standard forms, analytics grids, and manual record controls.
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs font-bold">✓</span>
                      Tabular student demographic and marks ledgers
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs font-bold">✓</span>
                      Granular RBAC user permission management
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs font-bold">✓</span>
                      Downloadable audit logs and exportable Excel reports
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#080d1a] aspect-[16/10] relative shadow-md">
                  <Image
                    src={isDark ? "/images/erp_hero_dashboard.png" : "/images/erp_hero_dashboard_light.png"}
                    alt="Standard School ERP Dashboard View"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

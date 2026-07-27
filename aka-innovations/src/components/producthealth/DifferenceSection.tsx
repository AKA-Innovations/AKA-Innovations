'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Activity, ShieldCheck, Check } from 'lucide-react';

export const DifferenceSection = () => {
  const [activeTab, setActiveTab] = useState<'paas' | 'legacy'>('paas');

  return (
    <section className="py-24 bg-white dark:bg-[#07111f] text-slate-900 dark:text-slate-100 font-jakarta border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-doctor text-2xl text-cyan-600 dark:text-cyan-300 block mb-2 font-bold -rotate-1">
            💊 The Continuous Care Paradigm Shift
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Consultation App vs Health-Connect PaaS
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            See why hospital systems and health platforms choose continuous clinical telemetry over one-off video call apps.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-xl bg-slate-100 dark:bg-[#0c1424] border border-slate-200 dark:border-slate-800 inline-flex items-center gap-2">
            <button
              onClick={() => setActiveTab('paas')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-extrabold transition-all duration-150 active:scale-[0.97] ${
                activeTab === 'paas'
                  ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/20'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Activity className="w-4 h-4" /> Health-Connect PaaS Engine
            </button>
            <button
              onClick={() => setActiveTab('legacy')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-150 active:scale-[0.97] ${
                activeTab === 'legacy'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Legacy Telehealth App
            </button>
          </div>
        </div>

        {/* Comparison Display Box */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-50 dark:bg-[#0c1424] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg transition-colors duration-300">
          <AnimatePresence mode="wait">
            {activeTab === 'paas' ? (
              <motion.div
                key="paas"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-10 items-center"
              >
                <div className="lg:col-span-5 space-y-6">
                  <span className="font-doctor text-2xl text-emerald-600 dark:text-emerald-400 block -rotate-1 font-bold">
                    ⚡ Continuous 24/7 Care Telemetry
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-snug">
                    Real-time vitals monitoring & clinical care loops.
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 font-medium">
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                      Continuous wearable ECG & SpO2 vitals streaming
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                      Automated risk triage alerting attending physicians
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                      Direct bi-directional EHR/EMR data synchronization
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07111f] aspect-[16/10] relative shadow-md">
                  <Image
                    src="/images/health_patient_mobile.png"
                    alt="Health-Connect PaaS Patient Vitals App"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="legacy"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-10 items-center"
              >
                <div className="lg:col-span-5 space-y-6">
                  <span className="font-doctor text-2xl text-amber-600 dark:text-amber-300 block -rotate-1 font-bold">
                    ⚠️ Transactional Video Calls Only
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                    Isolated 10-minute appointments with zero follow-up.
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 font-medium">
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs font-bold">✓</span>
                      One-off video consultations with no telemetry tracking
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs font-bold">✓</span>
                      No automated prescription compliance or dosage reminders
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs font-bold">✓</span>
                      Manual PDF report uploads without hospital EMR integration
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07111f] aspect-[16/10] relative shadow-md">
                  <Image
                    src="/images/health_doctor_tablet.png"
                    alt="Legacy Telehealth Appointment Interface"
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
};
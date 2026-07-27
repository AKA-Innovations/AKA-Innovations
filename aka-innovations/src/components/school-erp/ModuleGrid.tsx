'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Users, DollarSign, Calendar, Smartphone, Bus } from 'lucide-react';

const modules = [
  {
    title: 'Student Information System',
    category: 'Core Academic Database',
    desc: 'Centralized registry tracking student demographics, academic history, medical records, and disciplinary logs.',
    colSpan: 'md:col-span-2 lg:col-span-2',
    image: '/images/erp_student_classroom.png',
    stat: '100k+ Records',
    icon: Users
  },
  {
    title: 'Automated Fee Management',
    category: 'Finance & Ledger',
    desc: 'Multi-tiered fee structures, online gateway payments, partial payment tracking, and automated receipts.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    stat: 'Instant Digital Receipts',
    icon: DollarSign
  },
  {
    title: 'Examination & Report Cards',
    category: 'Assessment Engine',
    desc: 'Custom grading scales, term marksheets, rank generation, and Board exam preparation tracking.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    stat: 'CBSE / ICSE / IB Board Aligned',
    icon: BookOpen
  },
  {
    title: 'Attendance & Leave Tracking',
    category: 'Daily Operations',
    desc: 'Real-time RFID/biometric integration, manual class register logging, and automated parent SMS alerts.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    stat: '30s / Class Log',
    icon: Calendar
  },
  {
    title: 'Native Parent & Student Apps',
    category: 'Mobile Applications',
    desc: 'iOS and Android applications for live homework submission, fee payments, and push notifications.',
    colSpan: 'md:col-span-2 lg:col-span-2',
    stat: 'iOS & Android Native',
    icon: Smartphone
  },
  {
    title: 'Transport & Fleet GPS',
    category: 'Logistics',
    desc: 'Live bus route tracking, driver assignments, parent arrival notifications, and fuel log auditing.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    stat: 'Real-Time GPS Tracking',
    icon: Bus
  }
];

export default function ModuleGrid() {
  return (
    <section className="py-24 bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block mb-2 font-bold">
            📚 Complete administrative coverage!
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-finger-paint">
            Comprehensive Module Directory
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Every department in your school operates on unified database logic with zero data silos.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {modules.map((mod, idx) => {
            const IconComp = mod.icon;
            return (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                className={`rounded-2xl bg-slate-50 dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 p-6 lg:p-8 flex flex-col justify-between overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-200 ${mod.colSpan}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-400/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-caveat text-xl text-emerald-600 dark:text-emerald-300 font-bold">
                      {mod.stat}
                    </span>
                  </div>

                  <span className="font-caveat text-xl text-amber-600 dark:text-amber-300 block mb-1 font-bold">{mod.category}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors font-finger-paint">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6 font-geist">
                    {mod.desc}
                  </p>
                </div>

                {mod.image && (
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 mt-2">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

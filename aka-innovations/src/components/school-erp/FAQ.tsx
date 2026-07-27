'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Does AKA Agentic AI replace school administrative staff?",
    a: "No. The AI agent acts as an execution assistant for existing staff. It automates repetitive data entry, log updates, and notification routing while leaving human staff in full control of approvals and sensitive decisions."
  },
  {
    q: "Can workflows require staff validation before execution?",
    a: "Yes. Every database write, fee receipt issuance, or circular broadcast can be configured with mandatory human-in-the-loop approval. No record is modified without explicit staff authorization when approval rules are active."
  },
  {
    q: "Can we disable AI features and run traditional ERP exclusively?",
    a: "100%. AKA is a complete traditional ERP platform. You can disable conversational AI agents at any time and operate your school exclusively via standard form-based dashboards."
  },
  {
    q: "How long does migration from our current ERP take?",
    a: "Database migration typically takes 7 to 14 business days. Our team handles data sanitization, student registry import, fee structure mapping, and historical record validation with zero operational downtime."
  },
  {
    q: "Is student data protected and isolated?",
    a: "Yes. Every school operates on an isolated cloud database instance with zero data sharing across tenants. Student data is never used to train third-party public AI models."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0e1424] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        
        <div className="mb-12">
          <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block mb-1 font-bold">
            ❓ Got questions? We have answers!
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 font-finger-paint">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-normal">
            Everything you need to know about architecture, data isolation, and deployment.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-base font-finger-paint text-slate-900 dark:text-white hover:text-amber-500 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-amber-500 shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence mode="wait">
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal border-t border-slate-100 dark:border-slate-800/60 font-geist">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

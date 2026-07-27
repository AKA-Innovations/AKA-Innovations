'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

const sampleScenarios = [
  {
    role: "Teacher Assistant",
    prompt: "Mark attendance for Class 8A. Rohit Sharma and Aman Verma absent.",
    steps: [
      "Authenticating teacher credentials for Class 8A",
      "Updating roster (28 Present, 2 Absent)",
      "Sending automated WhatsApp alerts to parents of absent students"
    ],
    result: "Attendance logged successfully. 2 parent notifications dispatched."
  },
  {
    role: "Exam Controller",
    prompt: "Generate Class 10 Term 1 report cards and flag students below 40% in Mathematics.",
    steps: [
      "Fetching Grade 10 mark ledgers from academic database",
      "Applying CBSE weighted grade scale rules",
      "Compiling 42 PDF report cards with QR verification tokens",
      "Identified 3 students requiring math remedial support"
    ],
    result: "42 report cards compiled. 3 student alerts routed to Principal dashboard."
  },
  {
    role: "Accounts Manager",
    prompt: "Send Q3 fee payment reminders to pending Grade 6 accounts.",
    steps: [
      "Filtering ledger for Grade 6 accounts with unpaid balance > ₹0",
      "Identified 14 pending accounts across Sections 6A and 6B",
      "Generating unique UPI payment links with secure receipt tokens",
      "Queued SMS & App notifications to 14 parent devices"
    ],
    result: "14 digital payment reminders sent via SMS and mobile app."
  }
];

export default function LiveDemo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<string[]>(sampleScenarios[0].steps);

  const handleRun = (idx: number) => {
    setActiveIdx(idx);
    setIsRunning(true);
    setVisibleSteps([]);

    const steps = sampleScenarios[idx].steps;
    steps.forEach((step, sIdx) => {
      setTimeout(() => {
        setVisibleSteps((prev) => [...prev, step]);
        if (sIdx === steps.length - 1) {
          setIsRunning(false);
        }
      }, (sIdx + 1) * 300);
    });
  };

  return (
    <section id="live-demo" className="py-24 bg-slate-50 dark:bg-[#0e1424] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block mb-2 font-bold">
            💡 See the AI agent in action live!
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-finger-paint">
            Test Administrative Prompts Live
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Click any scenario below to observe how AKA Agentic AI parses intent, checks permissions, and executes database workflows in real time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-colors duration-300">
          {/* Executive Bar Header */}
          <div className="px-6 py-4 bg-slate-100 dark:bg-[#050811] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-finger-paint text-amber-600 dark:text-amber-300 uppercase tracking-wide">
              AKA Interactive Assistant Console
            </span>
            <span className="text-xs font-geist text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/30">
              RBAC Verified
            </span>
          </div>

          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Prompt Selector Buttons */}
            <div className="lg:col-span-5 space-y-3">
              <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block mb-1 font-bold">
                Select Scenario:
              </span>
              {sampleScenarios.map((sc, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRun(idx)}
                  className={`w-full text-left p-4 rounded-xl border text-xs font-geist transition-all duration-150 active:scale-[0.98] ${
                    activeIdx === idx
                      ? 'bg-amber-100 dark:bg-amber-400/10 border-amber-300 dark:border-amber-400/50 text-slate-900 dark:text-white font-semibold shadow-sm'
                      : 'bg-white dark:bg-[#0d1424] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className="font-finger-paint text-xs text-amber-600 dark:text-amber-300 block mb-1">
                    {sc.role}
                  </span>
                  <p className="line-clamp-2 text-slate-800 dark:text-slate-200 font-normal">&quot;{sc.prompt}&quot;</p>
                </button>
              ))}
            </div>

            {/* Execution Visualizer */}
            <div className="lg:col-span-7 rounded-xl bg-slate-50 dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between min-h-[300px]">
              <div className="space-y-4">
                <div className="font-caveat text-2xl text-amber-600 dark:text-amber-300 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between font-bold">
                  <span>Workflow Execution Log:</span>
                  {isRunning && <Loader2 className="w-4 h-4 text-amber-500 animate-spin" />}
                </div>

                <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300 font-geist">
                  <p className="font-semibold text-slate-900 dark:text-white bg-white dark:bg-[#080d1a] p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    Prompt: &quot;{sampleScenarios[activeIdx].prompt}&quot;
                  </p>
                  
                  <div className="space-y-2 pl-2">
                    {visibleSteps.map((step, sIdx) => (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {!isRunning && visibleSteps.length > 0 && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-200 dark:border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{sampleScenarios[activeIdx].result}</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

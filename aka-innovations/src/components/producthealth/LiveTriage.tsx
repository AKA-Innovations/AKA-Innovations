'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle2, Loader2, HeartPulse, ArrowRight } from 'lucide-react';

const clinicalScenarios = [
  {
    role: "Cardiology Alert",
    symptom: "Post-Op Patient #4082 — Heart Rate 108 BPM, SpO2 93%",
    steps: [
      "Evaluating live telemetry feed against clinical thresholds",
      "Flagged Grade-2 Tachycardia risk indicator",
      "Routing priority alert to On-Call Cardiologist mobile app",
      "Dispatching automated nurse station alert for room check"
    ],
    result: "Alert routed in 1.4s. Attending Physician confirmed case review."
  },
  {
    role: "Chronic Care Sync",
    symptom: "Diabetic Patient #1924 — Glucose Fasting 210 mg/dL",
    steps: [
      "Parsing Bluetooth glucometer sync reading",
      "Comparing 14-day glycemic trend baseline",
      "Generating automated insulin dosage adjustment recommendation",
      "Queued video consultation request with Endocrinologist"
    ],
    result: "Rx adjustment prompt sent to doctor dashboard. Appointment scheduled."
  },
  {
    role: "Medication Compliance",
    symptom: "Hypertension Patient #8810 — Missed 2 consecutive doses",
    steps: [
      "Smart pillbox sensor detected un-opened dose tray",
      "Triggering automated WhatsApp dosage reminder & SMS alert",
      "Escalating alert to primary care coordinator dashboard"
    ],
    result: "Patient confirmed reminder. Compliance log updated in EHR."
  }
];

export const LiveTriage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<string[]>(clinicalScenarios[0].steps);

  const handleRun = (idx: number) => {
    setActiveIdx(idx);
    setIsRunning(true);
    setVisibleSteps([]);

    const steps = clinicalScenarios[idx].steps;
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
    <section id="live-triage" className="py-24 bg-white dark:bg-[#07111f] text-slate-900 dark:text-slate-100 font-jakarta border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-doctor text-2xl text-cyan-600 dark:text-cyan-300 block mb-2 font-bold -rotate-1">
            🩺 Test live clinical tele-triage routing!
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Interactive Triage Simulator
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Click any clinical scenario below to see how Health-Connect PaaS parses patient telemetry, evaluates threshold rules, and routes alerts in real time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-50 dark:bg-[#0c1424] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-colors duration-300">
          {/* Bar Header */}
          <div className="px-6 py-4 bg-slate-100 dark:bg-[#050811] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900 dark:text-white">
              <HeartPulse className="w-4 h-4 text-cyan-500 animate-pulse" />
              <span>Health-Connect Triage Console --live</span>
            </div>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/30">
              HL7 Interoperability Active
            </span>
          </div>

          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Scenario Buttons */}
            <div className="lg:col-span-5 space-y-3">
              <span className="font-doctor text-2xl text-cyan-600 dark:text-cyan-300 block mb-1 font-bold">
                Select Clinical Scenario:
              </span>
              {clinicalScenarios.map((sc, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRun(idx)}
                  className={`w-full text-left p-4 rounded-xl border text-xs font-jakarta transition-all duration-150 active:scale-[0.98] ${
                    activeIdx === idx
                      ? 'bg-cyan-100 dark:bg-cyan-400/10 border-cyan-300 dark:border-cyan-400/50 text-cyan-950 dark:text-white font-bold shadow-sm'
                      : 'bg-white dark:bg-[#07111f] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className="font-doctor text-xl text-cyan-700 dark:text-cyan-300 block mb-1 font-bold">
                    {sc.role}
                  </span>
                  <p className="line-clamp-2 text-slate-800 dark:text-slate-200 font-normal">&quot;{sc.symptom}&quot;</p>
                </button>
              ))}
            </div>

            {/* Step Visualizer Stream */}
            <div className="lg:col-span-7 rounded-xl bg-white dark:bg-[#07111f] border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between min-h-[300px]">
              <div className="space-y-4">
                <div className="font-doctor text-2xl text-cyan-600 dark:text-cyan-300 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between font-bold">
                  <span>Care Sequence Log:</span>
                  {isRunning && <Loader2 className="w-4 h-4 text-cyan-500 animate-spin" />}
                </div>

                <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300 font-jakarta">
                  <p className="font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-[#0c1424] p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    Vitals Signal: &quot;{clinicalScenarios[activeIdx].symptom}&quot;
                  </p>
                  
                  <div className="space-y-2 pl-2">
                    {visibleSteps.map((step, sIdx) => (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                        <span>{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {!isRunning && visibleSteps.length > 0 && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-200 dark:border-emerald-500/30">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{clinicalScenarios[activeIdx].result}</span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';

const clinicalGaps = [
  {
    rxCode: "℞ 01",
    title: "Fragmented Patient Data",
    desc: "Lab reports, prescription histories, and primary care notes live in isolated hospital software with zero interoperability.",
    doctorNote: "Requires manual faxing or phone calls between departments."
  },
  {
    rxCode: "℞ 02",
    title: "Delayed Tele-Triage",
    desc: "Patients wait hours for basic symptom evaluation because traditional apps treat consultations as isolated one-off video calls.",
    doctorNote: "Critical warning signs missed before specialist referral."
  },
  {
    rxCode: "℞ 03",
    title: "The Post-Consultation Void",
    desc: "Once the appointment ends, patient tracking drops to zero until an emergency hospital readmission occurs.",
    doctorNote: "Zero remote vitals telemetry after discharge."
  },
  {
    rxCode: "℞ 04",
    title: "Unmonitored Adherence",
    desc: "Over 50% of chronic disease prescriptions are taken incorrectly due to lack of automated dosage alerts or pharmacy sync.",
    doctorNote: "Medication compliance falls sharply after 14 days."
  }
];

export const ProblemsSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0c1424] text-slate-900 dark:text-slate-100 font-jakarta border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-doctor text-2xl text-cyan-600 dark:text-cyan-300 block mb-2 font-bold -rotate-1">
            🩺 The systemic flaw in current healthcare apps...
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Isolated consultation apps don&apos;t provide continuous care.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Most digital health tools treat patient health as transactional 10-minute video appointments instead of an ongoing care relationship.
          </p>
        </div>

        {/* 4 Rx Prescription Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicalGaps.map((gap, index) => (
            <motion.div
              key={gap.rxCode}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="p-6 rounded-2xl bg-white dark:bg-[#07111f] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-doctor text-2xl text-cyan-600 dark:text-cyan-400 font-bold">{gap.rxCode}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{gap.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">{gap.desc}</p>
              </div>

              {/* Doctor's Handwritten Rx Note Annotation */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 bg-cyan-50/50 dark:bg-cyan-950/30 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <span className="text-xs text-slate-500 block mb-0.5 font-semibold">Doctor&apos;s Observation:</span>
                <p className="font-doctor text-lg text-cyan-800 dark:text-cyan-300 leading-tight">
                  &quot;{gap.doctorNote}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
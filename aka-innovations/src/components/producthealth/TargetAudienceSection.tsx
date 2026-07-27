'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stakeholders = [
  {
    role: "Attending Physicians & Specialists",
    focus: "Clinical Efficiency & Remote Telemetry",
    desc: "Streamlined vitals monitoring dashboards, automated triage alerts, and pre-populated consultation notes that eliminate manual charting hours.",
    doctorNote: "Saves 15+ minutes of manual chart entry per patient encounter."
  },
  {
    role: "Patients & Family Caregivers",
    focus: "Continuous Care & Peace of Mind",
    desc: "Mobile application with 24/7 vitals streaming, medication dosage alarms, direct doctor chat, and digital prescription access.",
    doctorNote: "Instant reassurance for post-surgery recovery at home."
  },
  {
    role: "Clinics & Polyclinics",
    focus: "Operational Scalability & EHR Sync",
    desc: "Unified patient queue management, automated appointment scheduling, digital billing, and seamless multi-specialty referrals.",
    doctorNote: "Eliminates patient wait times and double-booked schedules."
  },
  {
    role: "Enterprise Health Systems",
    focus: "PaaS Infrastructure & Governance",
    desc: "Cloud-native healthcare platform supporting HL7 / FHIR data exchange, HIPAA audit logging, and 99.99% system uptime SLAs.",
    doctorNote: "Zero data leakage with isolated single-tenant database vaults."
  }
];

export const TargetAudienceSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0c1424] text-slate-900 dark:text-slate-100 font-jakarta border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <span className="font-doctor text-2xl text-cyan-600 dark:text-cyan-300 block mb-2 font-bold -rotate-1">
            🩺 Tailored for every healthcare stakeholder...
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Unified Care Delivery Across Stakeholders
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Health-Connect connects patients, clinicians, clinic administrators, and enterprise health networks into a single clinical loop.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholders.map((st, idx) => (
            <motion.div
              key={st.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="p-6 rounded-2xl bg-white dark:bg-[#07111f] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-doctor text-xl text-cyan-600 dark:text-cyan-400 block mb-1 font-bold">{st.focus}</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{st.role}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal mb-6">{st.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 bg-cyan-50/40 dark:bg-cyan-950/20 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <p className="font-doctor text-lg text-cyan-800 dark:text-cyan-300 leading-tight">
                  &quot;{st.doctorNote}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
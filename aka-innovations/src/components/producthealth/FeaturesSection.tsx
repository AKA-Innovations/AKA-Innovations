'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, FileText, Pill, ShieldAlert, Cpu } from 'lucide-react';

const features = [
  {
    title: 'Continuous Remote Telemetry',
    category: '24/7 Vitals Monitoring',
    desc: 'Streams wearable ECG, pulse, blood pressure, and SpO2 readings directly to attending physician dashboards.',
    colSpan: 'md:col-span-2 lg:col-span-2',
    image: '/images/health_patient_mobile.png',
    stat: '99.99% Live Sync',
    icon: HeartPulse
  },
  {
    title: 'AI Clinical Triage',
    category: 'Risk Prioritization',
    desc: 'Automatically evaluates incoming patient symptoms and flags critical vital drops for immediate physician intervention.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    stat: '< 2s Alert Speed',
    icon: Cpu
  },
  {
    title: 'Direct EMR & EHR Integration',
    category: 'Interoperability',
    desc: 'Seamlessly syncs clinical encounter notes, diagnostic imaging, and lab test results across HL7 / FHIR standards.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    stat: 'HL7 & FHIR Compliant',
    icon: FileText
  },
  {
    title: 'Prescription & Pharmacy Sync',
    category: 'Medication Adherence',
    desc: 'Dispatches digital prescriptions directly to accredited pharmacies with automated refill alerts for patients.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    stat: 'Rx Digital Verification',
    icon: Pill
  },
  {
    title: 'Multi-Specialty Routing Engine',
    category: 'Clinical Escalation',
    desc: 'Routes complex patient cases across Cardiology, Neurology, Pediatrics, and General Medicine care teams.',
    colSpan: 'md:col-span-2 lg:col-span-2',
    stat: 'Multi-Department Roster',
    icon: Stethoscope
  },
  {
    title: 'Emergency Response Protocols',
    category: 'Critical Care',
    desc: 'Triggers automated GPS ambulance dispatch and nearest ER alert routing when vital thresholds drop dangerously.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    stat: 'Automated ER Dispatch',
    icon: ShieldAlert
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0c1424] text-slate-900 dark:text-slate-100 font-jakarta border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <span className="font-doctor text-2xl text-cyan-600 dark:text-cyan-300 block mb-2 font-bold -rotate-1">
            🔬 Built for hospitals, clinics, and digital health platforms...
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Enterprise Clinical Capabilities
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Every module in Health-Connect operates on unified HL7/FHIR healthcare infrastructure with zero data silos.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                className={`rounded-2xl bg-white dark:bg-[#07111f] border border-slate-200 dark:border-slate-800 p-6 lg:p-8 flex flex-col justify-between overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-200 shadow-sm dark:shadow-md ${feat.colSpan}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-doctor text-xl text-emerald-600 dark:text-emerald-400 font-bold">
                      {feat.stat}
                    </span>
                  </div>

                  <span className="font-doctor text-xl text-cyan-600 dark:text-cyan-300 block mb-1 font-bold">{feat.category}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
                    {feat.desc}
                  </p>
                </div>

                {feat.image && (
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 mt-2 shadow-inner">
                    <Image
                      src={feat.image}
                      alt={feat.title}
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
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '99.99%', label: 'Production Uptime SLA', sub: 'Multi-region cloud clusters' },
  { value: '< 80ms', label: 'Global API Latency', sub: 'Edge CDN routing' },
  { value: '100%', label: 'Automated Test Coverage', sub: 'Unit, Integration & E2E' },
  { value: 'Zero', label: 'Security Vulnerabilities', sub: 'HIPAA & SOC-2 Compliant' }
];

export default function ServicesTrust() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0c1424] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Stat Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((st, idx) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="p-6 rounded-2xl bg-white dark:bg-[#07111f] border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-600 dark:text-cyan-400 mb-2 font-geist">
                {st.value}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{st.label}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">{st.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Logo Wall */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 text-center">
          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-8">
            Engineered with Industry-Standard Production Tech Stacks
          </span>

          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16 opacity-60 dark:opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src="https://cdn.simpleicons.org/nextdotjs/000000"
              alt="Next.js"
              className="h-7 w-auto hover:opacity-100 transition-opacity dark:invert"
            />
            <img
              src="https://cdn.simpleicons.org/react/000000"
              alt="React"
              className="h-7 w-auto hover:opacity-100 transition-opacity dark:invert"
            />
            <img
              src="https://cdn.simpleicons.org/amazonwebservices/000000"
              alt="AWS"
              className="h-7 w-auto hover:opacity-100 transition-opacity dark:invert"
            />
            <img
              src="https://cdn.simpleicons.org/kubernetes/000000"
              alt="Kubernetes"
              className="h-7 w-auto hover:opacity-100 transition-opacity dark:invert"
            />
            <img
              src="https://cdn.simpleicons.org/docker/000000"
              alt="Docker"
              className="h-7 w-auto hover:opacity-100 transition-opacity dark:invert"
            />
            <img
              src="https://cdn.simpleicons.org/postgresql/000000"
              alt="PostgreSQL"
              className="h-7 w-auto hover:opacity-100 transition-opacity dark:invert"
            />
            <img
              src="https://cdn.simpleicons.org/python/000000"
              alt="Python"
              className="h-7 w-auto hover:opacity-100 transition-opacity dark:invert"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const stats = [
  { value: '30s', label: 'Average Task Execution Speed', sub: 'vs 15 mins traditional' },
  { value: '99.9%', label: 'Platform Uptime SLA', sub: 'Isolated Enterprise Cloud DB' },
  { value: '40%', label: 'Time Saved for Teachers', sub: 'Daily administrative logging' },
  { value: '100%', label: 'RBAC Access Security', sub: 'Zero unauthorized record updates' }
];

export default function SocialProof() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <section className="py-24 bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
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
              className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-amber-500 dark:text-amber-400 font-finger-paint mb-2">
                {st.value}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 font-geist">{st.label}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-normal font-geist">{st.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Integration Logo Wall */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 text-center">
          <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block mb-8 font-bold">
            ✨ Seamless integration with educational standards & cloud infrastructure
          </span>

          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16 opacity-60 dark:opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src={isDark ? "https://cdn.simpleicons.org/googleclassroom/ffffff" : "https://cdn.simpleicons.org/googleclassroom/000000"}
              alt="Google Classroom"
              className="h-7 w-auto hover:opacity-100 transition-opacity"
            />
            <img
              src={isDark ? "https://cdn.simpleicons.org/microsoftteams/ffffff" : "https://cdn.simpleicons.org/microsoftteams/000000"}
              alt="Microsoft Teams"
              className="h-7 w-auto hover:opacity-100 transition-opacity"
            />
            <img
              src={isDark ? "https://cdn.simpleicons.org/whatsapp/ffffff" : "https://cdn.simpleicons.org/whatsapp/000000"}
              alt="WhatsApp Notifications"
              className="h-7 w-auto hover:opacity-100 transition-opacity"
            />
            <img
              src={isDark ? "https://cdn.simpleicons.org/amazonwebservices/ffffff" : "https://cdn.simpleicons.org/amazonwebservices/000000"}
              alt="AWS Cloud Infrastructure"
              className="h-7 w-auto hover:opacity-100 transition-opacity"
            />
            <img
              src={isDark ? "https://cdn.simpleicons.org/postgresql/ffffff" : "https://cdn.simpleicons.org/postgresql/000000"}
              alt="PostgreSQL Enterprise Database"
              className="h-7 w-auto hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

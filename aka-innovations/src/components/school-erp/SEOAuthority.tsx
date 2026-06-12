'use client';

import React from 'react';

export default function SEOAuthority() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#080d1a] border-t border-slate-200 dark:border-white/[0.05] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-slate-700 dark:text-slate-300">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-655 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Industry Analysis & Guide
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
            The Definitive Guide to <span className="text-blue-605 dark:text-blue-400">School ERP Platforms</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-dm-sans leading-relaxed">
            Understanding the transition from traditional administrative database logging to autonomous Agentic AI operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-605 dark:text-slate-400 text-sm lg:text-base leading-relaxed">
          
          {/* Column 1: Core Definitions */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-[#0f172a]/40 border border-slate-200 dark:border-white/[0.05] rounded-[24px] p-6 lg:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1. What Is School ERP Software?</h3>
              <p className="mb-4">
                A <strong>School ERP</strong> (Enterprise Resource Planning) or <strong>School Management Software</strong> is the central digital operating system of modern educational institutions.
              </p>
              <p>
                By hosting student records, fee logs, attendance details, and timetables in a unified database, an <strong>Online School ERP</strong> eliminates department silos, allowing parents, teachers, and administrators to access real-time records safely.
              </p>
            </div>

            <div className="bg-white dark:bg-[#0f172a]/40 border border-slate-200 dark:border-white/[0.05] rounded-[24px] p-6 lg:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">2. Traditional vs AI ERP</h3>
              <p className="mb-4">
                Traditional cloud school ERPs made rosters and report cards accessible online. However, they remained heavily reliant on manual inputs—requiring teachers to click through multiple forms to complete attendance logs or exams.
              </p>
              <p>
                An <strong>AI Powered School ERP</strong> or <strong>Agentic ERP</strong> shifts the focus from manual logs to autonomous execution. Users issue natural-language instructions (via text or voice) and the AI parses, verifies, and executes the workflows instantly.
              </p>
            </div>
          </div>

          {/* Column 2: Value & Selection */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-[#0f172a]/40 border border-slate-200 dark:border-white/[0.05] rounded-[24px] p-6 lg:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">3. Key Benefits of AI School ERPs</h3>
              <ul className="list-disc pl-5 space-y-2 text-xs lg:text-sm">
                <li><strong>Slashed Administrative Hours:</strong> Automates repetitive data entry, letting teachers focus on teaching.</li>
                <li><strong>Zero Training Hurdles:</strong> If your staff can write or speak plain English text messages, they can use our system.</li>
                <li><strong>Smart Student Study Companion:</strong> Offers a restricted assistant for revision using only teacher-approved notes.</li>
                <li><strong>Optimized Timetable Logistics:</strong> Instantly resolves scheduling overlaps and staff roster conflicts.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#0f172a]/40 border border-slate-200 dark:border-white/[0.05] rounded-[24px] p-6 lg:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">4. How to Choose a School ERP</h3>
              <p className="mb-4">
                School buyers should ensure the platform guarantees <strong>Control + Trust</strong>. Do not adopt black-box systems without governance.
              </p>
              <p>
                Look for a <strong>Dual-Operating Model</strong>—where Agentic AI automation is strictly optional, built directly on top of stable, standard dashboards. This guarantees you can run your school traditionally on day one, and automate safely when ready.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

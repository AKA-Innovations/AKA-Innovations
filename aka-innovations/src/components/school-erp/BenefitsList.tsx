'use client';

import React from 'react';
import { Clock, CheckSquare, Sparkles, TrendingUp, Users, CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: "Reduce Administrative Workload",
    desc: "Cut administrative operations from hours to seconds by letting teachers speak to perform records management.",
    metric: "40% Time Saved"
  },
  {
    title: "Increase Teacher Productivity",
    desc: "Teachers spend less time looking at spreadsheets and dashboards, leaving more hours for quality student lectures.",
    metric: "15hrs/week Back"
  },
  {
    title: "Improve Parent Engagement",
    desc: "Parents get instant updates regarding exam schedules, pending homework assignments, and fees in simple dialogue.",
    metric: "3x More Engagement"
  },
  {
    title: "Reduce Training Requirements",
    desc: "Natural-language AI eliminates training overhead. If your administrative staff can write messages, they can use our ERP.",
    metric: "Zero Training"
  }
];

export default function BenefitsList() {
  return (
    <section className="py-24 bg-[#0a0f1d] border-t border-white/[0.05] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Key Outcomes
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight font-dm-sans mb-6">
            Concrete Outcomes For <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Your Institution</span>
          </h2>
          <p className="text-lg text-slate-400 font-dm-sans leading-relaxed">
            Move away from database entries and focus on executing high-performing educational administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((ben, index) => (
            <div 
              key={index}
              className="bg-[#0f172a]/60 border border-white/[0.05] rounded-[24px] p-6 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300"
            >
              <div>
                <span className="text-emerald-400 font-mono text-2xl font-black block mb-4">{ben.metric}</span>
                <h3 className="text-lg font-bold text-white font-dm-sans mb-2">{ben.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{ben.desc}</p>
              </div>
              
              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold border-t border-white/[0.04] pt-4 mt-6">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                Proven Results
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

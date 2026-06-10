'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, HelpCircle, Layers, CheckSquare, SearchX, AlertCircle } from 'lucide-react';

const painPoints = [
  {
    title: "Administrative Overload",
    desc: "Teachers spend up to 40% of their workday doing manual data logs instead of lecturing.",
    icon: Clock
  },
  {
    title: "Excessive Click Fatigue",
    desc: "Opening simple report cards, scheduling, or adding homework logs takes up to 7 click steps.",
    icon: Layers
  },
  {
    title: "Fragmented Analytics",
    desc: "Data resides in separate departments. Compiling simple summaries requires manual exports.",
    icon: SearchX
  },
  {
    title: "Communication Lag",
    desc: "Notices, holiday lists, and class cancellations get lost in chaotic messaging groups.",
    icon: AlertCircle
  }
];

export default function ProblemStatement() {
  return (
    <section className="py-24 bg-[#080d1a] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
            The Status Quo Bottleneck
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight font-dm-sans mb-6">
            Traditional School ERPs <span className="text-red-400">Are Not Working</span>
          </h2>
          
          <p className="text-lg text-slate-400 font-dm-sans leading-relaxed">
            Most school software platforms act as passive logbooks. Staff have to navigate dozens of tabs, fill structured templates manually, and compile reports. This results in heavy overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => {
            const IconComp = point.icon;
            return (
              <div 
                key={index}
                className="bg-[#0f172a]/60 border border-white/[0.05] rounded-[24px] p-6 lg:p-8 hover:border-red-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-dm-sans mb-2">{point.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

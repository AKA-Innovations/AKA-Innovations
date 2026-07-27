'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Cpu, Globe, Smartphone, Layers, ShieldCheck } from 'lucide-react';

export default function ServicesHero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-[85dvh] bg-slate-900 text-white flex items-center pt-32 pb-20 overflow-hidden font-geist">
      {/* Parallax Background Banner Image */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 z-0 opacity-40 dark:opacity-30"
      >
        <Image
          src="/images/services_hero_parallax.png"
          alt="Engineering Services Parallax Background"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Cpu className="w-4 h-4 text-cyan-400" /> Enterprise Engineering Disciplines
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Engineering Systems that Scale with Certainty.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              From artificial intelligence and cloud microservices to mobile platforms and custom ERP architectures — we design systems built for resilience.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <Link
                href="/contact?subject=Engineering+Services"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-extrabold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-150 active:scale-[0.97] text-base shadow-lg shadow-cyan-400/20"
              >
                Schedule Engineering Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>

              <button
                onClick={() => {
                  const el = document.getElementById('engineering-disciplines');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-200 bg-slate-800/80 border border-slate-700 hover:bg-slate-700/80 transition-all duration-150 active:scale-[0.97] text-base"
              >
                Explore 5 Disciplines
              </button>
            </div>

            {/* Disciplines Quick Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-3xl mx-auto pt-8 border-t border-slate-800/80 text-xs font-semibold text-slate-400">
              <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-800 flex items-center justify-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" /> AI & ML
              </div>
              <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-800 flex items-center justify-center gap-2">
                <Globe className="w-3.5 h-3.5 text-indigo-400" /> Cloud Web
              </div>
              <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-800 flex items-center justify-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" /> Mobile & IoT
              </div>
              <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-800 flex items-center justify-center gap-2">
                <Layers className="w-3.5 h-3.5 text-amber-400" /> SaaS & ERP
              </div>
              <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-800 flex items-center justify-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-400" /> UI/UX Systems
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MessageSquare, Cpu, ShieldCheck, Database, ArrowRight, Sparkles } from 'lucide-react';

interface CardProps {
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  index: number;
  color: string;
  glowColor: string;
}

function Card3D({ title, desc, icon: Icon, index, color, glowColor }: CardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high-end feeling
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className="relative w-full md:w-64 h-72 [perspective:1000px] cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full rounded-3xl bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-xl border border-slate-200 dark:border-white/[0.08] shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 flex flex-col justify-between transition-colors duration-300 group"
      >
        {/* Glow overlay */}
        <div 
          className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} 
        />
        
        <div 
          className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500 -z-20"
          style={{ background: glowColor }}
        />

        <div className="flex justify-between items-start" style={{ transform: "translateZ(40px)" }}>
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black text-slate-300 dark:text-slate-800 font-mono transition-colors">
            0{index + 1}
          </span>
        </div>

        <div style={{ transform: "translateZ(30px)" }} className="mt-4 flex-1 flex flex-col justify-end">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-dm-sans group-hover:text-indigo-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mt-2">
            {desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function FlowDiagram3D() {
  const steps = [
    {
      title: "1. Natural Language Input",
      desc: "Teachers or staff enter voice/text commands such as 'Send attendance summary to Grade 5 parents'.",
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.4)",
    },
    {
      title: "2. Agent Intelligent Parsing",
      desc: "AKA Agentic AI analyzes context, schedules, and student tables to package structured API calls.",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500",
      glowColor: "rgba(99, 102, 241, 0.4)",
    },
    {
      title: "3. RBAC & Security Check",
      desc: "System validates permissions. Every action follows identical security profiles as legacy dashboards.",
      icon: ShieldCheck,
      color: "from-red-500 to-pink-500",
      glowColor: "rgba(239, 68, 68, 0.4)",
    },
    {
      title: "4. Autonomous Database Action",
      desc: "Executes changes securely. Modifies ERP tables, sends logs, triggers SMS, and serves confirmations.",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
  ];

  return (
    <div className="w-full py-16 flex flex-col items-center">
      <div className="relative w-full max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
        
        {/* Connection flow lines */}
        <div className="absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 hidden md:block -z-10 h-2">
          <svg className="w-full h-8 overflow-visible" fill="none">
            <defs>
              <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="33%" stopColor="#6366f1" />
                <stop offset="66%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            <path
              d="M 0 16 H 900"
              stroke="url(#flow-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="12 8"
              className="animate-[dash_30s_linear_infinite]"
              style={{
                strokeDashoffset: 100,
              }}
            />
          </svg>
        </div>

        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <Card3D
              title={step.title}
              desc={step.desc}
              icon={step.icon}
              index={idx}
              color={step.color}
              glowColor={step.glowColor}
            />
            {idx < steps.length - 1 && (
              <div className="md:hidden flex items-center justify-center p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </div>
  );
}

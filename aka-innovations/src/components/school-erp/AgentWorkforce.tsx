'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Landmark, Sparkles, BookOpen, Clock, Heart, Users, MessageSquare, Terminal } from 'lucide-react';

const agentRoles = [
  {
    id: "teacher",
    title: "Teacher Agent",
    icon: GraduationCap,
    command: '"Mark attendance for Class 8A. Rohit & Aman absent today."',
    steps: [
      "Authenticates Teacher session and verifies permissions for Class 8A.",
      "Identifies Rohit and Aman in the class database registration.",
      "Logs student attendance markers, auto-marking remaining students present.",
      "Calculates attendance percentages, triggering SMS/App notifications to parents of absent students."
    ],
    outcome: "Eliminates attendance books and 15-minute administrative routines daily."
  },
  {
    id: "principal",
    title: "Principal Agent",
    icon: Landmark,
    command: '"Show me students with attendance below 75% in Class 10."',
    steps: [
      "Checks principal credential and data scope permission.",
      "Queries active student attendance records for Class 10.",
      "Filters matches where aggregate presence is less than 0.75.",
      "Renders a real-time list of at-risk students with contact options."
    ],
    outcome: "Instantly flags absenteeism issues without querying registrar staffs."
  },
  {
    id: "coordinator",
    title: "Coordinator Agent",
    icon: Clock,
    command: '"Schedule exams for Grade 8 Term 2. Skip school holidays."',
    steps: [
      "Pulls academic curriculum modules and exam subjects for Grade 8.",
      "Checks calendar database to resolve national and school holidays.",
      "Reconciles classroom seating capacity and invigilator rosters.",
      "Generates conflict-free timetable matrix, publishing to student/parent portals."
    ],
    outcome: "Reduces timetable planning cycle from 4 working days to 2 minutes."
  },
  {
    id: "admin",
    title: "Admin Agent",
    icon: Users,
    command: '"Register new admission Ananya Sen, Roll 45, Grade 6."',
    steps: [
      "Opens registration transaction in Student Information System (SIS).",
      "Creates system profile, generates official roll details and records grade.",
      "Calculates tuition fee schedules based on grade parameter.",
      "Dispatches parent registration links and credentials automatically."
    ],
    outcome: "Slashes standard student admission workflows by 80% with zero data entry errors."
  },
  {
    id: "parentstudent",
    title: "Parent & Student Agent",
    icon: Heart,
    command: '"What homework is pending, and explain electromagnetism from my teacher uploaded notes."',
    steps: [
      "Validates parent-student key pairing and dashboard permissions.",
      "Queries pending class assignments and homework directories.",
      "Queries the student's chatbot helper, restricting search context exclusively to class notes uploaded by their teachers.",
      "Renders answers and revision explanations using verified study materials, ensuring the student is not distracted by unverified web resources."
    ],
    outcome: "Keeps parents informed and provides students a secure, teacher-approved chatbot study helper."
  }
];

export default function AgentWorkforce() {
  const [activeTab, setActiveTab] = useState("teacher");

  const activeAgent = agentRoles.find(agent => agent.id === activeTab) || agentRoles[0];
  const AgentIcon = activeAgent.icon;

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#080d1a] relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-755 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Meet Your AI School Workforce
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
            Role-Based Agents Working <span className="text-indigo-650 dark:text-indigo-400">For Your Team</span>
          </h2>
          <p className="text-lg text-slate-655 dark:text-slate-400 font-dm-sans leading-relaxed">
            Every staff member, parent, and student gets a dedicated, secure AI Agent companion. Your team is not just entering data; they are delegating workloads.
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {agentRoles.map((agent) => {
            const IconComp = agent.icon;
            const isActive = activeTab === agent.id;
            return (
              <button
                key={agent.id}
                onClick={() => setActiveTab(agent.id)}
                className={`
                  flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300
                  ${isActive 
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-900/20 dark:shadow-indigo-900/40 border-indigo-500' 
                    : 'bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] text-slate-650 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06]'}
                `}
              >
                <IconComp className="w-4 h-4" />
                {agent.title}
              </button>
            );
          })}
        </div>

        {/* Agent Card Display */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#0f172a]/60 backdrop-blur-xl border border-slate-200 dark:border-white/[0.08] rounded-[28px] overflow-hidden p-8 lg:p-12 shadow-lg dark:shadow-2xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                  <AgentIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white font-dm-sans mb-3">{activeAgent.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  Empower users with zero-click administrative assistance. Safe, secure, and compliant.
                </p>

                <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-500/20 rounded-xl p-4 mb-6">
                  <span className="text-[10px] text-indigo-650 dark:text-indigo-400 font-bold uppercase tracking-wider block mb-1">USER INSTRUCTION</span>
                  <p className="text-slate-800 dark:text-white text-xs italic font-medium">{activeAgent.command}</p>
                </div>

                <div className="border-t border-slate-200 dark:border-white/[0.06] pt-6">
                  <span className="text-[10px] text-emerald-650 dark:text-emerald-400 font-bold uppercase tracking-wider block mb-1">BUSINESS OUTCOME</span>
                  <p className="text-emerald-700 dark:text-emerald-300/90 text-sm font-semibold leading-relaxed">{activeAgent.outcome}</p>
                </div>
              </div>

              {/* Execution Steps */}
              <div className="bg-slate-50 dark:bg-[#0b1120] border border-slate-200 dark:border-white/[0.05] rounded-2xl p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Agent Execution Trail</span>
                </div>

                <div className="space-y-4">
                  {activeAgent.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-white/[0.05] border border-slate-300 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

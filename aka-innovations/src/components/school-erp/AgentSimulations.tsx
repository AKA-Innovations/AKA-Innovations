'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, CheckCircle, Database, Play, Sparkles, User, Settings } from 'lucide-react';

const simulationPrompts = [
  {
    role: "Teacher",
    roleLabel: "👩‍🏫 Teacher Agent",
    prompt: "Mark attendance for Class 8A.",
    logs: [
      { type: "auth", text: "Validating teacher role credentials for 'Mrs. Sharma'. Permission GRANTED." },
      { type: "fetch", text: "Fetching assigned class schedule for Grade 8, Section A." },
      { type: "eval", text: "Compiling current date student registry (42 active profiles)." },
      { type: "mutate", text: "Updating database: Set absent: [None], Set present: [Remaining 42 students]." },
      { type: "confirm", text: "Attendance marked successfully. Confirm email sent to Class coordinator." }
    ],
    status: "Database updated, 42 records committed."
  },
  {
    role: "Principal",
    roleLabel: "🏫 Principal Agent",
    prompt: "Show students with attendance below 75%.",
    logs: [
      { type: "auth", text: "Validating administrative scope access for 'Dr. Banner'. Permission GRANTED." },
      { type: "query", text: "Scanning active database tables: student_attendance_aggregates." },
      { type: "eval", text: "Filtering matches for: aggregate_rate < 0.75 across all sections." },
      { type: "confirm", text: "Found 3 students: Amit Roy (71%), Sneha Rao (68%), Vikranth V (74%)." }
    ],
    status: "3 records retrieved in 88ms."
  },
  {
    role: "Coordinator",
    roleLabel: "📋 Coordinator Agent",
    prompt: "Generate examination schedule.",
    logs: [
      { type: "auth", text: "Validating coordinator credentials for 'Mr. Stark'. Permission GRANTED." },
      { type: "fetch", text: "Retrieving Grade 10 curriculum subjects and school holiday calendar." },
      { type: "conflict", text: "Validating conflict constraints: Maximum 1 exam per day, skip national holidays." },
      { type: "mutate", text: "Drafting exam dates. Mapping rooms: [102, 103, 104]. Dispatching notifications." },
      { type: "confirm", text: "Examination schedule published successfully." }
    ],
    status: "Timetable generated with 0 conflicts."
  },
  {
    role: "Parent & Student",
    roleLabel: "📱 Parent & Student Agent",
    prompt: "What homework is pending?",
    logs: [
      { type: "auth", text: "Verifying portal credentials for parent-student relationship key. GRANTED." },
      { type: "fetch", text: "Fetching active homework assignments for Grade 6 Math." },
      { type: "eval", text: "Filtering completed assignments from database record listings." },
      { type: "confirm", text: "Pending: Science (due tomorrow), English Essay (due Friday)." }
    ],
    status: "2 pending tasks retrieved."
  }
];

export default function AgentSimulations() {
  const [activeSim, setActiveSim] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [stepIndex, setStepIndex] = useState(-1);

  const startSimulation = () => {
    setIsRunning(true);
    setStepIndex(0);
    
    const interval = setInterval(() => {
      setStepIndex(prev => {
        if (prev < simulationPrompts[activeSim].logs.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsRunning(false);
          return prev;
        }
      });
    }, 900);
  };

  const selectSimulation = (index: number) => {
    if (isRunning) return;
    setActiveSim(index);
    setStepIndex(-1);
  };

  const activeData = simulationPrompts[activeSim];

  return (
    <section className="py-24 bg-white dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-caveat text-2xl text-amber-600 dark:text-amber-300 block mb-3 font-bold -rotate-1">
            ⚡ Watch the agents work in real-time!
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-finger-paint leading-snug">
            See School Workflows Execute Live
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Select a role, press run, and see how the Agent validates permissions, calls database systems, and completes workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 max-w-5xl mx-auto">
          
          {/* Prompt Selector */}
          <div className="space-y-3">
            {simulationPrompts.map((sim, index) => (
              <button
                key={index}
                onClick={() => selectSimulation(index)}
                disabled={isRunning}
                className={`
                  w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between
                  ${activeSim === index
                    ? 'bg-amber-50 dark:bg-amber-400/10 border-amber-400/60 dark:border-amber-400/40 shadow-sm'
                    : 'bg-slate-50 dark:bg-[#0e1424] border-slate-200 dark:border-slate-800 hover:border-amber-400/40 hover:bg-amber-50/50 dark:hover:bg-amber-400/5'}
                  ${isRunning ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                <div>
                  <span className={`font-caveat text-lg font-bold block mb-0.5 ${activeSim === index ? 'text-amber-600 dark:text-amber-300' : 'text-slate-500 dark:text-slate-400'}`}>
                    {sim.roleLabel}
                  </span>
                  <p className={`text-sm font-finger-paint font-bold ${activeSim === index ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                    {sim.prompt}
                  </p>
                </div>
                <Play className={`w-4 h-4 shrink-0 transition-colors ${activeSim === index ? 'text-amber-500' : 'text-slate-300 dark:text-slate-600'}`} />
              </button>
            ))}

            <button
              onClick={startSimulation}
              disabled={isRunning || stepIndex === activeData.logs.length - 1}
              className="w-full mt-4 flex items-center justify-center gap-2 py-4 font-finger-paint font-extrabold text-black bg-amber-400 hover:bg-amber-300 disabled:bg-amber-200 dark:disabled:bg-amber-900/40 disabled:text-amber-800 dark:disabled:text-amber-600 disabled:cursor-not-allowed rounded-xl transition-all shadow-lg shadow-amber-400/20 text-sm"
            >
              <Sparkles className="w-5 h-5" />
              {isRunning ? 'Executing Agent Logic...' : `▶ Run ${activeData.role} Workflow`}
            </button>
          </div>

          {/* Console Screen */}
          <div className="bg-slate-50 dark:bg-[#0e1424] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col min-h-[380px] shadow-sm dark:shadow-xl">
            
            {/* Window Header */}
            <div className="px-6 py-4 bg-white dark:bg-[#080d1a] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-geist-mono text-slate-500 dark:text-slate-400">Agent Workflow Engine v1.0.4</span>
              </div>
              <span className="text-xs font-finger-paint text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/30">
                ● Live
              </span>
            </div>

            {/* Prompt Display */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-800/50 bg-amber-50/30 dark:bg-amber-400/[0.03] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-400/20 flex items-center justify-center">
                <User className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <span className="font-caveat text-base font-bold text-amber-600 dark:text-amber-300 block">{activeData.roleLabel}</span>
                <p className="text-slate-800 dark:text-white text-sm font-semibold italic">&quot;{activeData.prompt}&quot;</p>
              </div>
            </div>

            {/* Execution Logs */}
            <div className="p-6 flex-1 font-mono text-xs space-y-3.5 overflow-y-auto">
              {stepIndex === -1 && (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-center py-10">
                  <Settings className="w-8 h-8 text-slate-300 dark:text-slate-700 animate-spin mb-3" />
                  <p className="font-caveat text-lg">System Ready. Click &apos;Run Workflow&apos; to watch the agent!</p>
                </div>
              )}

              {activeData.logs.map((log, idx) => {
                if (idx > stepIndex) return null;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3 items-start"
                  >
                    {log.type === "auth" && <Shield className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />}
                    {log.type === "fetch" && <Database className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />}
                    {log.type === "eval" && <Settings className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />}
                    {log.type === "conflict" && <Settings className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />}
                    {log.type === "mutate" && <Terminal className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />}
                    {log.type === "query" && <Database className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />}
                    {log.type === "confirm" && <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />}
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="text-slate-400 dark:text-slate-600">[{new Date().toLocaleTimeString()}]</span> {log.text}
                    </p>
                  </motion.div>
                );
              })}

              {stepIndex === activeData.logs.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300"
                >
                  <span className="font-finger-paint font-bold text-sm">🎉 Execution Successful:</span>
                  <p className="font-caveat text-lg mt-1 font-bold">{activeData.status}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

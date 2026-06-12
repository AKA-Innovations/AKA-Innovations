'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, CheckCircle, Database, Play, Sparkles, User, Settings } from 'lucide-react';

const simulationPrompts = [
  {
    role: "Teacher",
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
    prompt: "Generate examination schedule.",
    logs: [
      { type: "auth", text: "Validating coordinator credentials for 'Mr. Stark'. Permission GRANTED." },
      { type: "fetch", text: "Retrieving list of Grade 10 curriculum subjects and school holiday calendar." },
      { type: "conflict", text: "Validating conflict constraints: Maximum 1 exam per day, skip national holidays." },
      { type: "mutate", text: "Drafting exam dates. Mapping rooms: [102, 103, 104]. Dispatching notifications." },
      { type: "confirm", text: "Examination schedule published successfully." }
    ],
    status: "Timetable generated with 0 conflicts."
  },
  {
    role: "Parent & Student",
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
    <section className="py-24 bg-slate-50 dark:bg-[#080d1a] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Real Agent Examples
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
            Watch the AI Agent <span className="text-blue-600 dark:text-blue-400">Perform Real Work</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-dm-sans leading-relaxed">
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
                  w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between
                  ${activeSim === index 
                    ? 'bg-blue-600/10 border-blue-500 text-slate-900 dark:text-white shadow-[0_0_20px_rgba(59,130,246,0.15)] font-bold' 
                    : 'bg-white dark:bg-[#0f172a]/60 border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:text-white dark:hover:bg-slate-800/60'}
                  ${isRunning ? 'opacity-65 cursor-not-allowed' : ''}
                `}
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 block mb-1">{sim.role} Agent</span>
                  <p className="text-sm font-semibold italic">{sim.prompt}</p>
                </div>
                <Play className={`w-4 h-4 text-blue-600 dark:text-blue-400 ${activeSim === index ? 'opacity-100' : 'opacity-30'}`} />
              </button>
            ))}

            <button
              onClick={startSimulation}
              disabled={isRunning || stepIndex === activeData.logs.length - 1}
              className="w-full mt-4 flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800/40 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-550/20 dark:shadow-blue-950/50"
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              {isRunning ? 'Executing Agent Logic...' : 'Run Action Simulation'}
            </button>
          </div>

          {/* Interactive Console Screen */}
          <div className="bg-white dark:bg-[#0f172a] rounded-[24px] border border-slate-200 dark:border-white/[0.08] shadow-lg dark:shadow-2xl overflow-hidden flex flex-col min-h-[380px]">
            {/* Header */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-[#0a0f1d] border-b border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold">Agent Workflow Engine v1.0.4</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

            {/* Prompt Display */}
            <div className="p-6 border-b border-slate-250 dark:border-white/[0.04] bg-slate-50 dark:bg-[#0b1120] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase block tracking-wider">{activeData.role} Command Input</span>
                <p className="text-slate-905 dark:text-white text-sm font-semibold italic">&quot;{activeData.prompt}&quot;</p>
              </div>
            </div>

            {/* Execution logs */}
            <div className="p-6 flex-1 font-mono text-xs space-y-3.5 overflow-y-auto">
              {stepIndex === -1 && (
                <div className="h-full flex flex-col items-center justify-center text-slate-450 dark:text-slate-500 text-center py-10">
                  <Settings className="w-8 h-8 text-slate-400 dark:text-slate-600 animate-spin mb-3" />
                  <p>System Ready. Click &apos;Run Action Simulation&apos; to watch details.</p>
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
                    {log.type === "auth" && <Shield className="w-4 h-4 text-purple-650 dark:text-purple-400 shrink-0 mt-0.5" />}
                    {log.type === "fetch" && <Database className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />}
                    {log.type === "eval" && <Settings className="w-4 h-4 text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5" />}
                    {log.type === "conflict" && <Settings className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />}
                    {log.type === "mutate" && <Database className="w-4 h-4 text-pink-500 dark:text-pink-400 shrink-0 mt-0.5" />}
                    {log.type === "confirm" && <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />}

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed"><span className="text-slate-450 dark:text-slate-500">[{new Date().toLocaleTimeString()}]</span> {log.text}</p>
                  </motion.div>
                );
              })}

              {stepIndex === activeData.logs.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold"
                >
                  🎉 Execution Successful: {activeData.status}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

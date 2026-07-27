'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Zap, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    num: "01",
    phase: "Discovery & Analysis",
    icon: Search,
    title: "Deep Technical Audit & Domain Alignment",
    desc: "We analyze system bottlenecks, evaluate data pipeline requirements, audit technical debt, and define clear architectural goals before writing code.",
    checklist: [
      "Technical debt & legacy codebase audit",
      "System load & concurrency requirements mapping",
      "Data security & compliance baseline check",
      "Final architecture specification document"
    ]
  },
  {
    num: "02",
    phase: "Architecture Design",
    icon: Compass,
    title: "High-Availability System Blueprinting",
    desc: "We design modular microservices, database schemas, event-driven messaging queues, and API contracts built for 99.99% availability.",
    checklist: [
      "Distributed microservices & API gateway specs",
      "Database schema & indexing optimization",
      "Event-driven queue design (Kafka / RabbitMQ)",
      "RBAC security & encryption policy blueprint"
    ]
  },
  {
    num: "03",
    phase: "Iterative Sprints",
    icon: Zap,
    title: "Agile Production Development & Testing",
    desc: "We build in rapid 2-week sprints with continuous integration, automated unit/integration testing, and live staging environment previews.",
    checklist: [
      "2-week production release cycles",
      "100% automated CI/CD pipeline integration",
      "Comprehensive test suite (Unit, Integration, E2E)",
      "Weekly architecture review & staging builds"
    ]
  },
  {
    num: "04",
    phase: "Production Launch",
    icon: Rocket,
    title: "Zero-Downtime Deployment & MLOps",
    desc: "We execute zero-downtime blue/green deployment, configure APM observability metrics, and provide ongoing SLA support.",
    checklist: [
      "Blue/green zero-downtime deployment",
      "Real-time APM monitoring & alert rules",
      "Automated database failover verification",
      "Dedicated L3 engineering SLA support"
    ]
  }
];

export default function DeliveryMethodology() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <section className="py-24 bg-white dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 font-geist border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-2">
            Engineering Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            How We Deliver Enterprise Systems
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            A structured 4-phase engineering process designed to eliminate project risk and ensure zero-downtime production launches.
          </p>
        </div>

        {/* 4 Step Selector Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={st.num}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-150 active:scale-[0.98] ${
                  isActive
                    ? 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-400 dark:border-cyan-500/50 shadow-md'
                    : 'bg-slate-50 dark:bg-[#0c1424] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold font-mono ${isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400'}`}>
                    STEP {st.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400'}`} />
                </div>
                <h3 className={`text-sm font-bold ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                  {st.phase}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Content */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-50 dark:bg-[#0c1424] border border-slate-200 dark:border-slate-800 p-8 lg:p-12 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.num}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                    Phase {currentStep.num} Execution
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {currentStep.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {currentStep.desc}
                </p>
              </div>

              <div className="lg:col-span-5 rounded-xl bg-white dark:bg-[#07111f] p-6 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Phase Deliverables
                </h4>
                <div className="space-y-3">
                  {currentStep.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
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

'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Cpu, Globe, Smartphone, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Discipline {
  id: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  accentBg: string;
  badgeBorder: string;
  icon: React.ComponentType<{ className?: string }>;
  bgImage?: string;
  features: string[];
  deliverables: string[];
}

const disciplines: Discipline[] = [
  {
    id: "ai-ml",
    phase: "PHASE 01 — INTELLIGENCE",
    title: "AI & Machine Learning Engineering",
    subtitle: "Turn raw organizational data into continuous predictive intelligence.",
    description: "We design, train, and deploy production-grade machine learning pipelines, natural language models, and computer vision systems integrated into core business workflows.",
    accentColor: "text-cyan-600 dark:text-cyan-400",
    accentBg: "bg-cyan-50 dark:bg-cyan-500/10",
    badgeBorder: "border-cyan-200 dark:border-cyan-500/30",
    icon: Cpu,
    bgImage: "/images/services_ai_ml_bg.png",
    features: [
      "Predictive modeling & real-time inference pipelines",
      "LLM fine-tuning, RAG architectures & Agentic AI workflows",
      "Computer vision & automated document parsing",
      "Production MLOps lifecycle management & model monitoring"
    ],
    deliverables: ["Custom PyTorch / TensorFlow Models", "REST / gRPC Model Endpoints", "Data Pipeline ETL", "MLOps CI/CD"]
  },
  {
    id: "cloud-web",
    phase: "PHASE 02 — INFRASTRUCTURE",
    title: "Cloud-Native Web & Microservices",
    subtitle: "High-availability, event-driven web applications engineered for 99.99% uptime.",
    description: "We architect distributed microservices, RESTful and GraphQL API ecosystems, and serverless backends optimized for extreme concurrency and low latency.",
    accentColor: "text-indigo-600 dark:text-indigo-400",
    accentBg: "bg-indigo-50 dark:bg-indigo-500/10",
    badgeBorder: "border-indigo-200 dark:border-indigo-500/30",
    icon: Globe,
    bgImage: "/images/services_cloud_web_bg.png",
    features: [
      "Full-stack Next.js, React, Node.js & Go microservices",
      "Event-driven Kafka & RabbitMQ messaging backbones",
      "Serverless & Kubernetes container orchestration",
      "Automated zero-downtime CI/CD deployment pipelines"
    ],
    deliverables: ["Cloud Architecture Specs", "API Gateways", "Kubernetes Configs", "Distributed Database Schemas"]
  },
  {
    id: "mobile-iot",
    phase: "PHASE 03 — MOBILITY",
    title: "Mobile Apps & IoT Telemetry",
    subtitle: "Cross-platform mobile applications paired with real-time sensor streams.",
    description: "We build native iOS, Android, and React Native mobile applications engineered for offline resilience, background telemetry sync, and instant push notification delivery.",
    accentColor: "text-emerald-600 dark:text-emerald-400",
    accentBg: "bg-emerald-50 dark:bg-emerald-500/10",
    badgeBorder: "border-emerald-200 dark:border-emerald-500/30",
    icon: Smartphone,
    features: [
      "Native iOS (Swift) & Android (Kotlin) & React Native apps",
      "Bluetooth LE & IoT hardware sensor data telemetry",
      "Offline-first SQLite sync engine for remote operation",
      "Biometric authentication & end-to-end payload encryption"
    ],
    deliverables: ["iOS App Store Build", "Google Play APK", "Bluetooth Sync Protocol", "Push Notification Gateway"]
  },
  {
    id: "saas-erp",
    phase: "PHASE 04 — ENTERPRISE",
    title: "Enterprise SaaS & Custom ERPs",
    subtitle: "Unified business operating systems built for complex multi-tenant environments.",
    description: "We build custom ERP software, multi-tenant B2B SaaS platforms, and enterprise ledger systems equipped with granular RBAC access controls and automated workflow engines.",
    accentColor: "text-amber-600 dark:text-amber-400",
    accentBg: "bg-amber-50 dark:bg-amber-500/10",
    badgeBorder: "border-amber-200 dark:border-amber-500/30",
    icon: Layers,
    bgImage: "/images/services_saas_erp_bg.png",
    features: [
      "Multi-tenant SaaS database isolation architecture",
      "Role-Based Access Control (RBAC) & audit logging",
      "Automated financial ledger & billing subscription engine",
      "Custom ERP workflow builder & approval routing"
    ],
    deliverables: ["Multi-Tenant DB Vault", "RBAC Policy Matrix", "Stripe / Gateway Billing Sync", "Audit Log System"]
  },
  {
    id: "ui-ux",
    phase: "PHASE 05 — EXPERIENCE",
    title: "UI/UX Systems & Interaction Design",
    subtitle: "Design systems and interface architectures grounded in usability science.",
    description: "We design high-craft digital experiences, scalable Figma design tokens, interactive micro-animations, and accessible component libraries that reduce cognitive load.",
    accentColor: "text-rose-600 dark:text-rose-400",
    accentBg: "bg-rose-50 dark:bg-rose-500/10",
    badgeBorder: "border-rose-200 dark:border-rose-500/30",
    icon: Sparkles,
    features: [
      "Scalable Design Tokens & Component Libraries in Figma & React",
      "Micro-animations & gesture-driven interaction physics",
      "WCAG 2.1 AAA Accessibility & contrast verification",
      "Usability testing, user journey mapping & wireframe prototypes"
    ],
    deliverables: ["Figma Design Token System", "React Component Library", "Interactive Prototypes", "Usability Audit Report"]
  }
];

function DisciplineCard({ disc, idx }: { disc: Discipline; idx: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const IconComp = disc.icon;

  const isEven = idx % 2 === 0;

  return (
    <div
      ref={containerRef}
      id={disc.id}
      className={`relative py-28 overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-slate-800 ${
        isEven ? 'bg-white dark:bg-[#080d1a]' : 'bg-slate-50 dark:bg-[#0c1424]'
      }`}
    >
      {/* Optional Parallax Background Image */}
      {disc.bgImage && (
        <motion.div
          style={{ y: yBg }}
          className="absolute inset-0 z-0 opacity-15 dark:opacity-20 pointer-events-none"
        >
          <Image
            src={disc.bgImage}
            alt={disc.title}
            fill
            className="object-cover scale-110"
          />
        </motion.div>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full border ${disc.badgeBorder} ${disc.accentBg} ${disc.accentColor} text-xs font-bold tracking-wider`}>
                {disc.phase}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight font-geist">
              {disc.title}
            </h2>

            <p className="text-lg font-semibold text-slate-700 dark:text-slate-200 leading-snug">
              {disc.subtitle}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {disc.description}
            </p>

            {/* Core Features List */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                Core Capabilities & Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {disc.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 className={`w-4 h-4 ${disc.accentColor} shrink-0 mt-0.5`} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={`/contact?subject=${encodeURIComponent(disc.title)}`}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs ${disc.accentBg} ${disc.accentColor} border ${disc.badgeBorder} hover:opacity-90 transition-opacity active:scale-[0.97]`}
              >
                Inquire about {disc.title}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Deliverables Card */}
          <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-[#07111f] border border-slate-200 dark:border-slate-800 p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl ${disc.accentBg} ${disc.accentColor} flex items-center justify-center`}>
                <IconComp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block">TECHNICAL SPECIFICATION</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Production Deliverables</h4>
              </div>
            </div>

            <div className="space-y-3">
              {disc.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <span>{del}</span>
                  <span className={`text-[10px] font-bold ${disc.accentColor}`}>READY</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ServicesStoryline() {
  return (
    <section id="engineering-disciplines">
      {disciplines.map((disc, idx) => (
        <DisciplineCard key={disc.id} disc={disc} idx={idx} />
      ))}
    </section>
  );
}

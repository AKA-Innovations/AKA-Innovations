"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Globe, Smartphone, Layers } from "lucide-react";
import Link from "next/link";

import { EngineeringHero } from "./EngineeringHero";
import { ServiceGrid } from "./ServiceGrid";
import AiMlIllustration from "@/assets/illustrations/ai-ml-illustration.svg";
import WebCloudIllustration from "@/assets/illustrations/web-cloud-illustration.svg";
import MobileAppIllustration from "@/assets/illustrations/mobile-app-illustration.svg";
import UiUxIllustration from "@/assets/illustrations/uiux-wireframes-illustration.svg";

/* ═══════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════ */
type Layout = "left" | "right";

interface ServiceDetail {
  index: string;
  discipline: string;
  title: string;
  description: string;
  features: string[];
  Illustration: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  Icon: React.ComponentType<{ className?: string }>;
  layout: Layout;
  accent: string;       // Tailwind text color class  e.g. "text-slate-500"
  accentHex: string;    // raw hex for inline styles   e.g. "#64748b"
  rulerAccent: string;  // border/bg class             e.g. "bg-slate-300"
}

/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */
const services: ServiceDetail[] = [
  {
    index: "01",
    discipline: "Intelligence",
    title: "AI & Machine Learning Solutions",
    description:
      "We architect and operationalize advanced AI systems that enable intelligent decision-making and large-scale automation. Our solutions are engineered with robust data pipelines, optimized model architectures, and production-ready MLOps workflows.",
    features: [
      "Predictive modeling and statistical learning systems",
      "Deep learning, NLP, and computer vision solutions",
      "Intelligent automation and recommendation frameworks",
      "End-to-end model deployment and lifecycle management",
    ],
    Illustration: AiMlIllustration,
    Icon: Cpu,
    layout: "right",
    accent: "text-sky-700",
    accentHex: "#0369a1",
    rulerAccent: "bg-sky-200",
  },
  {
    index: "02",
    discipline: "Infrastructure",
    title: "Web Application Engineering",
    description:
      "We design and develop cloud-native, high-availability web applications using modular, service-oriented architectures. Our engineering approach emphasises performance optimisation, security compliance, and seamless system interoperability.",
    features: [
      "Full-stack development with scalable backend architectures",
      "Microservices, RESTful and event-driven API ecosystems",
      "Cloud and serverless infrastructure design",
      "Performance tuning, observability, and security hardening",
    ],
    Illustration: WebCloudIllustration,
    Icon: Globe,
    layout: "left",
    accent: "text-indigo-700",
    accentHex: "#4338ca",
    rulerAccent: "bg-indigo-200",
  },
  {
    index: "03",
    discipline: "Mobility",
    title: "Mobile Application Engineering",
    description:
      "We build resilient, performance-optimised mobile applications engineered for cross-platform consistency and enterprise integration. Our mobile solutions prioritise reliability, secure data exchange, and seamless user interaction.",
    features: [
      "Native and cross-platform mobile application development",
      "Secure API integration and real-time data synchronisation",
      "Offline-capable and latency-optimised architectures",
    ],
    Illustration: MobileAppIllustration,
    Icon: Smartphone,
    layout: "right",
    accent: "text-rose-700",
    accentHex: "#be123c",
    rulerAccent: "bg-rose-200",
  },
  {
    index: "04",
    discipline: "Experience",
    title: "UI/UX Engineering",
    description:
      "We engineer user experiences grounded in usability science, interaction design principles, and scalable design systems. Our process aligns user behaviour with business objectives through validated, data-driven strategies.",
    features: [
      "User research, journey mapping, and experience strategy",
      "Information architecture and interaction modelling",
      "Design systems and high-fidelity interface design",
      "Usability validation and design-to-engineering handoff",
    ],
    Illustration: UiUxIllustration,
    Icon: Layers,
    layout: "left",
    accent: "text-emerald-700",
    accentHex: "#065f46",
    rulerAccent: "bg-emerald-200",
  },
];

/* ═══════════════════════════════════════════════
   REVEAL ANIMATION
═══════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

/* ═══════════════════════════════════════════════
   RULED DIVIDER
═══════════════════════════════════════════════ */
function RuledDivider({
  index,
  discipline,
  accent,
  rulerAccent,
}: {
  index: string;
  discipline: string;
  accent: string;
  rulerAccent: string;
}) {
  return (
    <div className="w-full px-8 md:px-16 lg:px-24 py-0">
      <div className="flex items-center gap-6">
        {/* Index label */}
        <span
          className={`shrink-0 text-[11px] font-bold tracking-[0.22em] uppercase ${accent}`}
          style={{ fontFamily: '"DM Mono", monospace' }}
        >
          {index}
        </span>

        {/* Rule */}
        <div className="flex-1 h-px bg-slate-200" />

        {/* Discipline label */}
        <span
          className="shrink-0 text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400"
          style={{ fontFamily: '"DM Mono", monospace' }}
        >
          {discipline}
        </span>

        {/* Accent tick */}
        <div className={`shrink-0 w-6 h-px ${rulerAccent}`} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   DETAIL SECTION
═══════════════════════════════════════════════ */
function DetailSection({ svc }: { svc: ServiceDetail }) {
  const { layout, Illustration, Icon } = svc;
  const isRight = layout === "right";

  const ContentBlock = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 flex flex-col justify-center py-4"
    >
      {/* Category pill */}
      <div className="flex items-center gap-2.5 mb-7">
        <Icon className={`w-3.5 h-3.5 ${svc.accent}`} />
        <span
          className={`text-[11px] font-semibold tracking-[0.2em] uppercase ${svc.accent}`}
          style={{ fontFamily: '"DM Mono", monospace' }}
        >
          {svc.index} / {svc.discipline}
        </span>
      </div>

      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-black text-slate-900 leading-[1.06] mb-5"
        style={{ fontFamily: 'Inter' }}
      >
        {svc.title}
      </h2>

      {/* Description */}
      <p
        className="text-[15px] leading-[1.85] text-slate-500 mb-8 max-w-[50ch]"
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        {svc.description}
      </p>

      {/* Feature list */}
      <ul className="space-y-3.5 mb-10">
        {svc.features.map((f, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
            className="flex items-start gap-3.5"
          >
            {/* Tick */}
            <span
              className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: svc.accentHex }}
            />
            <span
              className="text-sm text-slate-600 leading-relaxed"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              {f}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/services"
        className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
        style={{ color: svc.accentHex, fontFamily: '"DM Sans", sans-serif' }}
      >
        <span className="border-b border-transparent group-hover:border-current transition-colors pb-px">
          Explore this capability
        </span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </motion.div>
  );

  const IllustrationBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 flex items-center justify-center py-8"
    >
      {/* Frame */}
      <div
        className="relative w-full max-w-[380px] md:max-w-[420px] aspect-square
                   rounded-3xl flex items-center justify-center p-10"
        style={{
          background: `linear-gradient(135deg, ${svc.accentHex}08 0%, ${svc.accentHex}04 100%)`,
          border: `1px solid ${svc.accentHex}18`,
        }}
      >
        {/* Corner marks */}
        {[
          "top-0 left-0 border-t border-l rounded-tl-3xl",
          "top-0 right-0 border-t border-r rounded-tr-3xl",
          "bottom-0 left-0 border-b border-l rounded-bl-3xl",
          "bottom-0 right-0 border-b border-r rounded-br-3xl",
        ].map((cls, i) => (
          <span
            key={i}
            className={`absolute w-5 h-5 ${cls}`}
            style={{ borderColor: `${svc.accentHex}35` }}
          />
        ))}

        {/* Index watermark */}
        <span
          className="absolute top-5 right-6 text-[11px] font-bold tracking-widest"
          style={{ color: `${svc.accentHex}30`, fontFamily: '"DM Mono", monospace' }}
        >
          {svc.index}
        </span>

        {/* Illustration */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-full"
        >
          <Illustration className="w-full h-auto" />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full px-8 md:px-16 lg:px-24">
      <div
        className={`flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 items-center
                    ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
      >
        {ContentBlock}
        {IllustrationBlock}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ROOT COMPONENT
═══════════════════════════════════════════════ */
export function EngineeringServices() {
  return (
    <>
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap');
      `}</style>

      <div
        className="w-full overflow-hidden"
        style={{ background: "#FAFAF8" }}   /* warm off-white, not clinical */
      >
        {/* ── HERO ── */}
        <EngineeringHero />

        {/* ── SERVICE GRID ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <ServiceGrid />
        </motion.div>

        {/* ── SECTION HEADER ── */}
        <div className="px-8 md:px-16 lg:px-24 pt-24 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between gap-8 pb-6"
            style={{ borderBottom: "1px solid #e2e2dd" }}
          >
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-400 mb-3"
                style={{ fontFamily: '"DM Mono", monospace' }}
              >
                What We Build
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
                style={{ fontFamily: 'Inter' }}
              >
                Core Capabilities
              </h2>
            </div>
            <p
              className="hidden md:block max-w-[38ch] text-sm text-slate-500 leading-relaxed text-right"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Engineering excellence across every layer of the stack — from
              intelligent systems to polished interfaces.
            </p>
          </motion.div>
        </div>

        {/* ═══════ SERVICE SECTIONS ═══════ */}
        {services.map((svc, i) => (
          <React.Fragment key={svc.index}>

            {/* Ruled divider */}
            <div className="pt-16 pb-12">
              <RuledDivider
                index={svc.index}
                discipline={svc.discipline}
                accent={svc.accent}
                rulerAccent={svc.rulerAccent}
              />
            </div>

            {/* Detail */}
            <DetailSection svc={svc} />

            {/* Bottom spacing — extra on last */}
            <div className={i === services.length - 1 ? "pb-28" : "pb-4"} />
          </React.Fragment>
        ))}

        {/* ── Bottom rule ── */}
        <div className="px-8 md:px-16 lg:px-24">
          <div className="h-px w-full" style={{ background: "#e2e2dd" }} />
        </div>
      </div>
    </>
  );
}
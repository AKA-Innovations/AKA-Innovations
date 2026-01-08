"use client";

import { motion } from "framer-motion";

import { EngineeringHero } from "./EngineeringHero";
import { ServiceGrid } from "./ServiceGrid";
import { DetailSection } from "./DetailSection";

import AiMlIllustration from "@/assets/illustrations/ai-ml-illustration.svg";
import WebCloudIllustration from "@/assets/illustrations/web-cloud-illustration.svg";
import MobileAppIllustration from "@/assets/illustrations/mobile-app-illustration.svg";
import UiUxIllustration from "@/assets/illustrations/uiux-wireframes-illustration.svg";

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function EngineeringServices() {
  return (
    <div className="w-full bg-white overflow-hidden">

      {/* HERO */}
      <EngineeringHero />

      {/* SERVICES GRID */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionFade}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <ServiceGrid />
      </motion.div>

      {/* DIVIDER */}
      <SectionDivider />

      {/* AI & ML */}
      <DetailSection
        category="01 / INTELLIGENCE"
        categoryColor="text-cyan-400"
        title="AI & Machine Learning Solutions"
        description="We architect and operationalize advanced AI and machine learning systems that enable intelligent decision-making and large-scale automation. Our solutions are engineered with robust data pipelines, optimized model architectures, and production-ready MLOps workflows."
        features={[
          "Predictive modeling and statistical learning systems",
          "Deep learning, NLP, and computer vision solutions",
          "Intelligent automation and recommendation frameworks",
          "End-to-end model deployment and lifecycle management",
        ]}
        illustration={AiMlIllustration}
        layout="right"
        blurColor="bg-indigo-300/40"
        blurPosition="top-0 left-0"
        hasGlow
      />

      <SectionDivider />

      {/* WEB */}
      <DetailSection
        category="02 / INFRASTRUCTURE"
        categoryColor="text-indigo-400"
        title="Web Application Engineering"
        description="We design and develop cloud-native, high-availability web applications using modular, service-oriented architectures. Our engineering approach emphasizes performance optimization, security compliance, and seamless system interoperability."
        features={[
          "Full-stack application development with scalable backend architectures",
          "Microservices, RESTful and event-driven API ecosystems",
          "Cloud and serverless infrastructure design",
          "Performance tuning, observability, and security hardening",
        ]}
        illustration={WebCloudIllustration}
        layout="left"
        blurColor="bg-pink-400/25"
        blurPosition="top-1/4 right-0"
      />

      <SectionDivider />

      {/* MOBILE */}
      <DetailSection
        category="03 / MOBILITY"
        categoryColor="text-pink-400"
        title="Mobile Application Engineering"
        description="We build resilient and performance-optimized mobile applications engineered for cross-platform consistency and enterprise integration. Our mobile solutions prioritize reliability, secure data exchange, and seamless user interaction."
        features={[
          "Native and cross-platform mobile application development",
          "Secure API integration and real-time data synchronization",
          "Offline-capable and latency-optimized architectures",
        ]}
        illustration={MobileAppIllustration}
        layout="right"
        blurColor="bg-pink-300/30"
        blurPosition="bottom-0 right-0"
      />

      <SectionDivider />

      {/* UI/UX */}
      <DetailSection
        category="04 / EXPERIENCE"
        categoryColor="text-emerald-400"
        title="UI/UX Engineering"
        description="We engineer user experiences grounded in usability science, interaction design principles, and scalable design systems. Our UI/UX process aligns user behavior with business objectives through data-driven strategies."
        features={[
          "User research, journey mapping, and experience strategy",
          "Information architecture and interaction modeling",
          "Design systems and high-fidelity interface design",
          "Usability validation and design-to-engineering handoff",
        ]}
        illustration={UiUxIllustration}
        layout="left"
        blurColor="bg-emerald-300/30"
        blurPosition="bottom-0 left-0"
      />
    </div>
  );
}

/* ---------------- Divider ---------------- */

function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-10 md:py-16">
      <div className="h-px w-[70%] bg-linear-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );
}

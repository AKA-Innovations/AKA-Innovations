'use client';

import React from 'react';
import { 
  Users, CheckSquare, GraduationCap, DollarSign, 
  MapPin, Clock, BookOpen, Library, Award, FileText,
  Mail, ShieldAlert, Database, Laptop, Smartphone, BarChart2 
} from 'lucide-react';

const coreModules = [
  {
    title: "Student Management",
    desc: "360° profiles containing details of aggregate attendance, academic marks, fee schedules, parents data, and history logs.",
    icon: Users
  },
  {
    title: "Admissions & Intake",
    desc: "Digital online admissions portal, file uploading, validation of verification documents, and automatic enrollment matrix.",
    icon: FileText
  },
  {
    title: "Academics & Attendance",
    desc: "Real-time attendance registers, biometric integration, automated holiday lists, calendar scheduling, and leave management.",
    icon: CheckSquare
  },
  {
    title: "Examination & Grading",
    desc: "Timetable builder, grade reports, report card builder, board compliance sheets, mark templates, and subject schedules.",
    icon: Award
  },
  {
    title: "Homework & Syllabus",
    desc: "Topic lists tracking, homework uploading, learning files archive, assignment timelines, and teacher feedback notes.",
    icon: BookOpen
  },
  {
    title: "Finance & Fees Management",
    desc: "Online transaction gateways, offline bill entries, printable fee receipts, custom fine calculations, and billing reports.",
    icon: DollarSign
  },
  {
    title: "Timetable Management",
    desc: "Advanced auto-timetable builder, subject allocation, proxy class assigner, teacher vacancy scheduler, and holiday config.",
    icon: Clock
  },
  {
    title: "HR, Staff & Payroll",
    desc: "Staff attendance, salary calculators, bonus config, leave records, tax declaration submissions, and payroll slips.",
    icon: ShieldAlert
  },
  {
    title: "Communications Hub",
    desc: "Broadcast center (SMS, email, notifications), custom lists, calendar updates, and unified parent-student chat support panels.",
    icon: Mail
  },
  {
    title: "Reporting & Compliance",
    desc: "One-click CSV exports, regulatory compliance sheet layouts, custom query builders, and database backup downloads.",
    icon: Database
  },
  {
    title: "Analytics & Metrics Dashboard",
    desc: "Color-coded dashboards, statistical charts, comparative analytics models, and weak area alerts.",
    icon: BarChart2
  },
  {
    title: "Mobile Apps (Android & iOS)",
    desc: "White-labeled apps for parents, students, and teachers. Real-time updates, offline storage, and push notifications through a single unified app.",
    icon: Smartphone
  }
];

export default function FeatureDirectory() {
  return (
    <section className="py-24 bg-[#080d1a] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Complete Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight font-dm-sans mb-6">
            All Traditional ERP Features. <span className="text-blue-400">Zero Deletions.</span>
          </h2>
          <p className="text-lg text-slate-400 font-dm-sans leading-relaxed">
            We preserve and expand all standard institutional capabilities. If a traditional ERP can do it, AKA does it faster, better, and with more security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreModules.map((mod, index) => {
            const IconComp = mod.icon;
            return (
              <div 
                key={index}
                className="bg-[#0f172a]/60 border border-white/[0.05] rounded-[24px] p-6 lg:p-8 hover:bg-slate-800/40 hover:border-slate-700 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-dm-sans mb-2">{mod.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{mod.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

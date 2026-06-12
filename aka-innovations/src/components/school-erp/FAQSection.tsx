'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Sparkles } from 'lucide-react';

const faqsData = [
  {
    q: "Does AI replace school staff?",
    a: "No. Our Agentic AI functions as an intelligent operational assistant, not a replacement. It takes over routine administration—like attendance logging, timetable conflict checking, and grade compilation—allowing teachers and administrators to spend more time working directly with students."
  },
  {
    q: "Can workflows require approval before execution?",
    a: "Yes. Every database write or outward communication triggered by the AI can be configured to require explicit human validation. No fee receipt, announcement, or grade modification is published without authorized staff approval."
  },
  {
    q: "Can we disable AI automation entirely?",
    a: "Absolutely. You have 100% control. Because AKA is built as a complete traditional ERP first, you can disable the Agentic AI capabilities entirely and run your school using standard, legacy dashboards and menus."
  },
  {
    q: "How long does migration from our current ERP take?",
    a: "Migration typically takes between 7 to 14 working days. Our dedicated migration team handles all database exports, sanitizes student registries, maps historical fee structures, and sets up your system with zero downtime."
  },
  {
    q: "Is student data isolated and protected?",
    a: "Yes. Your database is fully isolated and encrypted. Student records are strictly private and are never shared with third-party providers or used to train public AI systems."
  },
  {
    q: "What is a School ERP?",
    a: "A School ERP (Enterprise Resource Planning) is an integrated cloud software solution designed to coordinate all academic and administrative operations. It handles student information systems (SIS), fee payments, homework collection, attendance, bus tracking, exams, timetables, and teacher scheduling in a unified database."
  },
  {
    q: "What is AI School ERP?",
    a: "An AI School ERP is an upgrade to traditional platforms that uses artificial intelligence to analyze student data, predict attendance drops, auto-schedule timetables, and compile report charts. AKA Innovations advances this further by providing actionable AI Agents that perform administrative work on behalf of the user."
  },
  {
    q: "What is Agentic AI?",
    a: "Agentic AI refers to artificial intelligence systems designed with agency—meaning they do not just answer user questions or provide recommendations, but autonomously execute multi-step database workflows, validate permissions, and trigger actions across internal services to complete a requested task."
  },
  {
    q: "Can AI mark student attendance?",
    a: "Yes, using AKA Innovations, a teacher can say or type 'Mark attendance for Class 8A, Rohit is absent'. The AI agent parses the query, checks database permissions, updates the roll, and triggers SMS alerts to the parents of the absent student instantly."
  },
  {
    q: "Can the AI generate examination timetables?",
    a: "Yes. AKA's Coordinator Agent can check holidays, classroom availability, seating capacities, and teacher rosters to build a conflict-free exam timetable in under two minutes, resolving a task that typically takes days of manual planning."
  },
  {
    q: "How secure is AI School ERP data?",
    a: "AKA Innovations enforces enterprise-grade security. All AI queries run through a Role-Based Access Control (RBAC) validation layer, ensuring users can only interact with modules they have explicit permission to access. Additionally, every operation logs an immutable audit trail."
  },
  {
    q: "Can schools still use traditional dashboards and workflows?",
    a: "Absolutely. AKA functions as 'The School ERP That Works Both Ways'. Your staff can continue using standard forms, menus, and database reports, or switch to natural-language AI commands seamlessly on the same platform."
  },
  {
    q: "How does AKA differ from other School ERP vendors?",
    a: "Most ERP systems only record data and compile reports. AKA Innovations provides actionable AI agents that do the actual administrative work for you, drastically reducing the click fatigue and data-entry backlogs common in legacy school software."
  },
  {
    q: "Is there a mobile application available?",
    a: "Yes, AKA Innovations offers white-labeled native mobile apps for iOS and Android, customized to reflect your school's branding. Parents and students use a single, unified dashboard app to track homework, assignments, and results updates."
  },
  {
    q: "Does the system support biometric and QR-based attendance?",
    a: "Yes. AKA integrates with standard biometric hardware, RFID chips, and QR-code scanners to log attendance automatically, syncing the data directly with the academic core database."
  },
  {
    q: "How does the fee management module work?",
    a: "The module supports online credit cards and banking payment gateways, automatically generates digital tax receipts, tracks outstanding dues, calculates late fee structures, and broadcasts reminders."
  },
  {
    q: "Can the AI generate personalized revision plans and answers?",
    a: "Yes. Students can query their integrated Chatbot Helper to explain topics or structure revision plans. Crucially, the AI is restricted to search context exclusively from notes and study materials uploaded by their teachers, preventing students from getting confused by incorrect or conflicting external web resources."
  },
  {
    q: "Is AKA Innovations School ERP hosted on the cloud?",
    a: "Yes, it is a fully cloud-hosted platform, guaranteeing high uptime, automatic data backups, and remote access from any browser or mobile device securely."
  },
  {
    q: "What training is required to use the system?",
    a: "Minimal training is needed. While traditional dashboards are simple and clean, the Agentic AI interface allows users to perform operations using natural language text or voice, making adoption incredibly fast."
  },
  {
    q: "Are parent-student communications secure?",
    a: "Yes. Parents and students only receive updates regarding their own classes. Broadcast notifications, announcements, and direct teacher chat options run through a secure validation gate to prevent data leaks."
  },
  {
    q: "Does the system manage HR, leaves, and staff payroll?",
    a: "Yes, AKA includes a full school HR module that tracks teacher logs, calculate salary details, processes leave requests, and generates pay slips automatically."
  },
  {
    q: "Can we export reports for educational board audits?",
    a: "Yes. Standard compliant reporting tables are built-in. Administrators can download CSV, PDF, or Excel sheets with a single click from their traditional admin dashboard."
  },
  {
    q: "Are transport tracking and library modules supported?",
    a: "Bus tracking and library management modules are scheduled for future system releases. The current platform focuses on core administration, fees, parent-student communications, timetables, grading, and attendance."
  },
  {
    q: "Can teachers edit student grades via AI?",
    a: "Yes, provided they have grading permissions. A teacher can instruct the AI to update grades, and the system will log the update alongside the teacher's profile in the audit trail."
  },
  {
    q: "Does the system support multiple school branches?",
    a: "Yes. AKA supports multi-school group management, allowing school groups to oversee multiple branches from a single unified portal."
  },
  {
    q: "How are school holidays and timetable changes handled?",
    a: "Once holidays are configured in the school calendar module, all timetable scheduling and exam generation systems automatically update to prevent scheduling conflicts."
  },
  {
    q: "Is there a digital student ID option?",
    a: "Yes, the unified parent-student mobile application features a digital ID card complete with a secure QR code for check-in validation systems."
  },
  {
    q: "Can the system calculate custom late fee structures?",
    a: "Yes. Admins can customize fine rules based on grade levels, days overdue, or payment methods, and let the billing engine handle the calculations automatically."
  },
  {
    q: "Can students access study resources online?",
    a: "Yes, teachers can upload PDFs, quizzes, notes, and media links, which are stored in the digital syllabus directory for students to access at any time through the companion app."
  },
  {
    q: "How does the system ensure student data privacy?",
    a: "We comply with standard data protection rules. Your institution's data is isolated and encrypted. Student records are never used to train external, public AI systems."
  },
  {
    q: "Can the AI send automated absent alerts?",
    a: "Yes. If a student is marked absent during morning roll, the system can automatically send a push notification or SMS alert to the registered parent-student profile."
  },
  {
    q: "What happens if there is a conflict in the timetable?",
    a: "The scheduling engine flags conflicts (e.g., a teacher assigned to two rooms at once) and suggests alternative schedules, allowing coordinators to resolve the issue in seconds."
  },
  {
    q: "Can parents view fee breakdowns on the app?",
    a: "Yes. The unified dashboard displays current balances, payment history, invoice breakdowns, and payment links for easy tracking."
  },
  {
    q: "How do we get started with a demo?",
    a: "Simply click the 'Book Demo' button on our page, fill in your school details, and our team will set up a live walkthrough customized for your institution."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqsData.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 bg-white dark:bg-[#0a0f1d] border-t border-slate-200 dark:border-white/[0.05] relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight font-dm-sans mb-6">
            Answers For Your <span className="text-blue-605 dark:text-blue-400">Administration Team</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-dm-sans leading-relaxed">
            Everything you need to know about security, traditional modules, and Agentic AI operations.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-10 max-w-lg mx-auto">
          <input 
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/[0.08] rounded-xl px-5 py-4 pl-12 text-sm text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
          <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-slate-50 dark:bg-[#0f172a]/60 border border-slate-200 dark:border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm md:text-base font-dm-sans pr-4">{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-450 dark:text-slate-500 shrink-0" />}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-200 dark:border-white/[0.04] text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFAQs.length === 0 && (
            <p className="text-center text-slate-400 dark:text-slate-500 text-sm py-10">No FAQs match your search query. Try typing another term.</p>
          )}
        </div>

      </div>
    </section>
  );
}

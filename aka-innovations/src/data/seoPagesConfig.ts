import { SEOPageConfig } from '@/components/school-erp/SEOLandingTemplate';

export const seoPagesConfig: Record<string, SEOPageConfig> = {
  aiSchoolErp: {
    title: "AI Powered School ERP Software",
    subtitle: "Complete School ERP with optional AI automation. Switch between traditional dashboards and autonomous AI agents anytime.",
    badge: "AI Positioning",
    bullets: ["Automatic Marksheets", "Smart Attendance Logs", "Autonomous Fee Reminders", "Unified Parent App"],
    primaryCTA: "Book Live AI Demo",
    secondaryCTA: "See AI Simulations",
    articleTitle: "The Comprehensive Guide to AI-Powered School ERP Systems",
    articleSections: [
      {
        title: "1. What is an AI School ERP?",
        paragraphs: [
          "An AI School ERP represents the next generation of educational administration platforms. While traditional systems acted as passive databases where staff spent hours typing student details, AI ERPs actively parse and execute operations. By combining traditional structured data arrays with generative models, institutions can automate workflows in real-time.",
          "Our system acts as a dual-operating platform, allowing schools to maintain standard legacy workflows for administrative safety, while introducing smart agents to handle high-volume click fatigues. This ensures teachers spend less time filling reports and more time instructing."
        ]
      },
      {
        title: "2. The Advantages of Automation in School Administration",
        paragraphs: [
          "Integrating AI into school operations reduces manual logging overhead by up to 40%. Simple prompts like 'Schedule Class 9 examination' are resolved instantly, checking room availability, invigilator rosters, and holiday lists in under 88 milliseconds.",
          "Furthermore, it establishes standard regulatory audit trails. Every action performed by our AI agents requires strict Role-Based Access Control (RBAC) validation, guaranteeing that student data remains isolated, secure, and protected against unauthorized writes."
        ]
      }
    ],
    internalLinks: [
      { label: "Agentic Automation", href: "/agentic-school-erp" },
      { label: "Principal Dashboard", href: "/principal-dashboard" },
      { label: "School ERP Core", href: "/school-erp" }
    ],
    faqs: [],
    simulationIndex: 0
  },
  agenticSchoolErp: {
    title: "Agentic AI School ERP & Operations",
    subtitle: "Next-gen school operating system powered by secure, actionable AI agents. Delegate administrative workflows via text.",
    badge: "Category Creation",
    bullets: ["Zero Click Workflows", "Strict Role Validation", "Immutable Audit Logging", "Instant Multi-Step Actions"],
    primaryCTA: "Schedule Agent Tour",
    secondaryCTA: "Watch Agent Live",
    articleTitle: "Understanding the Shift to Agentic School Management Systems",
    articleSections: [
      {
        title: "1. The Category of Agentic AI in Education",
        paragraphs: [
          "Agentic AI is defined by action. Unlike standard chatbots that only answer queries, an Agentic School ERP executes database transactions. When an authorized coordinator inputs 'Register Ananya Sen in Grade 6', the coordinator agent opens transactions in the Student Information System, calculates fee structures, and dispatches links automatically.",
          "This shift from passive retrieval to active execution is category-defining. It changes how schools think about software—not as a database logbook, but as an active administrative assistant."
        ]
      },
      {
        title: "2. Safeguards, Control, and Trust",
        paragraphs: [
          "For school buyers, safety is paramount. AKA Innovations guarantees 100% control with human approval queues. Every AI transaction can require validation before execution, ensuring that parents only receive correct notifications and records are updated accurately.",
          "Data privacy is strictly isolated. We do not use student records to train public models, and our infrastructure complies with modern encryption and protection rules."
        ]
      }
    ],
    internalLinks: [
      { label: "AI School ERP", href: "/ai-school-erp" },
      { label: "Traditional Comparison", href: "/compare/traditional-school-erp" },
      { label: "Manual vs AI School", href: "/compare/manual-vs-ai-school" }
    ],
    faqs: []
  },
  principalDashboard: {
    title: "Principal Dashboard for School Operations",
    subtitle: "Real-time school insights, automatic alert metrics, and role-based action triggers for principal oversight.",
    badge: "Role Page",
    bullets: ["High-Risk Attendance Alerts", "Fee Dues Monitoring", "Exam Timetable Approvals", "Audit Log Oversight"],
    primaryCTA: "Explore Principal View",
    secondaryCTA: "Watch 3-Min Tour",
    articleTitle: "Empowering School Leaders with Actionable Dashboards",
    articleSections: [
      {
        title: "1. Real-time Roster and Metric Tracking",
        paragraphs: [
          "Principals require immediate summaries without querying registrar staff. Our dashboard highlights key metric indicators like average daily presence, fee collectibles, and upcoming examination timelines in one place.",
          "If attendance falls below 75% for a student, the system flags them automatically, giving school leaders immediate options to view records or message parents directly."
        ]
      },
      {
        title: "2. Governance and Administrative Controls",
        paragraphs: [
          "As the head of governance, the principal has complete administrative override capabilities. You can toggle automated notifications, audit log compliance, and review pending coordinator timetables before they are published to students."
        ]
      }
    ],
    internalLinks: [
      { label: "Examination Management", href: "/examination-management" },
      { label: "AI School ERP", href: "/ai-school-erp" },
      { label: "Fee Management", href: "/school-fee-management" }
    ],
    faqs: []
  },
  attendanceManagement: {
    title: "School Attendance Management System",
    subtitle: "Mark roll in seconds with optional AI voice automation. Instantly update parent applications and log reports.",
    badge: "Module Page",
    bullets: ["Voice Attendance Inputs", "Auto Parent Notifications", "Biometric Integration", "Compliance PDF Exports"],
    primaryCTA: "Configure Attendance Module",
    secondaryCTA: "Watch Attendance Demo",
    articleTitle: "Optimizing Attendance Workflows with Agentic AI",
    articleSections: [
      {
        title: "1. Reducing Click Fatigue for Teachers",
        paragraphs: [
          "Logging daily roll is historically tedious, taking up to 15 minutes per section. With AKA, teachers simply say 'Mark Class 8A, Dev is absent'. The AI logs the database registry, sets all other students present, and alerts the coordinator in 10 seconds.",
          "Traditional click grids are still fully supported, giving teachers the freedom to log attendance via interactive tables whenever they prefer."
        ]
      },
      {
        title: "2. Integration with Biometric Hardware",
        paragraphs: [
          "For automated campuses, our system integrates seamlessly with RFID chips, QR gates, and biometric scanners, updating attendance aggregates in the central registry in real-time."
        ]
      }
    ],
    internalLinks: [
      { label: "Principal Dashboard", href: "/principal-dashboard" },
      { label: "Parent Companion App", href: "/parent-app" },
      { label: "Master School ERP", href: "/school-erp" }
    ],
    faqs: []
  },
  examinationManagement: {
    title: "School Examination & Grading Software",
    subtitle: "Auto-generate timetables, build digital report cards, and track student performance with zero schedule conflicts.",
    badge: "Module Page",
    bullets: ["Auto Timetable Solvers", "Report Card Customization", "Board Compliance Reports", "Roster Conflict Checkers"],
    primaryCTA: "Explore Grading Software",
    secondaryCTA: "Watch Scheduling Demo",
    articleTitle: "Modern School Exam Management Systems",
    articleSections: [
      {
        title: "1. Automated Exam Timetable Scheduling",
        paragraphs: [
          "Coordinating exams requires reconciling classroom capacities, student schedules, holidays, and invigilator shifts. AKA's engine solves this timetable matrix automatically, producing conflict-free schedules in under 2 minutes.",
          "Once scheduled, dates publish directly to parent-student feeds, complete with syllabi and review documents."
        ]
      },
      {
        title: "2. Compliant Grading Sheets & Report Cards",
        paragraphs: [
          "Format custom report cards that comply with regulatory board guidelines, track mark histories, and export spreadsheet audit archives with a single click."
        ]
      }
    ],
    internalLinks: [
      { label: "Principal Dashboard", href: "/principal-dashboard" },
      { label: "Attendance Management", href: "/attendance-management" },
      { label: "Master School ERP", href: "/school-erp" }
    ],
    faqs: []
  },
  schoolFeeManagement: {
    title: "School Fee & Finance Management System",
    subtitle: "Online fee collection, digital receipts, custom fine engines, and automated dues reminders.",
    badge: "Module Page",
    bullets: ["Unified Credit Cards Gateway", "Auto Dues Reminders", "Offline Bill Entries", "Tax Compliant Receipts"],
    primaryCTA: "Configure Fees System",
    secondaryCTA: "Watch Billing Tour",
    articleTitle: "Streamlining Fee Collections and Receivables",
    articleSections: [
      {
        title: "1. Online Transaction Gateways & Reminders",
        paragraphs: [
          "Enable parents to pay tuition fee dues via bank links, credit cards, or UPI. The billing system matches receipts, updates active balances, and auto-dispatches digital invoices to parent profiles.",
          "When payments are overdue, the system triggers reminders automatically, minimizing outstanding receivables."
        ]
      },
      {
        title: "2. Custom Fine Rules and Local Compliance",
        paragraphs: [
          "Configure fine logic based on day count or grade levels, letting the system reconcile payments and generate compliance balance sheets."
        ]
      }
    ],
    internalLinks: [
      { label: "Parent Portal App", href: "/parent-app" },
      { label: "Principal Dashboard", href: "/principal-dashboard" },
      { label: "Master School ERP", href: "/school-erp" }
    ],
    faqs: []
  },
  parentApp: {
    title: "Unified School Parent Application",
    subtitle: "Real-time updates, direct teacher communications, and fee payment portals in a single white-labeled mobile app.",
    badge: "Module Page",
    bullets: ["Homework Progress Feeds", "Direct Teacher Messaging", "Secure Payment Gateway", "Automatic Attendance Alerts"],
    primaryCTA: "Explore Parent App",
    secondaryCTA: "See Mobile Interface",
    articleTitle: "Improving Parent Engagement via Native Applications",
    articleSections: [
      {
        title: "1. Instant Student Activity Updates",
        paragraphs: [
          "Keep parents updated without noisy messaging groups. The parent companion application aggregates student schedules, results, marked attendance, and pending assignments into a clean timeline.",
          "If a child is absent or misses homework, notifications alerts update parent feeds immediately, driving engagement."
        ]
      },
      {
        title: "2. Secure Chatbot Revision Helper",
        paragraphs: [
          "Parents and students can use the AI assistant to review concepts. The chatbot helper strictly restricts its search domain to files and notes uploaded by their teachers, guaranteeing kids are not distracted by unverified web answers."
        ]
      }
    ],
    internalLinks: [
      { label: "Fee Management", href: "/school-fee-management" },
      { label: "Attendance Module", href: "/attendance-management" },
      { label: "Master School ERP", href: "/school-erp" }
    ],
    faqs: []
  },
  schoolManagementSystemIndia: {
    title: "School Management System in India",
    subtitle: "Highly localized School ERP compliant with CBSE, ICSE, and Indian State Board guidelines. Reconcile fee structures and audit forms.",
    badge: "Localized Landing",
    bullets: ["Board Grading Rubrics", "Local Payment Integrations", "Multi-School Roster Pools", "Indian Government Audit Exports"],
    primaryCTA: "Configure Local ERP",
    secondaryCTA: "Explore Board Guidelines",
    articleTitle: "CBSE & ICSE Compliant School Management Software",
    articleSections: [
      {
        title: "1. Localization for Indian Educational Standards",
        paragraphs: [
          "Schools in India require specific grading structures, section registers, and board-mandated compliance export formats. AKA is fully localized to support standard rubrics, allowing registrars to compile audit logs easily.",
          "Integrates with popular local transaction gateways, ensuring seamless UPI fee collections for parents."
        ]
      },
      {
        title: "2. Multi-School Group Consolidation",
        paragraphs: [
          "Perfect for chains, managing multiple branches, teacher rosters, and central finance sheets under one administrator console."
        ]
      }
    ],
    internalLinks: [
      { label: "Master School ERP", href: "/school-erp" },
      { label: "How to Choose ERP", href: "/guides/choose-school-erp" },
      { label: "What is School ERP", href: "/guides/what-is-school-erp" }
    ],
    faqs: []
  },
  traditionalSchoolErp: {
    title: "Compare Traditional School ERPs vs AKA Innovations",
    subtitle: "Understand why legacy educational software leads to administrative bottlenecks, and how AKA's dual-operating model resolves it.",
    badge: "Comparison Page",
    bullets: ["Legacy Dashboard Compatibility", "AI Performance Speeds", "Zero Click Options", "Immutable Security Audits"],
    primaryCTA: "Request Comparison Chart",
    secondaryCTA: "Watch Direct Workflow Comparison",
    articleTitle: "Feature Matrix: Traditional ERPs vs AKA Agentic Platform",
    articleSections: [
      {
        title: "1. The Click Fatigue of Legacy Softwares",
        paragraphs: [
          "Traditional systems require navigating 5 to 7 click screens to execute basic operations like timetable edits or fee receipting. AKA preserves those standard dashboards for familiarity, but wraps them in an AI command layer, allowing staff to complete the same routines in seconds.",
          "Our dual-operating system ensures you don't lose the comfort of structured spreadsheets while gaining the speed of modern AI."
        ]
      },
      {
        title: "2. Action vs Static Logging",
        paragraphs: [
          "Most competitors act as logbooks. AKA Innovations builds active agents that perform actual operations, notify contacts, and reconcile calendars automatically."
        ]
      }
    ],
    internalLinks: [
      { label: "Master School ERP", href: "/school-erp" },
      { label: "Manual vs AI School", href: "/compare/manual-vs-ai-school" },
      { label: "AI School ERP", href: "/ai-school-erp" }
    ],
    faqs: []
  },
  manualVsAiSchool: {
    title: "Manual Administration vs AI School Operating Systems",
    subtitle: "A side-by-side analysis of school time consumption and administrative workloads.",
    badge: "Comparison Page",
    bullets: ["Time Log Reductions", "Error-Free Scheduling", "Instant Communication Broadcasts", "Secure Sandbox Runs"],
    primaryCTA: "Review Time Savings",
    secondaryCTA: "See Action Simulations",
    articleTitle: "The Operational Math: Manual vs Automated Administration",
    articleSections: [
      {
        title: "1. Measuring Time Lost to Manual Entry",
        paragraphs: [
          "Teachers spend up to 40% of their day logging schedules, attendance, and student profiles manually. Transitioning to AI voice commands reduces simple register logs from 15 minutes to 30 seconds, returning valuable classroom hours.",
          "Automating invigilator and timetable rosters removes coordination cycles completely, preventing double-bookings and conflicts."
        ]
      },
      {
        title: "2. The Cost of Data Redundancy",
        paragraphs: [
          "Fragmented departmental systems require manual exports and imports. AKA consolidates data into a single, secure cloud-sync registry."
        ]
      }
    ],
    internalLinks: [
      { label: "Master School ERP", href: "/school-erp" },
      { label: "Traditional Comparison", href: "/compare/traditional-school-erp" },
      { label: "AI School ERP", href: "/ai-school-erp" }
    ],
    faqs: []
  },
  whatIsSchoolErp: {
    title: "What Is School ERP? The Definitive Guide",
    subtitle: "A detailed breakdown of Student Information Systems (SIS), Cloud ERPs, and educational databases.",
    badge: "SEO Guide",
    bullets: ["Centralized Student Files", "Integrated Fee Journals", "Timetable Schedulers", "Unified Notifications"],
    primaryCTA: "Download ERP Guide PDF",
    secondaryCTA: "Book Live System Tour",
    articleTitle: "The Comprehensive Guide to School ERP Architecture",
    articleSections: [
      {
        title: "1. Core Pillars of School Management Platforms",
        paragraphs: [
          "A School ERP is the central digital hub of educational institutions, linking admissions, rosters, billing, timetables, and parents. Having structured profiles ensures data is logged accurately and departments work in harmony.",
          "Our system runs on high-availability cloud setups, ensuring records are synced, backed up, and accessible securely from any device."
        ]
      },
      {
        title: "2. Transitioning to Modern Platforms",
        paragraphs: [
          "When upgrading systems, ensure the vendor provides isolation guarantees and simple migration pipelines to prevent downtime."
        ]
      }
    ],
    internalLinks: [
      { label: "How AI Changes Schools", href: "/guides/how-ai-is-changing-schools" },
      { label: "How to Choose ERP", href: "/guides/choose-school-erp" },
      { label: "Master School ERP", href: "/school-erp" }
    ],
    faqs: []
  },
  howAiIsChangingSchools: {
    title: "How AI Is Changing School Management System Software",
    subtitle: "Analyzing the role of generative assistants, automation agents, and localized search algorithms in modern education.",
    badge: "SEO Guide",
    bullets: ["Autonomous Task Resolvers", "RBAC Security Guards", "Safe Study Helpers", "Predictive Trend Indicators"],
    primaryCTA: "Read AI Industry Study",
    secondaryCTA: "See AI in Action",
    articleTitle: "The Shift to AI-Powered Educational Administration",
    articleSections: [
      {
        title: "1. Beyond Simple Analytics to Active Tasks",
        paragraphs: [
          "AI in schools started as dashboards showing performance charts. Today, Agentic AI performs the actual database modifications, scheduling, and notifications. This dramatically reduces administrative overhead.",
          "Strict validation boundaries ensure AI systems can only perform actions that are verified and approved, preventing data breaches."
        ]
      },
      {
        title: "2. Protecting Student Privacy",
        paragraphs: [
          "Safety is non-negotiable. Modern platforms isolate institutional data and never share records with public engines."
        ]
      }
    ],
    internalLinks: [
      { label: "What is School ERP", href: "/guides/what-is-school-erp" },
      { label: "How to Choose ERP", href: "/guides/choose-school-erp" },
      { label: "Master School ERP", href: "/school-erp" }
    ],
    faqs: []
  },
  chooseSchoolErp: {
    title: "How to Choose the Best School ERP Software for Your Campus",
    subtitle: "A practical evaluation checklist covering data security, integration pipelines, optional AI, and migration costs.",
    badge: "SEO Guide",
    bullets: ["Optional AI Toggle", "Data Isolation Guards", "Zero Downtime Migration", "Role-Based Security Checks"],
    primaryCTA: "Download Evaluation Checklist",
    secondaryCTA: "Schedule Expert Consultation",
    articleTitle: "Evaluation Checklist for School Management Platforms",
    articleSections: [
      {
        title: "1. Prioritizing Trust, Governance, and Control",
        paragraphs: [
          "When shopping for School ERP software, look for platforms that support a dual-operating model. This gives you legacy dashboards on day one, and allows you to adopt automated AI workflows gradually when ready.",
          "Always confirm strict data isolation practices, role-based access checks, and migration timelines to avoid runtime friction."
        ]
      },
      {
        title: "2. Reconciling Migration & Onboarding Timelines",
        paragraphs: [
          "Choose a vendor with a dedicated onboarding team that exports, checks, and migrates records seamlessly with zero operational gaps."
        ]
      }
    ],
    internalLinks: [
      { label: "What is School ERP", href: "/guides/what-is-school-erp" },
      { label: "How AI Changes Schools", href: "/guides/how-ai-is-changing-schools" },
      { label: "Master School ERP", href: "/school-erp" }
    ],
    faqs: []
  }
};

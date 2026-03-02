'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    GraduationCap,
    LayoutDashboard,
    Users,
    Smartphone,
    PieChart,
    CreditCard,
    Bell
} from 'lucide-react';

const modules = [
    {
        icon: LayoutDashboard,
        title: "Admin Dashboard",
        description: "Central command center for total operational control."
    },
    {
        icon: GraduationCap,
        title: "Academic Management",
        description: "Timetables, exams, homework, and performance tracking."
    },
    {
        icon: Users,
        title: "Parent Portal",
        description: "Transparent access to attendance, results, and notices."
    },
    {
        icon: Smartphone,
        title: "White-labeled App",
        description: "Premium Android & iOS apps with your school's branding."
    },
    {
        icon: Building2,
        title: "Smart Attendance",
        description: "QR-based or biometric integration with instant SMS alerts."
    },
    {
        icon: CreditCard,
        title: "Fee Management",
        description: "Online payments, automated receipts, and due reminders."
    },
    {
        icon: Bell,
        title: "Communication",
        description: "Broadcast announcements, event calendars, and chat."
    },
    {
        icon: PieChart,
        title: "Deep Analytics",
        description: "Data-driven insights on student & staff performance."
    }
];

const Solution = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="features" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                    >
                        Unified Architecture
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Our Solution: A Unified, <br /><span className="text-blue-400">Intelligent School ERP</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400"
                    >
                        Centralize everything. From academic planning to financial reporting,
                        run your entire institution from one secure, cloud-based platform.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                <module.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{module.title}</h3>
                            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                                {module.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Solution;

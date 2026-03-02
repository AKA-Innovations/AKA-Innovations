'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, MessageSquareWarning, SearchX, Siren } from 'lucide-react';

const pageContent = {
    heading: {
        start: "The Problem with ",
        highlight: "Traditional",
        end: " School Management"
    },
    subheading: "Most schools settle for fragmented systems or outdated software that users hate. The result? More work for teachers, confusion for parents, and operational chaos.",
    problems: [
        {
            id: 'manual-work',
            title: "Manual Work & Spreadsheets",
            description: "Endless data entry errors, lost records, and time wasted on tasks that should be automated."
        },
        {
            id: 'no-analytics',
            title: "Zero Real-time Analytics",
            description: "Principals and admins making decisions based on outdated reports instead of live data."
        },
        {
            id: 'fragmented-comm',
            title: "Fragmented Communication",
            description: "Important notices getting lost in WhatsApp groups, leading to frustrated parents and staff."
        },
        {
            id: 'security-risks',
            title: "Security Risks",
            description: "Sensitive student data stored insecurely in physical files or local computers prone to crashes."
        }
    ]
};

const problemIcons: Record<string, React.ElementType> = {
    'manual-work': FileSpreadsheet,
    'no-analytics': SearchX,
    'fragmented-comm': MessageSquareWarning,
    'security-risks': Siren
};

const ProblemStatement = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-syne text-slate-900 mb-6"
                    >
                        {pageContent.heading.start}
                        <span className="text-red-500">{pageContent.heading.highlight}</span>
                        {pageContent.heading.end}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg font-dm-sans text-slate-600 leading-relaxed"
                    >
                        {pageContent.subheading}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pageContent.problems.map((item, index) => {
                        const Icon = problemIcons[item.id];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100 hover:bg-red-50/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-xl bg-red-50/50 border border-red-100 flex items-center justify-center mb-6 text-red-500 shadow-sm group-hover:scale-110 group-hover:bg-red-100 transition-all duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold font-syne text-slate-900 mb-3 group-hover:text-red-700 transition-colors">{item.title}</h3>
                                <p className="text-sm font-dm-sans text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;

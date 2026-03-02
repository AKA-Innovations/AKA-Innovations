'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Lock, Server, Smartphone, Zap, Layers } from 'lucide-react';

const techItems = [
    { icon: Cloud, label: "Cloud-Native", desc: "Auto-scaling infrastructure on AWS/Azure" },
    { icon: Lock, label: "Enterprise Security", desc: "256-bit encryption & role-based access" },
    { icon: Smartphone, label: "Mobile First", desc: "Native iOS & Android experiences" },
    { icon: Zap, label: "High Performance", desc: "<100ms API response times" },
    { icon: Layers, label: "Modular API", desc: "Easy 3rd-party integrations" },
    { icon: Server, label: "Automated Backups", desc: "Daily redundancy & disaster recovery" },
];

const TechStack = () => {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        Enterprise-Grade <span className="text-blue-600">Architecture</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Built on a modern technology stack designed for security, speed, and reliability.
                        No legacy code, just future-proof performance.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {techItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-blue-700 transition-colors">{item.label}</h3>
                            <p className="text-xs text-slate-500 leading-tight group-hover:text-slate-600 transition-colors">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, LineChart, Sparkles, UserCheck } from 'lucide-react';

const aiFeatures = [
    {
        icon: LineChart,
        title: "Performance Analytics",
        description: "Predictive analysis of student results to identify weak areas before exams."
    },
    {
        icon: UserCheck,
        title: "Smart Attendance",
        description: "Automated alerts for absentee patterns to improve student regularity."
    },
    {
        icon: BrainCircuit,
        title: "Exam Recommendations",
        description: "AI-generated question banks and revision plans based on class performance."
    },
    {
        icon: Sparkles,
        title: "Parent Insights",
        description: "Personalized usage reports for parents to understand child engagement."
    }
];

const SmartFeatures = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Tech Background */}
            <div className="absolute inset-0 z-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px'
            }}></div>

            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-slate-900 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-slate-900 to-transparent z-10"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-20">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
                            <Sparkles className="w-4 h-4" />
                            Future-Ready Architecture
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Future</span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Go beyond basic digital logs. Use data to make smarter decisions for your institution.
                        </p>
                    </div>

                    {/* Visual abstract tech element */}
                    <div className="w-full md:w-auto flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 animate-pulse blur-xl opacity-50 absolute"></div>
                        <BrainCircuit className="w-20 h-20 text-purple-200 relative z-10" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aiFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/40 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)] transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-900/30 transition-all duration-300">
                                <feature.icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-200 transition-colors">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SmartFeatures;

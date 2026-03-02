'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
    {
        title: "Based on Real Workflow Study",
        desc: "We didn't just code visuals; we sat with school admins for 3 months to understand actual daily problems."
    },
    {
        title: "Modular & Scalable",
        desc: "Start with 2 modules or 10. The system grows as your institution grows, from 500 to 50,000 students."
    },
    {
        title: "Zero-Training Interface",
        desc: "If you can use Facebook or WhatsApp, you can use our ERP. No complex manuals required."
    },
    {
        title: "Indian Context Ready",
        desc: "Built-in support for CBSE/ICSE grading patterns, local SMS gateways, and fee structures."
    }
];

const UniqueSellingPoints = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Why This ERP is <br /><span className="text-blue-600">Different</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            Most ERPs are bloated, slow, and hard to use. We prioritized speed, simplicity, and actual problem-solving over feature checklists.
                        </p>

                        <div className="grid gap-8">
                            {reasons.map((reason, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="mt-1 flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">{reason.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="aspect-square bg-slate-50 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] -z-10"></div>
                        {/* Visual metaphor for simplicity vs chaos */}
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform translate-y-8 hover:shadow-2xl transition-shadow"
                            >
                                <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
                                <div className="text-sm text-slate-500">Faster Data Entry</div>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform -translate-y-4 hover:shadow-2xl transition-shadow"
                            >
                                <div className="text-4xl font-bold text-blue-600 mb-2">0%</div>
                                <div className="text-sm text-slate-500">Data Redundancy</div>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform translate-y-4 hover:shadow-2xl transition-shadow"
                            >
                                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                                <div className="text-sm text-slate-500">Parent Satisfaction</div>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 transform -translate-y-8 hover:shadow-2xl transition-shadow"
                            >
                                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                                <div className="text-sm text-slate-500">Uptime & Support</div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UniqueSellingPoints;

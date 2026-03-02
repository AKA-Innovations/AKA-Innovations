'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Smartphone, Download, Bell, BookOpen, Clock } from 'lucide-react';

const features = [
    "Attendance & Leave Management",
    "Homework & Classwork Updates",
    "Online Fee Payments & Receipts",
    "Exam Results & Marksheets",
    "Digital ID Card with QR",
    "Bus Tracking & Transport Alerts"
];

const StudentApp = () => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6 animate-pulse">
                            <Smartphone className="w-4 h-4" />
                            Top-Rated Mobile App
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Student Experience: <br />
                            <span className="text-indigo-600">Designed for Daily Use</span>
                        </h2>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            A native mobile app that students and parents actually love to use.
                            Clean interface, instant notifications, and zero clutter.
                            Available on iOS and Android.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-700">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/40 hover:-translate-y-1">
                                <Download className="w-5 h-5" />
                                <div className="text-left">
                                    <div className="text-[10px] opacity-70 uppercase tracking-wide">Download on the</div>
                                    <div className="text-sm font-bold leading-none">App Store</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/40 hover:-translate-y-1">
                                <Download className="w-5 h-5" />
                                <div className="text-left">
                                    <div className="text-[10px] opacity-70 uppercase tracking-wide">Get it on</div>
                                    <div className="text-sm font-bold leading-none">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Visuals (App Screens) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="order-1 lg:order-2 relative h-[500px] md:h-[600px] flex items-center justify-center"
                    >
                        {/* Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50/50 rounded-full blur-3xl -z-10" />

                        {/* Phone 1 (Light Mode) */}
                        <div className="absolute left-[10%] w-[260px] h-[520px] bg-white rounded-[2.5rem] shadow-2xl border-[6px] border-slate-900 z-10 transform -rotate-6 hover:-rotate-3 transition-transform duration-500 overflow-hidden">
                            <div className="h-full w-full bg-slate-50 flex flex-col">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-xl z-20" />

                                {/* App Header */}
                                <div className="pt-10 pb-4 px-4 bg-white border-b border-slate-100">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">JD</div>
                                            <div>
                                                <div className="text-xs text-slate-500">Good Morning</div>
                                                <div className="font-semibold text-slate-800">John Doe</div>
                                            </div>
                                        </div>
                                        <Bell className="w-5 h-5 text-slate-400" />
                                    </div>
                                </div>

                                {/* App Content */}
                                <div className="p-4 space-y-4">
                                    <div className="p-4 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
                                        <div className="text-xs opacity-80 mb-1">Attendance</div>
                                        <div className="text-2xl font-bold">92%</div>
                                        <div className="w-full bg-white/20 h-1.5 rounded-full mt-2">
                                            <div className="bg-white h-1.5 rounded-full w-[92%]" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 py-6">
                                            <BookOpen className="text-indigo-500" />
                                            <span className="text-sm font-medium">Homework</span>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 py-6">
                                            <Clock className="text-indigo-500" />
                                            <span className="text-sm font-medium">Timetable</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone 2 (Dark Mode) */}
                        <div className="absolute right-[10%] top-[40px] w-[260px] h-[520px] bg-slate-900 rounded-[2.5rem] shadow-2xl border-[6px] border-slate-800 z-20 transform rotate-6 hover:rotate-3 transition-transform duration-500 overflow-hidden">
                            <div className="h-full w-full bg-slate-950 flex flex-col text-slate-100">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-800 rounded-b-xl z-20" />

                                {/* App Header */}
                                <div className="pt-10 pb-4 px-4 border-b border-slate-800">
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg font-bold">Notices</div>
                                    </div>
                                </div>

                                {/* App Content */}
                                <div className="p-4 space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                                            <div className="flex gap-2 mb-2">
                                                <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5" />
                                                <div className="h-2 w-20 bg-slate-800 rounded" />
                                            </div>
                                            <div className="h-2 w-full bg-slate-800 rounded mb-1.5" />
                                            <div className="h-2 w-2/3 bg-slate-800 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StudentApp;

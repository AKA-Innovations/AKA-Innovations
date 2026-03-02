"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, Activity, LayoutDashboard, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { Header } from "@/components/layout/Header";


const products = [
    {
        id: "school-erp",
        name: "School ERP",
        tagline: "One System. Every School Day. Zero Friction.",
        description: "Attendance, exams, fees, homework, transport, and parent communication — handled from a single secure platform built for real school operations.",
        icon: GraduationCap,
        gradient: "from-blue-100 via-indigo-50 to-blue-50",
        border: "border-blue-200",
        iconBg: "bg-blue-600",
        buttonHover: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
        link: "/school-erp",
        features: ["Role-Based Dashboards", "Live Activity Feed", "Automated Fee Collection"],
        // New details for the back side
        backDetails: {
            title: "Why it works",
            points: [
                "99.9% Uptime for critical exam periods",
                "End-to-end data encryption for student privacy",
                "Mobile-first design for busy parents"
            ],
            metric: "40% reduction in admin overhead"
        }
    },
    {
        id: "health-connect",
        name: "Health Connect",
        tagline: "Proactive Product Health & Monitoring.",
        description: "Monitor, analyze, and optimize your healthcare products with intelligent analytics and real-time alerts. Ensure top-tier performance unconditionally.",
        icon: Activity,
        gradient: "from-orange-100 via-red-50 to-orange-50",
        border: "border-orange-200",
        iconBg: "bg-orange-500",
        buttonHover: "hover:bg-orange-600 hover:text-white hover:border-orange-600",
        link: "/producthealth",
        features: ["Real-time Vitals Monitoring", "Compliance Tracking", "Predictive Analytics"],
        // New details for the back side
        backDetails: {
            title: "Enterprise Grade",
            points: [
                "HIPAA & GDPR compliant architecture",
                "Instant SMS/Email incident alerts",
                "Deep-link diagnostic reporting"
            ],
            metric: "2ms average latency tracking"
        }
    }
];

export default function ProductsPage() {
    return (
        <div className="relative min-h-screen bg-[#F8FAFC] overflow-hidden">
            <Header />
            <div className="absolute inset-0 opacity-40">
                <AmbientBackground />
            </div>

            <section className="relative pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md mb-8 shadow-sm"
                >
                    <LayoutDashboard className="w-4 h-4 text-emerald-600" />
                    <span className="text-slate-600 text-sm font-medium tracking-wide">Our Flagship Products</span>
                </motion.div>

                <motion.h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                    Built for <br className="md:hidden" />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                        Scale and Speed
                    </span>
                </motion.h1>
            </section>

            <section className="relative px-6 sm:px-12 pb-32 max-w-7xl mx-auto z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {products.map((product) => (
                        <FlipCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
}

function FlipCard({ product }: { product: any }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="group h-[600px] [perspective:1500px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d]"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.30, ease: [0.55, 0.055, 0.675, 0.19] }}
            >
                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-50 blur-xl z-0`} />
                    <div className={`relative h-full flex flex-col p-8 sm:p-10 bg-white/70 backdrop-blur-xl border border-white rounded-3xl ${product.border} shadow-xl z-10`}>
                        <div className={`w-16 h-16 rounded-2xl ${product.iconBg} flex items-center justify-center mb-6`}>
                            <product.icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">{product.name}</h2>
                        <h3 className="text-emerald-600 font-semibold mb-4 text-sm uppercase tracking-wide">{product.tagline}</h3>
                        <p className="text-slate-600 leading-relaxed mb-8 flex-1">{product.description}</p>
                        <ul className="mb-10 space-y-3">
                            {product.features.map((f: string, i: number) => (
                                <li key={i} className="flex items-center text-slate-500 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <div className="text-xs text-slate-400 font-medium italic animate-pulse">
                            Hover to see technical specs →
                        </div>
                    </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className={`relative h-full flex flex-col p-8 sm:p-10 bg-slate-900 rounded-3xl border-2 ${product.border} shadow-2xl z-10`}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center`}>
                                <product.icon className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white tracking-tight">{product.name} Details</h2>
                        </div>

                        <div className="flex-1 space-y-6">
                            <div>
                                <h4 className="text-emerald-400 text-sm font-bold uppercase mb-3">{product.backDetails.title}</h4>
                                <div className="space-y-4">
                                    {product.backDetails.points.map((point: string, i: number) => (
                                        <div key={i} className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                            <p className="text-slate-300 text-sm leading-snug">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-2 mb-1">
                                    <Zap className="w-4 h-4 text-orange-400" />
                                    <span className="text-xs text-slate-400 uppercase font-bold">Key Performance</span>
                                </div>
                                <div className="text-xl font-semibold text-white">{product.backDetails.metric}</div>
                            </div>
                        </div>

                        <Link
                            href={product.link}
                            className={`mt-6 inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white font-semibold transition-all duration-300 bg-white/10 border border-white/20 hover:bg-white hover:text-slate-900`}
                        >
                            Get Started with {product.name}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
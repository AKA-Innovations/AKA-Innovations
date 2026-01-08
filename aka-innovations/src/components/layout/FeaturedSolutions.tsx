"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// SVGs as React Components (SVGR)
import ServiceAiMl from "@/assets/images/servicesaiml.svg";
import ServiceWebApp from "@/assets/images/servicewebapp.svg";
import ServiceMobileApp from "@/assets/images/servicemobileapp.svg";
import ServiceUiUx from "@/assets/images/serviceuiux.svg";

// Data
const services = [
    {
        id: "ai-ml",
        title: "AI & Machine Learning Solutions",
        description:
            "We design and deploy AI systems that convert data into actionable insights. Includes predictive modeling, NLP, and intelligent automation.",
        features: [
            "Predictive modeling & statistical learning",
            "Deep learning & computer vision",
            "Intelligent automation frameworks",
        ],
        Illustration: ServiceAiMl,
        bgAccent: "bg-blue-500",
    },
    {
        id: "web",
        title: "Web Application Engineering",
        description:
            "Cloud-native, high-availability web applications built for scale. We emphasize performance, security, and seamless interoperability.",
        features: [
            "Full-stack scalable architectures",
            "Microservices & event-driven APIs",
            "Performance optimization",
        ],
        Illustration: ServiceWebApp,
        bgAccent: "bg-indigo-500",
    },
    {
        id: "mobile",
        title: "Mobile Application Engineering",
        description:
            "Resilient, cross-platform mobile apps designed for enterprise integration and seamless user interaction.",
        features: [
            "Native & cross-platform development",
            "Secure API integration",
            "Offline-capable architectures",
        ],
        Illustration: ServiceMobileApp,
        bgAccent: "bg-pink-500",
    },
    {
        id: "ui-ux",
        title: "UI/UX Engineering",
        description:
            "User experiences grounded in usability science and design systems. We align user behavior with business objectives.",
        features: [
            "User research & journey mapping",
            "Design systems & hi-fi prototypes",
            "Usability validation",
        ],
        Illustration: ServiceUiUx,
        bgAccent: "bg-emerald-500",
    },
];

export function FeaturedSolutions() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeService, setActiveService] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const index = Math.min(
                Math.floor(latest * services.length),
                services.length - 1
            );
            setActiveService(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const ActiveIllustration = services[activeService].Illustration;

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-[#e8eaed]"
            style={{ height: `${services.length * 100}vh` }}
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-8">

                {/* Decorative Background Orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/40 to-cyan-400/40 rounded-full"
                    />
                    <motion.div
                        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[10%] -right-[5%] w-[450px] h-[450px] bg-gradient-to-bl from-purple-500/40 to-pink-400/40 rounded-full"
                    />
                    <motion.div
                        animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-indigo-500/40 rounded-full"
                    />
                    <motion.div
                        animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[40%] -right-[10%] w-[350px] h-[350px] bg-indigo-500/20 rounded-full"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-6xl mx-auto h-[600px] md:h-[520px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="w-full h-full bg-white/20 backdrop-blur-2xl rounded-[3rem] border border-white/40 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16"
                        >
                            {/* Left Content */}
                            <div className="flex-1 space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                        {services[activeService].title}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {services[activeService].description}
                                    </p>
                                </div>

                                <ul className="space-y-3">
                                    {services[activeService].features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-3 text-gray-700 font-medium text-sm md:text-base"
                                        >
                                            <span
                                                className={`w-1.5 h-1.5 rounded-full ${services[activeService].bgAccent}`}
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-2">
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center gap-2 text-blue-600 font-semibold group hover:gap-3 transition-all"
                                    >
                                        <span className="border-b border-blue-600/0 group-hover:border-blue-600 transition-colors">
                                            Learn more
                                        </span>
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Illustration */}
                            <div className="flex-1 flex items-center justify-center w-full">
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-[260px] h-[260px] md:w-[360px] md:h-[360px]"
                                >
                                    <ActiveIllustration className="w-full h-full drop-shadow-2xl" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination */}
                    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-2 p-1.5 bg-white/25 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
                            {services.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === activeService
                                            ? "w-12 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                                            : "w-6 bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

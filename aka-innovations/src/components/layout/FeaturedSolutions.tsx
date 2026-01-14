"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// SVGs
import ServiceAiMl from "@/assets/images/servicesaiml.svg";
import ServiceWebApp from "@/assets/images/servicewebapp.svg";
import ServiceMobileApp from "@/assets/images/servicemobileapp.svg";
import ServiceUiUx from "@/assets/images/serviceuiux.svg";

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
        accent: "from-blue-500 to-cyan-400",
        dot: "bg-blue-500",
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
        accent: "from-indigo-500 to-purple-500",
        dot: "bg-indigo-500",
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
        accent: "from-pink-500 to-rose-400",
        dot: "bg-pink-500",
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
        accent: "from-emerald-500 to-teal-400",
        dot: "bg-emerald-500",
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
            id="features"
            ref={containerRef}
            className="relative w-full"
            style={{ height: `${services.length * 100}vh` }}
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10">
                <div className="relative z-20 text-center mb-6 md:mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-2 md:mb-4">
                        Core Capabilities
                    </h2>
                    <p className="hidden md:block text-lg text-gray-600 font-light">
                        Engineering excellence across every layer of the stack.
                    </p>
                </div>
                {/* Global AmbientBackground handles the visuals now, but we add local orbs as requested */}

                {/* Animated Background Orbs - Optimized */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu">
                    {/* Top Left Purple Orb */}
                    <motion.div
                        animate={{
                            x: [0, -70, 0],
                            y: [0, 70, 0],
                            scale: [1, 1, 1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-[15%] left-[15%] w-[150px] h-[150px] rounded-full bg-gradient-to-br from-[#5F9FFF] from-0% via-[#7E69FF] via-42% to-[#FE3D41] to-100% will-change-transform"
                    />

                    {/* Top Right Cyan/Green Orb */}
                    <motion.div
                        animate={{
                            x: [0, 50, 0],
                            y: [0, -40, 0],
                            scale: [1, 1, 1],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 1,
                        }}
                        className="absolute top-[10%] right-[0%] w-[300px] h-[300px] rounded-full bg-gradient-to-bl from-[#98FFCE] from-0% via-[#838FFF] via-70% to-[#60B2FF] to-100% will-change-transform"
                    />

                    {/* Bottom Left Blue Orb */}
                    <motion.div
                        animate={{
                            x: [0, -50, 0],
                            y: [0, -60, 0],
                            scale: [1, 1, 1],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 2,
                        }}
                        className="absolute bottom-[0%] left-[5%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-[#98FFCE] from-0% via-[#5F9FFF] via-25% via-[#8571FF] via-75% to-[#3F2FA5] to-100% will-change-transform"
                    />

                    {/* Bottom Right Purple/Pink Orb */}
                    <motion.div
                        animate={{
                            x: [0, 40, 0],
                            y: [0, 50, 0],
                            scale: [1, 1, 1],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 0.5,
                        }}
                        className="absolute bottom-[5%] right-[15%] w-[150px] h-[150px] rounded-full bg-gradient-to-br from-[#FF3BDE] from-0% via-[#7E69FF] via-41% via-[#828FF1] via-59% to-[#8DFFC9] to-100% will-change-transform"
                    />
                </div>

                {/* Card Wrapper */}
                <div className="relative z-10 w-full max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0, y: 40, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -40, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] p-6 sm:p-10 md:p-16 will-change-transform"
                        >
                            {/* Gradient Halo */}
                            {/* <div
                                className={`absolute -inset-[2px] rounded-[2.5rem] bg-linear-to-br ${services[activeService].accent} opacity-30 blur-xl`}
                            /> */}

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                                {/* Left Content */}
                                <div className="flex-1 space-y-8 text-center md:text-left">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                            {services[activeService].title}
                                        </h3>
                                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                            {services[activeService].description}
                                        </p>
                                    </div>

                                    <ul className="space-y-3">
                                        {services[activeService].features.map((feature, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center justify-center md:justify-start gap-3 text-gray-700 font-medium text-sm sm:text-base"
                                            >
                                                <span
                                                    className={`w-2 h-2 rounded-full ${services[activeService].dot}`}
                                                />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div>
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
                                <div className="flex-1 w-full flex justify-center">
                                    <motion.div
                                        animate={{ y: [0, -14, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[360px]"
                                    >
                                        <ActiveIllustration className="w-full h-auto drop-shadow-2xl" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination */}
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-2 px-3 py-2 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-lg">
                            {services.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === activeService
                                        ? "w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                                        : "w-5 bg-white/40"
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

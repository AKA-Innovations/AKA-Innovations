"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import serviceaiml from "../../assets/images/serviceaiml.jpg";
import serviceWebApp from "../../assets/images/servicewebapp.jpg";
import serviceMobileApp from "../../assets/images/servicemobileapp.jpg";
import serviceUiUx from "../../assets/images/serviceuiux.jpg";

// Import illustrations (assuming these work as they do in EngineeringServices)
// SVGs removed in favor of PNGs

// Data
const bubbles = Array.from({ length: 12 });

const gradients = [
    "from-cyan-300/60 via-blue-400/60 to-indigo-500/60",
    "from-pink-300/60 via-rose-400/60 to-purple-500/60",
    "from-emerald-300/60 via-teal-400/60 to-cyan-500/60",
    "from-indigo-300/60 via-sky-400/60 to-cyan-500/60",
];

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
        image: serviceaiml,
        color: "from-blue-500 to-cyan-400",
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
        image: serviceWebApp,
        color: "from-indigo-500 to-purple-400",
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
        image: serviceMobileApp,
        color: "from-pink-500 to-rose-400",
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
        image: serviceUiUx,
        color: "from-emerald-500 to-teal-400",
        bgAccent: "bg-emerald-500",
    },
];

export function FeaturedSolutions() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeService, setActiveService] = useState(0);

    // Track scroll progress of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to active index (0 to 3)
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // Divide progress into 4 segments
            const index = Math.min(
                Math.floor(latest * services.length),
                services.length - 1
            );
            setActiveService(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-[#e8eaed]"
            // Make the container tall enough to scroll through (100vh per service)
            style={{ height: `${services.length * 100}vh` }}
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-8">

                {/* Decorative Background Orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Bottom Left - Blue/Cyan */}
                    <motion.div
                        animate={{
                            x: [0, 50, 0],
                            y: [0, -50, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/40 to-cyan-400/40 rounded-full"
                    />
                    {/* Top Right - Purple/Pink */}
                    <motion.div
                        animate={{
                            x: [0, -40, 0],
                            y: [0, 40, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-[10%] -right-[5%] w-[450px] h-[450px] bg-gradient-to-bl from-purple-500/40 to-pink-400/40 rounded-full "
                    />
                    {/* Center Right - Indigo */}
                    <motion.div
                        animate={{
                            x: [0, -30, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-indigo-500/50 rounded-full "
                    /> <motion.div
                        animate={{
                            x: [0, -30, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[40%] -right-[10%] w-[350px] h-[350px] bg-indigo-500/20 rounded-full "
                    />
                </div>

                {/* 🫧 GRADIENT FLOATING BUBBLES */}

                {/* Content Container */}
                <div className="relative z-10 w-full max-w-6xl mx-auto h-[600px] md:h-[500px] perspective-1000">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            className="w-full h-full bg-white/20 backdrop-blur-2xl rounded-[3rem] border border-white/40 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16"
                        >

                            {/* Left: Content */}
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
                                        <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm md:text-base">
                                            <span className={`w-1.5 h-1.5 rounded-full ${services[activeService].bgAccent}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-2">
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center gap-2 text-blue-600 font-semibold group hover:gap-3 transition-all"
                                    >
                                        <span className="border-b border-blue-600/0 group-hover:border-blue-600 transition-colors">Learn more</span>
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Illustration */}
                            <div className="flex-1 flex items-center justify-center w-full">
                                <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                                    {/* Floating elements effect */}
                                    <motion.div
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-full h-full relative"
                                    >
                                        <Image
                                            src={services[activeService].image}
                                            alt={services[activeService].title}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            priority={true}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </motion.div>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>

                    {/* Custom Progress Bar / Pagination */}
                    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-2 p-1.5 bg-white/25 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
                            {services.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        // Scroll logic would need to be handled by parent or context since this is scroll-driven
                                    }}
                                    className={`
                                      relative h-1.5 rounded-full transition-all duration-500 ease-out
                                      ${i === activeService ? "w-12 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" : "w-6 bg-white/40 hover:bg-white/60"}
                                    `}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

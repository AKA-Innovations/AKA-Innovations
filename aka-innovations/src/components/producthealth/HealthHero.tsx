"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { motion, Variants } from "framer-motion";

export const HealthHero: FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
            },
        },
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, x: 60, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 18,
                delay: 0.4,
            },
        },
    };

    const floatVariants: Variants = {
        animate: {
            y: [0, -12, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="relative pt-32 pb-16 overflow-hidden">
            {/* Background Pattern - Breathing Motion */}
            <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 pointer-events-none"
            >
                <Image
                    src="/decorations/hero-background-pattern.svg"
                    alt=""
                    fill
                    className="object-cover opacity-60"
                />
            </motion.div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content - Glassmorphic Card */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="glassmorphic-card rounded-[36px] p-8 lg:p-12 max-w-[600px] bg-white/40 backdrop-blur-xl border border-white/50 shadow-sm"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-block bg-(--color-health-cyan)/10 text-(--color-health-navy) text-[11px] font-inter font-bold tracking-wider uppercase px-4 py-2 rounded-full mb-6"
                        >
                            PaaS Healthcare Platform
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-[52px] font-raleway font-bold leading-[1.15] mb-4 gradient-health-heading"
                        >
                            Health-Connect
                        </motion.h1>

                        <motion.h2
                            variants={itemVariants}
                            className="text-[18px] font-inter font-medium text-black mb-6"
                        >
                            A Continuous Care Healthcare Platform — Not Just Another Consultation App
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-[16px] font-inter text-(--color-health-slate) leading-relaxed mb-8"
                        >
                            Health-Connect is a platform-as-a-service (PaaS) that{" "}
                            <span className="text-(--color-health-cyan) font-medium">connects</span> patients
                            with the right doctor at the right time{" "}
                            <span className="text-(--color-health-cyan) font-medium">while building</span> a
                            lifelong medical journey instead of{" "}
                            <span className="text-(--color-health-cyan) font-medium">fragmented</span>, one-time
                            consultations.
                            <br />
                            <br />
                            <span className="text-black font-medium">
                                Designed with real doctors and real clinical workflows
                            </span>
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-(--color-health-navy) text-white px-8 py-3.5 rounded-full text-[14px] font-inter font-medium hover:opacity-90 transition-opacity"
                            >
                                Request Demo
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 border border-slate-700 text-slate-700 px-6 py-3.5 rounded-full text-[14px] font-inter font-medium hover:bg-slate-700 hover:text-white transition-all"
                            >
                                View Platform Capabilities
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Illustration */}
                    <div className="relative h-[600px] hidden lg:block">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                variants={imageVariants}
                                initial="hidden"
                                animate="visible"
                                className="relative w-full h-full"
                            >
                                {/* Phone Mockup Background - Slow Breathing */}
                                <motion.div
                                    animate={{ scale: [1, 1.02, 1] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-0 right-0 w-[560px] h-[630px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-[29px]"
                                />

                                {/* Hero Illustration */}
                                <motion.div
                                    variants={floatVariants}
                                    animate="animate"
                                    className="absolute top-12 right-12"
                                >
                                    <Image
                                        src="/illustrations/hero-person-ui.svg"
                                        alt="Healthcare Professional"
                                        width={400}
                                        height={400}
                                        className="object-contain"
                                    />
                                </motion.div>

                                {/* Consultation Matched Badge - Delayed Entrance + Float */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40, x: 20 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    transition={{ delay: 1, type: "spring", stiffness: 100 }}
                                    className="absolute bottom-24 right-8 bg-white/90 backdrop-blur-md rounded-xl border border-gray-100 shadow-xl p-4 flex items-center gap-3 z-20"
                                >
                                    <div className="w-5 h-5 rounded-full border-2 border-(--color-health-green) flex items-center justify-center">
                                        <div className="w-2 h-2 bg-(--color-health-green) rounded-full" />
                                    </div>
                                    <div>
                                        <div className="text-[12px] font-inter font-bold text-(--color-health-navy)">
                                            Consultation Matched
                                        </div>
                                        <div className="text-[11px] font-inter text-(--color-health-slate)">
                                            Dr. Sharma • Cardiology • 98% Match
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ArrowRight } from "lucide-react";
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
        hidden: {
            opacity: 0,
            x: -40,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 16,
            },
        },
    };

    const imageVariants: Variants = {
        hidden: {
            opacity: 0,
            x: 60,
            scale: 0.95,
        },
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

    return (
        <section className="relative overflow-hidden bg-white dark:bg-[#07111F] pt-32 pb-20 transition-colors duration-500">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10"
                />

                <motion.div
                    animate={{
                        scale: [1.05, 1, 1.05],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10"
                />

                <Image
                    src="/decorations/hero-background-pattern.svg"
                    alt=""
                    fill
                    className="object-cover opacity-5 dark:opacity-[0.03]"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 lg:px-10">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="
                            relative
                            overflow-hidden
                            rounded-[36px]
                            border
                            border-slate-200/70
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.03]
                            backdrop-blur-2xl
                            p-8
                            lg:p-12
                            shadow-[0_10px_50px_rgba(0,0,0,0.06)]
                            dark:shadow-[0_10px_50px_rgba(0,0,0,0.45)]
                        "
                    >
                        {/* Glow Border */}
                        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />

                        {/* CONTENT WRAPPER */}
                        <div className="relative z-10">
                            {/* Badge */}
                            <motion.div
                                variants={itemVariants}
                                className="
                                    inline-flex
                                    items-center
                                    rounded-full
                                    border
                                    border-cyan-200
                                    dark:border-cyan-400/20
                                    bg-cyan-50
                                    dark:bg-cyan-500/10
                                    px-4
                                    py-2
                                    text-[11px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]
                                    text-cyan-700
                                    dark:text-cyan-300
                                "
                            >
                                PaaS Healthcare Platform
                            </motion.div>

                            {/* Heading */}
                            <motion.h1
                                variants={itemVariants}
                                className="
                                    mt-6
                                    text-5xl
                                    lg:text-6xl
                                    font-bold
                                    leading-[1.05]
                                    tracking-tight
                                    text-slate-900
                                    dark:text-white
                                "
                            >
                                Health
                                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                    -Connect
                                </span>
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.h2
                                variants={itemVariants}
                                className="
                                    mt-5
                                    max-w-[560px]
                                    text-lg
                                    font-medium
                                    leading-relaxed
                                    text-slate-700
                                    dark:text-slate-300
                                "
                            >
                                A Continuous Care Healthcare Platform — Not Just Another Consultation App
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                variants={itemVariants}
                                className="
                                    mt-6
                                    text-base
                                    leading-8
                                    text-slate-600
                                    dark:text-slate-400
                                "
                            >
                                Health-Connect is a platform-as-a-service
                                (PaaS) that{" "}
                                <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                                    connects
                                </span>{" "}
                                patients with the right doctor at the right time
                                while{" "}
                                <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                                    building
                                </span>{" "}
                                a lifelong medical journey instead of{" "}
                                <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                                    fragmented
                                </span>
                                , one-time consultations.
                                <br />
                                <br />
                                <span className="font-medium text-slate-900 dark:text-white">
                                    Designed with real doctors and real clinical
                                    workflows.
                                </span>
                            </motion.p>

                            {/* Buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-10 flex flex-wrap gap-4"
                            >
                                <Link
                                    href="/contact?subject=Health+Connect"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-slate-900
                                        dark:bg-cyan-500
                                        px-8
                                        py-4
                                        text-sm
                                        font-medium
                                        text-white
                                        transition-all
                                        duration-300
                                        hover:scale-[1.02]
                                        hover:shadow-xl
                                        dark:hover:bg-cyan-400
                                    "
                                >
                                    Request Demo
                                </Link>

                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="
                                        group
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-slate-300
                                        dark:border-slate-700
                                        bg-white/60
                                        dark:bg-white/[0.04]
                                        px-7
                                        py-4
                                        text-sm
                                        font-medium
                                        text-slate-700
                                        dark:text-slate-200
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:bg-slate-900
                                        hover:text-white
                                        dark:hover:bg-white
                                        dark:hover:text-slate-900
                                    "
                                >
                                    View Platform Capabilities

                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative hidden h-[650px] lg:block"
                    >
                        {/* Main Glass Card */}
                        <div
                            className="
                                absolute
                                right-0
                                top-0
                                h-[640px]
                                w-[560px]
                                overflow-hidden
                                rounded-[36px]
                                border
                                border-slate-200/60
                                dark:border-white/10
                                bg-gradient-to-br
                                from-cyan-50
                                via-white
                                to-blue-50
                                dark:from-[#0D1728]
                                dark:via-[#111C30]
                                dark:to-[#0F1B2F]
                                shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                                dark:shadow-[0_30px_80px_rgba(0,0,0,0.5)]
                            "
                        >
                            {/* Overlay Glow */}
                            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

                            {/* Floating Illustration */}
                            <motion.div
                                animate={{
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute right-10 top-12 z-10"
                            >
                                <Image
                                    src="/illustrations/hero-person-ui.svg"
                                    alt="Healthcare Professional"
                                    width={420}
                                    height={420}
                                    className="object-contain"
                                />
                            </motion.div>

                            {/* Floating Match Card */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 1,
                                    duration: 0.8,
                                }}
                                className="
                                    absolute
                                    bottom-24
                                    right-8
                                    z-20
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    border
                                    border-white/20
                                    bg-white/80
                                    dark:bg-slate-900/80
                                    px-5
                                    py-4
                                    backdrop-blur-xl
                                    shadow-2xl
                                "
                            >
                                <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-emerald-500">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-slate-900 dark:text-white">
                                        Consultation Matched
                                    </p>

                                    <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                                        Dr. Sharma • Cardiology • 98% Match
                                    </p>
                                </div>
                            </motion.div>

                            {/* AI Stats Card */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    left-6
                                    top-16
                                    z-20
                                    rounded-2xl
                                    border
                                    border-white/20
                                    bg-white/80
                                    dark:bg-slate-900/80
                                    px-5
                                    py-4
                                    backdrop-blur-xl
                                    shadow-xl
                                "
                            >
                                <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                    AI Matching
                                </p>

                                <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                                    98%
                                </h3>

                                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                    Clinical Accuracy
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
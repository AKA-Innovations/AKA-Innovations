"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const trustPoints = [
    "Product-first mindset",
    "Scalable architecture",
    "Security & compliance",
    "Real-world workflows",
];

export const TrustSection: FC = () => {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-20 dark:bg-[#050B16]">
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-12">
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-white/10
                        bg-white/[0.04]
                        backdrop-blur-2xl
                        px-8
                        py-10
                        lg:px-12
                        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                    "
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

                    <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                        {/* Left Content */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -30,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.8,
                                type: "spring",
                            }}
                            className="max-w-xl"
                        >
                            {/* Badge */}
                            <div
                                className="
                                    inline-flex
                                    items-center
                                    rounded-full
                                    border
                                    border-cyan-400/20
                                    bg-cyan-500/10
                                    px-4
                                    py-2
                                    text-[11px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.18em]
                                    text-cyan-300
                                "
                            >
                                Trusted Engineering
                            </div>

                            {/* Heading */}
                            <h3
                                className="
                                    mt-6
                                    text-[32px]
                                    sm:text-[38px]
                                    font-bold
                                    leading-[1.15]
                                    tracking-tight
                                    text-white
                                "
                            >
                                Built by{" "}
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    AKA Innovations
                                </span>
                            </h3>

                            {/* Quote */}
                            <p
                                className="
                                    mt-5
                                    text-[18px]
                                    italic
                                    leading-8
                                    text-slate-300
                                "
                            >
                                “We don't build apps. We build healthcare
                                systems.”
                            </p>
                        </motion.div>

                        {/* Right Content */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            {trustPoints.map((point, index) => (
                                <motion.div
                                    key={point}
                                    initial={{
                                        opacity: 0,
                                        x: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.1,
                                        type: "spring",
                                    }}
                                    whileHover={{
                                        y: -4,
                                    }}
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-4
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-white/[0.03]
                                        px-5
                                        py-4
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:border-cyan-400/20
                                        hover:bg-white/[0.05]
                                    "
                                >
                                    {/* Dot */}
                                    <div
                                        className="
                                            relative
                                            flex
                                            h-3
                                            w-3
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <div className="absolute h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />

                                        <div className="h-2 w-2 rounded-full bg-cyan-300 relative z-10" />
                                    </div>

                                    {/* Text */}
                                    <span
                                        className="
                                            text-[15px]
                                            font-medium
                                            text-slate-200
                                            transition-colors
                                            duration-300
                                            group-hover:text-white
                                        "
                                    >
                                        {point}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
"use client";

import Image from "next/image";
import { FC } from "react";
import { motion, Variants } from "framer-motion";

/* bubble count */
const bubbles = Array.from({ length: 12 });

const gradients = [
    "from-cyan-300/60 via-blue-400/60 to-indigo-500/60",
    "from-pink-300/60 via-rose-400/60 to-purple-500/60",
    "from-emerald-300/60 via-teal-400/60 to-cyan-500/60",
    "from-indigo-300/60 via-sky-400/60 to-cyan-500/60",
];

export const TargetAudienceSection: FC = () => {
    const containerFade: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
    };

    const cardLeft: Variants = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const cardRight: Variants = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const listItem: Variants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.35, ease: "easeOut" },
        },
    };

    return (
        <section className="relative py-24 lg:py-36 bg-(--color-health-bg) overflow-hidden">

            {/* 🫧 GRADIENT FLOATING BUBBLES */}
            <div className="absolute inset-0 pointer-events-none">
                {bubbles.map((_, i) => {
                    const size = 70 + Math.random() * 140;
                    const left = Math.random() * 100;
                    const top = Math.random() * 100;
                    const duration = 22 + Math.random() * 18;
                    const gradient = gradients[i % gradients.length];

                    return (
                        <motion.div
                            key={i}
                            initial={{ x: 0, y: 0, scale: 0.85 }}
                            animate={{
                                x: [0, 40, -30, 0],
                                y: [0, -50, 30, 0],
                                scale: [0.85, 1, 0.92, 0.85],
                            }}
                            transition={{
                                duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{
                                width: size,
                                height: size,
                                left: `${left}%`,
                                top: `${top}%`,
                            }}
                            className={`
                absolute rounded-full
                bg-gradient-to-br ${gradient}
                backdrop-blur-md
                shadow-[inset_-12px_-12px_20px_rgba(255,255,255,0.45),inset_12px_12px_30px_rgba(0,0,0,0.08)]
              `}
                        >
                            {/* ✨ highlight reflection */}
                            <div className="absolute top-[18%] left-[22%] w-1/4 h-1/4 rounded-full bg-white/40 blur-sm" />
                        </motion.div>
                    );
                })}
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-[30px] sm:text-[34px] font-inter font-extrabold text-(--color-health-navy) text-center mb-14"
                >
                    Who Health-Connect Is Built For
                </motion.h2>

                {/* Cards */}
                <motion.div
                    variants={containerFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >

                    {/* Patients */}
                    <motion.div
                        variants={cardLeft}
                        className="glassmorphic-card rounded-2xl p-8 md:p-10 backdrop-blur-lg"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Image src="/icons/user-blue.svg" alt="" width={18} height={20} />
                            <h3 className="text-[19px] font-inter font-extrabold text-(--color-health-sky)">
                                Patients
                            </h3>
                        </div>

                        <motion.div variants={containerFade} className="space-y-3">
                            {[
                                "Chronic care patients (diabetes, BP, thyroid)",
                                "Elderly users & families",
                                "Regional language users",
                                "Anyone seeking long-term care, not quick fixes",
                            ].map((text, i) => (
                                <motion.div
                                    key={i}
                                    variants={listItem}
                                    className="flex items-start gap-2"
                                >
                                    <Image
                                        src="/icons/checkmark-green.svg"
                                        alt=""
                                        width={11}
                                        height={9}
                                        className="mt-1.5"
                                    />
                                    <p className="text-[16px] font-inter text-(--color-health-slate)">
                                        {text}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Doctors */}
                    <motion.div
                        variants={cardRight}
                        className="glassmorphic-card rounded-2xl p-8 md:p-10 backdrop-blur-lg"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Image src="/icons/user-purple.svg" alt="" width={20} height={18} />
                            <h3 className="text-[19px] font-inter font-extrabold text-(--color-health-indigo)">
                                Doctors
                            </h3>
                        </div>

                        <motion.div variants={containerFade} className="space-y-3">
                            {[
                                "Independent practitioners",
                                "Specialists seeking consistent patient relationships",
                                "Doctors wanting structured digital workflows",
                            ].map((text, i) => (
                                <motion.div
                                    key={i}
                                    variants={listItem}
                                    className="flex items-start gap-2"
                                >
                                    <Image
                                        src="/icons/checkmark-green.svg"
                                        alt=""
                                        width={11}
                                        height={9}
                                        className="mt-1.5"
                                    />
                                    <p className="text-[16px] font-inter text-(--color-health-slate)">
                                        {text}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

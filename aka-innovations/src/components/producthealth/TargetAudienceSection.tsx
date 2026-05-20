"use client";

import Image from "next/image";
import { FC, useMemo } from "react";
import { motion, Variants } from "framer-motion";

/* Floating Bubble Count */
const bubbles = Array.from({ length: 12 });

const gradients = [
    "from-cyan-300/30 via-blue-400/30 to-indigo-500/30",
    "from-pink-300/30 via-rose-400/30 to-purple-500/30",
    "from-emerald-300/30 via-teal-400/30 to-cyan-500/30",
    "from-indigo-300/30 via-sky-400/30 to-cyan-500/30",
];

export const TargetAudienceSection: FC = () => {
    const containerFade: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardLeft: Variants = {
        hidden: {
            opacity: 0,
            x: -60,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    const cardRight: Variants = {
        hidden: {
            opacity: 0,
            x: 60,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    const listItem: Variants = {
        hidden: {
            opacity: 0,
            y: 12,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.35,
                ease: "easeOut",
            },
        },
    };

    const patientItems = [
        "Chronic care patients (diabetes, BP, thyroid)",
        "Elderly users & families",
        "Regional language users",
        "Anyone seeking long-term care, not quick fixes",
    ];

    const doctorItems = [
        "Independent practitioners",
        "Specialists seeking consistent patient relationships",
        "Doctors wanting structured digital workflows",
    ];

    return (
        <section className="relative overflow-hidden bg-white dark:bg-[#07111F] py-24 lg:py-36 transition-colors duration-500">
            {/* Floating Gradient Bubbles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {useMemo(() => {
                    const bubbleData = bubbles.map((_, i) => ({
                        size: 70 + ((i * 31) % 140),
                        left: (i * 17) % 100,
                        top: (i * 13) % 100,
                        duration: 22 + ((i * 7) % 18),
                        gradient: gradients[i % gradients.length],
                    }));

                    return bubbleData.map((bubble, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: 0,
                                y: 0,
                                scale: 0.85,
                            }}
                            animate={{
                                x: [0, 40, -30, 0],
                                y: [0, -50, 30, 0],
                                scale: [0.85, 1, 0.92, 0.85],
                            }}
                            transition={{
                                duration: bubble.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{
                                width: bubble.size,
                                height: bubble.size,
                                left: `${bubble.left}%`,
                                top: `${bubble.top}%`,
                            }}
                            className={`
                                absolute
                                rounded-full
                                bg-gradient-to-br
                                ${bubble.gradient}
                                blur-sm
                            `}
                        >
                            <div className="absolute left-[20%] top-[18%] h-1/4 w-1/4 rounded-full bg-white/30 blur-md" />
                        </motion.div>
                    ));
                }, [])}
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 24,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        margin: "-80px",
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="mx-auto mb-16 max-w-4xl text-center"
                >
                    {/* Badge */}
                    <div
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
                        Target Audience
                    </div>

                    {/* Heading */}
                    <h2
                        className="
                            mt-6
                            text-[34px]
                            sm:text-[42px]
                            lg:text-[50px]
                            font-bold
                            leading-[1.15]
                            tracking-tight
                            text-slate-900
                            dark:text-white
                        "
                    >
                        Who{" "}
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                            Health-Connect
                        </span>{" "}
                        Is Built For
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-[18px]
                            leading-8
                            text-slate-600
                            dark:text-slate-400
                        "
                    >
                        Designed for patients seeking continuity of care and
                        doctors building meaningful long-term relationships.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        margin: "-80px",
                    }}
                    className="
                        mx-auto
                        grid
                        max-w-6xl
                        gap-8
                        md:grid-cols-2
                    "
                >
                    {/* Patients Card */}
                    <motion.div
                        variants={cardLeft}
                        whileHover={{
                            y: -6,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-slate-200/70
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.04]
                            p-8
                            md:p-10
                            backdrop-blur-2xl
                            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                            dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                        "
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />

                        {/* Header */}
                        <div className="relative z-10 flex items-center gap-4">
                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-cyan-100
                                    dark:bg-cyan-500/10
                                "
                            >
                                <Image
                                    src="/icons/user-blue.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                            </div>

                            <div>
                                <h3 className="text-[24px] font-bold text-slate-900 dark:text-white">
                                    Patients
                                </h3>

                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Personalized continuous healthcare
                                </p>
                            </div>
                        </div>

                        {/* List */}
                        <motion.div
                            variants={containerFade}
                            className="relative z-10 mt-8 space-y-5"
                        >
                            {patientItems.map((text, i) => (
                                <motion.div
                                    key={i}
                                    variants={listItem}
                                    className="flex items-start gap-3"
                                >
                                    <div
                                        className="
                                            mt-1
                                            flex
                                            h-6
                                            w-6
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-emerald-100
                                            dark:bg-emerald-500/10
                                        "
                                    >
                                        <Image
                                            src="/icons/checkmark-green.svg"
                                            alt=""
                                            width={11}
                                            height={9}
                                        />
                                    </div>

                                    <p
                                        className="
                                            text-[16px]
                                            leading-7
                                            text-slate-700
                                            dark:text-slate-300
                                        "
                                    >
                                        {text}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Doctors Card */}
                    <motion.div
                        variants={cardRight}
                        whileHover={{
                            y: -6,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-slate-200/70
                            dark:border-white/10
                            bg-white/70
                            dark:bg-white/[0.04]
                            p-8
                            md:p-10
                            backdrop-blur-2xl
                            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                            dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                        "
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5" />

                        {/* Header */}
                        <div className="relative z-10 flex items-center gap-4">
                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-purple-100
                                    dark:bg-purple-500/10
                                "
                            >
                                <Image
                                    src="/icons/user-purple.svg"
                                    alt=""
                                    width={20}
                                    height={18}
                                />
                            </div>

                            <div>
                                <h3 className="text-[24px] font-bold text-slate-900 dark:text-white">
                                    Doctors
                                </h3>

                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                    Modern digital-first practice workflows
                                </p>
                            </div>
                        </div>

                        {/* List */}
                        <motion.div
                            variants={containerFade}
                            className="relative z-10 mt-8 space-y-5"
                        >
                            {doctorItems.map((text, i) => (
                                <motion.div
                                    key={i}
                                    variants={listItem}
                                    className="flex items-start gap-3"
                                >
                                    <div
                                        className="
                                            mt-1
                                            flex
                                            h-6
                                            w-6
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-emerald-100
                                            dark:bg-emerald-500/10
                                        "
                                    >
                                        <Image
                                            src="/icons/checkmark-green.svg"
                                            alt=""
                                            width={11}
                                            height={9}
                                        />
                                    </div>

                                    <p
                                        className="
                                            text-[16px]
                                            leading-7
                                            text-slate-700
                                            dark:text-slate-300
                                        "
                                    >
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
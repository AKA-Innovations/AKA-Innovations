"use client";

import Image from "next/image";
import { FC } from "react";
import { motion, Variants } from "framer-motion";

export const PlatformCapabilitiesSection: FC = () => {
    const containerStagger: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const itemFadeUp: Variants = {
        hidden: {
            opacity: 0,
            y: 24,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.45,
                ease: "easeOut",
            },
        },
    };

    const cards = [
        {
            icon: "/icons/calendar-green.svg",
            title: "Appointments (Online & Offline)",
        },
        {
            icon: "/icons/lab-purple.svg",
            title: "Your personal health assistant",
        },
        {
            icon: "/icons/file-blue.svg",
            title: "Consultations & Prescriptions",
        },
        {
            icon: "/icons/database-orange.svg",
            title: "Unified Patient Records",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white dark:bg-[#07111F] py-24 lg:py-32 transition-colors duration-500">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />

                <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10" />
            </div>

            <div className="container relative z-10 mx-auto px-6 lg:px-12">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    className="text-center"
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
                        Platform Capabilities
                    </div>

                    <h2
                        className="
                            mt-6
                            text-[30px]
                            sm:text-[36px]
                            lg:text-[42px]
                            font-bold
                            leading-[1.2]
                            tracking-tight
                            text-slate-900
                            dark:text-white
                        "
                    >
                        Health-Connect is{" "}
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                            not
                        </span>{" "}
                        a hospital management system.
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-3xl
                            text-[17px]
                            sm:text-[18px]
                            leading-8
                            text-slate-600
                            dark:text-slate-400
                        "
                    >
                        It is a care continuity and practice management platform
                        built specifically for individual doctors, clinics, and
                        patients.
                    </p>
                </motion.div>

                {/* Illustration */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.92,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="relative mt-14 flex justify-center"
                >
                    {/* Glow Behind */}
                    <div className="absolute top-1/2 h-[240px] w-[240px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />

                    <Image
                        src="/illustrations/people-avatars.svg"
                        alt="Healthcare professionals"
                        width={340}
                        height={320}
                        className="relative z-10 opacity-95"
                    />
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="
                        mx-auto
                        mt-16
                        grid
                        max-w-6xl
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemFadeUp}
                            whileHover={{
                                y: -6,
                            }}
                            transition={{
                                duration: 0.25,
                                ease: "easeOut",
                            }}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-slate-200/70
                                dark:border-white/10
                                bg-white/70
                                dark:bg-white/[0.03]
                                p-6
                                backdrop-blur-xl
                                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                                dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                                transition-all
                                duration-300
                                hover:border-cyan-300/60
                                dark:hover:border-cyan-400/20
                            "
                        >
                            {/* Hover Glow */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-br
                                    from-cyan-500/5
                                    to-blue-500/5
                                    opacity-0
                                    transition-opacity
                                    duration-300
                                    group-hover:opacity-100
                                "
                            />

                            {/* Icon */}
                            <div
                                className="
                                    relative
                                    z-10
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-slate-100
                                    dark:bg-white/5
                                "
                            >
                                <Image
                                    src={card.icon}
                                    alt=""
                                    width={18}
                                    height={18}
                                />
                            </div>

                            {/* Text */}
                            <p
                                className="
                                    relative
                                    z-10
                                    mt-5
                                    text-[16px]
                                    font-medium
                                    leading-7
                                    text-slate-800
                                    dark:text-slate-200
                                "
                            >
                                {card.title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
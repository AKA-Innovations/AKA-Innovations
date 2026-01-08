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
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.45,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-[28px] sm:text-[30px] font-inter font-extrabold text-(--color-health-navy) mb-4">
                        Health-Connect is not a hospital management system.
                    </h2>

                    <p className="text-[17px] sm:text-[18px] pb-8 font-inter text-(--color-health-slate) leading-relaxed max-w-3xl mx-auto mb-10">
                        It is a care continuity and practice management platform built specifically for
                        individual doctors, clinics, and patients.
                    </p>
                </motion.div>

                {/* Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12 md:mb-16"
                >
                    <Image
                        src="/illustrations/people-avatars.svg"
                        alt="Healthcare professionals"
                        width={340}
                        height={320}
                        className="opacity-90"
                    />
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto"
                >
                    <motion.div
                        variants={itemFadeUp}
                        whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="bg-(--color-health-off-white) border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm"
                    >
                        <Image src="/icons/calendar-green.svg" alt="" width={18} height={18} />
                        <p className="text-[16px] font-inter font-medium text-(--color-health-slate-dark)">
                            Appointments (Online & Offline)
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemFadeUp}
                        whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="bg-(--color-health-off-white) border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm"
                    >
                        <Image src="/icons/lab-purple.svg" alt="" width={18} height={16} />
                        <p className="text-[16px] font-inter font-medium text-(--color-health-slate-dark)">
                            Your personal health assistant
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemFadeUp}
                        whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="bg-(--color-health-off-white) border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm"
                    >
                        <Image src="/icons/file-blue.svg" alt="" width={15} height={18} />
                        <p className="text-[16px] font-inter font-medium text-(--color-health-slate-dark)">
                            Consultations & Prescriptions
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemFadeUp}
                        whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="bg-(--color-health-off-white) border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm"
                    >
                        <Image src="/icons/database-orange.svg" alt="" width={16} height={18} />
                        <p className="text-[16px] font-inter font-medium text-(--color-health-slate-dark)">
                            Unified Patient Records
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

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
                delayChildren: 0.15,
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

                    <p className="text-[17px] sm:text-[18px] font-inter text-(--color-health-slate) leading-relaxed max-w-3xl mx-auto mb-16">
                        It is a care continuity and practice management platform built specifically for
                        individual doctors, clinics, and patients.
                    </p>
                </motion.div>

                {/* Grid Wrapper */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Top Row */}
                    <motion.div
                        variants={containerStagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid md:grid-cols-2 gap-8 mb-10"
                    >
                        <motion.div
                            variants={itemFadeUp}
                            whileHover={{
                                y: -4,
                                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                            }}
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
                            whileHover={{
                                y: -4,
                                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                            }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="md:col-start-2 bg-(--color-health-off-white) border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm"
                        >
                            <Image src="/icons/lab-purple.svg" alt="" width={18} height={16} />
                            <p className="text-[16px] font-inter font-medium text-(--color-health-slate-dark)">
                                Lab Test Booking & Reports
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Bottom Row */}
                    <motion.div
                        variants={containerStagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <motion.div
                            variants={itemFadeUp}
                            whileHover={{
                                y: -4,
                                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                            }}
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
                            whileHover={{
                                y: -4,
                                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                            }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="md:col-start-2 bg-(--color-health-off-white) border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm"
                        >
                            <Image src="/icons/database-orange.svg" alt="" width={16} height={18} />
                            <p className="text-[16px] font-inter font-medium text-(--color-health-slate-dark)">
                                Unified Patient Records
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Central Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                        viewport={{ once: true }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block pointer-events-none"
                    >
                        <Image
                            src="/illustrations/people-avatars.svg"
                            alt="Healthcare professionals"
                            width={340}
                            height={320}
                            className="opacity-90"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

"use client";

import Image from "next/image";
import { FC } from "react";
import { motion, Variants } from "framer-motion";

export const ProblemsSection: FC = () => {
    const blobVariants: Variants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 15
            }
        }
    };

    return (
        <section className="relative py-20 mt-20 overflow-hidden">
            {/* Gradient Blobs */}
            <motion.div
                variants={blobVariants}
                animate="animate"
                className="absolute top-0 left-0 w-64 h-64 opacity-60"
            >
                <Image src="/decorations/gradient-blob-cyan.svg" alt="" fill />
            </motion.div>
            <motion.div
                variants={blobVariants}
                animate="animate"
                transition={{ delay: 2 }}
                className="absolute top-32 right-0 w-80 h-80 opacity-60"
            >
                <Image src="/decorations/gradient-blob-blue.svg" alt="" fill />
            </motion.div>
            <motion.div
                variants={blobVariants}
                animate="animate"
                transition={{ delay: 4 }}
                className="absolute bottom-0 left-1/4 w-60 h-60 opacity-60"
            >
                <Image src="/decorations/gradient-blob-purple.svg" alt="" fill />
            </motion.div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="glassmorphic-card rounded-[40px] p-4 lg:p-16">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-[30px] font-inter font-extrabold text-(--color-health-navy) leading-tight mb-3"
                        >
                            Why Today's Healthcare Feels Broken?
                            <br />
                            <span className="text-[24px] font-normal">
                                Real problems faced by patients and doctors every day.
                            </span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-1 bg-(--color-health-cyan) rounded-full mx-auto mt-4"
                        />
                    </div>

                    {/* Problem Cards Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 mb-8"
                    >
                        {/* Problem Card 1 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            className="glassmorphic-card-solid rounded-[40px] p-4 lg:p-8 relative"
                        >
                            <div className="mb-4">
                                <Image
                                    src="/icons/warning-triangle-red.svg"
                                    alt=""
                                    width={20}
                                    height={18}
                                    className="mb-4"
                                />
                                <h3 className="text-[20px] font-inter font-medium text-(--color-health-slate-dark) mb-2">
                                    I don't know which doctor to see
                                </h3>
                                <p className="text-[12px] font-inter font-light text-black leading-relaxed">
                                    Symptoms don't map clearly to specializations, leading to wrong consultations.
                                </p>
                            </div>
                        </motion.div>

                        {/* Problem Card 2 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            className="glassmorphic-card-solid rounded-[40px] p-4 lg:p-8 relative"
                        >
                            <div className="mb-4">
                                <Image
                                    src="/icons/box-orange.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="mb-4"
                                />
                                <h3 className="text-[20px] font-inter font-medium text-(--color-health-slate-dark) mb-2">
                                    I have to explain everything again
                                </h3>
                                <p className="text-[12px] font-inter font-light text-black leading-relaxed">
                                    Medical history is scattered across reports, apps, and memory
                                </p>
                            </div>
                        </motion.div>

                        {/* Problem Card 3 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            className="glassmorphic-card-solid rounded-[40px] p-4 lg:p-8 relative"
                        >
                            <div className="mb-4">
                                <Image
                                    src="/icons/language-purple.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="mb-4"
                                />
                                <h3 className="text-[20px] font-inter font-medium text-(--color-health-slate-dark) mb-2">
                                    I can't explain my problem properly
                                </h3>
                                <p className="text-[12px] font-inter font-light text-black leading-relaxed">
                                    Language barriers reduce trust and clarity in care
                                </p>
                            </div>
                        </motion.div>

                        {/* Problem Card 4 */}
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            className="glassmorphic-card-solid rounded-[40px] p-4 lg:p-8 relative"
                        >
                            <div className="mb-4">
                                <Image
                                    src="/icons/clipboard-blue.svg"
                                    alt=""
                                    width={16}
                                    height={20}
                                    className="mb-4"
                                />
                                <h3 className="text-[20px] font-inter font-medium text-(--color-health-slate-dark) mb-2">
                                    My doctor doesn't know my history
                                </h3>
                                <p className="text-[12px] font-inter font-light text-black leading-relaxed">
                                    Lack of patient context impacts diagnosis and continuity
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Quote */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        viewport={{ once: true }}
                        className="text-center text-[23px] font-inter text-(--color-health-slate) italic"
                    >
                        "Healthcare shouldn't reset every time you meet a new doctor."
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

"use client";

import { FC } from "react";
import { motion } from "framer-motion";

export const TrustSection: FC = () => {
    return (
        <section className="bg-(--color-health-navy) py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        <h3 className="text-[18px] font-inter font-extrabold text-white mb-2">
                            Built by AKA Innovations
                        </h3>
                        <p className="text-[16px] font-inter text-(--color-health-gray) italic">
                            "We don't build apps. We build healthcare systems."
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap items-center gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-(--color-health-cyan)" />
                            <span className="text-[14px] font-inter font-medium text-(--color-health-gray)">
                                Product-first mindset
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-(--color-health-cyan)" />
                            <span className="text-[14px] font-inter font-medium text-(--color-health-gray)">
                                Scalable architecture
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-(--color-health-cyan)" />
                            <span className="text-[14px] font-inter font-medium text-(--color-health-gray)">
                                Security & compliance
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-(--color-health-cyan)" />
                            <span className="text-[14px] font-inter font-medium text-(--color-health-gray)">
                                Real-world workflows
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

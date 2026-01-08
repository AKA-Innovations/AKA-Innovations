"use client";

import { FC } from "react";
import { motion, Variants } from "framer-motion";

export const DifferenceSection: FC = () => {
    return (
        <section className="bg-(--color-health-navy) py-16 text-center">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[14px] font-inter font-bold tracking-wider uppercase text-white mb-3"
                >
                    Our Difference
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[52px] font-raleway font-bold mb-6 gradient-health-heading"
                >
                    Built for Long term Care, Not one time calls
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-4xl mx-auto"
                >
                    <p className="text-[20px] font-inter text-(--color-health-gray-light) inline">
                        Unlike traditional telemedicine apps that treat each consultation as an isolated
                        event, Health-Connect is designed to{" "}
                    </p>
                    <span className="text-[18px] font-inter font-extrabold text-white">
                        continuously evolve with the patient
                    </span>
                    <p className="text-[20px] font-inter text-(--color-health-gray-light) inline">
                        , enabling better diagnosis, personalized treatment, and stronger doctor–patient trust
                        over time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

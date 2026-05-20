"use client";

import { FC } from "react";
import { motion } from "framer-motion";

export const DifferenceSection: FC = () => {
  return (
    <section
      className="
        bg-(--color-health-navy)
        dark:bg-[#07111F]
        py-16
        text-center
        transition-colors duration-300
      "
    >
      <div className="container mx-auto px-4 lg:px-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-[14px]
            font-inter
            font-bold
            tracking-wider
            uppercase
            text-white/90 dark:text-white/80
            mb-3
          "
        >
          Our Difference
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            text-[36px] sm:text-[44px] lg:text-[52px]
            leading-tight
            font-raleway
            font-bold
            mb-6
            gradient-health-heading
          "
        >
          Built for Long term Care, Not one time calls
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <p
            className="
              text-[18px] sm:text-[20px]
              leading-relaxed
              font-inter
              text-(--color-health-gray-light)
              dark:text-slate-400
              inline
            "
          >
            Unlike traditional telemedicine apps that treat each consultation
            as an isolated event, Health-Connect is designed to{" "}
          </p>

          <span
            className="
              text-[18px]
              font-inter
              font-extrabold
              text-white dark:text-white
            "
          >
            continuously evolve with the patient
          </span>

          <p
            className="
              text-[18px] sm:text-[20px]
              leading-relaxed
              font-inter
              text-(--color-health-gray-light)
              dark:text-slate-400
              inline
            "
          >
            , enabling better diagnosis, personalized treatment, and stronger
            doctor–patient trust over time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
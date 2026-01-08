"use client";

import { FC, SVGProps } from "react";
import { motion, Variants } from "framer-motion";

interface DetailSectionProps {
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  features: string[];
  illustration: FC<SVGProps<SVGElement>>;
  layout: "left" | "right";
  blurColor: string;
  blurPosition: string;
  hasGlow?: boolean;
}

export function DetailSection({
  category,
  categoryColor,
  title,
  description,
  features,
  illustration: Illustration,
  layout,
  blurColor,
  blurPosition,
  hasGlow = false,
}: DetailSectionProps) {

  const fromLeft = layout === "left";

  /* ---------------- TEXT ---------------- */

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      x: fromLeft ? -220 : 220,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.14,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // cinematic ease
      },
    }),
  };

  /* ---------------- BULLETS ---------------- */

  const bulletVariants: Variants = {
    hidden: {
      opacity: 0,
      x: fromLeft ? -80 : 80,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.12,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  /* ---------------- IMAGE ---------------- */

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: fromLeft ? 260 : -260,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 16,
        mass: 0.9,
      },
    },
  };

  return (
    <section
      className="
        relative w-full overflow-visible
        px-4 sm:px-8 md:px-16 lg:px-20
        py-14 sm:py-20 md:py-28
      "
    >
      {/* Background Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`
          absolute ${blurPosition}
          w-[70vw] max-w-[480px]
          sm:w-[60vw] sm:max-w-[600px]
          aspect-square rounded-full
          ${blurColor}
          blur-[90px] sm:blur-[120px]
          pointer-events-none
        `}
      />

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className={`
          relative z-10
          grid grid-cols-1 lg:grid-cols-2
          gap-10 sm:gap-14 lg:gap-20
          items-center
          ${layout === "right" ? "lg:grid-flow-dense" : ""}
        `}
      >
        {/* TEXT */}
        <div
          className={`
            ${layout === "right" ? "lg:col-start-2" : ""}
            max-w-xl mx-auto lg:mx-0
          `}
        >
          <motion.p
            custom={0}
            variants={textVariants}
            className={`${categoryColor} font-jetbrains-mono text-xs sm:text-sm uppercase tracking-wider mb-3`}
          >
            {category}
          </motion.p>

          <motion.h2
            custom={1}
            variants={textVariants}
            className="
              text-blue-500 font-extrabold font-inter
              text-2xl sm:text-3xl md:text-4xl
              leading-snug mb-4
            "
          >
            {title}
          </motion.h2>

          <motion.p
            custom={2}
            variants={textVariants}
            className="
              text-black/80 font-inter
              text-sm sm:text-base md:text-lg
              leading-relaxed mb-6
            "
          >
            {description}
          </motion.p>

          <ul className="space-y-3 sm:space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={bulletVariants}
                className="flex items-start gap-3"
              >
                <span className={`${categoryColor} mt-1 text-sm`}>✓</span>
                <span className="text-black/80 font-inter text-sm sm:text-base">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ILLUSTRATION */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={`relative ${layout === "right" ? "lg:col-start-1 lg:row-start-1" : ""
            }`}
        >
          {/* Glow */}
          {hasGlow && (
            <motion.div
              animate={{ opacity: [0.35, 0.75, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[32px] sm:rounded-[40px] blur-[14px] gradient-glow-cyan-blue"
            />
          )}

          {/* Card */}
          <div
            className="
              relative bg-white
              rounded-[28px] sm:rounded-[40px]
              p-6 sm:p-10 md:p-12
              flex items-center justify-center
              min-h-[220px] sm:min-h-[300px] md:min-h-[380px]
              shadow-xl
            "
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="w-full flex justify-center"
            >
              <Illustration className="w-full h-auto max-w-xs sm:max-w-sm" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

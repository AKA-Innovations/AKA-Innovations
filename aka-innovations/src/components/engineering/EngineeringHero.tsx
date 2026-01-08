"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function EngineeringHero() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-8 md:px-16 lg:px-20 lg:pt-56 pt-24 pb-20">

      {/* Floating Background Blur */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-15%] w-[60vw] max-w-[700px] aspect-square rounded-full bg-cyan-400/40 blur-[120px] pointer-events-none"
      />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="relative z-10 max-w-4xl mx-auto md:mx-0"
      >

        {/* Badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400/70" />
          <span className="text-cyan-400 text-xs sm:text-sm font-inter">
            Engineering Intelligent Systems
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-extrabold font-inter tracking-tight leading-[1.05] mb-6 text-[clamp(2.5rem,6vw,4.5rem)]"
        >
          <span className="gradient-text-cyan-purple block">
            Architecting the
          </span>

          {/* SVG text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-[28rem] sm:max-w-[32rem] mt-2"
          >
            <Image
              src="/digital-future-text.svg"
              alt="Digital Future"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-blue-500 font-inter leading-relaxed max-w-2xl text-base sm:text-lg md:text-xl"
        >
          We architect and operationalize advanced AI and machine learning systems
          with robust data pipelines, optimized model architectures, and
          production-ready deployments.
        </motion.p>
      </motion.div>
    </section>
  );
}

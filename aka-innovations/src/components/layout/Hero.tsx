"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 overflow-hidden bg-[#f5f5f7] pt-24 md:pt-20">

      {/* Background Image with subtle motion */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none select-none will-change-transform"
      >
        <Image
          src="/heroBack.svg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Soft Gradient Glow - Optimized blur */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[70vw] max-w-[700px] h-[70vw] max-h-[700px] rounded-full bg-white/70 blur-[80px]" />

      {/* Glass Card - Optimized backdrop blur */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="relative z-10 w-full max-w-6xl flex flex-col items-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.98 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="p-6 sm:p-10 md:px-16 w-full rounded-[2rem] md:rounded-[3rem] bg-white/15 backdrop-blur-lg border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.12)] text-center will-change-transform"
        >
          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#1a1a1a] mb-6 leading-tight"
          >
            Building Intelligent Products that
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#6e7bf2] via-[#a388ee] to-[#f28686] bg-clip-text text-transparent block md:inline mt-2 md:mt-0">
              Scale Businesses Today
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Unlock AI-powered software solutions designed to automate workflows,
            enhance decision-making, and accelerate digital growth. We help
            startups and enterprises transform ideas into scalable, secure, and
            high-performing digital products using AI, cloud, and modern
            engineering.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-10 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="
              w-full sm:w-auto text-center
              px-8 py-3.5 rounded-full
              bg-white text-[#1a1a1a] font-semibold
              border border-white/60
              shadow-md hover:shadow-lg
              transition-all duration-300
              hover:-translate-y-[1px]
            "
          >
            Book a Demo
          </Link>

          <Link
            href="/products"
            className="
              w-full sm:w-auto flex justify-center items-center gap-2
              px-8 py-3.5 rounded-full
              bg-white/80 text-[#1a1a1a] font-semibold
              hover:bg-white
              transition-all duration-300
              hover:-translate-y-[1px]
            "
          >
            Explore Our Products
            <Play className="w-4 h-4 fill-current" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

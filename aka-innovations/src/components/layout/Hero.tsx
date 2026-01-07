"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroBack from "@/assets/heroBack.svg";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center px-4 md:px-20 overflow-hidden bg-[#f5f5f7] pt-24 md:pt-20 justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <Image
          src={heroBack}
          alt="Background"
          fill
          className="object-cover w-full h-full "
          priority
        />
      </div>

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full md:w-[90%] flex flex-col items-center"
      >
        <div className="p-6 md:p-8 md:px-16 w-full rounded-[2rem] md:rounded-[3rem] bg-white/10 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-6 leading-tight">
            Building Intelligent Products that
            <br className="hidden md:block" />{" "}
            <span className="bg-gradient-to-r from-[#6e7bf2] via-[#a388ee] to-[#f28686] bg-clip-text text-transparent block md:inline mt-2 md:mt-0">
              Scale Businesses Today
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Unlock AI-powered software solutions designed to automate workflows,
            enhance decision-making, and accelerate digital growth. We help
            startups and enterprises transform ideas into scalable, secure, and
            high-performing digital products using AI, cloud, and modern
            engineering.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-white rounded-full text-[#1a1a1a] font-semibold border border-white/50 shadow-sm hover:shadow-md transition-all duration-300"
          >
            Book a Demo
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-3.5 bg-white/80 rounded-full text-[#1a1a1a] font-semibold hover:bg-white transition-all duration-300"
          >
            Explore Our Products
            <Play className="w-4 h-4 fill-current" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

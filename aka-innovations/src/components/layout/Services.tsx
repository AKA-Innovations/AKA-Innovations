"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu } from "lucide-react";

const industries = [
  {
    id: 1,
    name: "Logistics & Supply Chain",
    icon: BrainCircuit,
  },
  {
    id: 2,
    name: "Education & EdTech",
    icon: BrainCircuit,
  },
  {
    id: 3,
    name: "Retail & E-commerce",
    icon: BrainCircuit,
  },
  {
    id: 4,
    name: "Healthcare & HealthTech",
    icon: BrainCircuit,
  },
  {
    id: 5,
    name: "SaaS & Startups",
    icon: BrainCircuit,
  },
];

export function Services() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#e8eaed] flex items-center justify-center py-20 px-4">
      {/* Animated Background Orbs - Same as Contact */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Purple Orb */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] left-[20%] w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[#5F9FFF] from-0% via-[#7E69FF] via-42% to-[#FE3D41] to-100%"
        />

        {/* Top Right Cyan/Green Orb */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[45%] right-[20%] w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#5F9FFF] from-0% via-[#7E69FF] via-42% to-[#FE3D41] to-100%"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
            scale: [1, 1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[30%] left-[50%] w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#5F9FFF] from-0% via-[#7E69FF] via-42% to-[#FE3D41] to-100%"
        />

        {/* Bottom Left Blue Orb */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
            scale: [1, 1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] left-[10%] w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#5F9FFF] from-0% via-[#7E69FF] via-42% to-[#FE3D41] to-100%"
        />

        {/* Bottom Right Purple/Pink Orb */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[15%] right-[5%] w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#5F9FFF] from-0% via-[#7E69FF] via-42% to-[#FE3D41] to-100%"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            INDUSTRIES WE SERVE
          </h2>
          <p className="text-gray-600 text-lg">
            Unleash innovation and accelerate growth with our dynamic product.
          </p>
        </div>

        {/* Glass Card */}
        <div className="relative bg-white/30 backdrop-blur-sm rounded-[2.5rem] shadow-2xl border-2 border-white/60 p-12 md:p-16">
          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {industries.slice(0, 4).map((industry) => (
              <motion.div
                key={industry.id}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-gray-900 font-semibold text-base">
                  {industry.name}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Center Item */}
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-gray-900 font-semibold text-base">
                {industries[4].name}
              </h3>
            </motion.div>
          </div>

          {/* View All Link */}
          <div className="flex justify-center mt-8">
            <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center space-x-2 transition-colors">
              <span>View All</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

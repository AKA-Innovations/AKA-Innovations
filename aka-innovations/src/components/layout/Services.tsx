"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const industries = [
  {
    id: 1,
    name: "Logistics & Supply Chain",
    image: "/industries/logistics.png",
  },
  {
    id: 2,
    name: "Education & EdTech",
    image: "/industries/education.png",
  },
  {
    id: 3,
    name: "Retail & E-commerce",
    image: "/industries/retail.png",
  },
  {
    id: 4,
    name: "Healthcare & HealthTech",
    image: "/industries/healthcare.png",
  },
  {
    id: 5,
    name: "SaaS & Startups",
    image: "/industries/saas.png",
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
          className="absolute top-[40%] left-[20%] w-[90px] h-[90px] rounded-full bg-linear-to-br from-[#5F9FFF] from-0% via-[#7E69FF] via-42% to-[#FE3D41] to-100%"
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
          className="absolute top-[45%] right-[20%] w-[120px] h-[120px] rounded-full bg-linear-to-br from-[#5F9FFF] from-0% via-[#7E69FF] via-42% to-[#FE3D41] to-100%"
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
          className="absolute bottom-[30%] left-[50%] w-[120px] h-[120px] rounded-full bg-linear-to-br from-[#5F9FFF] from-0% via-[#7E69FF] via-42% to-[#FE3D41] to-100%"
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
          className="absolute bottom-[10%] left-[10%] w-[120px] h-[120px] rounded-full bg-linear-to-br from-[#5F9FFF] from-0% via-[#7E69FF] via-42% to-[#FE3D41] to-100%"
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
          className="absolute bottom-[15%] right-[5%] w-[120px] h-[120px] rounded-full bg-linear-to-br from-[#5F9FFF] from-0% via-[#7E69FF] via-42% to-[#FE3D41] to-100%"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            INDUSTRIES WE SERVE
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Unleash innovation and accelerate growth with our dynamic product across diverse sectors.
          </p>
        </div>

        {/* Glass Card */}
        <div className="relative bg-white/30 backdrop-blur-sm rounded-[3rem] shadow-2xl border-2 border-white/60 p-8 md:p-16">
          {/* Industries Grid */}
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center space-y-5 w-48 lg:w-56"
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 drop-shadow-2xl">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
                <h3 className="text-gray-900 font-bold text-lg leading-tight">
                  {industry.name}
                </h3>
              </motion.div>
            ))}
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

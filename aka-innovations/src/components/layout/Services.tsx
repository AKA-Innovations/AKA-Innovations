"use client";

import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import LogisticsIcon from "@/assets/services/logistics.svg";
import EducationIcon from "@/assets/services/education.svg";
import RetailIcon from "@/assets/services/retail.svg";
import HealthcareIcon from "@/assets/services/healthcare.svg";
import SaasIcon from "@/assets/services/saas.svg";

const industries = [
  {
    id: 1,
    name: "Logistics & Supply Chain",
    icon: LogisticsIcon,
    description: "Optimizing routes and inventory with predictive analytics.",
  },
  {
    id: 2,
    name: "Education & EdTech",
    icon: EducationIcon,
    description: "Transforming learning experiences through digital platforms.",
  },
  {
    id: 3,
    name: "Retail & E-commerce",
    icon: RetailIcon,
    description: "Creating seamless omnichannel shopping experiences.",
  },
  {
    id: 4,
    name: "Healthcare & HealthTech",
    icon: HealthcareIcon,
    description: "Enhancing patient care with secure, compliant digital solutions.",
  },
  {
    id: 5,
    name: "SaaS & Startups",
    icon: SaasIcon,
    description: "Accelerating product growth with scalable cloud architecture.",
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function TiltCard({ industry }: { industry: (typeof industries)[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      variants={item}
      whileHover={{ y: -12, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative w-full max-w-[190px] cursor-pointer"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#7E69FF]/40 via-[#5F9FFF]/40 to-[#FE3D41]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative z-10 flex flex-col items-center text-center space-y-4 p-5 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-xl"
      >
        {/* Floating Icon Box */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-28 h-28 rounded-2xl bg-white/70 border border-white/80 shadow-lg flex items-center justify-center overflow-hidden"
        >
          {/* Icon */}
          <div className="absolute inset-0 transition-all duration-300 group-hover:opacity-10 group-hover:scale-90 group-hover:blur-sm flex items-center justify-center">
            <industry.icon className="w-20 h-20" />
          </div>

          {/* Description */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 px-3">
            <p className="text-xs text-gray-800 font-medium leading-snug">
              {industry.description}
            </p>
          </div>
        </motion.div>

        <h3 className="text-gray-900 font-semibold text-sm leading-tight group-hover:text-[#634c9f] transition-colors">
          {industry.name}
        </h3>
      </motion.div>
    </motion.article>
  );
}

export function Services() {
  return (
    <section id="industries-home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-28 px-4">
      {/* Ambient blobs removed to use global background */}

      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            INDUSTRIES WE SERVE
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Unleash innovation and accelerate growth with our dynamic products across diverse sectors.
          </p>
        </motion.div>

        {/* Glass Container */}
        <div className="relative bg-white/35 backdrop-blur-xl rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] border border-white/60 p-10 md:p-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 place-items-center"
          >
            {industries.map((industry) => (
              <TiltCard key={industry.id} industry={industry} />
            ))}
          </motion.div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <Link href="/industries">
              <button className="px-7 py-3 rounded-full bg-white/70 backdrop-blur-md border border-white/70 shadow-lg text-gray-800 font-medium hover:text-[#634c9f] transition group flex items-center gap-2 cursor-pointer">
                <span>View All Industries</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

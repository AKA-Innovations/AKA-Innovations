"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 3D Tilt Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((event.clientY - rect.top - rect.height / 2) / rect.height);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 overflow-hidden pt-24 md:pt-20 dark:bg-[#0a0a0a] [perspective:1000px]">

      {/* Background Image with subtle motion */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none select-none will-change-transform dark:opacity-10"
      >
        <Image
          src={isDark ? "/heroBack_dark.svg" : "/heroBack.svg"}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Soft Gradient Glow - Optimized blur */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[70vw] max-w-[700px] h-[70vw] max-h-[700px] rounded-full blur-[80px]" />

      {/* Glass Card - Optimized backdrop blur */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="relative z-10 w-full max-w-7xl flex flex-col items-center"
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
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { x.set(0); y.set(0); }}
          className="p-6 sm:p-10 md:px-16 w-full rounded-[2rem] md:rounded-[3rem] bg-white/45 dark:bg-slate-900/40 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-center will-change-transform transition-all duration-200 hover:shadow-2xl dark:hover:shadow-[0_20px_80px_rgba(139,92,246,0.15)]"
        >
          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight text-[#1a1a1a] dark:text-white mb-6 leading-tight"
          >
            We are a product-first engineering team helping businesses
            <span className="bg-gradient-to-r from-[#374af2] via-[#7861b5] to-[#f28686] bg-clip-text text-transparent block mt-2">
              design, build, and scale custom digital systems.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Early. Focused. Thoughtful. We work directly with founders and decision-makers—no handoffs, no middle layers. Just experienced engineers solving hard problems.
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
              bg-white dark:bg-[#A78BFA] text-[#1a1a1a] dark:text-slate-900 font-semibold
              border border-white/60 dark:border-transparent
              shadow-md hover:shadow-lg dark:hover:bg-[#8b5cf6]
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
              bg-white/80 dark:bg-white/10 text-[#1a1a1a] dark:text-white font-semibold
              hover:bg-white dark:hover:bg-white/20
              border border-transparent dark:border-white/20
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

"use client";

import Image from "next/image";
import { FC } from "react";
import { motion, Variants, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ children, variants }: { children: React.ReactNode; variants: any }) => {
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

  return (
    <motion.div
      variants={variants}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200/70
        dark:border-white/10
        bg-white/80
        dark:bg-white/[0.04]
        p-6
        lg:p-8
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)]
        transition-all
        duration-300
        hover:border-cyan-300/60
        dark:hover:border-cyan-400/20
      "
    >
      {children}
    </motion.div>
  );
};

export const ProblemsSection: FC = () => {
    const blobVariants: Variants = {
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 15,
            },
        },
    };

    const problems = [
        {
            icon: "/icons/warning-triangle-red.svg",
            title: "I don't know which doctor to see",
            description:
                "Symptoms don't map clearly to specializations, leading to wrong consultations.",
        },
        {
            icon: "/icons/box-orange.svg",
            title: "I have to explain everything again",
            description:
                "Medical history is scattered across reports, apps, and memory.",
        },
        {
            icon: "/icons/language-purple.svg",
            title: "I can't explain my problem properly",
            description:
                "Language barriers reduce trust and clarity in care.",
        },
        {
            icon: "/icons/clipboard-blue.svg",
            title: "My doctor doesn't know my history",
            description:
                "Lack of patient context impacts diagnosis and continuity.",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white dark:bg-[#07111F] py-24 lg:py-32 transition-colors duration-500">
            {/* Background Blobs */}
            <motion.div
                variants={blobVariants}
                animate="animate"
                className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10"
            />

            <motion.div
                variants={blobVariants}
                animate="animate"
                transition={{ delay: 2 }}
                className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10"
            />

            <motion.div
                variants={blobVariants}
                animate="animate"
                transition={{ delay: 4 }}
                className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl dark:bg-purple-500/10"
            />

            <div className="container relative z-10 mx-auto px-4 lg:px-12">
                {/* Main Glass Container */}
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[40px]
                        border
                        border-slate-200/70
                        dark:border-white/10
                        bg-white/70
                        dark:bg-white/[0.03]
                        backdrop-blur-2xl
                        p-6
                        lg:p-16
                        shadow-[0_20px_80px_rgba(0,0,0,0.06)]
                        dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                    "
                >
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

                    {/* Header */}
                    <div className="relative z-10 mb-16 text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="
                                inline-flex
                                items-center
                                rounded-full
                                border
                                border-red-200
                                dark:border-red-400/20
                                bg-red-50
                                dark:bg-red-500/10
                                px-4
                                py-2
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-red-600
                                dark:text-red-300
                            "
                        >
                            Current Healthcare Problems
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="
                                mt-6
                                text-[34px]
                                sm:text-[42px]
                                lg:text-[48px]
                                font-bold
                                leading-[1.15]
                                tracking-tight
                                text-slate-900
                                dark:text-white
                            "
                        >
                            Why Today's Healthcare{" "}
                            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                                Feels Broken?
                            </span>
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="
                                mx-auto
                                mt-6
                                max-w-3xl
                                text-[18px]
                                leading-8
                                text-slate-600
                                dark:text-slate-400
                            "
                        >
                            Real problems faced by patients and doctors every
                            single day.
                        </motion.p>

                        {/* Underline */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 100 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                            }}
                            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        />
                    </div>

                    {/* Cards Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="
                            relative
                            z-10
                            grid
                            gap-6
                            md:grid-cols-2
                            lg:grid-cols-2
                        "
                    >
                        {problems.map((problem, index) => (
                            <TiltCard
                                key={index}
                                variants={cardVariants}
                            >
                                {/* Hover Glow */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-br
                                        from-cyan-500/5
                                        to-blue-500/5
                                        opacity-0
                                        transition-opacity
                                        duration-300
                                        group-hover:opacity-100
                                    "
                                />

                                {/* Icon */}
                                <div
                                    className="
                                        relative
                                        z-10
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-slate-100
                                        dark:bg-white/5
                                    "
                                >
                                    <Image
                                        src={problem.icon}
                                        alt=""
                                        width={22}
                                        height={22}
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    className="
                                        relative
                                        z-10
                                        mt-6
                                        text-[22px]
                                        font-semibold
                                        leading-snug
                                        text-slate-900
                                        dark:text-white
                                    "
                                >
                                    {problem.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                                        relative
                                        z-10
                                        mt-4
                                        text-[15px]
                                        leading-7
                                        text-slate-600
                                        dark:text-slate-400
                                    "
                                >
                                    {problem.description}
                                </p>
                            </TiltCard>
                        ))}
                    </motion.div>

                    {/* Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                        }}
                        className="relative z-10 mt-16 text-center"
                    >
                        <p
                            className="
                                mx-auto
                                max-w-4xl
                                text-[24px]
                                lg:text-[30px]
                                font-medium
                                italic
                                leading-relaxed
                                text-slate-700
                                dark:text-slate-300
                            "
                        >
                            “Healthcare shouldn't reset every time you meet a
                            new doctor.”
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
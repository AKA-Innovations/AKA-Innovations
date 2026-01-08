"use client";

import { motion } from "framer-motion";
function MotionTile({
  title,
  desc,
  extra,
  img,
  className = "",
}: {
  title: string;
  desc: string;
  extra: string;
  img: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl bg-slate-900 ${className}`}
    >
      {/* Background */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-[1200ms] group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6">
        <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">
          {title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-3">
          {desc}
        </p>

        {/* Hover Reveal */}
        <p className="text-slate-200 text-sm leading-relaxed opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {extra}
        </p>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-cyan-400/20" />
    </motion.div>
  );
}

export function ServiceGrid() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-20 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      >

        {/* AI */}
        <MotionTile
          className="lg:col-span-5 h-[420px] sm:h-[480px] lg:h-[540px]"
          title="AI & Machine Learning"
          desc="Architect and deploy production-grade AI systems with scalable pipelines, advanced architectures, and full MLOps automation."
          extra="Model monitoring, retraining pipelines, scalable inference, data versioning."
          img="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&q=80"
        />

        {/* Web */}
        <MotionTile
          className="lg:col-span-4 h-[420px] sm:h-[480px] lg:h-[540px]"
          title="Web Engineering"
          desc="Cloud-native high-performance platforms built on modular microservice architectures."
          extra="API gateways, CI/CD pipelines, performance tuning, secure auth."
          img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
        />

        {/* Right stack */}
        <div className="lg:col-span-3 grid grid-rows-2 gap-6 h-[420px] sm:h-[480px] lg:h-[540px]">
          <MotionTile
            className="h-full"
            title="Mobile Engineering"
            desc="Fast, resilient mobile apps with real-time sync and secure backend integration."
            extra="Offline-first design, push notifications, crash analytics."
            img="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80"
          />

          <MotionTile
            className="h-full"
            title="UI/UX Engineering"
            desc="Data-driven experiences built with scalable design systems."
            extra="Accessibility audits, usability testing, conversion optimization."
            img="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1600&q=80"
          />
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import BlogList from "./BlogList";
import { getPosts } from "@/lib/sanity";
import { Sparkles, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogLandingPage() {
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AKA Innovations Blog",
    "description": "Insights on Agentic AI, School ERP systems, software engineering, and digital transformation.",
    "url": "https://www.akainnovations.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "AKA Innovations",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.akainnovations.com/logo.svg"
      }
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-white font-inter selection:bg-blue-500/20 selection:text-blue-300 transition-colors duration-300 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmbientBackground />
      <Header />

      {/* State of the art: Drifting background glow blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-blue-500/[0.08] dark:bg-blue-600/[0.04] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 100, 0],
            y: [0, 80, -90, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-purple-500/[0.08] dark:bg-indigo-600/[0.03] rounded-full blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] left-[20%] w-[380px] h-[380px] bg-emerald-500/[0.06] dark:bg-teal-600/[0.02] rounded-full blur-[110px]"
        />
      </div>

      {/* Grid Pattern overlays */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Listing Shell */}
      <section className="relative pt-40 pb-24 z-10">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          
          {/* Header Title Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-indigo-500/5 border border-blue-500/20 dark:border-indigo-500/10 text-blue-650 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-550 dark:text-indigo-400 animate-pulse" />
              AKA Innovations Insights
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-7xl font-extrabold leading-[1.08] text-slate-900 dark:text-white font-dm-sans mb-6 tracking-tighter"
            >
              Engineering the <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Future of Software</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-slate-650 dark:text-slate-400 font-dm-sans leading-relaxed"
            >
              Explore deep dives, architectural case studies, and guide maps on School ERP, product health diagnostics, and cutting-edge B2B SaaS engineering patterns.
            </motion.p>
          </div>

          {/* Listing Grid */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-600 rounded-full animate-spin" />
              <p className="text-sm font-mono text-slate-500 dark:text-slate-400 tracking-wider">LOADING ARCHIVES...</p>
            </div>
          ) : (
            <BlogList posts={posts} />
          )}
        </div>
      </section>

      {/* Newsletter Signup (Stunning Diagonal Grid Backdrop) */}
      <section className="py-24 bg-white/40 dark:bg-[#0a0f1d]/30 border-t border-slate-200/80 dark:border-white/[0.05] relative overflow-hidden transition-colors duration-300 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 dark:bg-[#0b1224]/60 border border-slate-200 dark:border-white/[0.06] rounded-[36px] p-8 lg:p-16 shadow-xl relative overflow-hidden group"
          >
            {/* Top glow border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

            <MessageSquare className="w-12 h-12 text-blue-500 dark:text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-extrabold font-dm-sans text-slate-900 dark:text-white leading-tight mb-4 tracking-tight">
              Subscribe to our Technical Newsletter
            </h2>
            <p className="text-slate-650 dark:text-slate-400 mb-8 max-w-lg mx-auto text-sm lg:text-base leading-relaxed font-dm-sans">
              Get actionable engineering insights, tech assessment frameworks, and product design rules shipped directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 max-w-md mx-auto relative z-10">
              <input
                type="email"
                placeholder="Enter your professional email address"
                className="flex-1 bg-white dark:bg-[#080d1a]/50 border border-slate-200 dark:border-white/[0.08] focus:border-blue-500 dark:focus:border-indigo-500 rounded-xl px-5 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-sm"
              />
              <button
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 dark:shadow-indigo-600/20 hover:cursor-pointer hover:scale-[1.01]"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
              >
                Subscribe Now
              </button>
            </div>
            
            <p className="text-xs text-slate-550 dark:text-slate-500 mt-4 font-mono tracking-wider">
              Join 5,000+ engineers & startup operators. No spam, ever.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

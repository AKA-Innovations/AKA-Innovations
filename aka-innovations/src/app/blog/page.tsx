"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import BlogList from "./BlogList";
import { getPosts } from "@/lib/sanity";
import { BookOpen, Mail, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function BlogLandingPage() {
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 90]);

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
    "name": "AKA Innovations Journal & Essays",
    "description": "Architectural essays, technical deep dives, and design guidelines on Agentic AI, School ERP systems, and cloud PaaS.",
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
    <main className="min-h-screen bg-[#faf8f5] dark:bg-[#07111f] text-slate-900 dark:text-slate-100 font-geist transition-colors duration-300 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Parallax Hero Header */}
      <section className="relative pt-36 pb-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Parallax Background Banner Image */}
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 z-0 opacity-20 dark:opacity-25 pointer-events-none"
        >
          <Image
            src="/images/blog_editorial_hero_bg.png"
            alt="Editorial Background"
            fill
            className="object-cover scale-110"
            priority
          />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Writer Annotation */}
              <span className="font-doctor text-3xl text-amber-600 dark:text-amber-400 block mb-2 font-bold -rotate-1">
                ✍️ Architectural Essays & Systems Analysis
              </span>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6 font-newsreader">
                The AKA Engineering Journal
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-4 max-w-2xl mx-auto">
                Deep dives, system design patterns, and case studies on Agentic AI, School ERP architectures, continuous health telemetry, and modern web infrastructure.
              </p>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-6 text-xs text-slate-500 font-mono">
                <span>PUBLISHED WEEKLY</span>
                <span>•</span>
                <span>PEER-REVIEWED CONTENT</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Main Listing Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <div className="w-10 h-10 border-4 border-amber-400/20 border-t-amber-500 rounded-full animate-spin" />
              <p className="text-xs font-mono text-slate-500 tracking-wider">INDEXING ARCHIVES...</p>
            </div>
          ) : (
            <BlogList posts={posts} />
          )}
        </div>
      </section>

      {/* Writer Dispatch Newsletter Section */}
      <section className="py-24 bg-white dark:bg-[#0c1424] border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300 z-10">
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#faf8f5] dark:bg-[#07111f] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 lg:p-14 shadow-lg relative overflow-hidden"
          >
            <span className="font-doctor text-2xl text-amber-600 dark:text-amber-400 block mb-2 font-bold -rotate-1">
              📬 Shipped directly to your inbox...
            </span>

            <h2 className="text-3xl md:text-5xl font-bold font-newsreader text-slate-900 dark:text-white leading-tight mb-4">
              Subscribe to the Engineering Dispatch
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto text-sm leading-relaxed font-normal">
              Receive actionable technical breakdowns, architectural blueprints, and engineering rules delivered every fortnight.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10">
              <input
                type="email"
                placeholder="Enter your professional email address"
                className="flex-1 bg-white dark:bg-[#0c1424] border border-slate-200 dark:border-slate-800 focus:border-amber-400 dark:focus:border-amber-400 rounded-xl px-4 py-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors"
              />
              <button
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black text-xs font-extrabold rounded-xl transition-all shadow-md shadow-amber-400/20 active:scale-[0.97]"
              >
                Subscribe Dispatch
              </button>
            </div>
            
            <p className="text-[11px] text-slate-500 mt-4 font-mono">
              Join 5,000+ senior engineers & CTOs. Zero spam.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

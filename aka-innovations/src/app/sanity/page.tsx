import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { Terminal, Database, ShieldCheck, Key, FileCode } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sanity CMS Setup Guide | AKA Innovations",
  description: "Developer guidelines to connect your AKA Innovations Next.js site to Sanity.io.",
};

export default function SanitySetupGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-white font-inter selection:bg-blue-500/20 selection:text-blue-300 transition-colors duration-300">
      <AmbientBackground />
      <Header />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black font-dm-sans text-slate-900 dark:text-white leading-tight mb-4 flex items-center gap-3">
              <Database className="w-10 h-10 text-indigo-500" />
              Sanity.io Integration Setup
            </h1>
            <p className="text-slate-650 dark:text-slate-400 font-dm-sans leading-relaxed text-base">
              Follow these simple developer steps to set up your content database on Sanity.io. Once configured, your articles, categories, and authors will populate dynamically in the blog section.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white dark:bg-[#0f172a]/30 border border-slate-205 dark:border-white/[0.06] rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono font-bold">1</span>
                Initialize a Sanity Project
              </h3>
              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed mb-4">
                Run the following initialization CLI setup in your command shell to create a new Sanity project workspace:
              </p>
              <div className="bg-slate-100 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/[0.05] rounded-xl p-4 font-mono text-xs text-indigo-600 dark:text-indigo-400 flex items-center justify-between">
                <span>npm create sanity@latest</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Terminal</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-[#0f172a]/30 border border-slate-205 dark:border-white/[0.06] rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono font-bold">2</span>
                Copy Schema Templates
              </h3>
              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed mb-4">
                We have generated premium schemas including full blog formatting, authors, tags, categories, and target B2B geographical schemas. Copy these definitions from the codebase into your Sanity project schema folder:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="file:///c:/Users/YOGA/Documents/GitHub/AKA-Innovations/aka-innovations/sanity/schemas/post.ts"
                  className="p-4 bg-slate-50 dark:bg-[#0f172a]/10 hover:bg-slate-100 dark:hover:bg-white/[0.05] border border-slate-200 dark:border-white/[0.04] rounded-xl transition-all flex items-center gap-3 group"
                >
                  <FileCode className="w-5 h-5 text-indigo-455 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-slate-905 dark:text-white text-xs">Articles Schema</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">schemas/post.ts</div>
                  </div>
                </Link>

                <Link
                  href="file:///c:/Users/YOGA/Documents/GitHub/AKA-Innovations/aka-innovations/sanity/schemas/author.ts"
                  className="p-4 bg-slate-50 dark:bg-[#0f172a]/10 hover:bg-slate-100 dark:hover:bg-white/[0.05] border border-slate-200 dark:border-white/[0.04] rounded-xl transition-all flex items-center gap-3 group"
                >
                  <FileCode className="w-5 h-5 text-emerald-450 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-slate-905 dark:text-white text-xs">Author Schema</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">schemas/author.ts</div>
                  </div>
                </Link>

                <Link
                  href="file:///c:/Users/YOGA/Documents/GitHub/AKA-Innovations/aka-innovations/sanity/schemas/category.ts"
                  className="p-4 bg-slate-50 dark:bg-[#0f172a]/10 hover:bg-slate-100 dark:hover:bg-white/[0.05] border border-slate-200 dark:border-white/[0.04] rounded-xl transition-all flex items-center gap-3 group"
                >
                  <FileCode className="w-5 h-5 text-blue-450 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-bold text-slate-905 dark:text-white text-xs">Category Schema</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">schemas/category.ts</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-[#0f172a]/30 border border-slate-205 dark:border-white/[0.06] rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono font-bold">3</span>
                Update Environment Configurations
              </h3>
              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed mb-4">
                Update the values in your `.env` or `.env.local` to point the Next.js client to your new dataset:
              </p>
              <div className="bg-slate-100 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/[0.05] rounded-xl p-4 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">NEXT_PUBLIC_SANITY_PROJECT_ID</span>=<span>&lt;your_project_id&gt;</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">NEXT_PUBLIC_SANITY_DATASET</span>=<span>production</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">NEXT_PUBLIC_SANITY_API_VERSION</span>=<span>2023-05-03</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white dark:bg-[#0f172a]/30 border border-slate-205 dark:border-white/[0.06] rounded-2xl p-6 lg:p-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-mono font-bold">4</span>
                Dominate Local Search (Local SEO)
              </h3>
              <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
                When writing articles, fill in the <strong className="text-indigo-400">Local SEO & Marketing Target</strong> details inside Sanity Studio. For example, if writing about school automation in Bangalore, input Bangalore coordinates and address details. The site will dynamically generate schema markup which triggers Google Local Pack visibility.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-sm"
              style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
            >
              Return to Blog Landing Page
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

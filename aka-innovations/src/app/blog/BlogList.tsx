"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Post, urlFor } from "@/lib/sanity";
import { cn } from "@/lib/utils";

interface BlogListProps {
  posts: Post[];
}

// Framer motion variants for stagger listing
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from posts
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category?.title).filter(Boolean)))];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || post.category?.title === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Featured post is the first post
  const featuredPost = posts[0];
  // Remaining posts list
  const remainingPosts = filteredPosts.filter((post) => post.slug !== featuredPost?.slug);

  // Helper to format date
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Helper for image url
  const getImageUrl = (post: Post) => {
    if (post.mainImage?.asset?.url) {
      return post.mainImage.asset.url;
    }
    try {
      return urlFor(post.mainImage).url();
    } catch {
      return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200";
    }
  };

  const getAuthorImage = (post: Post) => {
    if (typeof post.author?.image === "string") {
      return post.author.image;
    }
    try {
      return urlFor(post.author.image).width(80).height(80).url();
    } catch {
      return "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=80";
    }
  };

  return (
    <div className="w-full">
      {/* Featured Post (State-of-the-art Large publication card) */}
      {featuredPost && selectedCategory === "All" && searchQuery === "" && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative mb-20 rounded-[32px] overflow-hidden border border-slate-200/80 dark:border-white/[0.06] bg-white/70 dark:bg-slate-950/40 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_100px_rgba(0,0,0,0.4)] group transition-all duration-500 hover:border-blue-500/30 dark:hover:border-indigo-500/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
            {/* Top edge glow line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Cover Image */}
            <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[500px] overflow-hidden bg-slate-900">
              <Image
                src={getImageUrl(featuredPost)}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
              {/* Overlay card glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-550/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-750 pointer-events-none" />
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 p-8 lg:p-14 flex flex-col justify-between relative z-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-indigo-500/5 border border-blue-500/20 dark:border-indigo-500/10 text-blue-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                  Featured Post
                </div>
                
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {formatDate(featuredPost.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-purple-500" />
                    {featuredPost.readingTime} min read
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-extrabold font-dm-sans text-slate-900 dark:text-white leading-[1.25] mb-5 tracking-tight group-hover:text-blue-600 dark:group-hover:text-indigo-405 transition-colors duration-300">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>
                
                <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 font-dm-sans leading-relaxed mb-6 line-clamp-4">
                  {featuredPost.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/[0.06] mt-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white/20 dark:border-white/10 shadow">
                    <Image
                      src={getAuthorImage(featuredPost)}
                      alt={featuredPost.author.name}
                      fill
                      className="object-cover animate-pulse-slow"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">
                      {featuredPost.author.name}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono tracking-wider">AUTHOR</div>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group/btn relative inline-flex items-center justify-center p-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-blue-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                >
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Filter Badges and Search Neon outline */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 pb-6 border-b border-slate-200/80 dark:border-white/[0.06]">
        {/* Sliding category highlights badges */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-xs lg:text-sm font-bold tracking-tight transition-colors duration-300 hover:cursor-pointer whitespace-nowrap z-10",
                  isActive
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-450 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryHighlight"
                    className="absolute inset-0 bg-slate-900 dark:bg-indigo-650 rounded-full -z-10 shadow-[0_4px_16px_rgba(99,102,241,0.25)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Neon Outline focused search input */}
        <div className="relative w-full md:w-80 group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles, topics, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-[#0f172a]/30 border border-slate-200 dark:border-white/[0.08] focus:border-transparent dark:focus:border-transparent rounded-xl py-3 pl-11 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all shadow-inner"
            />
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-4 top-3.5 group-focus-within:text-blue-500 transition-colors" />
          </div>
        </div>
      </div>

      {/* Grid containing dynamic fade elements */}
      <AnimatePresence mode="wait">
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="text-center py-24 bg-slate-50/50 dark:bg-[#0f172a]/10 border border-slate-200/80 dark:border-white/[0.04] rounded-3xl backdrop-blur"
          >
            <BookOpen className="w-14 h-14 text-slate-400 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-205 font-dm-sans">No articles matches</h3>
            <p className="text-slate-500 dark:text-slate-450 text-sm mt-2 max-w-xs mx-auto font-dm-sans">
              We couldn&apos;t find any articles matching your search query. Try other keywords or categories.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={selectedCategory + searchQuery}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(selectedCategory !== "All" || searchQuery !== "" ? filteredPosts : remainingPosts).map((post) => (
              <motion.article
                key={post.slug}
                variants={cardVariants}
                className="group flex flex-col justify-between bg-white dark:bg-[#0f172a]/20 border border-slate-200/70 dark:border-white/[0.05] rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-500/20 dark:hover:border-indigo-500/20 transition-all duration-300 hover:-translate-y-1 relative"
              >
                <div>
                  {/* Neon top border glow */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent group-hover:via-blue-500/40 transition-all duration-300" />
                  
                  {/* Image cover zooms */}
                  <div className="relative aspect-[1.7] w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={getImageUrl(post)}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {post.category && (
                      <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur border border-white/10 text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                        {post.category.title}
                      </span>
                    )}
                  </div>

                  {/* Body text info */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 text-[10px] font-semibold font-mono text-slate-500 dark:text-slate-450 mb-3 tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-purple-500" />
                        {post.readingTime} min read
                      </span>
                    </div>

                    <h3 className="text-lg lg:text-xl font-bold font-dm-sans text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs lg:text-sm text-slate-600 dark:text-slate-400 font-dm-sans leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-4 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 dark:border-white/10">
                      <Image
                        src={getAuthorImage(post)}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white text-xs">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-indigo-400 hover:text-blue-800 dark:hover:text-indigo-300 transition-colors group/btn font-mono"
                  >
                    READ
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

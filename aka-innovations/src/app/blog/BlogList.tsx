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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 16,
    },
  },
};

export default function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category?.title).filter(Boolean)))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || post.category?.title === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts[0];
  const remainingPosts = filteredPosts.filter((post) => post.slug !== featuredPost?.slug);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
    <div className="w-full font-geist">
      {/* Featured Editorial Post */}
      {featuredPost && selectedCategory === "All" && searchQuery === "" && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative mb-20 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07111f] shadow-xl group transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
            
            {/* Cover Image */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[480px] overflow-hidden bg-slate-900">
              <Image
                src={getImageUrl(featuredPost)}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 font-doctor text-xl text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/90 border border-amber-300 dark:border-amber-500/40 px-3.5 py-1 rounded-xl shadow-md font-bold">
                ✍️ Featured Lead Essay
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    {formatDate(featuredPost.publishedAt)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-500" />
                    {featuredPost.readingTime} min read
                  </span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-[1.25] mb-4 font-newsreader">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>
                
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-4">
                  {featuredPost.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                    <Image
                      src={getAuthorImage(featuredPost)}
                      alt={featuredPost.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-xs">
                      {featuredPost.author.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">AUTHOR</div>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold text-black bg-amber-400 hover:bg-amber-300 transition-all duration-150 active:scale-[0.97] shadow-md shadow-amber-400/20"
                >
                  Read Essay
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>
      )}

      {/* Filter Badges & Search */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 active:scale-[0.97]",
                  isActive
                    ? "bg-slate-900 dark:bg-amber-400 text-white dark:text-black shadow-sm font-extrabold"
                    : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search architectural essays..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-[#07111f] border border-slate-200 dark:border-slate-800 focus:border-amber-400 dark:focus:border-amber-400 rounded-xl py-2.5 pl-10 pr-4 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        </div>
      </div>

      {/* Article Grid */}
      <AnimatePresence mode="wait">
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="text-center py-20 bg-slate-50 dark:bg-[#07111f] border border-slate-200 dark:border-slate-800 rounded-2xl"
          >
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-newsreader">No Essays Match Your Query</h3>
            <p className="text-slate-500 text-xs mt-1 max-w-xs mx-auto">
              Try adjusting your search terms or category selection.
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
                className="group flex flex-col justify-between bg-white dark:bg-[#07111f] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={getImageUrl(post)}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {post.category && (
                      <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur text-white text-[10px] font-bold font-mono px-3 py-1 rounded-full border border-slate-800">
                        {post.category.title}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[10px] font-semibold font-mono text-slate-500 dark:text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-500" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-cyan-500" />
                        {post.readingTime} min read
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-newsreader text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
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
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    Read Essay
                    <ArrowRight className="w-3.5 h-3.5" />
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

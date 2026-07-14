import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { getPostBySlug, getRelatedPosts, urlFor, Post } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, MessageSquare, ChevronRight, MapPin, Sparkles } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Custom Portable Text components for styling Rich Text content
const PortableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-12 mb-6 font-dm-sans leading-[1.2] tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl lg:text-3.5xl font-extrabold text-slate-900 dark:text-white mt-10 mb-5 font-dm-sans leading-tight tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl lg:text-2.5xl font-bold text-slate-900 dark:text-white mt-8 mb-4 font-dm-sans leading-tight">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-base lg:text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed font-dm-sans">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-slate-700 dark:text-slate-350 my-8 bg-indigo-500/[0.04] dark:bg-indigo-500/[0.015] py-5 pr-5 rounded-r-2xl relative">
        <span className="absolute top-2 left-2 text-indigo-500/10 dark:text-indigo-400/5 text-6xl font-serif pointer-events-none">&ldquo;</span>
        <span className="relative z-10">{children}</span>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-750 dark:text-slate-300 font-dm-sans">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-755 dark:text-slate-300 font-dm-sans">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }: any) => {
      const imageUrl = value?.asset?.url || (value ? urlFor(value).url() : "");
      return (
        <figure className="my-10 group">
          <div className="relative rounded-3xl overflow-hidden border border-slate-205 dark:border-white/[0.08] aspect-video bg-slate-900 shadow-xl group-hover:border-indigo-500/20 transition-all duration-300">
            <Image
              src={imageUrl}
              alt="Article illustration"
              fill
              className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
          {value.alt && (
            <figcaption className="text-center text-xs text-slate-500 dark:text-slate-450 mt-3 font-mono tracking-wider">
              // {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

// Dynamic SEO Metadata builder
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | AKA Innovations",
    };
  }

  const title = post.metaTitle || `${post.title} | AKA Innovations`;
  const description = post.metaDescription || post.description;

  return {
    title,
    description,
    keywords: post.keywords || post.tags || [],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      url: `https://www.akainnovations.com/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.category?.title);

  // Formatting helpers
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getImageUrl = (source: any) => {
    if (source?.asset?.url) return source.asset.url;
    try {
      return urlFor(source).url();
    } catch {
      return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200";
    }
  };

  const getAuthorImage = (source: any) => {
    if (typeof source === "string") return source;
    try {
      return urlFor(source).width(80).height(80).url();
    } catch {
      return "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=80";
    }
  };

  const fullUrl = `https://www.akainnovations.com/blog/${slug}`;

  // Structured schemas
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": getImageUrl(post.mainImage),
    "datePublished": post.publishedAt,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "AKA Innovations",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.akainnovations.com/logo.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.akainnovations.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.akainnovations.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": fullUrl }
    ]
  };

  const localSeoJsonLd = post.localSeo?.targetCity
    ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": post.localSeo.businessName || "AKA Innovations",
        "description": post.description,
        "url": fullUrl,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": post.localSeo.targetCity,
          "addressRegion": post.localSeo.targetRegion,
          "postalCode": post.localSeo.postalCode,
          "streetAddress": post.localSeo.address
        },
        ...(post.localSeo.latitude && post.localSeo.longitude
          ? {
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": post.localSeo.latitude,
                "longitude": post.localSeo.longitude
              }
            }
          : {}),
        "areaServed": {
          "@type": "Place",
          "name": post.localSeo.targetCity
        }
      }
    : null;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-white font-inter selection:bg-blue-500/20 selection:text-blue-300 transition-colors duration-300 relative overflow-hidden">
      {/* Cleared drop-cap to keep font normal and readable */}

      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      {localSeoJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSeoJsonLd) }}
        />
      )}

      <AmbientBackground />
      <Header />

      {/* Article Detail */}
      <article className="pt-36 pb-24 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-600/5 dark:from-blue-600/10 to-transparent -z-10" />

        <div className="container mx-auto px-6 max-w-5xl relative">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap font-mono tracking-tight">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-indigo-400">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-indigo-400">BLOG</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 dark:text-slate-400 truncate">{post.title.toUpperCase()}</span>
          </div>

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2.5 text-xs font-bold text-slate-550 hover:text-blue-600 dark:hover:text-indigo-400 mb-8 transition-colors font-mono tracking-widest uppercase"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO INK
          </Link>

          {/* Headline details */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {post.category && (
              <span className="bg-blue-500/10 border border-blue-500/25 text-blue-700 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                {post.category.title}
              </span>
            )}
            <div className="flex items-center gap-4 text-xs font-semibold font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-500" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-purple-500" />
                {post.readingTime} min read
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-6xl font-extrabold leading-[1.12] text-slate-900 dark:text-white font-dm-sans mb-8 tracking-tighter">
            {post.title}
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-dm-sans mb-10 pb-8 border-b border-slate-200 dark:border-white/[0.06]">
            {post.description}
          </p>

          {/* Large cover image */}
          <div className="relative rounded-[36px] overflow-hidden border border-slate-205 dark:border-white/[0.08] bg-slate-950 aspect-[1.9] w-full mb-16 shadow-2xl">
            <Image
              src={getImageUrl(post.mainImage)}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Column structure layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sticky Sidebar */}
            <div className="lg:col-span-3 space-y-8 lg:sticky lg:top-28 lg:self-start z-10">
              
              {/* Author Glass Box */}
              <div className="p-6 bg-white/70 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/[0.05] rounded-[24px] flex flex-row lg:flex-col items-center lg:items-start gap-4 shadow-sm backdrop-blur-xl">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 dark:border-white/10 shadow">
                  <Image
                    src={getAuthorImage(post.author.image)}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-[10px] text-slate-450 font-bold font-mono tracking-widest uppercase">AUTHOR</div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm mt-0.5 font-dm-sans">
                    {post.author.name}
                  </div>
                </div>
              </div>

              {/* Share Tools */}
              <div className="p-6 bg-white/70 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/[0.05] rounded-[24px] shadow-sm backdrop-blur-xl">
                <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-1.5 font-mono">
                  <Share2 className="w-3.5 h-3.5 text-blue-500" /> SHARE ARTICLE
                </h4>
                <div className="flex gap-2.5">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-100 dark:bg-white/[0.03] hover:bg-blue-600/10 dark:hover:bg-blue-400/10 rounded-xl text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-white/[0.05] transition-all hover:scale-105"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-100 dark:bg-white/[0.03] hover:bg-slate-950/10 dark:hover:bg-white/10 rounded-xl text-slate-500 hover:text-black dark:hover:text-white border border-slate-200 dark:border-white/[0.05] transition-all hover:scale-105"
                    title="Share on X"
                  >
                    <Twitter className="w-4.5 h-4.5" />
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.title} - ${fullUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-slate-100 dark:bg-white/[0.03] hover:bg-emerald-600/10 dark:hover:bg-emerald-400/10 rounded-xl text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-white/[0.05] transition-all hover:scale-105"
                    title="Share on WhatsApp"
                  >
                    <MessageSquare className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

              {/* Local SEO Details */}
              {post.localSeo?.targetCity && (
                <div className="p-6 bg-blue-500/[0.03] dark:bg-indigo-500/[0.02] border border-blue-550/10 dark:border-indigo-500/10 rounded-[24px]">
                  <h4 className="text-[10px] font-bold text-blue-600 dark:text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-1.5 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-blue-550" /> LOCAL BUSINESS
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-650 dark:text-slate-400 leading-relaxed font-mono">
                    <div className="font-bold text-slate-800 dark:text-slate-300">{post.localSeo.businessName}</div>
                    <div>{post.localSeo.targetCity}, {post.localSeo.targetRegion}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{post.localSeo.address}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Main Content Pane */}
            <div className="lg:col-span-9">
              <div className="prose prose-slate dark:prose-invert max-w-none article-body">
                {post.body && Array.isArray(post.body) ? (
                  <PortableText
                    value={post.body}
                    components={PortableTextComponents}
                  />
                ) : (
                  <p className="text-slate-400 italic">No content body added.</p>
                )}
              </div>

              {/* Tags badging */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-6 border-t border-slate-200 dark:border-white/[0.05] flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] text-slate-700 dark:text-slate-450 px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* High-Converting CTA Box */}
              <div className="mt-20 relative overflow-hidden bg-slate-900 dark:bg-[#0c1224] border border-slate-850 dark:border-white/[0.06] rounded-[32px] p-8 lg:p-12 text-white group shadow-2xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-[100px] opacity-10 dark:opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 h-[1px] w-full bg-gradient-to-l from-indigo-500 via-blue-500 to-transparent opacity-40" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Sparkles className="w-3.5 h-3.5" /> B2B COLLABORATION
                  </div>
                  
                  <h3 className="text-2xl lg:text-3.5xl font-extrabold font-dm-sans text-white mb-4 tracking-tight">
                    Scale Your Digital Infrastructure
                  </h3>
                  
                  <p className="text-sm lg:text-base text-slate-400 mb-8 leading-relaxed font-dm-sans max-w-2xl">
                    We architect category-defining SaaS solutions, automate redundant workflows with Natural Language agents, and diagnose system bottlenecks before they affect scaling. Let&apos;s build together.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs lg:text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-550/20 hover:scale-[1.01]"
                      style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                    >
                      Schedule Technical Review
                    </Link>
                    <Link
                      href="/services"
                      className="px-7 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs lg:text-sm font-bold rounded-xl transition-all"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles Interlinking Grid */}
          {relatedPosts.length > 0 && (
            <div className="mt-28 pt-16 border-t border-slate-200 dark:border-white/[0.06]">
              <h3 className="text-2xl lg:text-3.5xl font-extrabold font-dm-sans text-slate-900 dark:text-white mb-10 tracking-tight">
                Related Articles & Insights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((rPost) => (
                  <article
                    key={rPost.slug}
                    className="group flex flex-col justify-between bg-white/80 dark:bg-[#0f172a]/20 border border-slate-200 dark:border-white/[0.05] rounded-2xl overflow-hidden hover:shadow-2xl hover:border-blue-500/20 dark:hover:border-indigo-500/20 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="relative aspect-[1.8] bg-slate-900 overflow-hidden">
                      <Image
                        src={getImageUrl(rPost.mainImage)}
                        alt={rPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h4 className="font-bold font-dm-sans text-sm text-slate-900 dark:text-white mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                      </h4>
                      <Link
                        href={`/blog/${rPost.slug}`}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 dark:text-indigo-400 hover:text-blue-800 dark:hover:text-indigo-300 transition-colors font-mono tracking-widest"
                      >
                        READ POST <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}

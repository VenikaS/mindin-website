"use client";

import React from "react";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { SanityBlog, SanityCategory } from "@/sanity/types";
import { urlFor } from "@/sanity/image";
import { calculateReadingTime } from "@/lib/readingTime";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogClientPageProps {
  initialBlogs: SanityBlog[];
  initialCategories: SanityCategory[];
}

export default function BlogClientPage({
  initialBlogs,
  initialCategories,
}: BlogClientPageProps) {
  const [selectedCategory, setSelectedCategory] = React.useState("All Articles");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Categories list starting with "All Articles"
  const categoriesList = ["All Articles", ...initialCategories.map((c) => c.name)];

  // Find the featured post
  const featuredPost = initialBlogs.find((blog) => blog.featured);

  // Filter posts (excluding featured post from the grid list so it doesn't duplicate)
  const gridBlogs = initialBlogs.filter((blog) => blog._id !== featuredPost?._id);

  const filteredBlogs = gridBlogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All Articles" ||
      (blog.category && blog.category.name === selectedCategory);
    
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.category && blog.category.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-neutral-bg pt-12 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-blue w-[500px] h-[500px] -left-20 top-20" />
        <div className="blob bg-surface-peach w-[450px] h-[450px] -right-20 top-[50%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        {/* Header Hero */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase block mb-4">
            The Mind&apos;in Journal
          </span>
          <h1 className="text-4xl md:text-5xl font-display text-text-navy mb-6">
            Blog posts for emotional well-being.
          </h1>
          <p className="text-lg text-text-charcoal/80 leading-relaxed">
            Explore a curated collection of articles, expert advice, and gentle reminders designed to help you navigate life&apos;s emotional landscape with clarity and compassion.
          </p>
        </div>

        {/* Featured Blog Section (if exists) */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-surface-pearl rounded-[2.5rem] overflow-hidden border border-primary/5 shadow-soft-blue grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 h-80 lg:h-[450px] w-full relative">
              <img
                src={urlFor(featuredPost.coverImage).url()}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-6 left-6 bg-surface-pearl/90 backdrop-blur-sm text-text-navy text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
                Featured • {featuredPost.category?.name}
              </span>
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 space-y-6">
              <div className="flex items-center gap-4 text-xs text-text-charcoal/50">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(featuredPost.publishedDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {calculateReadingTime(featuredPost.body)}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3.5xl font-display text-text-navy leading-tight hover:text-primary transition-colors">
                <Link href={`/blog/${featuredPost.slug.current}`}>{featuredPost.title}</Link>
              </h2>
              <p className="text-text-charcoal/70 text-sm leading-relaxed line-clamp-4">
                {featuredPost.excerpt}
              </p>
              <div className="pt-2">
                <Link href={`/blog/${featuredPost.slug.current}`}>
                  <Button variant="primary" className="flex items-center gap-2">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-pearl p-6 rounded-[2rem] border border-primary/5 shadow-sm mb-12">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-white"
                    : "bg-surface text-text-charcoal hover:bg-primary-light/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className="w-full pl-12 pr-4 py-3 bg-surface border border-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-text-navy"
            />
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-text-charcoal/40" />
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog._id}
                id={blog.slug.current}
                title={blog.title}
                category={blog.category?.name || "Uncategorized"}
                excerpt={blog.excerpt}
                image={urlFor(blog.coverImage).url()}
                readTime={calculateReadingTime(blog.body)}
                date={new Date(blog.publishedDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              />
            ))}
          </div>
        ) : initialBlogs.length === 0 ? (
          <div className="text-center py-24 bg-surface-pearl rounded-[3rem] border border-primary/5 shadow-sm max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-display text-text-navy">Journal Articles Coming Soon!</h3>
            <p className="text-sm text-text-charcoal/70 max-w-md mx-auto leading-relaxed">
              Posts coming soon.
            </p>
          </div>
        ) : (
          <div className="text-center py-20 bg-surface-pearl rounded-[2rem] border border-primary/5">
            <p className="text-lg text-text-charcoal/60">No articles found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All Articles");
                setSearchQuery("");
              }}
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

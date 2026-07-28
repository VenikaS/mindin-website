"use client";

import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
  date: string;
}

export default function BlogCard({
  id,
  title,
  category,
  excerpt,
  image,
  readTime,
  date,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group bg-surface-pearl rounded-[2rem] overflow-hidden border border-primary/5 transition-all shadow-sm hover:shadow-soft-blue flex flex-col h-full"
    >
      {/* Blog Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-surface-pearl/90 backdrop-blur-sm text-text-navy text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
          {category}
        </span>
      </div>

      {/* Blog Details */}
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-text-charcoal/50 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          </div>

          <h3 className="text-text-navy text-xl font-semibold leading-snug mb-3 group-hover:text-primary transition-colors">
            <Link href={`/blog/${id}`}>{title}</Link>
          </h3>
          <p className="text-text-charcoal/70 text-sm leading-relaxed mb-6 line-clamp-3">
            {excerpt}
          </p>
        </div>

        <Link
          href={`/blog/${id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-navy group-hover:text-primary transition-colors mt-auto"
        >
          Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}

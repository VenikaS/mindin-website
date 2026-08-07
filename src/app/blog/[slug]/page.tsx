import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSanityClient } from "@/sanity/client";
import { blogBySlugQuery, relatedBlogsQuery } from "@/sanity/queries";
import { SanityBlog } from "@/sanity/types";
import { urlFor } from "@/sanity/image";
import { calculateReadingTime } from "@/lib/readingTime";
import { PortableText } from "@portabletext/react";
import ShareButtons from "@/components/ShareButtons";
import BlogCard from "@/components/BlogCard";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import Image from "next/image";

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

interface SingleBlogPageProps {
  params: Promise<{ slug: string }>;
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: SingleBlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const client = getSanityClient(isEnabled);
  const post = await client.fetch<SanityBlog>(blogBySlugQuery, { slug });

  if (!post) return {};

  const ogImageUrl = post.coverImage ? urlFor(post.coverImage).width(1200).height(630).url() : "";

  return {
    title: post.seoTitle || `${post.title} | Mind'in Journal`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
    },
  };
}

// Custom Portable Text Renderers
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-6 leading-relaxed">{children}</p>,
    h2: ({ children }: any) => <h2 className="text-2xl font-display text-text-navy mt-10 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-display text-text-navy mt-8 mb-3">{children}</h3>,
    blockquote: ({ children }: any) => (
      <div className="bg-surface-blue/20 p-8 rounded-[2rem] border-l-4 border-primary italic my-8">
        <p className="text-text-navy font-display text-xl leading-relaxed">{children}</p>
      </div>
    ),
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative w-full aspect-video my-8 rounded-[2rem] overflow-hidden border border-primary/5">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog content image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      );
    },
  },
};

export default async function SingleBlogPage({ params }: SingleBlogPageProps) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const client = getSanityClient(isEnabled);

  const blog = await client.fetch<SanityBlog>(blogBySlugQuery, { slug });

  if (!blog) {
    notFound();
  }

  // Fetch related articles (same category, excluding current blog ID)
  const categorySlug = blog.category?.slug?.current || "";
  const relatedBlogs = categorySlug
    ? await client.fetch<SanityBlog[]>(relatedBlogsQuery, { categorySlug, currentId: blog._id })
    : [];

  return (
    <article className="relative min-h-screen bg-neutral-bg pt-4 pb-24">
      {/* Background Decor Blobs */}
      <div className="blob-container">
        <div className="blob bg-surface-peach w-[400px] h-[400px] -left-20 top-20" />
        <div className="blob bg-surface-blue w-[450px] h-[450px] -right-20 top-[50%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-text-navy mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>

        {/* Article Meta Header */}
        <div className="space-y-6 mb-12 text-center md:text-left">
          {blog.category && (
            <span className="inline-block bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              {blog.category.name}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-display text-text-navy leading-tight max-w-3xl">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-text-charcoal/60">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(blog.publishedDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {calculateReadingTime(blog.body)}
            </span>
            <span className="hidden sm:inline">•</span>
            <span>By {blog.author?.name || "Venika"}</span>
          </div>
        </div>

        {/* Feature Image */}
        {blog.coverImage && (
          <div className="relative rounded-[3rem] overflow-hidden aspect-video shadow-soft-blue mb-16 border border-primary/5">
            <Image
              src={urlFor(blog.coverImage).url()}
              alt={blog.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        )}

        {/* Content body and side actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Share Actions (Sticky left) */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <ShareButtons />
            </div>
          </div>

          {/* Main content body */}
          <div className="lg:col-span-10 text-text-charcoal/90 text-base md:text-lg leading-relaxed font-normal">
            <PortableText value={blog.body} components={portableTextComponents} />
          </div>
        </div>

        {/* Author Bio Section */}
        {blog.author && (
          <div className="mt-20 p-8 rounded-[2rem] bg-surface border border-primary/5 flex flex-col md:flex-row items-center gap-6">
            {blog.author.profileImage && (
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                <Image
                  src={urlFor(blog.author.profileImage).url()}
                  alt={blog.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="text-center md:text-left space-y-2">
              <h4 className="text-lg font-display font-semibold text-text-navy">
                {blog.author.name} — <span className="text-sm font-sans text-primary font-normal">{blog.author.designation}</span>
              </h4>
              <p className="text-sm text-text-charcoal/70 leading-relaxed">{blog.author.bio}</p>
            </div>
          </div>
        )}

        {/* Related Articles Section */}
        {relatedBlogs.length > 0 && (
          <div className="mt-24 border-t border-primary/10 pt-16">
            <h3 className="text-2xl font-display text-text-navy mb-8 text-center md:text-left">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((post) => (
                <BlogCard
                  key={post._id}
                  id={post.slug.current}
                  title={post.title}
                  category={post.category?.name || "Uncategorized"}
                  excerpt={post.excerpt}
                  image={urlFor(post.coverImage).url()}
                  date={new Date(post.publishedDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  readTime={calculateReadingTime(post.body)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Back Link bottom */}
        <div className="border-t border-primary/10 mt-16 pt-8 flex justify-between items-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-text-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>
          <Link href="/book">
            <Button variant="primary">Book a Session</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

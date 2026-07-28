import React from "react";
import { getSanityClient } from "@/sanity/client";
import { allBlogsQuery, categoriesQuery } from "@/sanity/queries";
import { SanityBlog, SanityCategory } from "@/sanity/types";
import BlogClientPage from "@/components/BlogClientPage";
import { draftMode } from "next/headers";

export const revalidate = 60; // Revalidate cache every 60 seconds (ISR)

export default async function BlogListingPage() {
  // Check if Draft Mode is active
  const { isEnabled } = await draftMode();
  
  const client = getSanityClient(isEnabled);

  // Fetch blogs and categories concurrently
  const [blogs, categories] = await Promise.all([
    client.fetch<SanityBlog[]>(allBlogsQuery),
    client.fetch<SanityCategory[]>(categoriesQuery),
  ]);

  return <BlogClientPage initialBlogs={blogs} initialCategories={categories} />;
}

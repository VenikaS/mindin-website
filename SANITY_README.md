# Sanity CMS Integration: Therapist Blog Setup Guide

This guide explains how to connect and manage content on your Next.js wellness website using **Sanity CMS**.

---

## 1. Quick Setup & Environment Variables

Copy the templates in `.env.local` to configure your credentials:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-18
SANITY_API_READ_TOKEN=your_sanity_api_read_token
```

*Note: The website features an **Automatic Fallback Mode**; if variables are empty or misconfigured, it will build cleanly and display a placeholder warning rather than crashing.*

---

## 2. Sanity Content Schemas

We have created the three required schemas inside `/src/sanity/schemas/`:

### A. Author (Therapist Profile)
- **Name**: Name of the writer (e.g., *Venika*).
- **Designation**: Clinical credentials (e.g., *Licensed Psychotherapist, M.Sc*).
- **Profile Image**: High-resolution profile photo.
- **Bio**: Short introductory description.

### B. Category
- **Name**: Topic name (e.g., *Mindfulness*, *Anxiety*, *Relationships*).
- **Slug**: Generated automatically from the name.

### C. Blog Post
- **Title**: Header of the article.
- **Slug**: Path name (e.g., `why-overthinking-feels-so-exhausting`).
- **Excerpt**: Short 1-2 sentence preview.
- **Cover Image**: Top hero visual.
- **Body**: Rich-text editing area (Portable Text) supporting paragraphs, lists, and inner images.
- **Category & Author**: Reference selectors to categories and authors.
- **Published Date**: Chronological ordering date.
- **Featured**: Boolean checkbox. Enabling this displays the post at the very top of the blog page using a wide hero banner.
- **SEO Fields**: Custom Title & Description properties to control browser headings and Google search result snips.

---

## 3. How the Therapist Manages Blogs

1. Go to your Sanity Studio dashboard (either locally by running `npx sanity dev` or on your hosted Sanity URL, e.g., `https://your-project.sanity.studio`).
2. Add a new **Author** profile for yourself.
3. Define your **Categories** (e.g., *Anxiety*, *Self-Care*, *Relationships*).
4. Click on **Blog Post** and draft your articles:
   - Fill in Title, Body, and Excerpt.
   - Attach your Author profile and Category.
   - (Optional) Toggle the **Featured** checkbox on one post to highlight it at the top of the webpage.
5. Click **Publish**.

---

## 4. How Draft Mode (Live Previews) Works

We support Next.js **Draft Mode** to view unpublished edits instantly.

- **Enable Drafts URL**: `https://your-domain.com/api/draft?secret=YOUR_SANITY_API_READ_TOKEN&slug=your-post-slug`
- **Disable Drafts URL**: `https://your-domain.com/api/disable-draft`

You can configure Sanity Studio's preview settings to automatically request this URL in a side-by-side pane for the therapist during drafting!

import { groq } from "next-sanity";

// Query to get all blog categories
export const categoriesQuery = groq`
  *[_type == "category"] {
    name,
    slug
  }
`;

// Query to get all published articles
export const allBlogsQuery = groq`
  *[_type == "blog"] | order(publishedDate desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedDate,
    featured,
    category-> {
      name,
      slug
    },
    author-> {
      name,
      designation,
      profileImage
    }
  }
`;

// Query to get a single blog post by slug
export const blogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    body,
    publishedDate,
    featured,
    seoTitle,
    seoDescription,
    category-> {
      name,
      slug
    },
    author-> {
      name,
      designation,
      profileImage,
      bio
    }
  }
`;

// Query to get related articles (same category, excluding current post)
export const relatedBlogsQuery = groq`
  *[_type == "blog" && category->slug.current == $categorySlug && _id != $currentId] | order(publishedDate desc)[0..2] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    body,
    publishedDate,
    category-> {
      name,
      slug
    }
  }
`;

// Query to get all testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    author,
    role,
    color,
    order
  }
`;

// Query to get active future booking slots
export const bookingSlotsQuery = groq`
  *[_type == "bookingSlot" && date >= $today && count(times) > 0] | order(date asc) {
    _id,
    date,
    times
  }
`;

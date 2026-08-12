export interface SanityAuthor {
  name: string;
  designation: string;
  profileImage: any;
  bio: string;
}

export interface SanityCategory {
  name: string;
  slug: {
    current: string;
  };
}

export interface SanityBlog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  coverImage: any;
  body: any[];
  category: SanityCategory;
  author: SanityAuthor;
  publishedDate: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface SanityTestimonial {
  _id: string;
  quote: string;
  author: string;
  role?: string;
  color?: string;
  order?: number;
}

export interface SanityBookingSlot {
  _id: string;
  date: string;
  times: string[];
}

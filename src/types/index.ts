export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  order: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: BlogCategory;
  tags: string[];
  readTime: number;
}

export type BlogCategory =
  | 'climate-change'
  | 'recycling'
  | 'sustainability'
  | 'news';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  featuredImage: string;
  images?: string[];
  location: string;
  status: 'ongoing' | 'completed' | 'planned';
  impactMetrics?: {
    label: string;
    value: string;
  }[];
  startDate?: string;
  endDate?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface SocialLinks {
  whatsapp?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  email?: string;
}

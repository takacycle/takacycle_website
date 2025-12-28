import { groq } from 'next-sanity';

// Blog Posts
export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    category,
    tags,
    author,
    publishedAt,
    readTime
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    content,
    category,
    tags,
    author,
    publishedAt,
    readTime
  }
`;

// Team Members
export const allTeamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    image,
    bio,
    order,
    socialLinks
  }
`;

// Projects
export const allProjectsQuery = groq`
  *[_type == "project"] | order(startDate desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage,
    location,
    status,
    startDate,
    endDate,
    impactMetrics
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage,
    location,
    status,
    startDate,
    endDate,
    impactMetrics,
    content
  }
`;

// Services
export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  }
`;

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    email,
    phone,
    address,
    socialLinks,
    missionStatement,
    visionStatement,
    impactStats
  }
`;

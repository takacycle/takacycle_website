'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import { urlFor } from '../../../sanity/lib/client';

interface SanityBlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: any;
  category: string;
  publishedAt: string;
  readTime: number;
}

interface BlogCardProps {
  post: SanityBlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imageUrl = post.featuredImage
    ? urlFor(post.featuredImage).width(600).height(375).url()
    : '/images/placeholder-blog.jpg';

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          border: '2px solid #f3f4f6',
          overflow: 'hidden',
          transition: 'all 0.2s',
          height: '100%',
        }}
      >
        <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
            <span
              style={{
                padding: '4px 12px',
                backgroundColor: '#4CAF50',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 500,
                borderRadius: '50px',
                textTransform: 'capitalize',
              }}
            >
              {post.category.replace('-', ' ')}
            </span>
          </div>
        </div>
        <div style={{ padding: '24px' }}>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#111111',
              marginBottom: '8px',
              lineHeight: 1.4,
            }}
          >
            {post.title}
          </h3>
          <p
            style={{
              color: '#666666',
              fontSize: '14px',
              marginBottom: '16px',
              lineHeight: 1.6,
            }}
          >
            {post.excerpt}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '14px',
              color: '#888888',
            }}
          >
            <span>{formattedDate}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock style={{ height: '16px', width: '16px' }} />
              {post.readTime} min read
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

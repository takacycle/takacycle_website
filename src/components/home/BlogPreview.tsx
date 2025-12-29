'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { urlFor } from '../../../sanity/lib/client';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: any;
}

interface BlogPreviewProps {
  posts: BlogPost[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <section style={{ padding: '100px 0', backgroundColor: '#F5F5F5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#111111' }}>
              Get smarter about the environment
            </h2>
            <Lightbulb style={{ height: '48px', width: '48px', color: '#EAB308', flexShrink: 0 }} />
          </div>
          <p style={{ fontSize: '18px', color: '#666666', maxWidth: '600px', lineHeight: 1.7 }}>
            The latest news, insights, reports and everything you need to know
            about the environment
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {posts.slice(0, 4).map((post) => {
            const imageUrl = post.featuredImage
              ? urlFor(post.featuredImage).width(500).height(500).url()
              : '/images/placeholder-blog.jpg';

            return (
            <Link key={post._id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2px solid #f0f0f0',
                transition: 'all 0.3s',
                height: '100%',
              }}>
                <div style={{ position: 'relative', aspectRatio: '1/1' }}>
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: '8px',
                    fontSize: '18px',
                    lineHeight: 1.4
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#666666', fontSize: '14px', lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
            );
          })}
        </div>

        <Link
          href="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '18px 36px',
            fontSize: '17px',
            fontWeight: 600,
            color: '#ffffff',
            backgroundColor: '#4CAF50',
            borderRadius: '50px',
            textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(76, 175, 80, 0.35)',
          }}
        >
          Visit our blog
          <ArrowRight style={{ marginLeft: '8px', height: '22px', width: '22px' }} />
        </Link>
      </div>
    </section>
  );
}

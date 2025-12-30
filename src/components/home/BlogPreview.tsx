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
    <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#111111]">
              Get smarter about the environment
            </h2>
            <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 text-[#EAB308] flex-shrink-0 hidden sm:block" />
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-[#666666] max-w-[600px] leading-relaxed">
            The latest news, insights, reports and everything you need to know
            about the environment
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mb-10 sm:mb-12 lg:mb-14">
          {posts.slice(0, 4).map((post) => {
            const imageUrl = post.featuredImage
              ? urlFor(post.featuredImage).width(500).height(500).url()
              : '/images/placeholder-blog.jpg';

            return (
            <Link key={post._id} href={`/blog/${post.slug}`} className="no-underline">
              <div className="bg-white rounded-2xl lg:rounded-[20px] overflow-hidden border-2 border-gray-100 transition-all h-full hover:shadow-lg">
                <div className="relative aspect-square">
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5 pt-5 sm:pt-6">
                  <h3 className="font-bold text-[#111111] mb-2 sm:mb-3 text-base sm:text-lg leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 text-base sm:text-[17px] font-semibold text-white bg-[#4CAF50] rounded-full shadow-[0_8px_24px_rgba(76,175,80,0.35)] hover:bg-[#43A047] transition-colors"
        >
          Visit our blog
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}

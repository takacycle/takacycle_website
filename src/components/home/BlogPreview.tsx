'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
    <section className="bg-white mt-4">
      <div className="px-4">
        {/* Header and description */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-start sm:text-left sm:mb-0">
            Get smarter about the environment
          </h2>
        </div>
        <p className="text-gray-600 text-start mb-8">
          The latest news, insights, reports, and everything you need to know
          about the environment.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {posts.slice(0, 4).map((post) => {
            const imageUrl = post.featuredImage
              ? urlFor(post.featuredImage).width(500).height(500).url()
              : '/assets/blogImage.svg';

            return (
              <Link key={post._id} href={`/blog/${post.slug}`} className="block">
                {/* Ensure side-by-side for small screens and vertical for large screens */}
                <div className="flex flex-row lg:flex-col lg:items-center lg:space-y-4 rounded-lg overflow-hidden w-full">
                  {/* Image */}
                  <div className="relative w-24 h-24 lg:w-full lg:h-40">
                    <Image
                      src={imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  {/* Text content */}
                  <div className="py-4 px-4 flex-1 lg:py-0 lg:px-0">
                    <h3 className="font-bold text-base line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center lg:justify-start lg:items-start">
          <Link
            href="/blog"
            className="w-fit bg-brandGreen text-white px-5 py-3 text-sm font-alton font-normal rounded-full flex items-center justify-center hover:bg-brandTextGreen"
          >
            Visit our blog
            <ArrowRight size={32} className="text-white ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}

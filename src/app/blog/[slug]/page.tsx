import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { BlogCard } from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Back Link */}
      <section className="pt-6">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Container>
      </section>

      {/* Article Header */}
      <article className="py-8 md:py-12">
        <Container size="small">
          {/* Category */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full capitalize">
              {post.category.replace('-', ' ')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-neutral-600 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} min read
            </span>
            <span>By {post.author}</span>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-neutral max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-neutral-700 prose-p:leading-relaxed prose-li:text-neutral-700 prose-strong:text-neutral-900">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-neutral-900 mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter((line) => line.startsWith('- '));
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('1. ')) {
                const items = paragraph.split('\n').filter((line) => /^\d+\./.test(line));
                return (
                  <ol key={index} className="list-decimal pl-6 space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '')}</li>
                    ))}
                  </ol>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-neutral-700 leading-relaxed my-4">
                    {paragraph.trim()}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-neutral-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-neutral-600 font-medium">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-neutral-600 font-medium flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share this article
            </span>
          </div>
        </Container>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-neutral-50">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { BlogCard } from '@/components/blog/BlogCard';
import { JoinCommunity } from '@/components/shared/JoinCommunity';
import { client } from '../../../../sanity/lib/client';
import { allBlogPostsQuery } from '../../../../sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read the latest news, insights, and articles about recycling, sustainability, and environmental issues from TakaCycle Innovations.',
};

const blogCategories = [
  { id: 'all', label: 'All' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'recycling', label: 'Recycling' },
  { id: 'community', label: 'Community' },
  { id: 'innovation', label: 'Innovation' },
];

async function getBlogPosts() {
  return client.fetch(allBlogPostsQuery);
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-64 sm:h-80 lg:h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop"
          alt="Green hills landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#8CD867] font-medium mb-2">TakaBlog</p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white max-w-[700px] leading-tight">
            Learn more about climate, the environment, and sustainability
          </h1>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 border-b border-gray-200">
        <Container>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium border-none cursor-pointer transition-colors ${
                  category.id === 'all'
                    ? 'bg-[#111111] text-white'
                    : 'bg-[#f5f5f5] text-[#666666] hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* Join Community CTA */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <JoinCommunity />
        </Container>
      </section>
    </>
  );
}

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
      <section style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop"
          alt="Green hills landscape"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 16px',
          }}
        >
          <p style={{ color: '#8CD867', fontWeight: 500, marginBottom: '8px' }}>TakaBlog</p>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#ffffff',
              maxWidth: '700px',
              lineHeight: 1.2,
            }}
          >
            Learn more about climate, the environment, and sustainability
          </h1>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '32px 0', borderBottom: '1px solid #e5e5e5' }}>
        <Container>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {blogCategories.map((category) => (
              <button
                key={category.id}
                style={{
                  padding: '10px 20px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: category.id === 'all' ? '#111111' : '#f5f5f5',
                  color: category.id === 'all' ? '#ffffff' : '#666666',
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: '60px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {blogPosts.map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </Container>
      </section>

      {/* Join Community CTA */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <JoinCommunity />
        </Container>
      </section>
    </>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { client, urlFor } from '../../../../sanity/lib/client';
import { allProjectsQuery } from '../../../../sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore TakaCycle Innovations projects - from community recycling programs to educational initiatives across Ghana.',
};

const statusColors: Record<string, { bg: string; text: string }> = {
  ongoing: { bg: '#DCFCE7', text: '#166534' },
  completed: { bg: '#DBEAFE', text: '#1E40AF' },
  planned: { bg: '#FEF3C7', text: '#B45309' },
};

async function getProjects() {
  return client.fetch(allProjectsQuery);
}

export default async function OurProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#E8F5E9' }}>
        <Container>
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>
              Our Projects
            </h1>
            <p style={{ fontSize: '18px', color: '#666666', lineHeight: 1.7 }}>
              Discover the initiatives we&apos;re working on to transform waste
              management in Ghana. From community programs to educational
              campaigns, every project brings us closer to a cleaner Africa.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {projects.map((project: any) => {
              const imageUrl = project.featuredImage
                ? urlFor(project.featuredImage).width(800).height(512).url()
                : '/images/placeholder-project.jpg';

              return (
              <div
                key={project._id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '2px solid #f3f4f6',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'relative', height: '256px' }}>
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '50px',
                        fontSize: '14px',
                        fontWeight: 500,
                        textTransform: 'capitalize',
                        backgroundColor: statusColors[project.status].bg,
                        color: statusColors[project.status].text,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#888888',
                      fontSize: '14px',
                      marginBottom: '12px',
                    }}
                  >
                    <MapPin style={{ height: '16px', width: '16px' }} />
                    {project.location}
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#111111', marginBottom: '12px' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#666666', marginBottom: '24px', lineHeight: 1.6 }}>
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  {project.impactMetrics && (
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '16px',
                        paddingTop: '16px',
                        borderTop: '1px solid #f3f4f6',
                      }}
                    >
                      {project.impactMetrics?.map((metric: { label: string; value: string }) => (
                        <div key={metric.label} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '20px', fontWeight: 700, color: '#4CAF50' }}>
                            {metric.value}
                          </div>
                          <div style={{ fontSize: '12px', color: '#888888' }}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Partner With Us */}
      <section style={{ padding: '80px 0', backgroundColor: '#111111', color: '#ffffff' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '24px' }}>
                Partner With Us
              </h2>
              <p style={{ color: '#cccccc', fontSize: '18px', marginBottom: '24px', lineHeight: 1.7 }}>
                Are you an organization looking to make a difference? We welcome
                partnerships with businesses, NGOs, government agencies, and
                individuals who share our vision.
              </p>
              <p style={{ color: '#cccccc', fontSize: '18px', lineHeight: 1.7 }}>
                Together, we can scale our impact and create lasting change for
                communities across Ghana and beyond.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
              <a
                href="mailto:takacycleinnovations@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 32px',
                  backgroundColor: '#4CAF50',
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: '50px',
                  textDecoration: 'none',
                }}
              >
                Get in Touch
              </a>
              <a
                href="/support-us"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 32px',
                  border: '2px solid #ffffff',
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: '50px',
                  textDecoration: 'none',
                }}
              >
                Support Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

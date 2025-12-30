import { Metadata } from 'next';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ImageSlideshow } from '@/components/shared/ImageSlideshow';
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
      <section className="py-12 sm:py-16 lg:py-20 bg-[#E8F5E9]">
        <Container>
          <div className="max-w-[800px]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5">
              Our Projects
            </h1>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              Discover the initiatives we&apos;re working on to transform waste
              management in Ghana. From community programs to educational
              campaigns, every project brings us closer to a cleaner Africa.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project: any) => {
              // Combine featured image with gallery images for slideshow
              const allImages = [
                project.featuredImage,
                ...(project.gallery || []),
              ].filter(Boolean);

              const singleImageUrl = project.featuredImage
                ? urlFor(project.featuredImage).width(800).height(512).url()
                : '/images/placeholder-project.jpg';

              return (
              <div
                key={project._id}
                className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden"
              >
                <div className="relative h-48 sm:h-64">
                  {allImages.length > 1 ? (
                    <ImageSlideshow images={allImages} alt={project.title} interval={4000} />
                  ) : (
                    <Image
                      src={singleImageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className="px-3 py-1 rounded-full text-sm font-medium capitalize"
                      style={{
                        backgroundColor: statusColors[project.status]?.bg || '#f5f5f5',
                        color: statusColors[project.status]?.text || '#666666',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-[#888888] text-sm mb-3">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#666666] mb-5 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  {project.impactMetrics && (
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-100">
                      {project.impactMetrics?.map((metric: { label: string; value: string }) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-lg sm:text-xl font-bold text-[#4CAF50]">
                            {metric.value}
                          </div>
                          <div className="text-xs text-[#888888]">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-[#111111] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                Partner With Us
              </h2>
              <p className="text-[#cccccc] text-base sm:text-lg mb-5 leading-relaxed">
                Are you an organization looking to make a difference? We welcome
                partnerships with businesses, NGOs, government agencies, and
                individuals who share our vision.
              </p>
              <p className="text-[#cccccc] text-base sm:text-lg leading-relaxed">
                Together, we can scale our impact and create lasting change for
                communities across Ghana and beyond.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <a
                href="mailto:takacycleinnovations@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#4CAF50] text-white font-semibold rounded-full hover:bg-[#43A047] transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/support-us"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
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

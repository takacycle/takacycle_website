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
      <section className="pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 bg-[#E8F5E9]">
        <Container>
          <div className="max-w-[800px]">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#111111] mb-4 sm:mb-5">
              Our Projects
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#666666] leading-relaxed">
              Discover the initiatives we&apos;re working on to transform waste
              management in Ghana. From community programs to educational
              campaigns, every project brings us closer to a cleaner Africa.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project: any) => {
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
                <div className="relative h-44 sm:h-56 lg:h-64">
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
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium capitalize"
                      style={{
                        backgroundColor: statusColors[project.status]?.bg || '#f5f5f5',
                        color: statusColors[project.status]?.text || '#666666',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[#888888] text-xs sm:text-sm mb-2 sm:mb-3">
                    <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {project.location}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#111111] mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#666666] mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  {project.impactMetrics && (
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
                      {project.impactMetrics?.map((metric: { label: string; value: string }) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-base sm:text-lg lg:text-xl font-bold text-[#4CAF50]">
                            {metric.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-[#888888]">
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
      <section className="pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-20 bg-[#111111] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5">
                Partner With Us
              </h2>
              <p className="text-[#cccccc] text-sm sm:text-base lg:text-lg mb-4 sm:mb-5 leading-relaxed">
                Are you an organization looking to make a difference? We welcome
                partnerships with businesses, NGOs, government agencies, and
                individuals who share our vision.
              </p>
              <p className="text-[#cccccc] text-sm sm:text-base lg:text-lg leading-relaxed">
                Together, we can scale our impact and create lasting change for
                communities across Ghana and beyond.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-end">
              <a
                href="mailto:takacycleinnovations@gmail.com"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#4CAF50] text-white font-semibold rounded-full hover:bg-[#43A047] transition-colors text-sm sm:text-base"
              >
                Get in Touch
              </a>
              <a
                href="/support-us"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base"
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

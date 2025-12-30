import { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { client, urlFor } from '../../../../sanity/lib/client';
import { siteSettingsQuery } from '../../../../sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Learn about TakaCycle Innovations - our mission to transform waste management in Ghana and Africa through innovative recycling solutions.',
};

const sdgGoals = [
  {number: 3, image: '/images/sdg/sdg3.png', alt: 'SDG 3 - Good Health and Well-Being'},
  {number: 6, image: '/images/sdg/sdg6.png', alt: 'SDG 6 - Clean Water and Sanitation'},
  { number: 11, image: '/images/sdg/sdg11.png', alt: 'SDG 11 - Sustainable Cities and Communities' },
  { number: 13, image: '/images/sdg/sdg13.png', alt: 'SDG 13 - Climate Action' },
  {number: 14, image: '/images/sdg/sdg14.png', alt: 'SDG 14 - Life Below Water'},
  { number: 15, image: '/images/sdg/sdg15.png', alt: 'SDG 15 - Life on Land' },
];

async function getSiteSettings() {
  return client.fetch(siteSettingsQuery);
}

export default async function OurStoryPage() {
  const siteSettings = await getSiteSettings();

  const missionStatement = siteSettings?.missionStatement ||
    'Educating individuals, communities, and stakeholders on recycling plastic waste by providing innovative solutions with passion and excellence, thereby maintaining an eco-friendly space.';

  const visionStatement = siteSettings?.visionStatement ||
    'We envision an Africa where waste is seen as a resource, not a problem. A continent where circular economy principles drive sustainable development and create opportunities for all.';

  const impactStats = siteSettings?.impactStats || [
    { value: '50+', label: 'Communities Reached' },
    { value: '10K+', label: 'Kg Plastic Collected' },
    { value: '100+', label: 'People Trained' },
    { value: '5+', label: 'Partner Organizations' },
  ];

  const storyImageUrl = siteSettings?.storyImage
    ? urlFor(siteSettings.storyImage).width(1000).height(1250).url()
    : 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop';

  const missionImageUrl = siteSettings?.missionImage
    ? urlFor(siteSettings.missionImage).width(800).height(600).url()
    : '/images/ourmission.png';

  const visionImageUrl = siteSettings?.visionImage
    ? urlFor(siteSettings.visionImage).width(1000).height(562).url()
    : 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop';

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-5">
                The TakaCycle Story
              </h1>
              <p className="text-base sm:text-lg text-[#666666] mb-5 leading-relaxed">
                TakaCycle Innovations was founded as a solution to the plastic
                menace of Ghana and Africa at large. Inspired by the United
                Nation&apos;s Sustainable Development Goals, we saw an opportunity
                to help curb this problem while making revenue in the process.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                Our name &quot;TakaCycle&quot; combines &quot;Taka&quot; (Swahili for waste/trash)
                with &quot;Cycle&quot; - representing our mission to transform waste
                into valuable resources through the circular economy.
              </p>

              {/* SDG Goals - Using actual images */}
              <div className="mt-6 lg:mt-8 grid grid-cols-3 sm:grid-cols-6 gap-3">
                {sdgGoals.map((goal) => (
                  <div
                    key={goal.number}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden relative"
                  >
                    <Image
                      src={goal.image}
                      alt={goal.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] max-w-[350px] mx-auto lg:max-w-none rounded-3xl overflow-hidden">
                <Image
                  src={storyImageUrl}
                  alt="Recycling in action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section - Redesigned with image */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-5">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                {missionStatement}
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src={missionImageUrl}
                  alt="Our Mission - Woman smiling with sustainable products"
                  fill
                  className="object-cover object-right-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative aspect-video rounded-3xl overflow-hidden">
                <Image
                  src={visionImageUrl}
                  alt="Sustainable future"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-5">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                {visionStatement}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#111111] text-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 lg:mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {impactStats.map((stat: { value: string; label: string; _key?: string }) => (
              <div key={stat._key || stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8CD867] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#999999] text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

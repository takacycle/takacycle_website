import { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { TeamCard } from '@/components/team/TeamCard';
import { JoinCommunity } from '@/components/shared/JoinCommunity';
import { client } from '../../../../sanity/lib/client';
import { allTeamMembersQuery } from '../../../../sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the passionate team behind TakaCycle Innovations - dedicated individuals working to transform waste management in Africa.',
};

async function getTeamMembers() {
  return client.fetch(allTeamMembersQuery);
}

export default async function OurTeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-64 sm:h-80 lg:h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop"
          alt="Wind turbines at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white italic">
            Our Team
          </h1>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-10 sm:py-14 lg:py-16">
        <Container>
          <p className="text-base sm:text-lg lg:text-xl text-[#444444] max-w-[900px] mx-auto text-center leading-relaxed">
            We are a dynamic team of highly motivated individuals with a united
            mission of saving the planet and making the Earth a safe place for
            us and future generations. With diverse backgrounds, we forge
            together to strive for success.
          </p>
        </Container>
      </section>

      {/* Team Grid */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member: any) => (
              <TeamCard key={member._id} member={member} />
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

      {/* Join Us CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#4CAF50]">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Want to join our team?
            </h2>
            <p className="text-base sm:text-lg text-[#E8F5E9] mb-8 max-w-[600px] mx-auto leading-relaxed">
              We&apos;re always looking for passionate individuals who share our
              vision for a sustainable Africa. Get in touch with us!
            </p>
            <a
              href="mailto:takacycleinnovations@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-white text-[#4CAF50] font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

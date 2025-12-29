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
      <section style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop"
          alt="Wind turbines at sunset"
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
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ fontSize: '56px', fontWeight: 700, color: '#ffffff', fontStyle: 'italic' }}>
            Our Team
          </h1>
        </div>
      </section>

      {/* Team Introduction */}
      <section style={{ padding: '60px 0' }}>
        <Container>
          <p
            style={{
              fontSize: '20px',
              color: '#444444',
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center',
              lineHeight: 1.7,
            }}
          >
            We are a dynamic team of highly motivated individuals with a united
            mission of saving the planet and making the Earth a safe place for
            us and future generations. With diverse backgrounds, we forge
            together to strive for success.
          </p>
        </Container>
      </section>

      {/* Team Grid */}
      <section style={{ paddingBottom: '80px' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {teamMembers.map((member: any) => (
              <TeamCard key={member._id} member={member} />
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

      {/* Join Us CTA */}
      <section style={{ padding: '80px 0', backgroundColor: '#4CAF50' }}>
        <Container>
          <div style={{ textAlign: 'center', color: '#ffffff' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '16px' }}>
              Want to join our team?
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#E8F5E9',
                marginBottom: '32px',
                maxWidth: '600px',
                margin: '0 auto 32px',
                lineHeight: 1.6,
              }}
            >
              We&apos;re always looking for passionate individuals who share our
              vision for a sustainable Africa. Get in touch with us!
            </p>
            <a
              href="mailto:takacycleinnovations@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                backgroundColor: '#ffffff',
                color: '#4CAF50',
                fontWeight: 600,
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '16px',
              }}
            >
              Contact Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

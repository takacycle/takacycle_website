import { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Learn about TakaCycle Innovations - our mission to transform waste management in Ghana and Africa through innovative recycling solutions.',
};

const sdgGoals = [
  { number: 11, image: '/images/sdg/sdg11.png', alt: 'SDG 11 - Sustainable Cities and Communities' },
  { number: 13, image: '/images/sdg/sdg13.png', alt: 'SDG 13 - Climate Action' },
  { number: 15, image: '/images/sdg/sdg15.png', alt: 'SDG 15 - Life on Land' },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>
                The TakaCycle Story
              </h1>
              <p style={{ fontSize: '18px', color: '#666666', marginBottom: '24px', lineHeight: 1.7 }}>
                TakaCycle Innovations was founded as a solution to the plastic
                menace of Ghana and Africa at large. Inspired by the United
                Nation&apos;s Sustainable Development Goals, we saw an opportunity
                to help curb this problem while making revenue in the process.
              </p>
              <p style={{ fontSize: '18px', color: '#666666', lineHeight: 1.7 }}>
                Our name &quot;TakaCycle&quot; combines &quot;Taka&quot; (Swahili for waste/trash)
                with &quot;Cycle&quot; - representing our mission to transform waste
                into valuable resources through the circular economy.
              </p>

              {/* SDG Goals - Using actual images */}
              <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
                {sdgGoals.map((goal) => (
                  <div
                    key={goal.number}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src={goal.image}
                      alt={goal.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: '24px', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop"
                  alt="Recycling in action"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section - Redesigned with image */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '18px', color: '#666666', lineHeight: 1.8 }}>
                Educating individuals, communities, and stakeholders on recycling plastic waste
                by providing innovative solutions with passion and excellence, thereby maintaining
                an eco-friendly space.
              </p>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '24px', overflow: 'hidden' }}>
                <Image
                  src="/images/ourmission.png"
                  alt="Our Mission - Woman smiling with sustainable products"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'right center' }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#F5F5F5' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '24px', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop"
                  alt="Sustainable future"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>
                Our Vision
              </h2>
              <p style={{ fontSize: '18px', color: '#666666', marginBottom: '24px', lineHeight: 1.7 }}>
                We envision an Africa where waste is seen as a resource, not a
                problem. A continent where circular economy principles drive
                sustainable development and create opportunities for all.
              </p>
              <p style={{ fontSize: '18px', color: '#666666', lineHeight: 1.7 }}>
                By 2030, we aim to have diverted millions of tons of plastic
                waste from landfills and oceans, created thousands of green
                jobs, and established TakaCycle as the leading waste management
                innovator in West Africa.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Impact Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#111111', color: '#ffffff' }}>
        <Container>
          <h2 style={{ fontSize: '40px', fontWeight: 700, textAlign: 'center', marginBottom: '48px' }}>
            Our Impact
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {[
              { value: '50+', label: 'Communities Reached' },
              { value: '10K+', label: 'Kg Plastic Collected' },
              { value: '100+', label: 'People Trained' },
              { value: '5+', label: 'Partner Organizations' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', fontWeight: 700, color: '#8CD867', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#999999', fontSize: '16px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

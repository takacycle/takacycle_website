'use client';

import Image from 'next/image';
import Link from 'next/link';

interface SiteSettings {
  tagline?: string;
}

interface HeroProps {
  siteSettings?: SiteSettings;
}

export function Hero({ siteSettings }: HeroProps) {
  const tagline = siteSettings?.tagline || 'Pioneering Innovative Recycling Solutions';

  return (
    <section style={{ padding: '80px 0 100px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          {/* Text Content */}
          <div>
            <h1 style={{ fontSize: '56px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#111111' }}>{tagline}</span>
              <br />
              <span style={{ color: '#4CAF50' }}>for Africa</span>
            </h1>
            <p style={{
              marginTop: '32px',
              fontSize: '18px',
              color: '#666666',
              maxWidth: '500px',
              lineHeight: 1.7
            }}>
              We are redefining waste management across the continent, closing
              the loop on waste and turning challenges into opportunities
            </p>
            <div style={{ marginTop: '40px' }}>
              <Link
                href="/our-story"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '18px 36px',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: '#ffffff',
                  backgroundColor: '#4CAF50',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(76, 175, 80, 0.35)',
                }}
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              aspectRatio: '4/5',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}>
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                alt="African woman embracing sustainability"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            {/* Decorative element */}
            <div
              style={{
                position: 'absolute',
                zIndex: -1,
                top: '32px',
                right: '-32px',
                width: '100%',
                height: '100%',
                backgroundColor: '#E8F5E9',
                borderRadius: '24px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

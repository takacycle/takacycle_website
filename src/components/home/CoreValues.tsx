'use client';

import { coreValues } from '@/data/services';

export function CoreValues() {
  return (
    <section style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2000&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.75), rgba(0,0,0,0.65))'
        }} />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#ffffff', marginBottom: '60px' }}>
          Our Core Values
        </h2>

        {/* Values Grid - 3 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '50px 60px',
        }}>
          {coreValues.map((value) => (
            <div key={value.title}>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                {value.title}
              </h3>
              <p style={{ fontSize: '16px', color: '#cccccc', lineHeight: 1.7, margin: 0 }}>
                {value.description}
              </p>
            </div>
          ))}

          {/* SPICED tagline */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: '26px', color: '#ffffff', lineHeight: 1.4, margin: 0 }}>
              We are{' '}
              <span style={{ color: '#8CD867', fontWeight: 700 }}>SPICED</span> to make
              the world a better place
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

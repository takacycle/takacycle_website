'use client';

import { Recycle, Factory, Sparkles, Leaf, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Recycle: <Recycle style={{ height: '36px', width: '36px' }} />,
  Factory: <Factory style={{ height: '36px', width: '36px' }} />,
  Sparkles: <Sparkles style={{ height: '36px', width: '36px' }} />,
  Leaf: <Leaf style={{ height: '36px', width: '36px' }} />,
};

export function WhatWeDo() {
  return (
    <section style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '50px',
        }}>
          <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#111111', margin: 0 }}>
            What We Do
          </h2>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            borderRadius: '16px',
            border: 'none',
            backgroundColor: '#111111',
            cursor: 'pointer',
          }}>
            <ArrowRight style={{ height: '24px', width: '24px', color: '#ffffff' }} />
          </button>
        </div>

        {/* Cards - Horizontal Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}>
          {services.map((service, index) => (
            <div
              key={service.title}
              style={{
                padding: '32px 28px',
                borderRadius: '24px',
                backgroundColor: '#ffffff',
                border: '2px solid #e8e8e8',
                transition: 'all 0.3s',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  marginBottom: '28px',
                  backgroundColor: index === 0 ? '#E8F5E9' : '#f5f5f5',
                  color: '#333333',
                }}
              >
                {iconMap[service.icon]}
              </div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#111111',
                marginBottom: '16px',
                lineHeight: 1.3,
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#666666',
                lineHeight: 1.7,
                margin: 0,
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

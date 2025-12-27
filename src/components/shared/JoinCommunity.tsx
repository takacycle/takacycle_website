'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { socialLinks } from '@/data/navigation';

export function JoinCommunity() {
  return (
    <div
      style={{
        backgroundColor: '#E8F5E9',
        borderRadius: '24px',
        padding: '48px 60px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '40px',
        alignItems: 'center',
      }}
    >
      <div>
        <h3 style={{ fontSize: '32px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
          Join the TakaCycle Community
        </h3>
        <p style={{ fontSize: '17px', color: '#444444', lineHeight: 1.7, marginBottom: '28px', maxWidth: '550px' }}>
          Our WhatsApp community of fellow change makers and earth lovers with a united passion
          of saving the planet and keeping it safe for future generations. It&apos;s completely free
          and open to new members
        </p>
        <Link
          href={socialLinks.whatsapp || 'https://chat.whatsapp.com/D5DpkL03DpE20YEqtrYT3U'}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 28px',
            backgroundColor: '#4CAF50',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: '16px',
            borderRadius: '50px',
            textDecoration: 'none',
          }}
        >
          Join our community
          <ArrowRight style={{ height: '20px', width: '20px' }} />
        </Link>
      </div>
      <div
        style={{
          width: '140px',
          height: '140px',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/icons/whatsapp.webp"
          alt="WhatsApp"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

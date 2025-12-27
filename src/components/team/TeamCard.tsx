'use client';

import Image from 'next/image';
import { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '2px solid #f3f4f6',
        overflow: 'hidden',
        transition: 'all 0.2s',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#111111', marginBottom: '4px' }}>
          {member.name}
        </h3>
        <p style={{ color: '#4CAF50', fontWeight: 500, marginBottom: '12px', fontSize: '15px' }}>
          {member.role}
        </p>
        <p style={{ color: '#666666', fontSize: '14px', lineHeight: 1.6 }}>
          {member.bio}
        </p>
      </div>
    </div>
  );
}

'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'highlighted';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  style = {},
}: CardProps) {
  const baseStyles: React.CSSProperties = {
    borderRadius: '16px',
    transition: 'all 0.2s',
    overflow: 'hidden',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: '#ffffff',
      border: '2px solid #f3f4f6',
    },
    elevated: {
      backgroundColor: '#ffffff',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    },
    outlined: {
      backgroundColor: 'transparent',
      border: '2px solid #e5e7eb',
    },
    highlighted: {
      backgroundColor: '#E8F5E9',
      border: '2px solid #C8E6C9',
    },
  };

  const paddingStyles: Record<string, React.CSSProperties> = {
    none: {},
    sm: { padding: '16px' },
    md: { padding: '24px' },
    lg: { padding: '32px' },
  };

  return (
    <div
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...paddingStyles[padding],
        ...style,
      }}
    >
      {children}
    </div>
  );
}

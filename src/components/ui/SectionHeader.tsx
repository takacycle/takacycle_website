'use client';

import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

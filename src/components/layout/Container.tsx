'use client';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'small' | 'large';
}

export function Container({ children, size = 'default' }: ContainerProps) {
  const maxWidths = {
    default: 'max-w-screen-xl',
    small: 'max-w-screen-lg',
    large: 'max-w-screen-2xl',
  };

  return (
    <div className={`${maxWidths[size]} mx-auto px-4 sm:px-6`}>
      {children}
    </div>
  );
}

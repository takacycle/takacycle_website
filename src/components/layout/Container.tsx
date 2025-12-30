'use client';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'small' | 'large';
}

export function Container({
  children,
  size = 'default',
}: ContainerProps) {
  const maxWidths = {
    default: '1280px',
    small: '1024px',
    large: '1536px',
  };

  return (
    <div
      className="mx-auto w-full px-4 sm:px-6 lg:px-10"
      style={{ maxWidth: maxWidths[size] }}
    >
      {children}
    </div>
  );
}

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
      style={{
        margin: '0 auto',
        width: '100%',
        padding: '0 40px',
        maxWidth: maxWidths[size],
      }}
    >
      {children}
    </div>
  );
}

'use client';

import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500';

  const variants = {
    primary: 'text-white shadow-lg shadow-green-500/25',
    secondary: 'text-green-700',
    outline: 'border-2 text-green-600',
    ghost: 'text-green-600',
  };

  const variantStyles = {
    primary: { backgroundColor: '#4CAF50' },
    secondary: { backgroundColor: '#E8F5E9' },
    outline: { borderColor: '#4CAF50', backgroundColor: 'transparent' },
    ghost: { backgroundColor: 'transparent' },
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          style={variantStyles[variant]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} style={variantStyles[variant]}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={variantStyles[variant]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

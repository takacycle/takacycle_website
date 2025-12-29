'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';

interface HeaderProps {
  siteName?: string;
}

export function Header({ siteName = 'TakaCycle Innovations' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e5e5' }} className="sticky top-0 z-50">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '90px' }}>
          {/* Logo - Much bigger */}
          <Link href="/" style={{ flexShrink: 0 }}>
            <Image
              src="/images/logos/TAKACYCLEPRIMARY-01.png"
              alt={siteName}
              width={220}
              height={200}
              style={{ height: '200px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex" style={{ alignItems: 'center' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
              borderRadius: '50px',
              padding: '8px 16px',
              gap: '4px'
            }}>
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: 500,
                    borderRadius: '50px',
                    transition: 'all 0.2s',
                    backgroundColor: pathname === item.href ? '#ffffff' : 'transparent',
                    color: pathname === item.href ? '#4CAF50' : '#333333',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/support-us"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: '#4CAF50',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(76, 175, 80, 0.4)',
              }}
            >
              Support us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            style={{ padding: '8px', borderRadius: '8px', border: 'none', background: 'transparent' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X style={{ height: '32px', width: '32px', color: '#333' }} />
            ) : (
              <Menu style={{ height: '32px', width: '32px', color: '#333' }} />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden" style={{ padding: '20px 0', borderTop: '1px solid #e5e5e5' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: '16px 20px',
                    fontSize: '18px',
                    fontWeight: 500,
                    borderRadius: '12px',
                    backgroundColor: pathname === item.href ? '#E8F5E9' : 'transparent',
                    color: pathname === item.href ? '#4CAF50' : '#333333',
                    textDecoration: 'none',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div style={{ paddingTop: '16px' }}>
                <Link
                  href="/support-us"
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    padding: '16px 24px',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#ffffff',
                    backgroundColor: '#4CAF50',
                    borderRadius: '50px',
                    textDecoration: 'none',
                  }}
                >
                  Support us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

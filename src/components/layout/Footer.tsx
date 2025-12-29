'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { footerNavigation, socialLinks, contactInfo } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#2D5016' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        {/* Main Footer Content */}
        <div style={{ padding: '60px 0 40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1.5fr',
            gap: '40px',
          }}>
            {/* Brand Column */}
            <div>
              <h2 style={{
                fontSize: '28px',
                fontWeight: 700,
                fontStyle: 'italic',
                color: '#ffffff',
                marginBottom: '0',
                lineHeight: 1.2,
              }}>
                TakaCycle
              </h2>
              <h2 style={{
                fontSize: '28px',
                fontWeight: 700,
                fontStyle: 'italic',
                color: '#ffffff',
                marginBottom: '0',
                lineHeight: 1.2,
              }}>
                Innovations
              </h2>
            </div>

            {/* Explore Column */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '20px'
              }}>
                Explore
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {footerNavigation.explore.slice(1).map((item) => (
                  <li key={item.href} style={{ marginBottom: '12px' }}>
                    <Link
                      href={item.href}
                      style={{ color: '#C8E6C9', fontSize: '15px', textDecoration: 'none' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '20px'
              }}>
                Legal
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <Link
                    href="/privacy-policy"
                    style={{ color: '#C8E6C9', fontSize: '15px', textDecoration: 'none' }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link
                    href="/terms-of-service"
                    style={{ color: '#C8E6C9', fontSize: '15px', textDecoration: 'none' }}
                  >
                    Terms of Services
                  </Link>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link
                    href="/documentation"
                    style={{ color: '#C8E6C9', fontSize: '15px', textDecoration: 'none' }}
                  >
                    Documentations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '20px'
              }}>
                Social Media
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <a
                    href={socialLinks.instagram || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#C8E6C9', fontSize: '15px', textDecoration: 'none' }}
                  >
                    Instagram
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a
                    href={socialLinks.linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#C8E6C9', fontSize: '15px', textDecoration: 'none' }}
                  >
                    LinkedIn
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a
                    href={socialLinks.X || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#C8E6C9', fontSize: '15px', textDecoration: 'none' }}
                  >
                    X (Formerly Twitter)
                  </a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#C8E6C9', fontSize: '15px', textDecoration: 'none' }}
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            {/* About & Contact Column */}
            <div>
              <p style={{
                color: '#C8E6C9',
                fontSize: '14px',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}>
                TakaCycle Innovations is a nonprofit, tax-exempt charitable organization
                (Registration number CG063420823) under the Companies Act, 2019 (Act 992), Ghana.
                Donations are tax-deductible as allowed by law.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Mail style={{ height: '18px', width: '18px', color: '#C8E6C9' }} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  style={{ color: '#C8E6C9', fontSize: '14px', textDecoration: 'underline' }}
                >
                  {contactInfo.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone style={{ height: '18px', width: '18px', color: '#C8E6C9' }} />
                <span style={{ color: '#C8E6C9', fontSize: '14px' }}>
                  +233 24 857 9906 / +233 55 085 0691
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', padding: '20px 0' }}>
          <p style={{ textAlign: 'center', color: '#8CD867', fontSize: '14px', margin: 0 }}>
            &copy; {currentYear} TakaCycle Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

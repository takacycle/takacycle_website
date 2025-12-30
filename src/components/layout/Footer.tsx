'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { footerNavigation } from '@/data/navigation';

interface SiteSettings {
  siteName?: string;
  email?: string;
  phone?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    whatsapp?: string;
  };
}

interface FooterProps {
  siteSettings?: SiteSettings;
}

export function Footer({ siteSettings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const email = siteSettings?.email || 'takacycleinnovations@gmail.com';
  const socialLinks = siteSettings?.socialLinks || {};

  return (
    <footer className="bg-[#2D5016]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Footer Content */}
        <div className="py-10 lg:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h2 className="text-2xl lg:text-[28px] font-bold italic text-white leading-tight">
                TakaCycle
              </h2>
              <h2 className="text-2xl lg:text-[28px] font-bold italic text-white leading-tight">
                Innovations
              </h2>
            </div>

            {/* Explore Column */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4">
                Explore
              </h3>
              <ul className="space-y-3">
                {footerNavigation.explore.slice(1).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#C8E6C9] text-[15px] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-[#C8E6C9] text-[15px] hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-[#C8E6C9] text-[15px] hover:text-white transition-colors"
                  >
                    Terms of Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="text-[#C8E6C9] text-[15px] hover:text-white transition-colors"
                  >
                    Documentations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4">
                Social Media
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={socialLinks.instagram || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8E6C9] text-[15px] hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={socialLinks.linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8E6C9] text-[15px] hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={socialLinks.twitter || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8E6C9] text-[15px] hover:text-white transition-colors"
                  >
                    X (Formerly Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href={socialLinks.facebook || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8E6C9] text-[15px] hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* About & Contact Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-[#C8E6C9] text-sm leading-relaxed mb-5">
                TakaCycle Innovations is a nonprofit, tax-exempt charitable organization
                (Registration number CG063420823) under the Companies Act, 2019 (Act 992), Ghana.
                Donations are tax-deductible as allowed by law.
              </p>

              <div className="flex items-center gap-2.5 mb-3">
                <Mail className="h-[18px] w-[18px] text-[#C8E6C9] flex-shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="text-[#C8E6C9] text-sm underline hover:text-white transition-colors break-all"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="h-[18px] w-[18px] text-[#C8E6C9] flex-shrink-0 mt-0.5" />
                <span className="text-[#C8E6C9] text-sm">
                  +233 24 857 9906 / +233 55 085 0691
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/15 py-5">
          <p className="text-center text-[#8CD867] text-sm">
            &copy; {currentYear} TakaCycle Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

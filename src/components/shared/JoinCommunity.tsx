'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { socialLinks } from '@/data/navigation';

export function JoinCommunity() {
  return (
    <div className="bg-[#E8F5E9] rounded-3xl p-6 sm:p-10 lg:p-12">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4">
            Join the TakaCycle Community
          </h3>
          <p className="text-base sm:text-[17px] text-[#444444] leading-relaxed mb-6 max-w-[550px]">
            Our WhatsApp community of fellow change makers and earth lovers with a united passion
            of saving the planet and keeping it safe for future generations. It&apos;s completely free
            and open to new members
          </p>
          <Link
            href={socialLinks.whatsapp || 'https://chat.whatsapp.com/D5DpkL03DpE20YEqtrYT3U'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#4CAF50] text-white font-semibold rounded-full hover:bg-[#43A047] transition-colors"
          >
            Join our community
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-[140px] lg:h-[140px] rounded-3xl overflow-hidden relative flex-shrink-0 order-first sm:order-last">
          <Image
            src="/images/icons/whatsapp.webp"
            alt="WhatsApp"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

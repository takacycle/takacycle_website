'use client';

import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../../sanity/lib/client';

interface SiteSettings {
  tagline?: string;
  taglineAccent?: string;
  heroImage?: any;
}

interface HeroProps {
  siteSettings?: SiteSettings;
}

export function Hero({ siteSettings }: HeroProps) {
  const tagline = siteSettings?.tagline || 'Pioneering Innovative Recycling Solutions';
  const taglineAccent = siteSettings?.taglineAccent || 'for Africa';
  const heroImageUrl = siteSettings?.heroImage
    ? urlFor(siteSettings.heroImage).width(1000).height(1250).url()
    : 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop';

  return (
    <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-bold leading-tight tracking-tight">
              <span className="text-[#111111]">{tagline}</span>
              {taglineAccent && (
                <>
                  <br />
                  <span className="text-[#4CAF50]">{taglineAccent}</span>
                </>
              )}
            </h1>
            <p className="mt-5 sm:mt-6 lg:mt-8 text-base sm:text-lg text-[#666666] max-w-[500px] mx-auto lg:mx-0 leading-relaxed">
              We are redefining waste management across the continent, closing
              the loop on waste and turning challenges into opportunities
            </p>
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <Link
                href="/our-story"
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white bg-[#4CAF50] rounded-full shadow-[0_8px_24px_rgba(76,175,80,0.35)] hover:bg-[#43A047] transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] max-w-[320px] sm:max-w-[400px] mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={heroImageUrl}
                alt="African woman embracing sustainability"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

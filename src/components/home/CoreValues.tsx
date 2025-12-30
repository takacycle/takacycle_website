'use client';

import { coreValues } from '@/data/services';

export function CoreValues() {
  return (
    <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-24 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2000&auto=format&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 lg:mb-14">
          Our Core Values
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-x-14 lg:gap-y-10">
          {coreValues.map((value) => (
            <div key={value.title}>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-[#cccccc] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}

          {/* SPICED tagline */}
          <div className="flex items-center sm:col-span-2 lg:col-span-1 pt-2">
            <p className="text-lg sm:text-xl lg:text-2xl text-white leading-snug">
              We are{' '}
              <span className="text-[#8CD867] font-bold">SPICED</span> to make
              the world a better place
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

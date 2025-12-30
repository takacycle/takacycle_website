'use client';

import { coreValues } from '@/data/services';

export function CoreValues() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
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
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 sm:mb-14 lg:mb-16">
          Our Core Values
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-x-14 lg:gap-y-12">
          {coreValues.map((value) => (
            <div key={value.title}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-[#cccccc] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}

          {/* SPICED tagline */}
          <div className="flex items-center sm:col-span-2 lg:col-span-1">
            <p className="text-xl sm:text-2xl text-white leading-snug">
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

'use client';

import { Recycle, Factory, Sparkles, Leaf } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Recycle: <Recycle className="h-8 w-8 sm:h-9 sm:w-9" />,
  Factory: <Factory className="h-8 w-8 sm:h-9 sm:w-9" />,
  Sparkles: <Sparkles className="h-8 w-8 sm:h-9 sm:w-9" />,
  Leaf: <Leaf className="h-8 w-8 sm:h-9 sm:w-9" />,
};

interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

interface WhatWeDoProps {
  services: Service[];
}

export function WhatWeDo({ services }: WhatWeDoProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
            What We Do
          </h2>
        </div>

        {/* Cards - Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-gray-200 transition-all min-h-0 sm:min-h-[280px] lg:min-h-[320px] flex flex-col"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-5 sm:mb-7 text-[#333333] ${
                  index === 0 ? 'bg-[#E8F5E9]' : 'bg-[#f5f5f5]'
                }`}
              >
                {iconMap[service.icon]}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#111111] mb-3 sm:mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-[#666666] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

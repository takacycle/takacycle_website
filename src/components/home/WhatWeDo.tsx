'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

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

const iconPaths: Record<string, string> = {
  Recycle: '/assets/bio-energy.svg',
  Factory: '/assets/wind-power-01.svg',
  Sparkles: '/assets/falling-star.svg',
  Leaf: '/assets/save-energy-02.svg',
};

export function WhatWeDo({ services }: WhatWeDoProps) {
  const scrollContainer = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white pb-5 mt-4">
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="px-5 text-2xl sm:text-3xl font-bold text-center sm:text-left sm:mb-0">
            What We Do
          </h2>
        </div>
        <div className="p-4 rounded-lg">
          <div
            ref={scrollContainer}
            className="sm:flex sm:overflow-x-auto sm:space-x-6 sm:scroll-smooth hide-scrollbar sm:pb-0"
          >
            {services.map((service, index) => (
              <div
                key={service._id || index}
                className="flex-shrink-0 h-[252px] sm:h-[240px] w-full sm:w-[400px] rounded-lg bg-white p-4 mb-4 sm:mb-0 border border-brandTextGreen hover:bg-brandFadedGreen cursor-pointer"
              >
                <div className="text-left text-black">
                  <Image
                    src={iconPaths[service.icon] || '/assets/bio-energy.svg'}
                    height={40}
                    width={40}
                    alt="icon"
                    className="mb-2"
                  />
                  <h3 className="text-lg sm:text-xl font-bold font-alton mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

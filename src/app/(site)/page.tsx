import { Hero } from '@/components/home/Hero';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { CoreValues } from '@/components/home/CoreValues';
import { BlogPreview } from '@/components/home/BlogPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <CoreValues />
      <BlogPreview />
    </>
  );
}

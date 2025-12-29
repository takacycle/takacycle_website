import { Hero } from '@/components/home/Hero';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { CoreValues } from '@/components/home/CoreValues';
import { BlogPreview } from '@/components/home/BlogPreview';
import { client } from '../../../sanity/lib/client';
import { allServicesQuery, allBlogPostsQuery, siteSettingsQuery } from '../../../sanity/lib/queries';

async function getServices() {
  return client.fetch(allServicesQuery);
}

async function getBlogPosts() {
  return client.fetch(allBlogPostsQuery);
}

async function getSiteSettings() {
  return client.fetch(siteSettingsQuery);
}

export default async function Home() {
  const [services, blogPosts, siteSettings] = await Promise.all([
    getServices(),
    getBlogPosts(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Hero siteSettings={siteSettings} />
      <WhatWeDo services={services} />
      <CoreValues />
      <BlogPreview posts={blogPosts} />
    </>
  );
}

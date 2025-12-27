import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'dangers-of-plastic-waste',
    title: 'The Dangers of Plastic Waste',
    excerpt:
      'Learn all about the damage of plastic in the ecosystem and what we can do to combat this growing environmental crisis.',
    content: `
Plastic pollution has become one of the most pressing environmental issues of our time. Every year, millions of tons of plastic waste end up in our oceans, rivers, and landfills, causing devastating effects on wildlife and ecosystems.

## The Scale of the Problem

- Over 8 million tons of plastic enter our oceans each year
- Plastic takes up to 1,000 years to decompose
- Marine animals mistake plastic for food, leading to starvation and death
- Microplastics have been found in drinking water worldwide

## Impact on Ghana

In Ghana, plastic waste is particularly visible in urban areas. Open drains clogged with plastic contribute to flooding during rainy seasons. Coastal communities face increasing amounts of plastic washing up on beaches.

## What Can We Do?

1. **Reduce** single-use plastic consumption
2. **Reuse** plastic items whenever possible
3. **Recycle** properly through designated programs
4. **Support** organizations working on waste management

At TakaCycle, we're working every day to turn this challenge into an opportunity. Join us in making a difference.
    `,
    featuredImage:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop',
    author: 'TakaCycle Team',
    publishedAt: '2024-12-15',
    category: 'sustainability',
    tags: ['plastic', 'environment', 'pollution'],
    readTime: 5,
  },
  {
    slug: 'recycling-initiatives-ghana',
    title: 'Recycling Initiatives in Ghana',
    excerpt:
      'How communities are coming together to tackle waste through innovative recycling programs.',
    content: `
Ghana is witnessing a growing movement of recycling initiatives that are transforming how communities handle waste. From grassroots programs to social enterprises, the country is finding innovative ways to address the plastic crisis.

## Community-Led Programs

Local communities are taking the lead in establishing collection points and sorting centers. These initiatives not only clean up neighborhoods but also create income opportunities for residents.

## The Role of Youth

Young Ghanaians are at the forefront of the recycling movement. Student-led eco-clubs, youth environmental organizations, and social media campaigns are raising awareness and driving change.

## Challenges and Opportunities

While significant progress has been made, challenges remain. Limited infrastructure, lack of public awareness, and inadequate policy frameworks need to be addressed.

TakaCycle is proud to be part of this movement, working with communities to build a sustainable future.
    `,
    featuredImage:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
    author: 'TakaCycle Team',
    publishedAt: '2024-12-10',
    category: 'recycling',
    tags: ['ghana', 'recycling', 'community'],
    readTime: 4,
  },
  {
    slug: 'sustainable-living-tips',
    title: 'Sustainable Living Tips',
    excerpt:
      'Simple changes you can make in your daily life for a greener lifestyle.',
    content: `
Living sustainably doesn't have to be complicated or expensive. Small changes in our daily habits can make a significant difference for the environment.

## At Home

- Use reusable shopping bags instead of plastic bags
- Switch to LED light bulbs to save energy
- Compost food scraps instead of throwing them away
- Fix leaky faucets to conserve water

## While Shopping

- Choose products with minimal packaging
- Buy local products to reduce transportation emissions
- Bring your own containers for bulk items
- Support businesses with sustainable practices

## In Your Community

- Participate in local cleanup events
- Share resources with neighbors
- Advocate for better waste management services
- Start a community garden

Every action counts. Together, we can build a more sustainable future.
    `,
    featuredImage:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
    author: 'TakaCycle Team',
    publishedAt: '2024-12-05',
    category: 'sustainability',
    tags: ['lifestyle', 'tips', 'green-living'],
    readTime: 3,
  },
  {
    slug: 'climate-change-africa',
    title: 'Climate Change in Africa',
    excerpt:
      'Understanding the impact of climate change on the African continent and what we can do about it.',
    content: `
Africa contributes the least to global greenhouse gas emissions but is disproportionately affected by climate change. Understanding these impacts is crucial for building resilience and adaptation strategies.

## Key Impacts

- Rising temperatures affecting agriculture
- Changing rainfall patterns leading to droughts and floods
- Sea level rise threatening coastal communities
- Increased frequency of extreme weather events

## Ghana's Climate Challenge

Ghana faces unique climate challenges including coastal erosion, deforestation, and water scarcity in northern regions. These issues affect millions of people's livelihoods.

## Building Resilience

African countries are developing innovative solutions:
- Renewable energy projects
- Climate-smart agriculture
- Reforestation initiatives
- Circular economy approaches

At TakaCycle, we believe waste management is a crucial part of climate action. By reducing waste and promoting recycling, we can help mitigate climate change while creating economic opportunities.
    `,
    featuredImage:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop',
    author: 'TakaCycle Team',
    publishedAt: '2024-11-28',
    category: 'climate-change',
    tags: ['climate', 'africa', 'environment'],
    readTime: 6,
  },
];

export const blogCategories = [
  { id: 'all', label: 'All Blogs' },
  { id: 'climate-change', label: 'Climate Change' },
  { id: 'recycling', label: 'Recycling' },
  { id: 'sustainability', label: 'Sustainability' },
];

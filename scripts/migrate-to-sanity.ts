/**
 * Migration Script: Import existing data into Sanity
 *
 * Run with: npx tsx scripts/migrate-to-sanity.ts
 *
 * Requires SANITY_API_TOKEN environment variable with write access
 */

import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';

// Sanity client with write token
const client = createClient({
  projectId: 'bm60wl5t',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// ============ DATA TO MIGRATE ============

const teamMembers = [
  {
    name: 'Emmanuel Adindaa',
    role: 'Chief Executive Officer',
    bio: 'Emmanuel oversees the day-to-day operations, ensuring our recycling programs run efficiently and effectively.',
    imagePath: 'public/images/team/Emmanuel Adindaa.jpg',
    order: 1,
  },
  {
    name: 'Ruth Adindaa',
    role: 'Finance & Admin',
    bio: 'Ruth manages our financial operations and ensures organizational sustainability. A passionate environmental advocate dedicated to creating sustainable waste management solutions across Africa.',
    imagePath: 'public/images/team/RUTH ADINDAA.jpg',
    order: 2,
  },
  {
    name: 'Daniel Henaku',
    role: 'Head, Waste Management',
    bio: 'Daniel leads our waste management operations and oversees collection programs.',
    imagePath: 'public/images/team/Daniel Henaku.jpg',
    order: 3,
  },
  {
    name: 'Catherine Boasiko',
    role: 'Community Engagement & Education',
    bio: 'Catherine builds relationships with communities and coordinates our grassroots environmental education programs.',
    imagePath: 'public/images/team/Catherine Boasiko.jpg',
    order: 4,
  },
  {
    name: 'Jason Ahiable',
    role: 'Brand Management & Marketing',
    bio: 'Jason manages our communications strategy and raises awareness about plastic recycling initiatives.',
    imagePath: 'public/images/team/Jason Ahiable.jpg',
    order: 5,
  },
  {
    name: 'Nana Yeboah',
    role: 'Technology & Innovation',
    bio: 'Nana brings technical expertise to our recycling processes and innovation initiatives.',
    imagePath: 'public/images/team/Nana Yeboah.jpg',
    order: 6,
  },
  {
    name: 'Olivia Kwartemaa',
    role: 'Operations & Logistics',
    bio: 'Olivia leads our community engagement programs and develops partnerships with local organizations.',
    imagePath: 'public/images/team/Olivia Kwartemaa.jpg',
    order: 7,
  },
  {
    name: 'Suzetta Brocke',
    role: 'Business Development',
    bio: 'Suzetta develops strategic partnerships and collaborations to expand our impact across Ghana.',
    imagePath: 'public/images/team/Suzetta Brocke.jpg',
    order: 8,
  },
];

const blogPosts = [
  {
    title: 'The Dangers of Plastic Waste',
    slug: 'dangers-of-plastic-waste',
    excerpt: 'Learn all about the damage of plastic in the ecosystem and what we can do to combat this growing environmental crisis.',
    content: `Plastic pollution has become one of the most pressing environmental issues of our time. Every year, millions of tons of plastic waste end up in our oceans, rivers, and landfills, causing devastating effects on wildlife and ecosystems.

Over 8 million tons of plastic enter our oceans each year. Plastic takes up to 1,000 years to decompose. Marine animals mistake plastic for food, leading to starvation and death. Microplastics have been found in drinking water worldwide.

In Ghana, plastic waste is particularly visible in urban areas. Open drains clogged with plastic contribute to flooding during rainy seasons. Coastal communities face increasing amounts of plastic washing up on beaches.

At TakaCycle, we're working every day to turn this challenge into an opportunity. Join us in making a difference.`,
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop',
    category: 'sustainability',
    tags: ['plastic', 'environment', 'pollution'],
    author: 'TakaCycle Team',
    publishedAt: '2024-12-15',
    readTime: 5,
  },
  {
    title: 'Recycling Initiatives in Ghana',
    slug: 'recycling-initiatives-ghana',
    excerpt: 'How communities are coming together to tackle waste through innovative recycling programs.',
    content: `Ghana is witnessing a growing movement of recycling initiatives that are transforming how communities handle waste. From grassroots programs to social enterprises, the country is finding innovative ways to address the plastic crisis.

Local communities are taking the lead in establishing collection points and sorting centers. These initiatives not only clean up neighborhoods but also create income opportunities for residents.

Young Ghanaians are at the forefront of the recycling movement. Student-led eco-clubs, youth environmental organizations, and social media campaigns are raising awareness and driving change.

While significant progress has been made, challenges remain. Limited infrastructure, lack of public awareness, and inadequate policy frameworks need to be addressed.

TakaCycle is proud to be part of this movement, working with communities to build a sustainable future.`,
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
    category: 'recycling',
    tags: ['ghana', 'recycling', 'community'],
    author: 'TakaCycle Team',
    publishedAt: '2024-12-10',
    readTime: 4,
  },
  {
    title: 'Sustainable Living Tips',
    slug: 'sustainable-living-tips',
    excerpt: 'Simple changes you can make in your daily life for a greener lifestyle.',
    content: `Living sustainably doesn't have to be complicated or expensive. Small changes in our daily habits can make a significant difference for the environment.

At Home: Use reusable shopping bags instead of plastic bags. Switch to LED light bulbs to save energy. Compost food scraps instead of throwing them away. Fix leaky faucets to conserve water.

While Shopping: Choose products with minimal packaging. Buy local products to reduce transportation emissions. Bring your own containers for bulk items. Support businesses with sustainable practices.

In Your Community: Participate in local cleanup events. Share resources with neighbors. Advocate for better waste management services. Start a community garden.

Every action counts. Together, we can build a more sustainable future.`,
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
    category: 'sustainability',
    tags: ['lifestyle', 'tips', 'green-living'],
    author: 'TakaCycle Team',
    publishedAt: '2024-12-05',
    readTime: 3,
  },
  {
    title: 'Climate Change in Africa',
    slug: 'climate-change-africa',
    excerpt: 'Understanding the impact of climate change on the African continent and what we can do about it.',
    content: `Africa contributes the least to global greenhouse gas emissions but is disproportionately affected by climate change. Understanding these impacts is crucial for building resilience and adaptation strategies.

Key Impacts: Rising temperatures affecting agriculture. Changing rainfall patterns leading to droughts and floods. Sea level rise threatening coastal communities. Increased frequency of extreme weather events.

Ghana faces unique climate challenges including coastal erosion, deforestation, and water scarcity in northern regions. These issues affect millions of people's livelihoods.

African countries are developing innovative solutions: Renewable energy projects, climate-smart agriculture, reforestation initiatives, and circular economy approaches.

At TakaCycle, we believe waste management is a crucial part of climate action. By reducing waste and promoting recycling, we can help mitigate climate change while creating economic opportunities.`,
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop',
    category: 'climate-change',
    tags: ['climate', 'africa', 'environment'],
    author: 'TakaCycle Team',
    publishedAt: '2024-11-28',
    readTime: 6,
  },
];

const projects = [
  {
    title: 'Community Recycling Program',
    slug: 'community-recycling-program',
    description: 'A grassroots initiative to establish recycling collection points across communities in Accra.',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop',
    location: 'Accra, Ghana',
    status: 'ongoing',
    impactMetrics: [
      { label: 'Communities', value: '15+' },
      { label: 'Plastic Collected', value: '5,000 kg' },
      { label: 'Families Involved', value: '200+' },
    ],
  },
  {
    title: 'School Education Initiative',
    slug: 'school-education-initiative',
    description: 'Environmental education program targeting primary and secondary schools.',
    imageUrl: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=800&auto=format&fit=crop',
    location: 'Greater Accra Region',
    status: 'ongoing',
    impactMetrics: [
      { label: 'Schools Reached', value: '10' },
      { label: 'Students Educated', value: '2,000+' },
      { label: 'Eco-clubs Formed', value: '8' },
    ],
  },
  {
    title: 'Plastic to Products',
    slug: 'plastic-to-products',
    description: 'Transforming collected plastic waste into useful everyday products.',
    imageUrl: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=800&auto=format&fit=crop',
    location: 'Tema, Ghana',
    status: 'planned',
    impactMetrics: [
      { label: 'Target Products', value: '500+' },
      { label: 'Jobs to Create', value: '20' },
    ],
  },
  {
    title: 'Coastal Cleanup Campaign',
    slug: 'coastal-cleanup-campaign',
    description: 'Regular beach cleanup events along the coastline of Ghana.',
    imageUrl: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=800&auto=format&fit=crop',
    location: 'Cape Coast, Ghana',
    status: 'ongoing',
    impactMetrics: [
      { label: 'Cleanups Organized', value: '12' },
      { label: 'Volunteers', value: '500+' },
      { label: 'Waste Collected', value: '3,000 kg' },
    ],
  },
];

const services = [
  {
    title: 'Waste Collection & Recycling',
    description: 'Developing and implementing cutting-edge waste collection and recycling systems to minimize waste sent to landfills and maximize the reuse of materials.',
    icon: 'Recycle',
    order: 1,
  },
  {
    title: 'Materials Recovery and Processing',
    description: 'Operating state-of-the-art facilities for sorting, processing, and transforming waste materials into valuable resources for reuse.',
    icon: 'Factory',
    order: 2,
  },
  {
    title: 'Environmental Education & Community Engagement',
    description: 'Empowering communities through education programs that promote sustainable practices and environmental stewardship.',
    icon: 'Sparkles',
    order: 3,
  },
  {
    title: 'Sustainable Waste Management Solutions',
    description: 'Providing comprehensive waste management consulting and solutions tailored to businesses and municipalities.',
    icon: 'Leaf',
    order: 4,
  },
];

const siteSettings = {
  siteName: 'TakaCycle Innovations',
  tagline: 'Pioneering Innovative Recycling Solutions for Africa',
  email: 'takacycleinnovations@gmail.com',
  socialLinks: {
    whatsapp: 'https://chat.whatsapp.com/D5DpkL03DpE20YEqtrYT3U',
    twitter: 'https://twitter.com/takacycle',
    linkedin: 'https://linkedin.com/company/takacycle',
    facebook: 'https://facebook.com/takacycle',
    instagram: 'https://instagram.com/takacycle',
  },
  missionStatement: 'Educating individuals, communities, and stakeholders on recycling plastic waste by providing innovative solutions with passion and excellence, thereby maintaining an eco-friendly space.',
  visionStatement: 'We envision an Africa where waste is seen as a resource, not a problem. A continent where circular economy principles drive sustainable development and create opportunities for all.',
  impactStats: [
    { value: '50+', label: 'Communities Reached' },
    { value: '10K+', label: 'Kg Plastic Collected' },
    { value: '100+', label: 'People Trained' },
    { value: '5+', label: 'Partner Organizations' },
  ],
};

// ============ MIGRATION FUNCTIONS ============

async function uploadImageFromFile(filePath: string): Promise<string | null> {
  const fullPath = path.join(process.cwd(), filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`  ⚠️  Image not found: ${filePath}`);
    return null;
  }

  try {
    const imageBuffer = fs.readFileSync(fullPath);
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: path.basename(filePath),
    });
    console.log(`  ✓ Uploaded: ${path.basename(filePath)}`);
    return asset._id;
  } catch (error) {
    console.error(`  ✗ Failed to upload ${filePath}:`, error);
    return null;
  }
}

async function uploadImageFromUrl(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`  ⚠️  Failed to fetch image: ${url}`);
      return null;
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const asset = await client.assets.upload('image', buffer, {
      filename: `image-${Date.now()}.jpg`,
    });
    console.log(`  ✓ Uploaded from URL`);
    return asset._id;
  } catch (error) {
    console.error(`  ✗ Failed to upload from URL:`, error);
    return null;
  }
}

async function migrateTeamMembers() {
  console.log('\n📦 Migrating Team Members...');

  for (const member of teamMembers) {
    console.log(`  Processing: ${member.name}`);

    const imageId = await uploadImageFromFile(member.imagePath);

    const doc = {
      _type: 'teamMember',
      name: member.name,
      role: member.role,
      bio: member.bio,
      order: member.order,
      ...(imageId && {
        image: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageId },
        },
      }),
    };

    try {
      await client.create(doc);
      console.log(`  ✓ Created: ${member.name}`);
    } catch (error) {
      console.error(`  ✗ Failed to create ${member.name}:`, error);
    }
  }
}

async function migrateBlogPosts() {
  console.log('\n📝 Migrating Blog Posts...');

  for (const post of blogPosts) {
    console.log(`  Processing: ${post.title}`);

    const imageId = await uploadImageFromUrl(post.imageUrl);

    const doc = {
      _type: 'blogPost',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      excerpt: post.excerpt,
      content: [
        {
          _type: 'block',
          _key: `block-${Date.now()}`,
          style: 'normal',
          markDefs: [],
          children: [
            {
              _type: 'span',
              _key: `span-${Date.now()}`,
              text: post.content,
              marks: [],
            },
          ],
        },
      ],
      category: post.category,
      tags: post.tags,
      author: post.author,
      publishedAt: new Date(post.publishedAt).toISOString(),
      readTime: post.readTime,
      ...(imageId && {
        featuredImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageId },
        },
      }),
    };

    try {
      await client.create(doc);
      console.log(`  ✓ Created: ${post.title}`);
    } catch (error) {
      console.error(`  ✗ Failed to create ${post.title}:`, error);
    }
  }
}

async function migrateProjects() {
  console.log('\n🏗️  Migrating Projects...');

  for (const project of projects) {
    console.log(`  Processing: ${project.title}`);

    const imageId = await uploadImageFromUrl(project.imageUrl);

    const doc = {
      _type: 'project',
      title: project.title,
      slug: { _type: 'slug', current: project.slug },
      description: project.description,
      location: project.location,
      status: project.status,
      impactMetrics: project.impactMetrics.map((m, i) => ({
        _key: `metric-${i}`,
        ...m,
      })),
      ...(imageId && {
        featuredImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageId },
        },
      }),
    };

    try {
      await client.create(doc);
      console.log(`  ✓ Created: ${project.title}`);
    } catch (error) {
      console.error(`  ✗ Failed to create ${project.title}:`, error);
    }
  }
}

async function migrateServices() {
  console.log('\n⚙️  Migrating Services...');

  for (const service of services) {
    console.log(`  Processing: ${service.title}`);

    const doc = {
      _type: 'service',
      title: service.title,
      description: service.description,
      icon: service.icon,
      order: service.order,
    };

    try {
      await client.create(doc);
      console.log(`  ✓ Created: ${service.title}`);
    } catch (error) {
      console.error(`  ✗ Failed to create ${service.title}:`, error);
    }
  }
}

async function migrateSiteSettings() {
  console.log('\n🔧 Migrating Site Settings...');

  const doc = {
    _type: 'siteSettings',
    ...siteSettings,
    impactStats: siteSettings.impactStats.map((s, i) => ({
      _key: `stat-${i}`,
      ...s,
    })),
  };

  try {
    await client.create(doc);
    console.log('  ✓ Site settings created');
  } catch (error) {
    console.error('  ✗ Failed to create site settings:', error);
  }
}

// ============ MAIN ============

async function main() {
  console.log('🚀 Starting Sanity Migration...\n');

  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN environment variable is required');
    console.log('\nTo get a token:');
    console.log('1. Go to https://sanity.io/manage');
    console.log('2. Select your TakaCycle project');
    console.log('3. Go to API → Tokens');
    console.log('4. Add API token with "Editor" permissions');
    console.log('\nThen run: SANITY_API_TOKEN=your_token npx tsx scripts/migrate-to-sanity.ts');
    process.exit(1);
  }

  try {
    await migrateTeamMembers();
    await migrateBlogPosts();
    await migrateProjects();
    await migrateServices();
    await migrateSiteSettings();

    console.log('\n✅ Migration complete!');
    console.log('\nVisit http://localhost:3000/studio to see your content.');
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

main();

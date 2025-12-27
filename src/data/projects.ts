import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'community-recycling-program',
    title: 'Community Recycling Program',
    description:
      'A grassroots initiative to establish recycling collection points across communities in Accra.',
    longDescription:
      'Our flagship Community Recycling Program works directly with local communities to set up collection points, educate residents about proper waste sorting, and create economic opportunities through recycling.',
    featuredImage:
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop',
    location: 'Accra, Ghana',
    status: 'ongoing',
    impactMetrics: [
      { label: 'Communities', value: '15+' },
      { label: 'Plastic Collected', value: '5,000 kg' },
      { label: 'Families Involved', value: '200+' },
    ],
  },
  {
    id: 'school-education-initiative',
    title: 'School Education Initiative',
    description:
      'Environmental education program targeting primary and secondary schools.',
    longDescription:
      'We partner with schools to deliver engaging environmental education programs that teach students about waste management, recycling, and sustainability.',
    featuredImage:
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=800&auto=format&fit=crop',
    location: 'Greater Accra Region',
    status: 'ongoing',
    impactMetrics: [
      { label: 'Schools Reached', value: '10' },
      { label: 'Students Educated', value: '2,000+' },
      { label: 'Eco-clubs Formed', value: '8' },
    ],
  },
  {
    id: 'plastic-to-products',
    title: 'Plastic to Products',
    description:
      'Transforming collected plastic waste into useful everyday products.',
    longDescription:
      'This innovative project takes collected plastic waste and transforms it into useful products like furniture, building materials, and household items.',
    featuredImage:
      'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=800&auto=format&fit=crop',
    location: 'Tema, Ghana',
    status: 'planned',
    impactMetrics: [
      { label: 'Target Products', value: '500+' },
      { label: 'Jobs to Create', value: '20' },
    ],
  },
  {
    id: 'coastal-cleanup-campaign',
    title: 'Coastal Cleanup Campaign',
    description:
      'Regular beach cleanup events along the coastline of Ghana.',
    longDescription:
      'Our Coastal Cleanup Campaign organizes monthly beach cleanups, engaging volunteers and communities in keeping our coastlines free from plastic pollution.',
    featuredImage:
      'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=800&auto=format&fit=crop',
    location: 'Cape Coast, Ghana',
    status: 'ongoing',
    impactMetrics: [
      { label: 'Cleanups Organized', value: '12' },
      { label: 'Volunteers', value: '500+' },
      { label: 'Waste Collected', value: '3,000 kg' },
    ],
  },
];

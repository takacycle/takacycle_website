import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'TakaCycle Innovations',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline (Primary)',
      type: 'string',
      description: 'First part of tagline - displayed in black',
    }),
    defineField({
      name: 'taglineAccent',
      title: 'Tagline (Accent)',
      type: 'string',
      description: 'Second part of tagline - displayed in green',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'email',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'whatsapp', title: 'WhatsApp Group Link', type: 'url' },
        { name: 'twitter', title: 'Twitter/X', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
      ],
    }),
    defineField({
      name: 'donationLink',
      title: 'Donation Link',
      type: 'url',
      description: 'Link to donation page (e.g., GoFundMe) - used on Support Us page',
    }),
    defineField({
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'visionStatement',
      title: 'Vision Statement',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'impactStats',
      title: 'Impact Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Homepage Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Main image displayed on the homepage hero section',
    }),
    defineField({
      name: 'storyImage',
      title: 'Our Story Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Image displayed at the top of the Our Story page',
    }),
    defineField({
      name: 'missionImage',
      title: 'Mission Section Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Image displayed next to the mission statement',
    }),
    defineField({
      name: 'visionImage',
      title: 'Vision Section Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Image displayed next to the vision statement',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      };
    },
  },
});

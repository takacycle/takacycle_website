import { NavItem, SocialLinks } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Our Projects', href: '/our-projects' },
  { label: 'Blog', href: '/blog' },
];

export const footerNavigation = {
  explore: [
    { label: 'Home', href: '/' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Our Team', href: '/our-team' },
    { label: 'Our Projects', href: '/our-projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Support Us', href: '/support-us' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
};

export const socialLinks: SocialLinks = {
  whatsapp: 'https://chat.whatsapp.com/D5DpkL03DpE20YEqtrYT3U',
  instagram: 'https://www.instagram.com/takacycleinnovationsgh?igsh=MTYyYTVnZzAwajUyeQ==', // To be provided
  twitter: '#', // To be provided
  linkedin: '#', // To be provided
  facebook: '#', // To be provided
  email: 'takacycleinnovations@gmail.com',
};

export const contactInfo = {
  email: 'takacycleinnovations@gmail.com',
  location: 'Ghana',
};

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'TakaCycle Innovations | Pioneering Recycling Solutions for Africa',
    template: '%s | TakaCycle Innovations',
  },
  description:
    'TakaCycle Innovations is an eco-friendly NGO based in Ghana, focused on plastic recycling and sustainable waste management across Africa.',
  keywords: [
    'recycling',
    'plastic recycling',
    'Ghana',
    'Africa',
    'sustainability',
    'waste management',
    'environmental',
    'NGO',
    'TakaCycle',
  ],
  authors: [{ name: 'TakaCycle Innovations' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TakaCycle Innovations',
    title: 'TakaCycle Innovations | Pioneering Recycling Solutions for Africa',
    description:
      'We are redefining waste management across the continent, closing the loop on waste and turning challenges into opportunities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TakaCycle Innovations',
    description:
      'Pioneering innovative recycling solutions for Africa.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {children}
      </body>
    </html>
  );
}

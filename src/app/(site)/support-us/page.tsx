import { Metadata } from 'next';
import { Heart, Users, Handshake, Mail, MessageCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { client } from '../../../../sanity/lib/client';
import { siteSettingsQuery } from '../../../../sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Support Us',
  description:
    'Support TakaCycle Innovations in our mission to transform waste management in Africa. Donate, volunteer, or partner with us.',
};

async function getSiteSettings() {
  return client.fetch(siteSettingsQuery);
}

export default async function SupportUsPage() {
  const siteSettings = await getSiteSettings();

  const donationLink = siteSettings?.donationLink || 'mailto:takacycleinnovations@gmail.com?subject=Donation Inquiry';
  const whatsappLink = siteSettings?.socialLinks?.whatsapp || '#';
  const email = siteSettings?.email || 'takacycleinnovations@gmail.com';

  const supportOptions = [
    {
      icon: Heart,
      title: 'Donate',
      description:
        'Your financial contribution helps us expand our recycling programs, educate communities, and create lasting environmental impact.',
      cta: 'Make a Donation',
      href: donationLink,
    },
    {
      icon: Users,
      title: 'Volunteer',
      description:
        'Join our team of dedicated volunteers. Whether you can spare a few hours or commit regularly, your time makes a difference.',
      cta: 'Become a Volunteer',
      href: `mailto:${email}?subject=Volunteer Application`,
    },
    {
      icon: Handshake,
      title: 'Partner',
      description:
        'Organizations can partner with us on projects, provide resources, or collaborate on sustainability initiatives.',
      cta: 'Explore Partnership',
      href: `mailto:${email}?subject=Partnership Inquiry`,
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-18 lg:pb-16 bg-gradient-to-br from-[#4CAF50] to-[#2D5016] text-white">
        <Container>
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-[48px] font-bold mb-4 sm:mb-5">
              Support Our Mission
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#E8F5E9] leading-relaxed">
              Together, we can transform waste management in Africa and create a
              cleaner, more sustainable future for generations to come.
            </p>
          </div>
        </Container>
      </section>

      {/* Support Options */}
      <section className="pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {supportOptions.map((option) => (
              <div
                key={option.title}
                className="bg-transparent border-2 border-gray-200 rounded-2xl p-5 sm:p-6 lg:p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#E8F5E9] text-[#4CAF50] mb-4 sm:mb-5">
                  <option.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#111111] mb-3 sm:mb-4">
                  {option.title}
                </h3>
                <p className="text-[#666666] mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {option.description}
                </p>
                <a
                  href={option.href}
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 bg-[#4CAF50] text-white font-semibold rounded-full hover:bg-[#43A047] transition-colors text-sm sm:text-base"
                >
                  {option.cta}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Support Us */}
      <section className="pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] text-center mb-8 sm:mb-10 lg:mb-12">
              Why Your Support Matters
            </h2>

            <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
              {[
                {
                  title: 'Environmental Impact',
                  description:
                    'Every contribution helps divert plastic waste from landfills and oceans, protecting wildlife and ecosystems.',
                },
                {
                  title: 'Community Empowerment',
                  description:
                    'Your support creates jobs and income opportunities for local communities through recycling programs.',
                },
                {
                  title: 'Education & Awareness',
                  description:
                    'We educate thousands of people about sustainable practices, creating lasting behavioral change.',
                },
                {
                  title: 'Innovation',
                  description:
                    'Funding helps us develop new solutions and scale our impact across Ghana and beyond.',
                },
              ].map((item, index) => (
                <div key={item.title} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#4CAF50] text-white flex items-center justify-center font-bold text-xs sm:text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#111111] mb-1.5 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#666666] leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16">
        <Container>
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mb-4 sm:mb-5">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#666666] mb-6 sm:mb-8 leading-relaxed">
              Have questions about supporting TakaCycle? We&apos;d love to hear
              from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#4CAF50] text-white font-semibold rounded-full hover:bg-[#43A047] transition-colors text-sm sm:text-base"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                Email Us
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 border-2 border-[#4CAF50] text-[#4CAF50] font-semibold rounded-full hover:bg-[#E8F5E9] transition-colors text-sm sm:text-base"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                Join WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-18 bg-[#111111] text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5">
              Every Action Counts
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#cccccc] max-w-[600px] mx-auto mb-4 sm:mb-6 leading-relaxed">
              Whether you donate, volunteer, or simply spread the word,
              you&apos;re helping build a cleaner, greener Africa.
            </p>
            <p className="text-[#8CD867] text-sm sm:text-base lg:text-lg font-medium">
              Thank you for being part of the TakaCycle family.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

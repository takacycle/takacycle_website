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
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#4CAF50] to-[#2D5016] text-white">
        <Container>
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-bold mb-5">
              Support Our Mission
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#E8F5E9] leading-relaxed">
              Together, we can transform waste management in Africa and create a
              cleaner, more sustainable future for generations to come.
            </p>
          </div>
        </Container>
      </section>

      {/* Support Options */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {supportOptions.map((option) => (
              <div
                key={option.title}
                className="bg-transparent border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E8F5E9] text-[#4CAF50] mb-5">
                  <option.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-4">
                  {option.title}
                </h3>
                <p className="text-[#666666] mb-6 leading-relaxed text-sm sm:text-base">
                  {option.description}
                </p>
                <a
                  href={option.href}
                  className="inline-flex items-center px-6 py-3.5 bg-[#4CAF50] text-white font-semibold rounded-full hover:bg-[#43A047] transition-colors text-sm sm:text-base"
                >
                  {option.cta}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Support Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFAFA]">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] text-center mb-10 lg:mb-12">
              Why Your Support Matters
            </h2>

            <div className="flex flex-col gap-6 sm:gap-8">
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
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4CAF50] text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#111111] mb-2">
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
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-[600px] mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-5">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-[#666666] mb-8 leading-relaxed">
              Have questions about supporting TakaCycle? We&apos;d love to hear
              from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#4CAF50] text-white font-semibold rounded-full hover:bg-[#43A047] transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#4CAF50] text-[#4CAF50] font-semibold rounded-full hover:bg-[#E8F5E9] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Join WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#111111] text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">
              Every Action Counts
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#cccccc] max-w-[600px] mx-auto mb-6 leading-relaxed">
              Whether you donate, volunteer, or simply spread the word,
              you&apos;re helping build a cleaner, greener Africa.
            </p>
            <p className="text-[#8CD867] text-base sm:text-lg font-medium">
              Thank you for being part of the TakaCycle family.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

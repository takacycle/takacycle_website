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
      <section
        style={{
          padding: '100px 0',
          background: 'linear-gradient(135deg, #4CAF50 0%, #2D5016 100%)',
          color: '#ffffff',
        }}
      >
        <Container>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '56px', fontWeight: 700, marginBottom: '24px' }}>
              Support Our Mission
            </h1>
            <p style={{ fontSize: '20px', color: '#E8F5E9', lineHeight: 1.7 }}>
              Together, we can transform waste management in Africa and create a
              cleaner, more sustainable future for generations to come.
            </p>
          </div>
        </Container>
      </section>

      {/* Support Options */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {supportOptions.map((option) => (
              <div
                key={option.title}
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid #e5e5e5',
                  borderRadius: '16px',
                  padding: '32px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#E8F5E9',
                    color: '#4CAF50',
                    marginBottom: '24px',
                  }}
                >
                  <option.icon style={{ height: '32px', width: '32px' }} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#111111', marginBottom: '16px' }}>
                  {option.title}
                </h3>
                <p style={{ color: '#666666', marginBottom: '24px', lineHeight: 1.6 }}>
                  {option.description}
                </p>
                <a
                  href={option.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '14px 28px',
                    backgroundColor: '#4CAF50',
                    color: '#ffffff',
                    fontWeight: 600,
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '15px',
                  }}
                >
                  {option.cta}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Support Us */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAFAFA' }}>
        <Container>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '40px',
                fontWeight: 700,
                color: '#111111',
                textAlign: 'center',
                marginBottom: '48px',
              }}
            >
              Why Your Support Matters
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
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
                <div key={item.title} style={{ display: 'flex', gap: '16px' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#4CAF50',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                    }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#111111', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#666666', lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '80px 0' }}>
        <Container>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#111111', marginBottom: '24px' }}>
              Get in Touch
            </h2>
            <p style={{ fontSize: '18px', color: '#666666', marginBottom: '32px', lineHeight: 1.6 }}>
              Have questions about supporting TakaCycle? We&apos;d love to hear
              from you.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <a
                href={`mailto:${email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  backgroundColor: '#4CAF50',
                  color: '#ffffff',
                  fontWeight: 600,
                  borderRadius: '50px',
                  textDecoration: 'none',
                }}
              >
                <Mail style={{ height: '20px', width: '20px' }} />
                Email Us
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  border: '2px solid #4CAF50',
                  color: '#4CAF50',
                  fontWeight: 600,
                  borderRadius: '50px',
                  textDecoration: 'none',
                }}
              >
                <MessageCircle style={{ height: '20px', width: '20px' }} />
                Join WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 0', backgroundColor: '#111111', color: '#ffffff' }}>
        <Container>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '24px' }}>
              Every Action Counts
            </h2>
            <p
              style={{
                fontSize: '20px',
                color: '#cccccc',
                maxWidth: '600px',
                margin: '0 auto 32px',
                lineHeight: 1.6,
              }}
            >
              Whether you donate, volunteer, or simply spread the word,
              you&apos;re helping build a cleaner, greener Africa.
            </p>
            <p style={{ color: '#8CD867', fontSize: '18px', fontWeight: 500 }}>
              Thank you for being part of the TakaCycle family.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

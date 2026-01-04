import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { client } from '../../../sanity/lib/client';
import { siteSettingsQuery } from '../../../sanity/lib/queries';

async function getSiteSettings() {
  return client.fetch(siteSettingsQuery);
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings();

  return (
    <div>
      <Header siteName={siteSettings?.siteName} />
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
        {children}
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  );
}

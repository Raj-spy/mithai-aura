import { site } from './site';

export function createPageMetadata({ title, description, path }) {
  const url = new URL(path, site.url);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: site.name,
      title,
      description,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${site.name} — Make good happen` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}

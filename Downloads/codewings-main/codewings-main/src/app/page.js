import HomeExperience from "./components/HomeExperience";
import JsonLd from "./components/JsonLd";
import { site } from "../lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      alternateName: site.alternateName,
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: site.alternateName,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/brand-mark-512.png`,
        width: 512,
        height: 512,
      },
      description: site.description,
      sameAs: [site.instagram],
      email: site.email,
      telephone: site.phone,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Business enquiries",
        telephone: site.phone,
        email: site.email,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={structuredData} />
      <HomeExperience />
    </>
  );
}

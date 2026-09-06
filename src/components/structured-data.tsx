import { company, contact, seo, services } from "@/content/site";

/**
 * Structured data for the site.
 *
 * One connected graph rather than a pile of separate blocks: the
 * Organization is also the LocalBusiness and the manufacturer, and
 * everything else points back at it by @id. Search engines then read one
 * business with several facets instead of three businesses that happen to
 * share a name.
 *
 * Only facts the client has confirmed appear here. No opening hours beyond
 * the ones the site already states, no ratings, no certifications, no
 * employee count, no price range: inventing any of those to fill a
 * recommended field is how structured data turns into a lie.
 */
const ORG_ID = `${company.url}/#organization`;
const SITE_ID = `${company.url}/#website`;

const organization = {
  "@type": ["Organization", "LocalBusiness", "Manufacturer"],
  "@id": ORG_ID,
  name: company.name,
  url: company.url,
  description: company.description,
  foundingDate: String(company.foundedYear),
  logo: {
    "@type": "ImageObject",
    url: `${company.url}/icon-192.png`,
    width: 192,
    height: 192,
  },
  image: `${company.url}/img/works.jpg`,
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.addressLines[0],
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400103",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: contact.phone,
    email: contact.email,
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  /** What the business makes, as the site itself describes it. */
  knowsAbout: [
    ...services.map((s) => s.title),
    "Seamless bonded bras",
    "Textile lamination",
  ],
};

const website = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: company.url,
  name: company.name,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
};

export type Crumb = { name: string; path: string };

/**
 * Renders the shared nodes plus whatever this page adds.
 *
 * `crumbs` should not include the homepage; it is added here so every trail
 * starts in the same place.
 */
export function StructuredData({
  crumbs,
  extra,
}: {
  crumbs?: Crumb[];
  extra?: Record<string, unknown>[];
}) {
  const graph: Record<string, unknown>[] = [organization, website];

  if (crumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${company.url}${crumbs[crumbs.length - 1].path}#breadcrumbs`,
      itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map(
        (crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${company.url}${crumb.path}`,
        }),
      ),
    });
  }

  if (extra?.length) graph.push(...extra);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

/** A service Hamprigo offers, tied back to the business that provides it. */
export function serviceNode({
  path,
  name,
  description,
  offers,
}: {
  path: string;
  name: string;
  description: string;
  /** The individual constructions or techniques within the service. */
  offers: { name: string; description: string }[];
}) {
  return {
    "@type": "Service",
    "@id": `${company.url}${path}#service`,
    name,
    description,
    serviceType: name,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
    url: `${company.url}${path}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name,
      itemListElement: offers.map((o) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: o.name,
          description: o.description,
        },
      })),
    },
  };
}

/** Questions a page answers in its own visible copy. Nothing else. */
export function faqNode(path: string, qa: readonly { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${company.url}${path}#faq`,
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Kept so the seo export is used from one place if a page needs it. */
export const siteDescription = seo.home.description;

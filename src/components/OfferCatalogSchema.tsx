import React from 'react';

interface OfferItem {
  name: string;
  description: string;
  price: string;
  priceCurrency?: string;
  url: string;
}

interface OfferCatalogSchemaProps {
  name: string;
  description: string;
  providerName: string;
  providerUrl: string;
  offerItems: OfferItem[];
}

const OfferCatalogSchema: React.FC<OfferCatalogSchemaProps> = ({
  name,
  description,
  providerName,
  providerUrl,
  offerItems,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: providerName,
      url: providerUrl,
    },
    itemListElement: offerItems.map(item => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item.name,
        description: item.description,
      },
      offers: {
        "@type": "Offer",
        price: item.price,
        priceCurrency: item.priceCurrency || "USD",
        availability: "https://schema.org/InStock",
        url: item.url,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OfferCatalogSchema;
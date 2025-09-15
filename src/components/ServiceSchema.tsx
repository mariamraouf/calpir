import React from 'react';

interface ServiceSchemaProps {
  serviceType: string;
  name: string;
  description: string;
  providerName: string;
  providerUrl: string;
  areaServed?: string;
  price?: string;
  priceCurrency?: string;
  unitText?: string;
  url: string;
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceType,
  name,
  description,
  providerName,
  providerUrl,
  areaServed = "Global",
  price,
  priceCurrency = "USD",
  unitText = "one-time",
  url,
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceType,
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: providerName,
      url: providerUrl,
    },
    areaServed: {
      "@type": "Place",
      name: areaServed,
    },
    url: url,
  };

  if (price) {
    schema.offers = {
      "@type": "Offer",
      "price": price,
      "priceCurrency": priceCurrency,
      "unitText": unitText,
      "availability": "https://schema.org/InStock",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;
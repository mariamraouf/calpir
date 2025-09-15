import React from 'react';

interface LocalBusinessSchemaProps {
  name: string;
  image: string;
  url: string;
  telephone: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  priceRange: string;
  openingHours?: { dayOfWeek: string[]; opens: string; closes: string; }[];
  areaServed?: string[];
  hasMap?: string;
  ratingValue?: string;
  reviewCount?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  image,
  url,
  telephone,
  streetAddress,
  addressLocality,
  addressRegion,
  postalCode,
  addressCountry,
  priceRange,
  openingHours,
  areaServed = ["Global"],
  hasMap,
  ratingValue,
  reviewCount,
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: name,
    image: image,
    url: url,
    telephone: telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddress,
      addressLocality: addressLocality,
      addressRegion: addressRegion,
      postalCode: postalCode,
      addressCountry: addressCountry,
    },
    priceRange: priceRange,
    areaServed: areaServed.map(area => ({ "@type": "Place", name: area })),
  };

  if (openingHours && openingHours.length > 0) {
    schema.openingHoursSpecification = openingHours.map(oh => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: oh.dayOfWeek.map(day => `https://schema.org/${day}`),
      opens: oh.opens,
      closes: oh.closes,
    }));
  }

  if (hasMap) {
    schema.hasMap = hasMap;
  }

  if (ratingValue && reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: ratingValue,
      reviewCount: reviewCount,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
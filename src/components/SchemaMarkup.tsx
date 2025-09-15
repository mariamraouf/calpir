import React from 'react';

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  contactEmail: string;
  socialLinks?: string[];
}

const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  name,
  url,
  logo,
  contactEmail,
  socialLinks = [],
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: name,
    url: url,
    logo: logo,
    contactPoint: {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": contactEmail,
    },
    sameAs: socialLinks,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;
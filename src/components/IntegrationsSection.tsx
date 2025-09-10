"use client";

import React from "react";

const integrations = [
  // Project Management
  { name: "Asana", logoUrl: "https://logo.clearbit.com/asana.com?size=50" },
  { name: "Monday.com", logoUrl: "https://logo.clearbit.com/monday.com?size=50" },
  { name: "Trello", logoUrl: "https://logo.clearbit.com/trello.com?size=50" },
  { name: "ClickUp", logoUrl: "https://logo.clearbit.com/clickup.com?size=50" },
  { name: "Workiom", logoUrl: "https://logo.clearbit.com/workiom.com?size=50" },
  { name: "Taiga", logoUrl: "https://logo.clearbit.com/taiga.io?size=50" },
  // HR & Recruiting
  { name: "BambooHR", logoUrl: "https://logo.clearbit.com/bamboohr.com?size=50" },
  { name: "Gusto", logoUrl: "https://logo.clearbit.com/gusto.com?size=50" },
  { name: "Workday", logoUrl: "https://logo.clearbit.com/workday.com?size=50" },
  { name: "Rippling", logoUrl: "https://logo.clearbit.com/rippling.com?size=50" },
  { name: "Freshteam", logoUrl: "https://logo.clearbit.com/freshteam.com?size=50" },
  // CRM & Sales
  { name: "Salesforce", logoUrl: "https://logo.clearbit.com/salesforce.com?size=50" },
  { name: "HubSpot", logoUrl: "https://logo.clearbit.com/hubspot.com?size=50" },
  { name: "Zoho CRM", logoUrl: "https://logo.clearbit.com/zohocrm.com?size=50" },
  { name: "Pipedrive", logoUrl: "https://logo.clearbit.com/pipedrive.com?size=50" },
  { name: "Folk", logoUrl: "https://logo.clearbit.com/folk.app?size=50" },
  // Accounting & Finance
  { name: "QuickBooks", logoUrl: "https://logo.clearbit.com/quickbooks.intuit.com?size=50" },
  { name: "Xero", logoUrl: "https://logo.clearbit.com/xero.com?size=50" },
  { name: "Wave", logoUrl: "https://logo.clearbit.com/waveapps.com?size=50" },
  { name: "FreshBooks", logoUrl: "https://logo.clearbit.com/freshbooks.com?size=50" },
  // Email & Communication
  { name: "Google Workspace", logoUrl: "https://logo.clearbit.com/google.com?size=50" },
  { name: "Microsoft 365", logoUrl: "https://logo.clearbit.com/microsoft.com?size=50" },
  { name: "Slack", logoUrl: "https://logo.clearbit.com/slack.com?size=50" },
  { name: "Zoom", logoUrl: "https://logo.clearbit.com/zoom.us?size=50" },
  { name: "Mailchimp", logoUrl: "https://logo.clearbit.com/mailchimp.com?size=50" },
  // Website Building & Hosting
  { name: "Wix", logoUrl: "https://logo.clearbit.com/wix.com?size=50" },
  { name: "Squarespace", logoUrl: "https://logo.clearbit.com/squarespace.com?size=50" },
  { name: "Shopify", logoUrl: "https://logo.clearbit.com/shopify.com?size=50" },
  { name: "Hostinger", logoUrl: "https://logo.clearbit.com/hostinger.com?size=50" },
  // Social Media Platforms
  { name: "Instagram", logoUrl: "https://logo.clearbit.com/instagram.com?size=50" },
  { name: "Facebook", logoUrl: "https://logo.clearbit.com/facebook.com?size=50" },
  { name: "X", logoUrl: "https://logo.clearbit.com/x.com?size=50" },
  { name: "LinkedIn", logoUrl: "https://logo.clearbit.com/linkedin.com?size=50" },
  // E-Signature
  { name: "Adobe Acrobat Sign", logoUrl: "https://logo.clearbit.com/adobe.com?size=50" },
  { name: "DocuSign", logoUrl: "https://logo.clearbit.com/docusign.com?size=50" },
  { name: "SignNow", logoUrl: "https://logo.clearbit.com/signnow.com?size=50" },
  // Security
  { name: "Bitwarden", logoUrl: "https://logo.clearbit.com/bitwarden.com?size=50" },
  { name: "LastPass", logoUrl: "https://logo.clearbit.com/lastpass.com?size=50" },
  // ERP & Business Management
  { name: "ERPNext", logoUrl: "https://logo.clearbit.com/erpnext.com?size=50" },
  { name: "Odoo", logoUrl: "https://logo.clearbit.com/odoo.com?size=50" },
  // Analytics & SEO
  { name: "Google Analytics", logoUrl: "https://logo.clearbit.com/google.com?size=50" },
  { name: "SEMrush", logoUrl: "https://logo.clearbit.com/semrush.com?size=50" },
];

const IntegrationsSection = () => {
  // Duplicate the integrations array to create a seamless loop
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          300+ Platform Setups
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
          We integrate your business with the tools you need to succeed. From project management to payment processing, we've got you covered.
        </p>

        <div className="marquee-container bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="marquee">
            {duplicatedIntegrations.map((integration, index) => (
              <img
                key={index}
                src={integration.logoUrl}
                alt={integration.name}
                title={integration.name}
                onError={(e) => {
                  e.currentTarget.onerror = null; // Prevent infinite loop if placeholder also fails
                  e.currentTarget.src = 'https://via.placeholder.com/50?text=Logo';
                }}
              />
            ))}
          </div>
        </div>

        <p className="mt-8 text-md text-gray-500 dark:text-gray-400 animate-fade-in-up delay-400">
          ✨ New integrations added weekly
        </p>
      </div>
    </section>
  );
};

export default IntegrationsSection;
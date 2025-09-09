"use client";

import React from "react";

const integrations = [
  { name: "ClickUp", imageSrc: "/logos/clickup.png" },
  { name: "Slack", imageSrc: "/logos/slack.png" },
  { name: "Google Drive", imageSrc: "/logos/google-drive.png" },
  { name: "OneDrive", imageSrc: "/logos/onedrive.png" },
  { name: "SharePoint", imageSrc: "/logos/sharepoint.png" },
  { name: "Outlook Calendar", imageSrc: "/logos/outlook-calendar.png" },
  { name: "Google Calendar", imageSrc: "/logos/google-calendar.png" },
  { name: "Zoom", imageSrc: "/logos/zoom.png" },
  { name: "Zapier", imageSrc: "/logos/zapier.png" },
  { name: "Make", imageSrc: "/logos/make.png" },
  { name: "Jira", imageSrc: "/logos/jira.png" },
  { name: "HubSpot", imageSrc: "/logos/hubspot.png" },
  { name: "Notion", imageSrc: "/logos/notion.png" },
  { name: "Trello", imageSrc: "/logos/trello.png" },
  { name: "Asana", imageSrc: "/logos/asana.png" },
  { name: "DocuSign", imageSrc: "/logos/docusign.png" },
  { name: "Microsoft Teams", imageSrc: "/logos/microsoft-teams.png" },
  { name: "Gmail", imageSrc: "/logos/gmail.png" },
  { name: "Outlook", imageSrc: "/logos/outlook.png" },
  { name: "Salesforce", imageSrc: "/logos/salesforce.png" },
  { name: "Monday.com", imageSrc: "/logos/monday-com.png" },
  { name: "Zoho CRM", imageSrc: "/logos/zoho-crm.png" },
  { name: "Pipedrive", imageSrc: "/logos/pipedrive.png" },
  { name: "Calendly", imageSrc: "/logos/calendly.png" },
  { name: "Typeform", imageSrc: "/logos/typeform.png" },
  { name: "Airtable", imageSrc: "/logos/airtable.png" },
  { name: "Stripe", imageSrc: "/logos/stripe.png" },
  { name: "PayPal", imageSrc: "/logos/paypal.png" },
  { name: "QuickBooks", imageSrc: "/logos/quickbooks.png" },
  { name: "Xero", imageSrc: "/logos/xero.png" },
  { name: "Intercom", imageSrc: "/logos/intercom.png" },
  { name: "Mailchimp", imageSrc: "/logos/mailchimp.png" },
  { name: "Klaviyo", imageSrc: "/logos/klaviyo.png" },
  { name: "Google Analytics", imageSrc: "/logos/google-analytics.png" },
  { name: "Figma", imageSrc: "/logos/figma.png" },
  { name: "Loom", imageSrc: "/logos/loom.png" },
  { name: "LinkedIn", imageSrc: "/logos/linkedin.png" },
];

const IntegrationsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          300+ Platform Integrations
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          We integrate your business with the tools you need to succeed. From project management to payment processing, we've got you covered.
        </p>

        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll-integrations">
            {[...integrations, ...integrations, ...integrations].map((integration, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 md:w-40 p-4 flex flex-col items-center justify-center text-center mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              >
                <img src={integration.imageSrc} alt={integration.name} className="h-10 w-10 mb-2 object-contain" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-md text-gray-500 dark:text-gray-400">
          ✨ New integrations added weekly
        </p>
      </div>
    </section>
  );
};

export default IntegrationsSection;
"use client";

import React from "react";

const integrations = [
  { name: "ClickUp", imageSrc: "/placeholder.svg" },
  { name: "Slack", imageSrc: "/placeholder.svg" },
  { name: "Google Drive", imageSrc: "/placeholder.svg" },
  { name: "OneDrive", imageSrc: "/placeholder.svg" },
  { name: "SharePoint", imageSrc: "/placeholder.svg" },
  { name: "Outlook Calendar", imageSrc: "/placeholder.svg" },
  { name: "Google Calendar", imageSrc: "/placeholder.svg" },
  { name: "Zoom", imageSrc: "/placeholder.svg" },
  { name: "Zapier", imageSrc: "/placeholder.svg" },
  { name: "Make", imageSrc: "/placeholder.svg" },
  { name: "Jira", imageSrc: "/placeholder.svg" },
  { name: "HubSpot", imageSrc: "/placeholder.svg" },
  { name: "Notion", imageSrc: "/placeholder.svg" },
  { name: "Trello", imageSrc: "/placeholder.svg" },
  { name: "Asana", imageSrc: "/placeholder.svg" },
  { name: "DocuSign", imageSrc: "/placeholder.svg" },
  { name: "Microsoft Teams", imageSrc: "/placeholder.svg" },
  { name: "Gmail", imageSrc: "/placeholder.svg" },
  { name: "Outlook", imageSrc: "/placeholder.svg" },
  { name: "Salesforce", imageSrc: "/placeholder.svg" },
  { name: "Monday.com", imageSrc: "/placeholder.svg" },
  { name: "Zoho CRM", imageSrc: "/placeholder.svg" },
  { name: "Pipedrive", imageSrc: "/placeholder.svg" },
  { name: "Calendly", imageSrc: "/placeholder.svg" },
  { name: "Typeform", imageSrc: "/placeholder.svg" },
  { name: "Airtable", imageSrc: "/placeholder.svg" },
  { name: "Stripe", imageSrc: "/placeholder.svg" },
  { name: "PayPal", imageSrc: "/placeholder.svg" },
  { name: "QuickBooks", imageSrc: "/placeholder.svg" },
  { name: "Xero", imageSrc: "/placeholder.svg" },
  { name: "Intercom", imageSrc: "/placeholder.svg" },
  { name: "Mailchimp", imageSrc: "/placeholder.svg" },
  { name: "Klaviyo", imageSrc: "/placeholder.svg" },
  { name: "Google Analytics", imageSrc: "/placeholder.svg" },
  { name: "Figma", imageSrc: "/placeholder.svg" },
  { name: "Loom", imageSrc: "/placeholder.svg" },
  { name: "LinkedIn", imageSrc: "/placeholder.svg" },
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
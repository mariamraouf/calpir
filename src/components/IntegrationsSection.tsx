"use client";

import React from "react";

const integrations = [
  { name: "ClickUp", logoUrl: "/public/logos/clickup.png" },
  { name: "Slack", logoUrl: "/public/logos/slack.png" },
  { name: "Google Drive", logoUrl: "/public/logos/google-drive.png" },
  { name: "OneDrive", logoUrl: "/public/logos/onedrive.png" },
  { name: "SharePoint", logoUrl: "/public/logos/sharepoint.png" },
  { name: "Outlook Calendar", logoUrl: "/public/logos/outlook-calendar.png" },
  { name: "Google Calendar", logoUrl: "/public/logos/google-calendar.png" },
  { name: "Zoom", logoUrl: "/public/logos/zoom.png" },
  { name: "Zapier", logoUrl: "/public/logos/zapier.png" },
  { name: "Make", logoUrl: "/public/logos/make.png" },
  { name: "Jira", logoUrl: "/public/logos/jira.png" },
  { name: "HubSpot", logoUrl: "/public/logos/hubspot.png" },
  { name: "Notion", logoUrl: "/public/logos/notion.png" },
  { name: "Trello", logoUrl: "/public/logos/trello.png" },
  { name: "Asana", logoUrl: "/public/logos/asana.png" },
  { name: "DocuSign", logoUrl: "/public/logos/docusign.png" },
  { name: "Microsoft Teams", logoUrl: "/public/logos/microsoft-teams.png" },
  { name: "Gmail", logoUrl: "/public/logos/gmail.png" },
  { name: "Outlook", logoUrl: "/public/logos/outlook.png" },
  { name: "Salesforce", logoUrl: "/public/logos/salesforce.png" },
  { name: "Monday.com", logoUrl: "/public/logos/monday-com.png" },
  { name: "Zoho CRM", logoUrl: "/public/logos/zoho-crm.png" },
  { name: "Pipedrive", logoUrl: "/public/logos/pipedrive.png" },
  { name: "Calendly", logoUrl: "/public/logos/calendly.png" },
  { name: "Typeform", logoUrl: "/public/logos/typeform.png" },
  { name: "Airtable", logoUrl: "/public/logos/airtable.png" },
  { name: "Stripe", logoUrl: "/public/logos/stripe.png" },
  { name: "PayPal", logoUrl: "/public/logos/paypal.png" },
  { name: "QuickBooks", logoUrl: "/public/logos/quickbooks.png" },
  { name: "Xero", logoUrl: "/public/logos/xero.png" },
  { name: "Intercom", logoUrl: "/public/logos/intercom.png" },
  { name: "Mailchimp", logoUrl: "/public/logos/mailchimp.png" },
  { name: "Klaviyo", logoUrl: "/public/logos/klaviyo.png" },
  { name: "Google Analytics", logoUrl: "/public/logos/google-analytics.png" },
  { name: "Figma", logoUrl: "/public/logos/figma.png" },
  { name: "Loom", logoUrl: "/public/logos/loom.png" },
  { name: "LinkedIn", logoUrl: "/public/logos/linkedin.png" },
  { name: "ERP", logoUrl: "/public/logos/erp.svg" },
  { name: "Claude", logoUrl: "/public/logos/claude.svg" },
];

const IntegrationsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          300+ Platform Setups
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
          We integrate your business with the tools you need to succeed. From project management to payment processing, we've got you covered.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-zoom-in"
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              <img
                src={integration.logoUrl}
                alt={integration.name}
                className="h-12 w-12 object-contain mb-2"
                onError={(e) => {
                  e.currentTarget.onerror = null; // Prevent infinite loop if placeholder also fails
                  e.currentTarget.src = '/public/placeholder.svg';
                }}
              />
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{integration.name}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-md text-gray-500 dark:text-gray-400 animate-fade-in-up delay-400">
          ✨ New integrations added weekly
        </p>
      </div>
    </section>
  );
};

export default IntegrationsSection;
"use client";

import React from "react";

const integrations = [
  // Prioritized Integrations
  { name: "ClickUp", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/clickup.svg" },
  { name: "Slack", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg" },
  { name: "Google Drive", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googledrive.svg" },
  { name: "Google Calendar", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlecalendar.svg" },
  { name: "Gmail", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg" },
  { name: "Google Analytics", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googleanalytics.svg" },
  { name: "OneDrive", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftonedrive.svg" },
  { name: "SharePoint", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftsharepoint.svg" },
  { name: "Outlook Calendar", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftoutlook.svg" },
  { name: "Microsoft Teams", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftteams.svg" },
  { name: "Outlook", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftoutlook.svg" },
  { name: "HubSpot", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hubspot.svg" },
  { name: "GoHighLevel", imageSrc: "/logos/gohighlevel.svg" }, // Placeholder
  { name: "Trello", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/trello.svg" },
  { name: "Xero", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xero.svg" },
  { name: "Mailchimp", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mailchimp.svg" },
  { name: "Intercom", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/intercom.svg" },
  { name: "ERP", imageSrc: "/logos/erp.svg" }, // Placeholder
  { name: "Zapier", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zapier.svg" },
  { name: "Make", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/integromat.svg" }, // Make is Integromat in simple-icons
  { name: "ChatGPT", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" }, // OpenAI for ChatGPT
  { name: "Claude", imageSrc: "/logos/claude.svg" }, // Placeholder

  // Other Integrations (remaining from previous list, re-ordered)
  { name: "Zoom", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zoom.svg" },
  { name: "Jira", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jira.svg" },
  { name: "Notion", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notion.svg" },
  { name: "Asana", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/asana.svg" },
  { name: "DocuSign", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docusign.svg" },
  { name: "Salesforce", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/salesforce.svg" },
  { name: "Monday.com", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mondaydotcom.svg" },
  { name: "Zoho CRM", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zoho.svg" },
  { name: "Pipedrive", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pipedrive.svg" },
  { name: "Calendly", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/calendly.svg" },
  { name: "Typeform", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typeform.svg" },
  { name: "Airtable", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/airtable.svg" },
  { name: "Stripe", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stripe.svg" },
  { name: "PayPal", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/paypal.svg" },
  { name: "QuickBooks", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/quickbooks.svg" },
  { name: "Klaviyo", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/klaviyo.svg" },
  { name: "Figma", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg" },
  { name: "Loom", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/loom.svg" },
  { name: "LinkedIn", imageSrc: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" },
];

const IntegrationsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          300+ Platform Integrations
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
          We integrate your business with the tools you need to succeed. From project management to payment processing, we've got you covered.
        </p>

        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll-integrations">
            {[...integrations, ...integrations, ...integrations].map((integration, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 md:w-40 p-4 flex flex-col items-center justify-center text-center mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-110"
              >
                <img src={integration.imageSrc} alt={integration.name} className="h-10 w-10 mb-2 object-contain" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{integration.name}</span>
              </div>
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
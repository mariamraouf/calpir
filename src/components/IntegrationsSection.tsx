"use client";

import React from "react";

const integrations = [
  { name: "ClickUp", imageSrc: "https://clickup.com/images/clickup-logo.png" },
  { name: "Slack", imageSrc: "https://slack.com/favicon.ico" },
  { name: "Google Drive", imageSrc: "https://www.google.com/drive/static/images/drive/logo-drive.png" },
  { name: "OneDrive", imageSrc: "https://onedrive.live.com/favicon.ico" },
  { name: "SharePoint", imageSrc: "https://www.microsoft.com/favicon.ico" },
  { name: "Outlook Calendar", imageSrc: "https://outlook.live.com/owa/favicon.ico" },
  { name: "Google Calendar", imageSrc: "https://calendar.google.com/googlecalendar/images/favicons/calendar.ico" },
  { name: "Zoom", imageSrc: "https://zoom.us/favicon.ico" },
  { name: "Zapier", imageSrc: "https://zapier.com/favicon.ico" },
  { name: "Make", imageSrc: "https://www.make.com/favicon.ico" },
  { name: "Jira", imageSrc: "https://www.atlassian.com/favicon.ico" },
  { name: "HubSpot", imageSrc: "https://www.hubspot.com/favicon.ico" },
  { name: "Notion", imageSrc: "https://www.notion.so/favicon.ico" },
  { name: "Trello", imageSrc: "https://trello.com/favicon.ico" },
  { name: "Asana", imageSrc: "https://asana.com/favicon.ico" },
  { name: "DocuSign", imageSrc: "https://www.docusign.com/favicon.ico" },
  { name: "Microsoft Teams", imageSrc: "https://www.microsoft.com/favicon.ico" },
  { name: "Gmail", imageSrc: "https://www.google.com/favicon.ico" },
  { name: "Outlook", imageSrc: "https://outlook.live.com/owa/favicon.ico" },
  { name: "Salesforce", imageSrc: "https://www.salesforce.com/favicon.ico" },
  { name: "Monday.com", imageSrc: "https://monday.com/favicon.ico" },
  { name: "Zoho CRM", imageSrc: "https://www.zoho.com/favicon.ico" },
  { name: "Pipedrive", imageSrc: "https://www.pipedrive.com/favicon.ico" },
  { name: "Calendly", imageSrc: "https://calendly.com/favicon.ico" },
  { name: "Typeform", imageSrc: "https://www.typeform.com/favicon.ico" },
  { name: "Airtable", imageSrc: "https://airtable.com/favicon.ico" },
  { name: "Stripe", imageSrc: "https://stripe.com/favicon.ico" },
  { name: "PayPal", imageSrc: "https://www.paypal.com/favicon.ico" },
  { name: "QuickBooks", imageSrc: "https://www.quickbooks.com/favicon.ico" },
  { name: "Xero", imageSrc: "https://www.xero.com/favicon.ico" },
  { name: "Intercom", imageSrc: "https://www.intercom.com/favicon.ico" },
  { name: "Mailchimp", imageSrc: "https://mailchimp.com/favicon.ico" },
  { name: "Klaviyo", imageSrc: "/logos/klaviyo.png" }, // Keeping local as no public URL was provided
  { name: "Google Analytics", imageSrc: "https://www.google.com/favicon.ico" },
  { name: "Figma", imageSrc: "https://www.figma.com/favicon.ico" },
  { name: "Loom", imageSrc: "https://www.loom.com/favicon.ico" },
  { name: "LinkedIn", imageSrc: "https://www.linkedin.com/favicon.ico" },
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
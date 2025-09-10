"use client";

import React from "react";

const integrations = [
  // Prioritized Integrations
  { name: "ClickUp", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/clickup.svg", gradient: "linear-gradient(135deg, #7B68EE, #FF6B9D)" },
  { name: "Slack", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg", gradient: "linear-gradient(45deg, #E01E5A, #36C5F0, #2EB67D, #ECB22E)" },
  { name: "Google Drive", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googledrive.svg", gradient: "linear-gradient(135deg, #4285F4, #34A853, #FBBC04)" },
  { name: "Google Calendar", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlecalendar.svg", gradient: "linear-gradient(135deg, #4285F4, #34A853)" },
  { name: "Gmail", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg", gradient: "linear-gradient(135deg, #EA4335, #FBBC04, #34A853)" },
  { name: "Google Analytics", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googleanalytics.svg", gradient: "linear-gradient(135deg, #F9AB00, #E37400)" },
  { name: "OneDrive", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftonedrive.svg", gradient: "linear-gradient(135deg, #0078D4, #00BCF2)" },
  { name: "SharePoint", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftsharepoint.svg", gradient: "linear-gradient(135deg, #0078D4, #106EBE)" },
  { name: "Outlook Calendar", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftoutlook.svg", gradient: "linear-gradient(135deg, #0078D4, #0063B1)" },
  { name: "Microsoft Teams", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftteams.svg", gradient: "linear-gradient(135deg, #6264A7, #464775)" },
  { name: "Outlook", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftoutlook.svg", gradient: "linear-gradient(135deg, #0078D4, #0063B1)" },
  { name: "HubSpot", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hubspot.svg", gradient: "linear-gradient(135deg, #FF7A59, #FF5C35)" },
  { name: "GoHighLevel", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gohighlevel.svg", gradient: "linear-gradient(135deg, #4CAF50, #8BC34A)" },
  { name: "Trello", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/trello.svg", gradient: "linear-gradient(135deg, #0079BF, #026AA7)" },
  { name: "Xero", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xero.svg", gradient: "linear-gradient(135deg, #13B5EA, #00A4DB)" },
  { name: "Mailchimp", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mailchimp.svg", gradient: "linear-gradient(135deg, #FFE01B, #FFD60D)" },
  { name: "Intercom", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/intercom.svg", gradient: "linear-gradient(135deg, #1F8DED, #0073E6)" },
  { name: "ERP", iconUrl: "/logos/erp.svg", gradient: "linear-gradient(135deg, #795548, #A1887F)" },
  { name: "Zapier", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zapier.svg", gradient: "linear-gradient(135deg, #FF4A00, #FF6B35)" },
  { name: "Make", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/integromat.svg", gradient: "linear-gradient(135deg, #6C5CE7, #A29BFE)" },
  { name: "ChatGPT", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", gradient: "linear-gradient(135deg, #10A37F, #008060)" },
  { name: "Claude", iconUrl: "/logos/claude.svg", gradient: "linear-gradient(135deg, #8A2BE2, #9370DB)" },

  // Other Integrations
  { name: "Zoom", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zoom.svg", gradient: "linear-gradient(135deg, #2D8CFF, #0066CC)" },
  { name: "Jira", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jira.svg", gradient: "linear-gradient(135deg, #0052CC, #2684FF)" },
  { name: "Notion", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notion.svg", gradient: "linear-gradient(135deg, #000000, #37352F)" },
  { name: "Asana", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/asana.svg", gradient: "linear-gradient(135deg, #F06A6A, #F37A7A)" },
  { name: "DocuSign", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docusign.svg", gradient: "linear-gradient(135deg, #FFCC00, #FFB700)" },
  { name: "Salesforce", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/salesforce.svg", gradient: "linear-gradient(135deg, #00A1E0, #0099E0)" },
  { name: "Monday.com", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mondaydotcom.svg", gradient: "linear-gradient(135deg, #FF3D71, #FC0366)" },
  { name: "Zoho CRM", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zoho.svg", gradient: "linear-gradient(135deg, #C9302C, #E74C3C)" },
  { name: "Pipedrive", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pipedrive.svg", gradient: "linear-gradient(135deg, #1A82E2, #007BFF)" },
  { name: "Calendly", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/calendly.svg", gradient: "linear-gradient(135deg, #006BFF, #0057D9)" },
  { name: "Typeform", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typeform.svg", gradient: "linear-gradient(135deg, #262627, #000000)" },
  { name: "Airtable", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/airtable.svg", gradient: "linear-gradient(135deg, #FCB400, #FFCC02)" },
  { name: "Stripe", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stripe.svg", gradient: "linear-gradient(135deg, #635BFF, #4F46E5)" },
  { name: "PayPal", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/paypal.svg", gradient: "linear-gradient(135deg, #00457C, #0070BA)" },
  { name: "QuickBooks", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/quickbooks.svg", gradient: "linear-gradient(135deg, #0077C5, #2CA01C)" },
  { name: "Klaviyo", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/klaviyo.svg", gradient: "linear-gradient(135deg, #FB7A00, #E85D00)" },
  { name: "Figma", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg", gradient: "linear-gradient(135deg, #F24E1E, #A259FF, #1ABCFE, #0ACF83, #FF7262)" },
  { name: "Loom", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/loom.svg", gradient: "linear-gradient(135deg, #625DF5, #5048E5)" },
  { name: "LinkedIn", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg", gradient: "linear-gradient(135deg, #0A66C2, #004182)" },
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

        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll-integrations">
            {[...integrations, ...integrations, ...integrations].map((integration, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 md:w-40 p-4 flex flex-col items-center justify-center text-center mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-110"
              >
                <div
                  className="h-10 w-10 mb-2"
                  style={{
                    background: integration.gradient,
                    WebkitMask: `url(${integration.iconUrl}) no-repeat center`,
                    mask: `url(${integration.iconUrl}) no-repeat center`,
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                  }}
                ></div>
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
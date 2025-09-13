"use client";

import React from "react";

const integrations = [
  { name: "ClickUp", iconUrl: "/logos/clickup-logo.jpeg", gradient: "linear-gradient(135deg, #7B68EE, #FF6B9D)" },
  { name: "ClickUp", iconUrl: "/logos/clickup-logo.jpeg", gradient: "linear-gradient(135deg, #7B68EE, #FF6B9D)" },
  { name: "ClickUp", iconUrl: "/logos/clickup-logo.jpeg", gradient: "linear-gradient(135deg, #7B68EE, #FF6B9D)" },
  { name: "Trello", iconUrl: "https://logo.clearbit.com/trello.com?size=50", gradient: "linear-gradient(135deg, #0079BF, #026AA7)" },
  { name: "HubSpot", iconUrl: "https://logo.clearbit.com/hubspot.com?size=50", gradient: "linear-gradient(135deg, #FF7A59, #FF5C35)" },
  { name: "Microsoft 365", iconUrl: "https://logo.clearbit.com/microsoft.com?size=50", gradient: "linear-gradient(135deg, #FFB900, #0078D4)" },
  { name: "Google Workspace", iconUrl: "https://logo.clearbit.com/workspace.google.com?size=50", gradient: "linear-gradient(135deg, #4285F4, #34A853, #FBBC04)" },
  { name: "Xero", iconUrl: "https://logo.clearbit.com/xero.com?size=50", gradient: "linear-gradient(135deg, #13B5EA, #00A4DB)" },
  { name: "Slack", iconUrl: "https://logo.clearbit.com/slack.com?size=50", gradient: "linear-gradient(45deg, #E01E5A, #36C5F0, #2EB67D, #ECB22E)" },
  { name: "Mailchimp", iconUrl: "https://logo.clearbit.com/mailchimp.com?size=50", gradient: "linear-gradient(135deg, #FFE01B, #FFD60D)" },
  { name: "Zapier", iconUrl: "https://logo.clearbit.com/zapier.com?size=50", gradient: "linear-gradient(135deg, #FF4A00, #FF6B35)" },
  { name: "Make.com", iconUrl: "https://logo.clearbit.com/make.com?size=50", gradient: "linear-gradient(135deg, #6C5CE7, #A29BFE)" },
  { name: "Zoho", iconUrl: "https://logo.clearbit.com/zoho.com?size=50", gradient: "linear-gradient(135deg, #F26522, #FF8C00)" },
  { name: "Go Highlevel", iconUrl: "https://logo.clearbit.com/gohighlevel.com?size=50", gradient: "linear-gradient(135deg, #6A5ACD, #8A2BE2)" },
  { name: "Zoom", iconUrl: "https://logo.clearbit.com/zoom.us?size=50", gradient: "linear-gradient(135deg, #2D8CFF, #0066CC)" },
  { name: "ChatGPT", iconUrl: "https://logo.clearbit.com/openai.com?size=50", gradient: "linear-gradient(135deg, #10A37F, #008060)" },
  { name: "Calendly", iconUrl: "https://logo.clearbit.com/calendly.com?size=50", gradient: "linear-gradient(135deg, #006BFF, #0057D9)" },
  { name: "Asana", iconUrl: "https://logo.clearbit.com/asana.com?size=50", gradient: "linear-gradient(135deg, #F06A6A, #F37A7A)" },
  { name: "Stripe", iconUrl: "https://logo.clearbit.com/stripe.com?size=50", gradient: "linear-gradient(135deg, #6772E5, #5469D4)" },
  { name: "Quickbooks", iconUrl: "https://logo.clearbit.com/quickbooks.intuit.com?size=50", gradient: "linear-gradient(135deg, #0077C5, #2CA01C)" },
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
          ✨ New integrations added weekly!
        </p>
      </div>
    </section>
  );
};

export default IntegrationsSection;
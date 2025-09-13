"use client";

import React from "react";

const integrations = [
  { name: "ClickUp", iconUrl: "/logos/clickup-logo.jpeg", gradient: "linear-gradient(135deg, #7B68EE, #FF6B9D)" },
  { name: "Mailchimp", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mailchimp.svg", gradient: "linear-gradient(135deg, #FFE01B, #FFD60D)" },
  { name: "Make", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/integromat.svg", gradient: "linear-gradient(135deg, #6C5CE7, #A29BFE)" },
  { name: "Zapier", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zapier.svg", gradient: "linear-gradient(135deg, #FF4A00, #FF6B35)" },
  { name: "Go Highlevel", iconUrl: "https://logo.clearbit.com/gohighlevel.com?size=50", gradient: "linear-gradient(135deg, #6A5ACD, #8A2BE2)" },
  { name: "HubSpot", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hubspot.svg", gradient: "linear-gradient(135deg, #FF7A59, #FF5C35)" },
  { name: "Google Workspace", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg", gradient: "linear-gradient(135deg, #4285F4, #34A853, #FBBC04)" },
  { name: "Microsoft 365", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoft365.svg", gradient: "linear-gradient(135deg, #FFB900, #0078D4)" },
  { name: "Canva", iconUrl: "/logos/canva.jpeg", gradient: "linear-gradient(135deg, #00C4CC, #432889)" },
  { name: "Slack", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg", gradient: "linear-gradient(45deg, #E01E5A, #36C5F0, #2EB67D, #ECB22E)" },
  { name: "Xero", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xero.svg", gradient: "linear-gradient(135deg, #13B5EA, #00A4DB)" },
  { name: "Calendly", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/calendly.svg", gradient: "linear-gradient(135deg, #006BFF, #0057D9)" },
  { name: "Zoom", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zoom.svg", gradient: "linear-gradient(135deg, #2D8CFF, #0066CC)" },
  { name: "Trello", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/trello.svg", gradient: "linear-gradient(135deg, #0079BF, #026AA7)" },
  { name: "Asana", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/asana.svg", gradient: "linear-gradient(135deg, #F06A6A, #F37A7A)" },
  { name: "QuickBooks", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/quickbooks.svg", gradient: "linear-gradient(135deg, #0077C5, #2CA01C)" },
  { name: "PayPal", iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/paypal.svg", gradient: "linear-gradient(135deg, #00457C, #0070BA)" },
  { name: "Figma", iconUrl: "/logos/figma.png", gradient: "linear-gradient(135deg, #F24E1E, #A259FF, #1ABCFE, #0ACF83, #FF7262)" },
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
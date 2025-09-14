"use client";

import React from "react";
import { Puzzle } from "lucide-react"; // Import Puzzle icon for fallback

const integrations = [
  { name: "ClickUp", logo: "/logos/clickup-logo.jpeg" },
  { name: "Trello", logo: "https://logo.clearbit.com/trello.com?size=50" },
  { name: "HubSpot", logo: "https://logo.clearbit.com/hubspot.com?size=50" },
  { name: "Microsoft 365", logo: "https://logo.clearbit.com/microsoft.com?size=50" },
  { name: "Google Workspace", logo: "https://logo.clearbit.com/workspace.google.com?size=50" },
  { name: "Xero", logo: "https://logo.clearbit.com/xero.com?size=50" },
  { name: "Slack", logo: "https://logo.clearbit.com/slack.com?size=50" },
  { name: "Mailchimp", logo: "https://logo.clearbit.com/mailchimp.com?size=50" },
  { name: "Zapier", logo: "https://logo.clearbit.com/zapier.com?size=50" },
  { name: "Make.com", logo: "https://logo.clearbit.com/make.com?size=50" },
  { name: "Zoho", logo: "https://logo.clearbit.com/zoho.com?size=50" },
  { name: "Go Highlevel", logo: "https://logo.clearbit.com/gohighlevel.com?size=50" },
  { name: "Zoom", logo: "https://logo.clearbit.com/zoom.us?size=50" },
  { name: "ChatGPT", logo: "https://logo.clearbit.com/openai.com?size=50" },
  { name: "Calendly", logo: "https://logo.clearbit.com/calendly.com?size=50" },
  { name: "Asana", logo: "https://logo.clearbit.com/asana.com?size=50" },
  { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com?size=50" },
  { name: "Quickbooks", logo: "https://logo.clearbit.com/quickbooks.intuit.com?size=50" },
  { name: "Figma", logo: "/logos/figma-new.jpeg" },
  { name: "Canva", logo: "/logos/canva-new.jpeg" },
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
                {integration.logo ? (
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    title={integration.name}
                    className="h-10 w-10 mb-2 object-contain filter grayscale-0 opacity-100 hover:grayscale hover:opacity-60 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.onerror = null; // Prevent infinite loop if placeholder also fails
                      e.currentTarget.src = 'https://via.placeholder.com/50?text=Logo'; // Fallback to a generic placeholder
                    }}
                  />
                ) : (
                  <div className="h-10 w-10 mb-2 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <Puzzle className="h-8 w-8" /> {/* Placeholder icon */}
                  </div>
                )}
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
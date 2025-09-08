"use client";

import React from "react";
import {
  ClipboardList, Mail, Briefcase, MessageSquare, Video, Target, Cloud,
  Pin, CheckCircle, FileText, Mailbox, CreditCard, DollarSign, BarChart,
  ShoppingCart, Newspaper, Zap, Calendar, Box, Palette, Image, Smartphone,
  Bird, MessageCircle, Headphones, Leaf, TrendingUp, Database, FormInput,
  Film
} from "lucide-react";

const integrations = [
  { name: "ClickUp", icon: ClipboardList },
  { name: "Google Workspace", icon: Mail },
  { name: "Microsoft 365", icon: Briefcase },
  { name: "Slack", icon: MessageSquare },
  { name: "Zoom", icon: Video },
  { name: "HubSpot", icon: Target },
  { name: "Salesforce", icon: Cloud },
  { name: "Trello", icon: Pin },
  { name: "Asana", icon: CheckCircle },
  { name: "Notion", icon: FileText },
  { name: "Mailchimp", icon: Mailbox },
  { name: "Stripe", icon: CreditCard },
  { name: "PayPal", icon: DollarSign },
  { name: "QuickBooks", icon: BarChart },
  { name: "Shopify", icon: ShoppingCart },
  { name: "WordPress", icon: Newspaper },
  { name: "Zapier", icon: Zap },
  { name: "Calendly", icon: Calendar },
  { name: "Dropbox", icon: Box },
  { name: "Adobe Creative", icon: Palette },
  { name: "Canva", icon: Image },
  { name: "Buffer", icon: Smartphone },
  { name: "Hootsuite", icon: Bird },
  { name: "Intercom", icon: MessageCircle },
  { name: "Zendesk", icon: Headphones },
  { name: "Freshworks", icon: Leaf },
  { name: "Monday.com", icon: TrendingUp },
  { name: "Airtable", icon: Database },
  { name: "Typeform", icon: FormInput },
  { name: "Loom", icon: Film },
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
                className="flex-shrink-0 w-32 md:w-40 p-4 flex flex-col items-center justify-center text-center mx-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <integration.icon className="h-10 w-10 text-blue-600 mb-2" />
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
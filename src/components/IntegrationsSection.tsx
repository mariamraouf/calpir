"use client";

import React from "react";
import {
  ClipboardList, MessageSquare, HardDrive, Cloud, Share2, Calendar, Video, Zap, Cog, Kanban, Target, FileText, Pin, CheckCircle, Signature, Users, Mail, UserPlus, GitBranch, FormInput, Database, CreditCard, DollarSign, BarChart, Wallet, Mailbox, MailOpen, BarChart2, Figma, Film, Linkedin
} from "lucide-react";

const integrations = [
  { name: "ClickUp", icon: ClipboardList },
  { name: "Slack", icon: MessageSquare },
  { name: "Google Drive", icon: HardDrive },
  { name: "OneDrive", icon: Cloud },
  { name: "SharePoint", icon: Share2 },
  { name: "Outlook Calendar", icon: Calendar },
  { name: "Google Calendar", icon: Calendar },
  { name: "Zoom", icon: Video },
  { name: "Zapier", icon: Zap },
  { name: "Make", icon: Cog },
  { name: "Jira", icon: Kanban },
  { name: "HubSpot", icon: Target },
  { name: "Notion", icon: FileText },
  { name: "Trello", icon: Pin },
  { name: "Asana", icon: CheckCircle },
  { name: "DocuSign", icon: Signature },
  { name: "Microsoft Teams", icon: Users },
  { name: "Gmail", icon: Mail },
  { name: "Outlook", icon: Mail },
  { name: "Salesforce", icon: Cloud },
  { name: "Monday.com", icon: Kanban },
  { name: "Zoho CRM", icon: UserPlus },
  { name: "Pipedrive", icon: GitBranch },
  { name: "Calendly", icon: Calendar },
  { name: "Typeform", icon: FormInput },
  { name: "Airtable", icon: Database },
  { name: "Stripe", icon: CreditCard },
  { name: "PayPal", icon: DollarSign },
  { name: "QuickBooks", icon: BarChart },
  { name: "Xero", icon: Wallet },
  { name: "Intercom", icon: MessageSquare },
  { name: "Mailchimp", icon: Mailbox },
  { name: "Klaviyo", icon: MailOpen },
  { name: "Google Analytics", icon: BarChart2 },
  { name: "Figma", icon: Figma },
  { name: "Loom", icon: Film },
  { name: "LinkedIn", icon: Linkedin },
];

const iconColors = [
  "text-primary", // Green
  "text-palette-blue-500",
  "text-palette-purple-400",
  "text-palette-orange-500",
  "text-palette-red-400",
  "text-palette-yellow-400",
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
                <integration.icon className={`h-10 w-10 mb-2 ${iconColors[index % iconColors.length]}`} />
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
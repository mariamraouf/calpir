"use client";

import React from "react";
import {
  ClipboardList, MessageSquare, HardDrive, Cloud, Share2, Calendar, Video, Zap, Cog, Kanban, Target, FileText, Pin, CheckCircle, Signature, Users, Mail, UserPlus, GitBranch, FormInput, Database, CreditCard, DollarSign, BarChart, Wallet, Mailbox, MailOpen, BarChart2, Figma, Film, Linkedin
} from "lucide-react";

const integrations = [
  { name: "ClickUp", icon: ClipboardList, color: "text-calpir-green-600" },
  { name: "Slack", icon: MessageSquare, color: "text-calpir-green-500" },
  { name: "Google Drive", icon: HardDrive, color: "text-calpir-green-700" },
  { name: "OneDrive", icon: Cloud, color: "text-calpir-green-400" },
  { name: "SharePoint", icon: Share2, color: "text-calpir-green-800" },
  { name: "Outlook Calendar", icon: Calendar, color: "text-calpir-green-500" },
  { name: "Google Calendar", icon: Calendar, color: "text-calpir-green-600" },
  { name: "Zoom", icon: Video, color: "text-calpir-green-700" },
  { name: "Zapier", icon: Zap, color: "text-calpir-green-400" },
  { name: "Make", icon: Cog, color: "text-calpir-green-800" },
  { name: "Jira", icon: Kanban, color: "text-calpir-green-500" },
  { name: "HubSpot", icon: Target, color: "text-calpir-green-600" },
  { name: "Notion", icon: FileText, color: "text-calpir-green-700" },
  { name: "Trello", icon: Pin, color: "text-calpir-green-400" },
  { name: "Asana", icon: CheckCircle, color: "text-calpir-green-800" },
  { name: "DocuSign", icon: Signature, color: "text-calpir-green-500" },
  { name: "Microsoft Teams", icon: Users, color: "text-calpir-green-600" },
  { name: "Gmail", icon: Mail, color: "text-calpir-green-700" },
  { name: "Outlook", icon: Mail, color: "text-calpir-green-400" },
  { name: "Salesforce", icon: Cloud, color: "text-calpir-green-800" },
  { name: "Monday.com", icon: Kanban, color: "text-calpir-green-500" },
  { name: "Zoho CRM", icon: UserPlus, color: "text-calpir-green-600" },
  { name: "Pipedrive", icon: GitBranch, color: "text-calpir-green-700" },
  { name: "Calendly", icon: Calendar, color: "text-calpir-green-400" },
  { name: "Typeform", icon: FormInput, color: "text-calpir-green-800" },
  { name: "Airtable", icon: Database, color: "text-calpir-green-500" },
  { name: "Stripe", icon: CreditCard, color: "text-calpir-green-600" },
  { name: "PayPal", icon: DollarSign, color: "text-calpir-green-700" },
  { name: "QuickBooks", icon: BarChart, color: "text-calpir-green-400" },
  { name: "Xero", icon: Wallet, color: "text-calpir-green-800" },
  { name: "Intercom", icon: MessageSquare, color: "text-calpir-green-500" },
  { name: "Mailchimp", icon: Mailbox, color: "text-calpir-green-600" },
  { name: "Klaviyo", icon: MailOpen, color: "text-calpir-green-700" },
  { name: "Google Analytics", icon: BarChart2, color: "text-calpir-green-400" },
  { name: "Figma", icon: Figma, color: "text-calpir-green-800" },
  { name: "Loom", icon: Film, color: "text-calpir-green-500" },
  { name: "LinkedIn", icon: Linkedin, color: "text-calpir-green-600" },
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
                <integration.icon className={`h-10 w-10 mb-2 ${integration.color}`} />
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
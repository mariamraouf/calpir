"use client";

import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronRight, LayoutGrid, Settings, Users, Zap, MessageSquare, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

// Curated list of platforms for the dropdown, categorized
const platformCategoriesForDropdown = [
  {
    name: "Project Management",
    icon: LayoutGrid,
    items: [
      { name: "ClickUp", logo: "/logos/clickup.png", href: "/platforms#project-management" },
      { name: "Notion", logo: "/logos/notion.png", href: "/platforms#project-management" },
      { name: "Jira", logo: "/logos/jira.png", href: "/platforms#project-management" },
      { name: "Asana", logo: "/logos/asana.png", href: "/platforms#project-management" },
    ],
  },
  {
    name: "CRM & Sales",
    icon: DollarSign,
    items: [
      { name: "HubSpot", logo: "/logos/hubspot.png", href: "/platforms#crm-sales" },
      { name: "Salesforce", logo: "/logos/salesforce.png", href: "/platforms#crm-sales" },
      { name: "Pipedrive", logo: "/logos/pipedrive.png", href: "/platforms#crm-sales" },
      { name: "Zoho CRM", logo: "/logos/zoho-crm.png", href: "/platforms#crm-sales" },
    ],
  },
  {
    name: "AI & Automation",
    icon: Zap,
    items: [
      { name: "ChatGPT", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", href: "/platforms#ai-and-automations" },
      { name: "Claude", logo: "/logos/claude.svg", href: "/platforms#ai-and-automations" },
      { name: "Zapier", logo: "/logos/zapier.png", href: "/platforms#ai-and-automations" },
      { name: "Make.com", logo: "/logos/make.png", href: "/platforms#ai-and-automations" },
    ],
  },
  {
    name: "Communication",
    icon: MessageSquare,
    items: [
      { name: "Slack", logo: "/logos/slack.png", href: "/platforms#email-communication" },
      { name: "Zoom", logo: "/logos/zoom.png", href: "/platforms#email-communication" },
      { name: "Google Workspace", logo: "/logos/google-drive.png", href: "/platforms#email-communication" },
      { name: "Microsoft Teams", logo: "/logos/microsoft-teams.png", href: "/platforms#email-communication" },
    ],
  },
];

const PlatformDropdown = ({ className }: { className?: string }) => {
  return (
    <DropdownMenuContent
      className={cn(
        "w-[600px] p-4 grid grid-cols-2 gap-x-8 gap-y-4",
        className
      )}
    >
      {platformCategoriesForDropdown.map((category, index) => (
        <div key={index} className="flex flex-col">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
            <category.icon className="h-4 w-4 mr-2 text-primary" />
            {category.name}
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {category.items.map((item, itemIndex) => (
              <DropdownMenuItem key={itemIndex} asChild>
                <Link
                  to={item.href}
                  className="flex items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <img src={item.logo} alt={item.name} className="h-6 w-6 mr-2 object-contain" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.name}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        </div>
      ))}
      <DropdownMenuSeparator className="col-span-2 my-4" />
      <DropdownMenuItem asChild className="col-span-2">
        <Link
          to="/platforms"
          className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-primary dark:text-calpir-green-300 font-semibold"
        >
          View All Platforms
          <ChevronRight className="h-4 w-4 ml-2" />
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};

export default PlatformDropdown;
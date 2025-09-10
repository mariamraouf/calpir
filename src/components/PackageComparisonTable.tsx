"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the structure for a package (simplified for table comparison)
interface Package {
  name: string;
  features: string[]; // List of features included in the package
}

// Define the packages data (simplified from Pricing.tsx for comparison logic)
const packages: Package[] = [
  {
    name: "Starter Package",
    features: [
      "Website: Up to 5 pages (build/redesign)",
      "Project Management: Basic setup (up to 2 workspace spaces, simple tasks)",
      "Migration: Move to 1 platform (e.g., CRM/project tool, data import)",
      "Social Media: Setup on 2 platforms + 5 designs or posts",
      "CRM: Basic contact tracking",
      "Accounting: Simple invoicing",
      "Integrations: Up to 2 connections",
      "Analytics: Basic monthly summary",
      "HR/Recruiting: Templates + basic global strategy",
    ],
  },
  {
    name: "Growth Package",
    features: [
      "Website: Up to 10 pages (Including SEO)",
      "Project Management: Enhanced setup (Up to 5 workspaces, basic automations)",
      "Migration: Move to 2-3 platforms (e.g., CRM + project tool)",
      "Social Media: Setup on 5 platforms + 10 designs/posts (1-month plan)",
      "CRM: Advanced CRM with automation",
      "Accounting: Expense tracking",
      "Integrations: Up to 5 connections",
      "Analytics: Monthly detailed insights",
      "HR/Recruiting: Job postings on 2 global sites",
    ],
  },
  {
    name: "Ultimate Package",
    features: [
      "Website: Unlimited pages (custom features/advanced SEO)",
      "Project Management: Advanced setup (unlimited workspaces, full automations)",
      "Migration: Move to multiple platforms (unlimited, full stack overhaul)",
      "Social Media: Setup on 5+ platforms + 20 designs/posts per month (3-month plan)",
      "CRM: Predictive automation",
      "Accounting: Forecasting tools",
      "Integrations: Unlimited as needed",
      "Analytics: Weekly insights/recommendations",
      "HR/Recruiting: Full strategy + sourcing for 1 global role",
    ],
  },
];

// Simplified list of features for the comparison table rows
const comparisonFeatures = [
  "Website Development",
  "Project Management Setup",
  "Platform Migration",
  "Social Media Setup & Content",
  "CRM Setup",
  "Accounting System Setup",
  "Platform Integrations",
  "Analytics & Reporting",
  "HR & Recruiting Support",
];

// Helper function to determine if a feature is generally included in a package
const isFeatureIncluded = (featureKey: string, pkg: Package): boolean => {
  switch (featureKey) {
    case "Website Development":
      return pkg.features.some(f => f.includes("Website:"));
    case "Project Management Setup":
      return pkg.features.some(f => f.includes("Project Management:"));
    case "Platform Migration":
      return pkg.features.some(f => f.includes("Migration:"));
    case "Social Media Setup & Content":
      return pkg.features.some(f => f.includes("Social Media:"));
    case "CRM Setup":
      return pkg.features.some(f => f.includes("CRM:"));
    case "Accounting System Setup":
      return pkg.features.some(f => f.includes("Accounting:"));
    case "Platform Integrations":
      return pkg.features.some(f => f.includes("Integrations:"));
    case "Analytics & Reporting":
      return pkg.features.some(f => f.includes("Analytics:"));
    case "HR & Recruiting Support":
      return pkg.features.some(f => f.includes("HR/Recruiting:"));
    default:
      return false;
  }
};

const PackageComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-700 shadow-lg bg-gray-800 dark:bg-gray-800 animate-fade-in-up delay-1000">
      <Table className="w-full text-left">
        <TableHeader className="bg-gray-900 dark:bg-gray-900">
          <TableRow className="border-b border-gray-700">
            <TableHead className="min-w-[200px] p-4 text-lg font-semibold text-white dark:text-white">Features</TableHead>
            {packages.map((pkg, index) => (
              <TableHead key={index} className="p-4 text-center text-lg font-semibold text-primary dark:text-calpir-green-300">
                {pkg.name.replace(" Package", "")}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonFeatures.map((feature, featureIndex) => (
            <TableRow key={featureIndex} className="border-b border-gray-700 last:border-b-0 hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors duration-200">
              <TableCell className="p-4 font-medium text-gray-200 dark:text-gray-200">{feature}</TableCell>
              {packages.map((pkg, pkgIndex) => (
                <TableCell key={pkgIndex} className="p-4 text-center">
                  {isFeatureIncluded(feature, pkg) ? (
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <span className="text-gray-500">-</span> // Or leave empty if preferred
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PackageComparisonTable;
"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the structure for a package
interface Package {
  name: string;
  price: string; // Added price property
  features: string[]; // List of features included in the package
}

// Define the packages data (simplified from Pricing.tsx for comparison logic)
const packages: Package[] = [
  {
    name: "Starter Package",
    price: "$1,499", // Price added
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
    price: "$2,999", // Price added
    features: [
      "Everything in Starter, plus:",
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
    price: "$5,999", // Price added
    features: [
      "Everything in Growth, plus:",
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

// List of features for the comparison table rows
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

// Helper function to extract specific detail for a feature from a package
const getFeatureDetail = (featureKey: string, pkg: Package): string => {
  const findDetail = (prefix: string) => {
    // Find the feature line that starts with the prefix
    const featureLine = pkg.features.find(f => f.startsWith(prefix));
    // If found, return the part after the prefix, trimmed. Otherwise, return empty string.
    return featureLine ? featureLine.replace(prefix, '').trim() : '';
  };

  switch (featureKey) {
    case "Website Development":
      return findDetail("Website:");
    case "Project Management Setup":
      return findDetail("Project Management:");
    case "Platform Migration":
      return findDetail("Migration:");
    case "Social Media Setup & Content":
      return findDetail("Social Media:");
    case "CRM Setup":
      return findDetail("CRM:");
    case "Accounting System Setup":
      return findDetail("Accounting:");
    case "Platform Integrations":
      return findDetail("Integrations:");
    case "Analytics & Reporting":
      return findDetail("Analytics:");
    case "HR & Recruiting Support":
      return findDetail("HR/Recruiting:");
    default:
      return ""; // Return empty string if feature key doesn't match
  }
};

const PackageComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 animate-fade-in-up delay-1000">
      <Table className="w-full text-left">
        <TableHeader className="bg-gray-100 dark:bg-gray-900">
          <TableRow className="border-b border-gray-200 dark:border-gray-700">
            <TableHead className="min-w-[200px] p-4 text-lg font-semibold text-gray-900 dark:text-white">Features</TableHead>
            {packages.map((pkg, index) => (
              <TableHead key={index} className="p-4 text-center text-lg font-semibold text-primary dark:text-calpir-green-300">
                {pkg.name.replace(" Package", "")}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Price Row */}
          <TableRow className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <TableCell className="p-4 font-bold text-lg text-gray-900 dark:text-white">Price</TableCell>
            {packages.map((pkg, pkgIndex) => (
              <TableCell key={pkgIndex} className="p-4 text-center text-2xl font-extrabold text-primary dark:text-calpir-green-300">
                {pkg.price}
              </TableCell>
            ))}
          </TableRow>
          {/* Other Features Rows */}
          {comparisonFeatures.map((feature, featureIndex) => (
            <TableRow key={featureIndex} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <TableCell className="p-4 font-medium text-gray-800 dark:text-gray-200">{feature}</TableCell>
              {packages.map((pkg, pkgIndex) => {
                const detail = getFeatureDetail(feature, pkg);
                return (
                  <TableCell key={pkgIndex} className="p-4 text-center text-gray-700 dark:text-gray-300">
                    {detail ? detail : <span className="text-gray-500">-</span>}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PackageComparisonTable;
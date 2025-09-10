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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react"; // Import CheckCircle icon

// Define the structure for a package
interface Package {
  name: string;
  price: string;
  features: string[]; // List of features included in the package
}

// Define the packages data
const packages: Package[] = [
  {
    name: "Starter Package",
    price: "$1,499",
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
    price: "$2,999",
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
    price: "$5,999",
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

// List of features for the comparison table rows, with a key for matching
const comparisonFeatures = [
  { key: "Website", label: "Website Development" },
  { key: "Project Management", label: "Project Management Setup" },
  { key: "Migration", label: "Platform Migration" },
  { key: "Social Media", label: "Social Media Setup & Content" },
  { key: "CRM", label: "CRM Setup" },
  { key: "Accounting", label: "Accounting System Setup" },
  { key: "Integrations", label: "Platform Integrations" },
  { key: "Analytics", label: "Analytics & Reporting" },
  { key: "HR/Recruiting", label: "HR & Recruiting Support" },
];

// Helper function to extract specific detail for a feature from a package
const getFeatureDetail = (featureKey: string, pkg: Package): string | null => {
  const featureLine = pkg.features.find(f => f.startsWith(featureKey + ":"));
  return featureLine ? featureLine.replace(featureKey + ":", '').trim() : null;
};

const PackageComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-palette-blue-100 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 animate-fade-in-up delay-1000">
      <Table className="w-full text-left">
        <TableHeader className="bg-gray-100 dark:bg-gray-900">
          <TableRow className="border-b border-palette-blue-100 dark:border-gray-700">
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
          <TableRow className="border-b border-palette-blue-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <TableCell className="p-4 font-bold text-lg text-gray-900 dark:text-white">Price</TableCell>
            {packages.map((pkg, pkgIndex) => (
              <TableCell key={pkgIndex} className="p-4 text-center text-2xl font-extrabold text-primary dark:text-calpir-green-300">
                {pkg.price}
              </TableCell>
            ))}
          </TableRow>
          {/* Other Features Rows */}
          {comparisonFeatures.map((featureItem, featureIndex) => (
            <TableRow key={featureIndex} className="border-b border-palette-blue-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <TableCell className="p-4 font-medium text-gray-800 dark:text-gray-200">{featureItem.label}</TableCell>
              {packages.map((pkg, pkgIndex) => {
                const detail = getFeatureDetail(featureItem.key, pkg);
                return (
                  <TableCell key={pkgIndex} className="p-4 text-center text-gray-700 dark:text-gray-300">
                    {detail ? (
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-calpir-green-500" />
                        <span className="text-sm text-gray-800 dark:text-gray-200">{detail}</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="h-5 w-5 flex items-center justify-center text-palette-orange-500 text-xl font-bold">-</span>
                      </div>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
          {/* Buttons Row */}
          <TableRow className="bg-gray-100 dark:bg-gray-900 border-t border-palette-blue-100 dark:border-gray-700">
            <TableCell className="p-4"></TableCell> {/* Empty cell for the features column */}
            {packages.map((pkg, pkgIndex) => (
              <TableCell key={pkgIndex} className="p-4 text-center">
                <Link to="/build-my-business">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-md px-4 py-2 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-button-glow"
                  >
                    Start My Package
                  </Button>
                </Link>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PackageComparisonTable;
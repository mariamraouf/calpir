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
import { CheckCircle, XCircle } from "lucide-react";

// Define the structure for a package with nested features
interface Package {
  name: string;
  price: string;
  digitalPresence: {
    websiteDevelopment: string;
    hostingDomain: boolean;
    domainRegistration: boolean;
    seoOptimization: boolean;
    socialMediaSetup: string;
    additionalWebsitePages: string | boolean;
    ecommerceFunctionality: boolean;
  };
  businessOperations: {
    projectManagement: string;
    crmSetup: string;
    accountingSystem: string;
    platformMigration: string;
    integrations: string;
    analyticsReporting: string;
    businessAutomations: string | boolean;
    sops: boolean;
    payroll: boolean;
    performanceManagement: boolean;
  };
  humanResources: {
    employeeProfiles: boolean;
    legalTemplates: string;
    recruitingSupport: string;
    singleRoleRecruitment: boolean;
    multiRoleRecruitment: boolean;
    comprehensiveRecruitment: boolean;
    advancedHrSystem: string;
    onboardingOffboardingWorkflows: string | boolean;
    timeTracking: string | boolean;
    timeAttendanceTracking: string | boolean;
    employeeEngagementSurveys: boolean;
  };
  training: {
    basicTrainingSessions: boolean;
  };
}

// Define the packages data based on the new structure
const packages: Package[] = [
  {
    name: "Starter Package",
    price: "$1,499",
    digitalPresence: {
      websiteDevelopment: "5 pages",
      hostingDomain: true,
      domainRegistration: true,
      seoOptimization: false,
      socialMediaSetup: "2 platforms + 5 posts",
      additionalWebsitePages: false,
      ecommerceFunctionality: false,
    },
    businessOperations: {
      projectManagement: "Basic (2 workspaces)",
      crmSetup: "Basic contact tracking",
      accountingSystem: "Simple invoicing",
      platformMigration: "1 platform",
      integrations: "2 connections",
      analyticsReporting: "Monthly summary",
      businessAutomations: false,
      sops: false,
      payroll: false,
      performanceManagement: false,
    },
    humanResources: {
      employeeProfiles: true,
      legalTemplates: "Contract draft only",
      recruitingSupport: "Job templates",
      singleRoleRecruitment: false,
      multiRoleRecruitment: false,
      comprehensiveRecruitment: false,
      advancedHrSystem: "",
      onboardingOffboardingWorkflows: false,
      timeTracking: false,
      timeAttendanceTracking: false,
      employeeEngagementSurveys: false,
    },
    training: {
      basicTrainingSessions: false,
    },
  },
  {
    name: "Growth Package",
    price: "$2,999",
    digitalPresence: {
      websiteDevelopment: "10 pages",
      hostingDomain: true,
      domainRegistration: true,
      seoOptimization: true,
      socialMediaSetup: "5 platforms + 10 posts",
      additionalWebsitePages: "Up to 5 pages",
      ecommerceFunctionality: false,
    },
    businessOperations: {
      projectManagement: "Enhanced (5 workspaces)",
      crmSetup: "Advanced with automation",
      accountingSystem: "Expense tracking",
      platformMigration: "2-3 platforms",
      integrations: "5 connections",
      analyticsReporting: "Monthly insights + Recommendation",
      businessAutomations: "Basic Automation Setup",
      sops: true,
      payroll: false,
      performanceManagement: false,
    },
    humanResources: {
      employeeProfiles: true,
      legalTemplates: "✓",
      recruitingSupport: "Job postings on 2 global sites",
      singleRoleRecruitment: false,
      multiRoleRecruitment: false,
      comprehensiveRecruitment: false,
      advancedHrSystem: "ATS & talent pipeline",
      onboardingOffboardingWorkflows: true,
      timeTracking: "Advanced timetracking with reports",
      timeAttendanceTracking: true,
      employeeEngagementSurveys: false,
    },
    training: {
      basicTrainingSessions: true,
    },
  },
  {
    name: "Ultimate Package",
    price: "$5,999",
    digitalPresence: {
      websiteDevelopment: "Unlimited pages",
      hostingDomain: true,
      domainRegistration: true,
      seoOptimization: true,
      socialMediaSetup: "5+ platforms + 20 posts",
      additionalWebsitePages: "Unlimited pages",
      ecommerceFunctionality: true,
    },
    businessOperations: {
      projectManagement: "Advanced (unlimited)",
      crmSetup: "Predictive automation",
      accountingSystem: "Forecasting tools",
      platformMigration: "Multiple platforms",
      integrations: "Unlimited",
      analyticsReporting: "Weekly insights + Recommendation",
      businessAutomations: "Advanced Automation Package",
      sops: true,
      payroll: true,
      performanceManagement: true,
    },
    humanResources: {
      employeeProfiles: true,
      legalTemplates: "✓",
      recruitingSupport: "Full strategy + sourcing for 1 global role",
      singleRoleRecruitment: true,
      multiRoleRecruitment: false,
      comprehensiveRecruitment: false,
      advancedHrSystem: "Scalable ATS system",
      onboardingOffboardingWorkflows: true,
      timeTracking: "Advanced timetracking with reports and dashboard",
      timeAttendanceTracking: "Advanced Tracking",
      employeeEngagementSurveys: true,
    },
    training: {
      basicTrainingSessions: true,
    },
  },
];

// List of features for the comparison table rows, grouped by category
const comparisonFeatures = [
  {
    category: "Digital Presence",
    key: "digitalPresence",
    features: [
      { key: "websiteDevelopment", label: "Website Development" },
      { key: "hostingDomain", label: "Hosting & Domain" },
      { key: "domainRegistration", label: "Domain Registration" },
      { key: "seoOptimization", label: "SEO Optimization" },
      { key: "socialMediaSetup", label: "Social Media Setup" },
      { key: "additionalWebsitePages", label: "Additional Website Pages" },
      { key: "ecommerceFunctionality", label: "E-commerce Functionality" },
    ],
  },
  {
    category: "Business Operations",
    key: "businessOperations",
    features: [
      { key: "projectManagement", label: "Project Management" },
      { key: "crmSetup", label: "CRM Setup" },
      { key: "accountingSystem", label: "Accounting System" },
      { key: "platformMigration", label: "Platform Migration" },
      { key: "integrations", label: "Integrations" },
      { key: "analyticsReporting", label: "Analytics & Reporting" },
      { key: "businessAutomations", label: "Business Automations" },
      { key: "sops", label: "Standard Operating Procedures (SOPs)" },
      { key: "payroll", label: "Payroll" },
      { key: "performanceManagement", label: "Performance Management" },
    ],
  },
  {
    category: "Human Resources",
    key: "humanResources",
    features: [
      { key: "employeeProfiles", label: "Employee Profiles" },
      { key: "legalTemplates", label: "Legal Templates (Contracts, NDAs, Handbook)" },
      { key: "recruitingSupport", label: "Recruiting Support" },
      { key: "singleRoleRecruitment", label: "Single Role Recruitment" },
      { key: "multiRoleRecruitment", label: "Multi-Role Recruitment" },
      { key: "comprehensiveRecruitment", label: "Comprehensive Recruitment (3 months)" },
      { key: "advancedHrSystem", label: "Advanced HR System (Applicant Tracking System - ATS)" },
      { key: "onboardingOffboardingWorkflows", label: "Onboarding/Offboarding Workflows" },
      { key: "timeTracking", label: "Time Tracking" },
      { key: "timeAttendanceTracking", label: "Time/Attendance Tracking" },
      { key: "employeeEngagementSurveys", label: "Employee Engagement Surveys" },
    ],
  },
  {
    category: "Training",
    key: "training",
    features: [
      { key: "basicTrainingSessions", label: "Basic Training Sessions" },
    ],
  },
];

const PackageComparisonTable = () => {
  // This render function is primarily for the desktop table cells
  const renderDesktopFeatureValue = (value: string | boolean | null) => {
    if (value === true || value === "✓") {
      return (
        <div className="flex items-center justify-center md:justify-start">
          <CheckCircle className="h-5 w-5 text-calpir-green-500" />
        </div>
      );
    } else if (value === false || value === "" || value === null) {
      return (
        <div className="flex items-center justify-center md:justify-start">
          <XCircle className="h-5 w-5 text-palette-red-500" />
        </div>
      );
    } else {
      return (
        <span className="text-sm text-gray-800 dark:text-gray-200 text-center md:text-left">
          {value}
        </span>
      );
    }
  };

  return (
    <>
      {/* Desktop View (Table) */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-palette-blue-100 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 animate-fade-in-up delay-1000">
        <Table className="min-w-full text-left">
          <TableHeader className="bg-gray-100 dark:bg-gray-900">
            <TableRow className="border-b border-palette-blue-100 dark:border-gray-700">
              <TableHead className="min-w-[180px] p-4 text-lg font-semibold text-gray-900 dark:text-white">Features</TableHead>
              {packages.map((pkg, index) => (
                <TableHead key={index} className="min-w-[120px] p-4 text-center text-lg font-semibold text-primary dark:text-calpir-green-300">
                  {pkg.name.replace(" Package", "")}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Price Row */}
            <TableRow className="border-b border-palette-blue-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <TableCell className="min-w-[180px] p-4 font-bold text-lg text-gray-900 dark:text-white">Price</TableCell>
              {packages.map((pkg, pkgIndex) => (
                <TableCell key={pkgIndex} className="min-w-[120px] p-4 text-center text-2xl font-extrabold text-primary dark:text-calpir-green-300">
                  {pkg.price}
                </TableCell>
              ))}
            </TableRow>

            {/* Render categorized features */}
            {comparisonFeatures.map((categoryGroup, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <TableRow className="bg-gray-50 dark:bg-gray-900 border-b border-palette-blue-100 dark:border-gray-700">
                  <TableCell colSpan={packages.length + 1} className="p-4 text-xl font-bold text-gray-900 dark:text-white">
                    {categoryGroup.category}
                  </TableCell>
                </TableRow>
                {categoryGroup.features.map((featureItem, featureIndex) => (
                  <TableRow key={`${categoryGroup.key}-${featureIndex}`} className="border-b border-palette-blue-100 dark:border-gray-700 last:border-b-0 last:pb-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <TableCell className="min-w-[180px] p-4 font-medium text-gray-800 dark:text-gray-200">{featureItem.label}</TableCell>
                    {packages.map((pkg, pkgIndex) => {
                      const categoryData = pkg[categoryGroup.key as keyof Package];
                      const featureValue = categoryData ? (categoryData as any)[featureItem.key] : null;
                      return (
                        <TableCell key={pkgIndex} className="min-w-[120px] p-4 text-center text-gray-700 dark:text-gray-300">
                          {renderDesktopFeatureValue(featureValue)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </React.Fragment>
            ))}

            {/* Buttons Row */}
            <TableRow className="bg-gray-100 dark:bg-gray-900 border-t border-palette-blue-100 dark:border-gray-700">
              <TableCell className="min-w-[180px] p-4"></TableCell>
              {packages.map((pkg, pkgIndex) => (
                <TableCell key={pkgIndex} className="min-w-[120px] p-4 text-center">
                  <Link to="/build-my-business">
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-button-glow"
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

      {/* Mobile View (Stacked Cards) */}
      <div className="block md:hidden space-y-8 animate-fade-in-up delay-1000">
        {packages.map((pkg, pkgIndex) => (
          <div
            key={pkgIndex}
            className="flex flex-col p-6 rounded-2xl shadow-lg border-2 border-primary bg-white dark:bg-gray-800"
          >
            <h3 className="text-2xl font-bold mb-2 text-center text-primary dark:text-calpir-green-300">
              {pkg.name}
            </h3>
            <p className="text-4xl font-extrabold text-center text-primary dark:text-calpir-green-300 mb-6">
              {pkg.price}
            </p>

            {comparisonFeatures.map((categoryGroup, categoryIndex) => (
              <div key={categoryIndex} className="mb-4 last:mb-0">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white border-b pb-2 mb-3">
                  {categoryGroup.category}
                </h4>
                <ul className="space-y-2">
                  {categoryGroup.features.map((featureItem, featureIndex) => {
                    const categoryData = pkg[categoryGroup.key as keyof Package];
                    const featureValue = categoryData ? (categoryData as any)[featureItem.key] : null;
                    return (
                      <li key={featureIndex} className="flex items-center justify-between text-gray-700 dark:text-gray-300 py-1">
                        <span className="font-medium text-gray-900 dark:text-white">{featureItem.label}:</span>
                        {featureValue === true || featureValue === "✓" ? (
                          <CheckCircle className="h-5 w-5 text-calpir-green-500 flex-shrink-0 ml-2" />
                        ) : featureValue === false || featureValue === "" || featureValue === null ? (
                          <XCircle className="h-5 w-5 text-palette-red-500 flex-shrink-0 ml-2" />
                        ) : (
                          <span className="text-sm text-gray-800 dark:text-gray-200 text-right flex-shrink-0 ml-2">{featureValue}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <div className="mt-8 text-center">
              <Link to="/build-my-business">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-button-glow"
                >
                  Start My Package
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PackageComparisonTable;
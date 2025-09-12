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
  training: { // Only basic training sessions remain
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
      { key: "sops", label: "Standard Operating Procedures (SOPs)" }, // Expanded abbreviation
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
      { key: "advancedHrSystem", label: "Advanced HR System (Applicant Tracking System - ATS)" }, // Expanded abbreviation
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
  return (
    <div className="overflow-x-auto rounded-2xl border border-palette-blue-100 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 animate-fade-in-up delay-1000">
      <Table className="min-w-full text-left"> {/* Changed w-full table-fixed to min-w-full */}
        <TableHeader className="bg-gray-100 dark:bg-gray-900">
          <TableRow className="border-b border-palette-blue-100 dark:border-gray-700">
            <TableHead className="min-w-[180px] p-4 text-lg font-semibold text-gray-900 dark:text-white">Features</TableHead> {/* Adjusted min-w */}
            {packages.map((pkg, index) => (
              <TableHead key={index} className="min-w-[120px] p-4 text-center text-lg font-semibold text-primary dark:text-calpir-green-300"> {/* Added min-w */}
                {pkg.name.replace(" Package", "")}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Price Row */}
          <TableRow className="border-b border-palette-blue-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            <TableCell className="min-w-[180px] p-4 font-bold text-lg text-gray-900 dark:text-white">Price</TableCell> {/* Adjusted min-w */}
            {packages.map((pkg, pkgIndex) => (
              <TableCell key={pkgIndex} className="min-w-[120px] p-4 text-center text-2xl font-extrabold text-primary dark:text-calpir-green-300"> {/* Added min-w */}
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
                  <TableCell className="min-w-[180px] p-4 font-medium text-gray-800 dark:text-gray-200">{featureItem.label}</TableCell> {/* Adjusted min-w */}
                  {packages.map((pkg, pkgIndex) => {
                    // Access the feature value from the nested package structure
                    const categoryData = pkg[categoryGroup.key as keyof Package];
                    const featureValue = categoryData ? (categoryData as any)[featureItem.key] : null;

                    return (
                      <TableCell key={pkgIndex} className="min-w-[120px] p-4 text-center text-gray-700 dark:text-gray-300"> {/* Added min-w */}
                        {featureValue === true || featureValue === "✓" ? (
                          <div className="flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-calpir-green-500" />
                          </div>
                        ) : featureValue === false || featureValue === "" || featureValue === null ? (
                          <div className="flex items-center justify-center">
                            <XCircle className="h-5 w-5 text-palette-red-500" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-calpir-green-500" />
                            <span className="text-sm text-gray-800 dark:text-gray-200">{featureValue}</span>
                          </div>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </React.Fragment>
          ))}

          {/* Buttons Row */}
          <TableRow className="bg-gray-100 dark:bg-gray-900 border-t border-palette-blue-100 dark:border-gray-700">
            <TableCell className="min-w-[180px] p-4"></TableCell> {/* Adjusted min-w */}
            {packages.map((pkg, pkgIndex) => (
              <TableCell key={pkgIndex} className="min-w-[120px] p-4 text-center"> {/* Added min-w */}
                <Link to="/build-my-business">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-10 py-4 rounded-2xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-button-glow"
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
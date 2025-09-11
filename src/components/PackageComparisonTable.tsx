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
    seoOptimization: string | boolean;
    socialMediaSystemSetup: string;
    socialMediaExpansion10Posts: boolean;
    socialMediaExpansion20Posts: boolean;
    socialMediaExpansion30Posts: boolean;
    additionalWebsitePages: string | boolean;
    ecommerceFunctionality: boolean;
    brandIdentityDesign: string | boolean;
    basicEmailSetup: boolean; // Removed as individual service, but might be part of package description
    emailMarketingSystemSetup: string | boolean;
    emailMarketing3Campaigns: boolean; // Removed
    emailMarketing5Campaigns: boolean; // Removed
  };
  businessOperations: {
    projectManagement: string;
    crmSetup: string;
    accountingSystem: string;
    platformMigration: string;
    integrations: string;
    analyticsReporting: string;
    analyticsMonthlyInsights: boolean;
    analyticsMonthlyRecommendations: boolean;
    analyticsRealTime: boolean; // Removed
    businessAutomations: string | boolean;
    sops: boolean;
    payroll: boolean;
    performanceManagement: boolean;
    securityBasicsSetup: boolean;
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
    timeTrackingBasicSetup: boolean; // Removed
    timeTrackingAdvancedSetup: boolean; // Removed
    timeTrackingTeamTraining: boolean; // Removed
    employeeEngagementSurveys: boolean;
  };
  training: {
    basicTrainingSessions: boolean;
    monthlySupportPackage: boolean;
    weeklySupportPackage: boolean; // New
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
      socialMediaSystemSetup: "2 platforms",
      socialMediaExpansion10Posts: false,
      socialMediaExpansion20Posts: false,
      socialMediaExpansion30Posts: false,
      additionalWebsitePages: false,
      ecommerceFunctionality: false,
      brandIdentityDesign: false,
      basicEmailSetup: true, // Still part of package description
      emailMarketingSystemSetup: false,
      emailMarketing3Campaigns: false,
      emailMarketing5Campaigns: false,
    },
    businessOperations: {
      projectManagement: "Basic (2 workspaces)",
      crmSetup: "Basic contact tracking",
      accountingSystem: "Simple invoicing",
      platformMigration: "1 platform",
      integrations: "2 connections",
      analyticsReporting: "Monthly summary",
      analyticsMonthlyInsights: false,
      analyticsMonthlyRecommendations: false,
      analyticsRealTime: false,
      businessAutomations: false,
      sops: false,
      payroll: false,
      performanceManagement: false,
      securityBasicsSetup: false,
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
      timeTrackingBasicSetup: false,
      timeTrackingAdvancedSetup: false,
      timeTrackingTeamTraining: false,
      employeeEngagementSurveys: false,
    },
    training: {
      basicTrainingSessions: false,
      monthlySupportPackage: false,
      weeklySupportPackage: false,
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
      socialMediaSystemSetup: "5 platforms",
      socialMediaExpansion10Posts: true,
      socialMediaExpansion20Posts: false,
      socialMediaExpansion30Posts: false,
      additionalWebsitePages: "Up to 5 pages",
      ecommerceFunctionality: false,
      brandIdentityDesign: true,
      basicEmailSetup: false,
      emailMarketingSystemSetup: true,
      emailMarketing3Campaigns: false,
      emailMarketing5Campaigns: false,
    },
    businessOperations: {
      projectManagement: "Enhanced (5 workspaces)",
      crmSetup: "Advanced with automation",
      accountingSystem: "Expense tracking",
      platformMigration: "2-3 platforms",
      integrations: "5 connections",
      analyticsReporting: "Monthly insights",
      analyticsMonthlyInsights: true,
      analyticsMonthlyRecommendations: false,
      analyticsRealTime: false,
      businessAutomations: "Basic Automation Setup",
      sops: true,
      payroll: false,
      performanceManagement: false,
      securityBasicsSetup: false,
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
      timeTrackingBasicSetup: false,
      timeTrackingAdvancedSetup: false,
      timeTrackingTeamTraining: false,
      employeeEngagementSurveys: false,
    },
    training: {
      basicTrainingSessions: true,
      monthlySupportPackage: true,
      weeklySupportPackage: false,
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
      socialMediaSystemSetup: "5+ platforms",
      socialMediaExpansion10Posts: true,
      socialMediaExpansion20Posts: true,
      socialMediaExpansion30Posts: true,
      additionalWebsitePages: "Unlimited pages",
      ecommerceFunctionality: true,
      brandIdentityDesign: true,
      basicEmailSetup: false,
      emailMarketingSystemSetup: true,
      emailMarketing3Campaigns: true,
      emailMarketing5Campaigns: true,
    },
    businessOperations: {
      projectManagement: "Advanced (unlimited)",
      crmSetup: "Predictive automation",
      accountingSystem: "Forecasting tools",
      platformMigration: "Multiple platforms",
      integrations: "Unlimited",
      analyticsReporting: "Weekly insights",
      analyticsMonthlyInsights: true,
      analyticsMonthlyRecommendations: true,
      analyticsRealTime: true,
      businessAutomations: "Advanced Automation Package",
      sops: true,
      payroll: true,
      performanceManagement: true,
      securityBasicsSetup: true,
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
      timeTrackingBasicSetup: true,
      timeTrackingAdvancedSetup: true,
      timeTrackingTeamTraining: true,
      employeeEngagementSurveys: true,
    },
    training: {
      basicTrainingSessions: true,
      monthlySupportPackage: true,
      weeklySupportPackage: true, // Replaced Premium with Weekly
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
      { key: "socialMediaSystemSetup", label: "Social Media System Setup" },
      { key: "socialMediaExpansion10Posts", label: "Social Media: 10 Posts/Month" },
      { key: "socialMediaExpansion20Posts", label: "Social Media: 20 Posts/Month" },
      { key: "socialMediaExpansion30Posts", label: "Social Media: 30 Posts/Month" },
      { key: "additionalWebsitePages", label: "Additional Website Pages" },
      { key: "ecommerceFunctionality", label: "E-commerce Functionality" },
      { key: "brandIdentityDesign", label: "Brand Identity Design" },
      { key: "basicEmailSetup", label: "Email Marketing: Basic Setup" },
      { key: "emailMarketingSystemSetup", label: "Email Marketing System Setup" },
      // Removed: emailMarketing3Campaigns
      // Removed: emailMarketing5Campaigns
    ],
  },
  {
    category: "Business Operations",
    key: "businessOperations",
    features: [
      { key: "projectManagement", label: "Project Management" },
      { key: "crmSetup", label: "CRM Setup & Optimization" },
      { key: "accountingSystem", label: "Accounting System" },
      { key: "platformMigration", label: "Platform Migration" },
      { key: "integrations", label: "Platform Integrations" },
      { key: "analyticsReporting", label: "Analytics & Reporting" },
      { key: "analyticsMonthlyInsights", label: "Analytics: Monthly Insights" },
      { key: "analyticsMonthlyRecommendations", label: "Analytics: Monthly Recommendations" },
      // Removed: analyticsRealTime
      { key: "businessAutomations", label: "Custom Automations" },
      { key: "sops", label: "SOPs" },
      { key: "payroll", label: "Payroll" },
      { key: "performanceManagement", label: "Performance Management" },
      { key: "securityBasicsSetup", label: "Security Basics Setup" },
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
      { key: "advancedHrSystem", label: "Advanced HR System" },
      { key: "onboardingOffboardingWorkflows", label: "Onboarding/Offboarding Workflows" },
      // Removed: timeTrackingBasicSetup
      // Removed: timeTrackingAdvancedSetup
      // Removed: timeTrackingTeamTraining
      { key: "employeeEngagementSurveys", label: "Employee Engagement Surveys" },
    ],
  },
  {
    category: "Training & Support",
    key: "training",
    features: [
      { key: "basicTrainingSessions", label: "Basic Training Sessions" },
      { key: "monthlySupportPackage", label: "Monthly Support Package" },
      { key: "weeklySupportPackage", label: "Weekly Support Package" }, // New
    ],
  },
];

const PackageComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-palette-blue-100 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800 animate-fade-in-up delay-1000">
      <Table className="w-full text-left table-fixed">
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

          {/* Render categorized features */}
          {comparisonFeatures.map((categoryGroup, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              <TableRow className="bg-gray-50 dark:bg-gray-900 border-b border-palette-blue-100 dark:border-gray-700">
                <TableCell colSpan={packages.length + 1} className="p-4 text-xl font-bold text-gray-900 dark:text-white">
                  {categoryGroup.category}
                </TableCell>
              </TableRow>
              {categoryGroup.features.map((featureItem, featureIndex) => (
                <TableRow key={`${categoryGroup.key}-${featureIndex}`} className="border-b border-palette-blue-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <TableCell className="p-4 font-medium text-gray-800 dark:text-gray-200">{featureItem.label}</TableCell>
                  {packages.map((pkg, pkgIndex) => {
                    // Access the feature value from the nested package structure
                    const categoryData = pkg[categoryGroup.key as keyof Package];
                    const featureValue = categoryData ? (categoryData as any)[featureItem.key] : null;

                    return (
                      <TableCell key={pkgIndex} className="p-4 text-center text-gray-700 dark:text-gray-300">
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
            <TableCell className="p-4"></TableCell>
            {packages.map((pkg, pkgIndex) => (
              <TableCell key={pkgIndex} className="p-4 text-center">
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
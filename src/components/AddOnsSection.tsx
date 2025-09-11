"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, BarChart2, Users, Headphones, Share2, Mail, Globe, Code, Shield, Layout, DollarSign, BookOpen, Settings, Clock, TrendingUp, Briefcase, FileText, Palette, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    name: "Digital Foundation Services",
    description: "Build your online presence and connect with your audience.",
    icon: Globe,
    subcategories: [
      {
        name: "Website & Online Presence",
        icon: Layout,
        iconColor: "text-palette-blue-500",
        items: [
          { service: "Website Building & Hosting", investment: "$999", description: "Custom design, 5-10 pages, hosting, mobile-friendly" },
          { service: "Additional Website Pages", investment: "$199/page", description: "Professional page development" },
          { service: "E-commerce Functionality", investment: "$499", description: "Complete online store setup" },
          { service: "SEO Optimization", investment: "$599", description: "Search engine visibility boost" },
        ],
      },
      {
        name: "Social Media & Marketing",
        icon: Share2,
        iconColor: "text-palette-red-400",
        items: [
          { service: "Social Media Management Setup", investment: "$799", description: "2-5 platforms, strategy, content calendar" },
          { service: "Design & Branding Package", investment: "$1,299", description: "Logo, brand guidelines, marketing materials" },
          { service: "Email Systems & Automation", investment: "$499", description: "Complete email marketing system setup" },
        ],
      },
    ],
  },
  {
    name: "Operations & Management Services",
    description: "Streamline your business processes and enhance efficiency.",
    icon: Briefcase,
    subcategories: [
      {
        name: "Business Systems",
        icon: Settings,
        iconColor: "text-palette-yellow-400",
        items: [
          { service: "Project Management Setup", investment: "$799", description: "Complete PM system with templates" },
          { service: "Operations Flows Setup", investment: "$1,199", description: "Process mapping, Standard Operating Procedures (SOPs), workflow automation" },
          { service: "CRM Setup & Optimization", investment: "$899", description: "Sales pipeline, customer management system" },
          { service: "Accounting System Setup", investment: "$699", description: "Financial management, invoicing, reporting" },
          { service: "Analytics & Reporting", investment: "$799", description: "Business intelligence dashboards" },
        ],
      },
      {
        name: "Platform & Integration Services",
        icon: Lightbulb,
        iconColor: "text-palette-orange-400",
        items: [
          { service: "Platform Integrations", investment: "$199/integration", description: "Connect your business tools" },
          { service: "Software Migrations", investment: "$599-$1,499", description: "Seamless platform transitions (price varies based on complexity and number of platforms)" },
          { service: "Custom Automations", investment: "$299", description: "5+ workflow automations" },
        ],
      },
    ],
  },
  {
    name: "Human Resources Services",
    description: "Build and manage your team effectively.",
    icon: Users,
    subcategories: [
      {
        name: "HR Foundation",
        icon: Users,
        iconColor: "text-calpir-green-700",
        items: [
          { service: "HR & Recruiting System", investment: "$1,299", description: "Applicant Tracking System (ATS), contracts, compliance, onboarding" },
          { service: "Time Tracking System Setup", investment: "$299", description: "Productivity monitoring, project hours" },
          { service: "Performance Management", investment: "$699", description: "Goal setting, review system" },
        ],
      },
      {
        name: "Talent Acquisition",
        icon: Users,
        iconColor: "text-calpir-green-600",
        items: [
          { service: "Single Role Recruitment", investment: "$450", description: "Complete hiring for 1 position" },
          { service: "Multi-Role Recruitment", investment: "$700", description: "Hiring support for 2-3 positions" },
          { service: "Comprehensive Recruitment (3 months)", investment: "$4,999", description: "Unlimited hiring assistance" },
        ],
      },
    ],
  },
  {
    name: "Training & Support Services",
    description: "Empower your team and ensure continuous smooth operations.",
    icon: BookOpen,
    subcategories: [
      {
        name: "Team Development",
        icon: BookOpen,
        iconColor: "text-calpir-green-600",
        items: [
          { service: "Basic Training Sessions", investment: "$199/hour", description: "Essential system training" },
        ],
      },
      {
        name: "Ongoing Partnership",
        icon: Headphones,
        iconColor: "text-palette-purple-400",
        items: [
          { service: "Monthly Support Package", investment: "$199/month", description: "Strategy emails + system support" },
          { service: "Premium Support Package", investment: "$499/month", description: "Weekly calls + priority assistance" },
        ],
      },
    ],
  },
];

const AddOnsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          Choose Only What Your Business Needs
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          Select individual services to build your perfect solution, no packages required.
        </p>

        <div className="grid grid-cols-1 gap-16">
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="animate-fade-in-up" style={{ animationDelay: `${0.3 + catIndex * 0.15}s` }}>
              <div className="flex items-center justify-center mb-8">
                {category.icon && <category.icon className={`h-12 w-12 mr-4 text-primary dark:text-calpir-green-400`} />}
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">{category.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                {category.subcategories.map((subCategory, subCatIndex) => (
                  <div key={subCatIndex} className="flex flex-col bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                    <div className="flex items-center mb-6">
                      {subCategory.icon && <subCategory.icon className={`h-8 w-8 mr-3 flex-shrink-0 ${subCategory.iconColor}`} />}
                      <h4 className="text-xl font-bold text-primary dark:text-calpir-green-400">{subCategory.name}</h4>
                    </div>
                    <div className="space-y-6 flex-grow">
                      {subCategory.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                          <div className="text-left mb-2 sm:mb-0 sm:mr-4">
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.service}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                          </div>
                          <span className="text-xl font-bold text-primary dark:text-calpir-green-300 flex-shrink-0">
                            {item.investment}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-4xl mx-auto py-8">
          <p className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Ready to build your custom solution?
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
            Contact us today to discuss your specific needs and get a tailored plan.
          </p>
          <Link to="/get-a-quote">
            <Button
              size="lg"
              className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow"
            >
              Request a Custom Set Up
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;
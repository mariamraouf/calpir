"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { PlusCircle, BarChart2, Users, Headphones, Share2, Mail, Code, Shield, Layout, BookOpen, Settings, Clock, Globe, DollarSign, TrendingUp, Briefcase, FileText, Palette, Lightbulb, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PackageComparisonTable from "@/components/PackageComparisonTable"; // Import the new component

// Data for Individual Services (matching Services.tsx)
const individualServicesData = [
  {
    id: "website-building",
    icon: Layout,
    title: "Website Building & Hosting",
    investment: "$999",
    description: "Custom design, 5-10 pages, hosting, mobile-friendly",
    iconColor: "text-palette-blue-500",
  },
  {
    id: "additional-website-pages",
    icon: Layout,
    title: "Additional Website Pages",
    investment: "$199/page",
    description: "Professional page development",
    iconColor: "text-palette-blue-400",
  },
  {
    id: "ecommerce-functionality",
    icon: DollarSign,
    title: "E-commerce Functionality",
    investment: "$499",
    description: "Complete online store setup",
    iconColor: "text-palette-yellow-400",
  },
  {
    id: "seo-optimization",
    icon: Globe,
    title: "SEO Optimization",
    investment: "$599",
    description: "Search engine visibility boost",
    iconColor: "text-palette-blue-700",
  },
  {
    id: "social-media-system-setup",
    icon: Share2,
    title: "Social Media System Setup",
    investment: "$799",
    description: "Establish and manage your brand's presence across key social media platforms (setup for 2 platforms).",
    iconColor: "text-palette-red-400",
  },
  {
    id: "social-media-expansion-10-posts",
    icon: Share2,
    title: "Social Media Expansion: 10 Posts/Month",
    investment: "$199/month",
    description: "Ongoing professional social media posts with graphics to maintain an active presence.",
    iconColor: "text-palette-red-300",
  },
  {
    id: "social-media-expansion-20-posts",
    icon: Share2,
    title: "Social Media Expansion: 20 Posts/Month",
    investment: "$349/month",
    description: "Enhanced social media content with stories and increased engagement for a more dynamic presence.",
    iconColor: "text-palette-red-500",
  },
  {
    id: "social-media-expansion-30-posts",
    icon: Share2,
    title: "Social Media Expansion: 30 Posts/Month",
    investment: "$499/month",
    description: "Full social media management with comprehensive content, analytics, and community engagement.",
    iconColor: "text-palette-red-600",
  },
  {
    id: "brand-identity-design",
    icon: Palette,
    title: "Brand Identity Design",
    investment: "$1,299",
    description: "Logo, brand guidelines, marketing materials",
    iconColor: "text-palette-purple-500",
  },
  {
    id: "email-marketing-system-setup",
    icon: Mail,
    title: "Email Marketing System Setup",
    investment: "$899",
    description: "Advanced email marketing and communication strategies with automation.",
    iconColor: "text-primary",
  },
  {
    id: "project-management",
    icon: Briefcase,
    title: "Project Management Setup",
    investment: "$799",
    description: "Complete PM system with templates",
    iconColor: "text-palette-orange-500",
  },
  {
    id: "operations-flows",
    icon: FileText,
    title: "Operations Flows Setup",
    investment: "$1,199",
    description: "Process mapping, SOPs, workflow automation",
    iconColor: "text-primary",
  },
  {
    id: "crm-setup",
    icon: Settings,
    title: "CRM Setup & Optimization",
    investment: "$899",
    description: "Sales pipeline, customer management system",
    iconColor: "text-palette-blue-600",
  },
  {
    id: "accounting",
    icon: DollarSign,
    title: "Accounting System Setup",
    investment: "$699",
    description: "Financial management, invoicing, reporting",
    iconColor: "text-palette-yellow-400",
  },
  {
    id: "analytics",
    icon: TrendingUp,
    title: "Analytics & Reporting",
    investment: "$799",
    description: "Business intelligence dashboards",
    iconColor: "text-primary",
  },
  {
    id: "analytics-monthly-insights",
    icon: BarChart2,
    title: "Analytics Upgrades: Monthly Insights",
    investment: "$199/month",
    description: "Monthly performance reports",
    iconColor: "text-palette-blue-300",
  },
  {
    id: "analytics-monthly-recommendations",
    icon: BarChart2,
    title: "Analytics Upgrades: Monthly Recommendations",
    investment: "$249/month",
    description: "Detailed insights + recommendations",
    iconColor: "text-palette-blue-400",
  },
  {
    id: "integrations",
    icon: Lightbulb,
    title: "Platform Integrations",
    investment: "$199/integration",
    description: "Connect your business tools",
    iconColor: "text-palette-orange-400",
  },
  {
    id: "migrations",
    icon: BookOpen,
    title: "Software Migrations",
    investment: "$599-$1,499",
    description: "Seamless platform transitions",
    iconColor: "text-palette-red-400",
  },
  {
    id: "custom-automations",
    icon: Code,
    title: "Custom Automations",
    investment: "$299",
    description: "5+ workflow automations",
    iconColor: "text-palette-orange-400",
  },
  {
    id: "security-basics-setup",
    icon: Shield,
    title: "Security Basics Setup",
    investment: "$299",
    description: "One-time setup of fundamental security configurations",
    iconColor: "text-palette-red-500",
  },
  {
    id: "hr-recruiting-system",
    icon: Users,
    title: "HR & Recruiting System",
    investment: "$1,299",
    description: "ATS, contracts, compliance, onboarding",
    iconColor: "text-primary",
  },
  {
    id: "time-tracking",
    icon: Clock,
    title: "Time Tracking System Setup",
    investment: "$299",
    description: "Comprehensive setup of a time tracking tool with custom reports and integrations.",
    iconColor: "text-palette-orange-500",
  },
  {
    id: "performance-management",
    icon: TrendingUp,
    title: "Performance Management",
    investment: "$699",
    description: "Set up systems for employee performance tracking, reviews, and goal setting to foster growth.",
    iconColor: "text-palette-blue-600",
  },
  {
    id: "single-role-recruitment",
    icon: Users,
    title: "Single Role Recruitment",
    investment: "$450",
    description: "Complete hiring for 1 position",
    iconColor: "text-calpir-green-700",
  },
  {
    id: "multi-role-recruitment",
    icon: Users,
    title: "Multi-Role Recruitment",
    investment: "$700",
    description: "Hiring support for 2-3 positions",
    iconColor: "text-calpir-green-600",
  },
  {
    id: "comprehensive-recruitment",
    icon: Users,
    title: "Comprehensive Recruitment (3 months)",
    investment: "$4,999",
    description: "Unlimited hiring assistance",
    iconColor: "text-calpir-green-500",
  },
  {
    id: "basic-training-sessions",
    icon: BookOpen,
    title: "Basic Training Sessions",
    investment: "$199/hour",
    description: "Essential system training",
    iconColor: "text-calpir-green-600",
  },
  {
    id: "monthly-support-package",
    icon: Headphones,
    title: "Monthly Support Package",
    investment: "$199/month",
    description: "Strategy emails + system support",
    iconColor: "text-palette-purple-400",
  },
  {
    id: "weekly-support-package", // New service
    icon: Headphones,
    title: "Weekly Support Package",
    investment: "$499/month",
    description: "Dedicated weekly calls and priority support for critical business needs.",
    iconColor: "text-palette-purple-500",
  },
];

// Data for add-ons (matching AddOnsSection.tsx)
const addOnsCategories = [
  {
    name: "Social Media Expansion",
    icon: Share2,
    iconColor: "text-palette-red-400",
    items: [
      { posts: "10 Posts/Month", price: "$199/month", description: "Professional social media posts with graphics" },
      { posts: "20 Posts/Month", price: "$349/month", description: "Enhanced content with stories and engagement" },
      { posts: "30 Posts/Month", price: "$499/month", description: "Full social media management with analytics" },
    ],
  },
  {
    name: "Email Marketing",
    icon: Mail,
    iconColor: "text-palette-orange-500",
    items: [
      { posts: "Email Marketing System Setup", price: "$899", description: "Advanced email marketing and communication strategies with automation." },
    ],
  },
  {
    name: "Analytics Upgrades",
    icon: BarChart2,
    iconColor: "text-palette-blue-500",
    items: [
      { posts: "Monthly Insights", price: "$199/month", description: "Monthly performance reports" },
      { posts: "Monthly Recommendations", price: "$249/month", description: "Detailed insights + recommendations" },
    ],
  },
  {
    name: "Ongoing Support",
    icon: Headphones,
    iconColor: "text-palette-purple-400",
    items: [
      { posts: "Monthly Emails", price: "$199/month", description: "Monthly strategy emails + support" },
      { posts: "Weekly Calls", price: "$499/month", description: "Weekly calls + priority support" }, // Updated to Weekly Calls
    ],
  },
  {
    name: "Staff Recruitment (Global)",
    icon: Users,
    iconColor: "text-primary",
    items: [
      { posts: "1 Role", price: "$450", description: "Assistance with recruiting for one global role" },
      { posts: "2 Roles", price: "$700", description: "Assistance with recruiting for two global roles" },
      { posts: "3 Roles", price: "$900", description: "Assistance with recruiting for three global roles" },
      { posts: "Unlimited (3 months)", price: "$4,999", description: "Unlimited recruitment assistance for 3 months" },
    ],
  },
  {
    name: "Extra Integrations",
    icon: PlusCircle,
    iconColor: "text-palette-blue-600",
    items: [
      { posts: "Per Integration", price: "$199", description: "Setup and configuration for each additional platform integration" },
    ],
  },
  {
    name: "Website Expansions",
    icon: Layout,
    iconColor: "text-palette-purple-500",
    items: [
      { posts: "Per Page", price: "$199", description: "Development for each additional website page" },
      { posts: "E-commerce Functionality", price: "$499", description: "Setup for e-commerce capabilities" },
    ],
  },
  {
    name: "HR Customizations",
    icon: Settings,
    iconColor: "text-palette-yellow-400",
    items: [
      { posts: "One-time Setup", price: "$299", description: "Custom HR system setup and configuration" },
    ],
  },
  {
    name: "Training Sessions",
    icon: BookOpen,
    iconColor: "text-calpir-green-600",
    items: [
      { posts: "Per Hour", price: "$199", description: "Dedicated training sessions for your team" },
    ],
  },
  {
    name: "Custom Automations",
    icon: Code,
    iconColor: "text-palette-orange-400",
    items: [
      { posts: "For 5+ Automations", price: "$299", description: "Setup for 5 or more custom automation workflows" },
    ],
  },
  {
    name: "Security Basics",
    icon: Shield,
    iconColor: "text-palette-red-500",
    items: [
      { posts: "One-time Setup", price: "$299", description: "Basic security configurations and recommendations" },
    ],
  },
  {
    name: "Time Tracking",
    icon: Clock,
    iconColor: "text-palette-orange-500",
    items: [
      { posts: "Time Tracking System Setup", price: "$299", description: "Comprehensive setup of a time tracking tool with custom reports and integrations." },
    ],
  },
];


const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-16 md:py-24">
        <section className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Detailed Pricing & Packages
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed delay-200">
            Choose the package that best fits your business needs. All packages are one-time setup/migration fees; clients are responsible for any tool subscriptions. Prices are globally affordable.
          </p>
        </section>

        {/* Section 1: Complete Business Packages */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-300">
            Complete Business Packages
          </h2>
          <PackageComparisonTable />
        </section>

        {/* Section 2: Individual Services */}
        <section className="mb-20" id="individual-services">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-500">
            Individual Services
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 text-center animate-fade-in-up delay-600">
            Perfect for specific business needs or to enhance your existing setup.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {individualServicesData.map((service, index) => (
              <div key={service.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-slide-in-left" style={{ animationDelay: `${0.7 + index * 0.05}s` }}>
                <div className="flex items-center mb-6">
                  <service.icon className={`h-10 w-10 mr-4 flex-shrink-0 ${service.iconColor}`} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-md text-gray-600 dark:text-gray-400">{service.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-primary dark:text-calpir-green-300">{service.investment}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Package Add-ons */}
        <section id="add-ons">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-1000">
            Package Add-ons
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 text-center animate-fade-in-up delay-1100">
            Enhance your chosen package with these powerful add-ons.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {addOnsCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl animate-slide-in-left" style={{ animationDelay: `${1.2 + catIndex * 0.05}s` }}>
                <div className="flex items-center mb-6">
                  {category.icon && <category.icon className={`h-8 w-8 mr-3 ${category.iconColor}`} />}
                  <h3 className="text-2xl font-bold text-primary dark:text-calpir-green-400">{category.name}</h3>
                </div>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${1.3 + catIndex * 0.05 + itemIndex * 0.02}s` }}>
                      <div className="text-left mb-2 sm:mb-0 sm:mr-4">
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.posts}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-xl font-bold text-primary dark:text-calpir-green-300">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Custom Solutions */}
        <section className="mt-20 text-center p-8 rounded-2xl shadow-xl animate-fade-in-up delay-1500
                    bg-gradient-to-br from-calpir-green-50 to-palette-blue-50 dark:from-calpir-green-950 dark:to-palette-blue-950 max-w-4xl mx-auto">
          <Puzzle className="h-16 w-16 mx-auto mb-6 text-primary dark:text-calpir-green-300 animate-bounce-slow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Custom Solutions
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-8">
            If your business requires a specific platform setup or integration not explicitly listed, we can create custom solutions tailored to your unique needs.
          </p>
          <Link to="/get-a-quote">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-calpir-green-600 text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Request Custom Set Up
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Pricing;
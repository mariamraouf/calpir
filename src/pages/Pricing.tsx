"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { CheckCircle, PlusCircle, BarChart2, Users, Headphones } from "lucide-react"; // Added icons for Add-ons

const packages = [
  {
    name: "Starter Package",
    tag: "Best for Solo Entrepreneurs",
    price: "$1,499",
    description: "Perfect for solo entrepreneurs and small startups with tight budgets.",
    delivery: "7 days",
    inclusions: [
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
    highlight: false,
  },
  {
    name: "Growth Package",
    tag: "Most Popular",
    price: "$2,999",
    description: "Scaling startups or businesses upgrading platforms—more depth for growth/transitions.",
    delivery: "14 days",
    inclusions: [
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
    highlight: true,
  },
  {
    name: "Ultimate Package",
    tag: "Enterprise Level",
    price: "$5,999+",
    description: "Funded startups or businesses needing premium setups/migrations—advanced features, dedicated manager (1-month email/check-ins).",
    delivery: "28 days",
    inclusions: [
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
    highlight: false,
  },
];

const addOnsCategories = [
  {
    name: "Social Media Expansion",
    items: [
      { posts: "10 Posts/Month", price: "$199", description: "Professional social media posts with graphics" },
      { posts: "20 Posts/Month", price: "$349", description: "Enhanced content with stories and engagement" },
      { posts: "30 Posts/Month", price: "$499", description: "Full social media management with analytics" },
    ],
  },
  {
    name: "Email Marketing",
    items: [
      { posts: "Email Marketing Setup", price: "$499", description: "One-time complete email automation system" },
      { posts: "3 Campaigns/Month", price: "$599", description: "Management for 3 email campaigns monthly" },
      { posts: "5 Campaigns/Month", price: "$699", description: "Management for 5 email campaigns monthly" },
    ],
  },
  {
    name: "Analytics Upgrades",
    icon: BarChart2, // Icon for Analytics Upgrades
    iconColor: "text-palette-blue-500", // Blue as per screenshot
    items: [
      { posts: "Monthly Insights", price: "$199", description: "Monthly performance reports" },
      { posts: "Monthly Recommendations", price: "$249", description: "Detailed insights + recommendations" },
      { posts: "Real-time Analytics", price: "$399", description: "Real-time business intelligence" },
    ],
  },
  {
    name: "Ongoing Support",
    icon: Headphones, // Icon for Ongoing Support
    iconColor: "text-palette-purple-400", // Purple as per screenshot
    items: [
      { posts: "Monthly Emails", price: "$199", description: "Monthly strategy emails + support" },
      { posts: "Weekly Calls", price: "$499", description: "Weekly calls + priority support" },
    ],
  },
  {
    name: "Staff Recruitment (Global)",
    icon: Users, // Icon for Staff Recruitment
    iconColor: "text-primary", // Green as per screenshot
    items: [
      { posts: "1 Role", price: "$450", description: "Assistance with recruiting for one global role" },
      { posts: "2 Roles", price: "$700", description: "Assistance with recruiting for two global roles" },
      { posts: "3 Roles", price: "$900", description: "Assistance with recruiting for three global roles" },
      { posts: "Unlimited (3 months)", price: "$4,999", description: "Unlimited recruitment assistance for 3 months" },
    ],
  },
  {
    name: "Extra Integrations",
    items: [
      { posts: "Per Integration", price: "$199", description: "Setup and configuration for each additional platform integration" },
    ],
  },
  {
    name: "Website Expansions",
    items: [
      { posts: "Per Page", price: "$199", description: "Development for each additional website page" },
      { posts: "E-commerce Functionality", price: "$499", description: "Setup for e-commerce capabilities" },
    ],
  },
  {
    name: "HR Customizations",
    items: [
      { posts: "One-time Setup", price: "$299", description: "Custom HR system setup and configuration" },
    ],
  },
  {
    name: "Training Sessions",
    items: [
      { posts: "Per Hour", price: "$199", description: "Dedicated training sessions for your team" },
    ],
  },
  {
    name: "Custom Automations",
    items: [
      { posts: "For 5+ Automations", price: "$299", description: "Setup for 5 or more custom automation workflows" },
    ],
  },
  {
    name: "Security Basics",
    items: [
      { posts: "One-time Setup", price: "$299", description: "Basic security configurations and recommendations" },
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

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-300">
            Our Core Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`flex flex-col p-8 rounded-2xl shadow-lg border-2 ${
                  pkg.highlight
                    ? "border-primary bg-calpir-green-50 dark:bg-calpir-green-950"
                    : "border-gray-200 bg-white dark:bg-gray-800"
                } transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-zoom-in`}
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                {pkg.tag && (
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4 ${
                      pkg.highlight
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {pkg.tag}
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{pkg.name}</h3>
                <p className="text-4xl font-extrabold text-primary dark:text-calpir-green-300 mb-4">{pkg.price}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{pkg.description}</p>
                <p className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-6">Delivery: {pkg.delivery}</p>

                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Inclusions:</h4>
                <ul className="list-none space-y-3 text-left mb-8">
                  {pkg.inclusions.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.15 + fIndex * 0.05}s` }}>
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={`w-full text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-button-glow ${
                    pkg.highlight
                      ? "bg-primary hover:bg-calpir-green-700 text-white hover:text-white"
                      : "bg-gray-800 hover:bg-gray-900 text-white dark:bg-primary dark:hover:bg-calpir-green-700 dark:hover:text-white"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-1000">
            Enhance Your Package with Add-Ons
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {addOnsCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl animate-slide-in-left" style={{ animationDelay: `${1.1 + catIndex * 0.15}s` }}>
                <div className="flex items-center mb-6">
                  {category.icon && <category.icon className={`h-8 w-8 mr-3 ${category.iconColor}`} />}
                  <h3 className="text-2xl font-bold text-primary dark:text-calpir-green-400">{category.name}</h3>
                </div>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${1.2 + catIndex * 0.15 + itemIndex * 0.05}s` }}>
                      <div className="text-left mb-2 sm:mb-0 sm:mr-4">
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.posts}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-xl font-bold text-primary dark:text-calpir-green-300">{item.price}</span>
                        <Button variant="outline" className="text-primary border-primary hover:bg-calpir-green-50 dark:text-calpir-green-400 dark:border-calpir-green-400 dark:hover:bg-calpir-green-900 hover:text-primary dark:hover:text-calpir-green-400 hover:animate-button-glow">
                          <PlusCircle className="h-4 w-4 mr-2" /> Add to Package
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center animate-fade-in-up delay-2000">
            <p className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Custom Add-On Packages Available
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Need something specific? We can create custom add-on packages tailored to your business needs. Contact us to discuss your requirements.
            </p>
            <Button size="lg" className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-button-glow">
              Request Custom Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Pricing;
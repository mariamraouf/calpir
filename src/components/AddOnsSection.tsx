"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, BarChart2, Users, Headphones, Share2, Mail, Globe, Code, Shield, Layout, DollarSign, BookOpen, Settings, Clock } from "lucide-react"; // Added Clock icon
import { Link } from "react-router-dom"; // Import Link for navigation

const addOnsCategories = [
  {
    name: "Social Media Expansion",
    icon: Share2, // New icon
    iconColor: "text-palette-red-400", // New color
    items: [
      { posts: "10 Posts/Month", price: "$199", description: "Professional social media posts with graphics" },
      { posts: "20 Posts/Month", price: "$349", description: "Enhanced content with stories and engagement" },
      { posts: "30 Posts/Month", price: "$499", description: "Full social media management with analytics" },
    ],
  },
  {
    name: "Email Marketing",
    icon: Mail, // New icon
    iconColor: "text-palette-orange-500", // New color
    items: [
      { posts: "Email Marketing Setup", price: "$499", description: "One-time complete email automation system" },
      { posts: "3 Campaigns/Month", price: "$599", description: "Management for 3 email campaigns monthly" },
      { posts: "5 Campaigns/Month", price: "$699", description: "Management for 5 email campaigns monthly" },
    ],
  },
  {
    name: "Analytics Upgrades",
    icon: BarChart2, // Existing icon
    iconColor: "text-palette-blue-500", // Existing color
    items: [
      { posts: "Monthly Insights", price: "$199", description: "Monthly performance reports" },
      { posts: "Monthly Recommendations", price: "$249", description: "Detailed insights + recommendations" },
      { posts: "Real-time Analytics", price: "$399", description: "Real-time business intelligence" },
    ],
  },
  {
    name: "Ongoing Support",
    icon: Headphones, // Existing icon
    iconColor: "text-palette-purple-400", // Existing color
    items: [
      { posts: "Monthly Emails", price: "$199", description: "Monthly strategy emails + support" },
      { posts: "Weekly Calls", price: "$499", description: "Weekly calls + priority support" },
    ],
  },
  {
    name: "Staff Recruitment (Global)",
    icon: Users, // Existing icon
    iconColor: "text-calpir-green-700", // Existing color
    items: [
      { posts: "1 Role", price: "$450", description: "Assistance with recruiting for one global role" },
      { posts: "2 Roles", price: "$700", description: "Assistance with recruiting for two global roles" },
      { posts: "3 Roles", price: "$900", description: "Assistance with recruiting for three global roles" },
      { posts: "Unlimited (3 months)", price: "$4,999", description: "Unlimited recruitment assistance for 3 months" },
    ],
  },
  {
    name: "Extra Integrations",
    icon: PlusCircle, // New icon
    iconColor: "text-palette-blue-600", // New color
    items: [
      { posts: "Per Integration", price: "$199", description: "Setup and configuration for each additional platform integration" },
    ],
  },
  {
    name: "Website Expansions",
    icon: Layout, // New icon
    iconColor: "text-palette-purple-500", // New color
    items: [
      { posts: "Per Page", price: "$199", description: "Development for each additional website page" },
      { posts: "E-commerce Functionality", price: "$499", description: "Setup for e-commerce capabilities" },
    ],
  },
  {
    name: "HR Customizations",
    icon: Settings, // New icon
    iconColor: "text-palette-yellow-400", // New color
    items: [
      { posts: "One-time Setup", price: "$299", description: "Custom HR system setup and configuration" },
    ],
  },
  {
    name: "Training Sessions",
    icon: BookOpen, // New icon
    iconColor: "text-calpir-green-600", // New color
    items: [
      { posts: "Per Hour", price: "$199", description: "Dedicated training sessions for your team" },
    ],
  },
  {
    name: "Custom Automations",
    icon: Code, // New icon
    iconColor: "text-palette-orange-400", // New color
    items: [
      { posts: "For 5+ Automations", price: "$299", description: "Setup for 5 or more custom automation workflows" },
    ],
  },
  {
    name: "Security Basics",
    icon: Shield, // New icon
    iconColor: "text-palette-red-500", // New color
    items: [
      { posts: "One-time Setup", price: "$299", description: "Basic security configurations and recommendations" },
    ],
  },
  {
    name: "Time Tracking", // New Add-on Category
    icon: Clock,
    iconColor: "text-palette-orange-500",
    items: [
      { posts: "Basic Setup", price: "$149", description: "Initial setup of a time tracking tool for small teams" },
      { posts: "Advanced Setup & Reporting", price: "$299", description: "Comprehensive setup with custom reports and integrations" },
      { posts: "Team Training & Optimization", price: "$399", description: "Training sessions for your team and workflow optimization" },
    ],
  },
];

const AddOnsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-950 dark:bg-gray-950"> {/* Darker background */}
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in-up"> {/* White text */}
          Enhance Your Package with Add-Ons
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200"> {/* Lighter gray text */}
          Scale your business operations with our professional add-on services. Each service is designed to grow with your business needs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {addOnsCategories.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col bg-gray-800 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 dark:border-gray-700 transform hover:scale-110 transition-transform duration-300 hover:shadow-2xl animate-slide-in-left" style={{ animationDelay: `${0.3 + catIndex * 0.15}s` }}> {/* Darker card, border */}
              <div className="flex items-center mb-6">
                {category.icon && <category.icon className={`h-8 w-8 mr-3 flex-shrink-0 ${category.iconColor}`} />}
                <h3 className="text-2xl font-bold text-primary dark:text-calpir-green-400">{category.name}</h3>
              </div>
              <div className="space-y-6 flex-grow">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-700 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${0.4 + catIndex * 0.15 + itemIndex * 0.05}s` }}> {/* Darker border */}
                    <div className="text-left mb-2 sm:mb-0 sm:mr-4">
                      <p className="text-lg font-semibold text-white dark:text-white">{item.posts}</p> {/* White text */}
                      <p className="text-sm text-gray-400 dark:text-gray-400">{item.description}</p> {/* Lighter gray text */}
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xl font-bold text-primary dark:text-calpir-green-300">{item.price}</span>
                      <Link to="/build-my-business">
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-sm px-4 py-2 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-button-glow"
                        >
                          Pick & Include
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Moved "Build My Package" button here */}
        <div className="mt-16 text-center p-6 rounded-2xl shadow-xl animate-fade-in-up delay-600
                    bg-gradient-to-br from-calpir-green-950 to-palette-blue-950 dark:from-calpir-green-950 dark:to-palette-blue-950 max-w-4xl mx-auto border border-gray-700"> {/* Darker gradient, border */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white dark:text-white"> {/* White text */}
            Ready to Customize Your Business Solution?
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-3xl mx-auto mb-10"> {/* Lighter gray text */}
            Combine our core packages with powerful add-ons to create the perfect launch plan for your business.
          </p>
          <Link to="/build-my-business">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-calpir-green-600 text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Build My Package
            </Button>
          </Link>
        </div>

        {/* Original "Custom Add-On Packages Available" section - now simplified and without a box */}
        <div className="mt-16 text-center max-w-4xl mx-auto py-8">
          <p className="text-xl font-semibold mb-4 text-white dark:text-white"> {/* White text */}
            Custom Add-On Packages & Specific Platform Setups Available
          </p>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-xl mx-auto mb-6"> {/* Lighter gray text */}
            Need something specific, or a setup for a single platform not listed? We can create custom solutions tailored to your business needs. Contact us to discuss your requirements.
          </p>
          <Link to="/get-a-quote">
            <Button
              variant="outline"
              className="text-primary border-primary hover:bg-primary hover:text-white text-md px-6 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Request Custom Set Up
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;
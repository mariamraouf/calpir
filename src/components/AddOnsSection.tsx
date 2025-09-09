"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, BarChart2, Users, Headphones, Share2, Mail, Globe, Code, Shield, Layout, DollarSign, BookOpen, Settings, Clock } from "lucide-react"; // Added new icons
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
];

const AddOnsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          Enhance Your Package with Add-Ons
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          Scale your business operations with our professional add-on services. Each service is designed to grow with your business needs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {addOnsCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-110 transition-transform duration-300 hover:shadow-2xl animate-slide-in-left" style={{ animationDelay: `${0.3 + catIndex * 0.15}s` }}>
              <div className="flex items-center mb-6">
                {category.icon && <category.icon className={`h-8 w-8 mr-3 ${category.iconColor}`} />}
                <h3 className="text-2xl font-bold text-primary dark:text-calpir-green-400">{category.name}</h3>
              </div>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${0.4 + catIndex * 0.15 + itemIndex * 0.05}s` }}>
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

        {/* Moved "Build My Package" button here */}
        <div className="mt-16 text-center p-6 rounded-2xl shadow-xl animate-fade-in-up delay-600
                    bg-gradient-to-br from-calpir-green-50 to-palette-blue-50 dark:from-calpir-green-950 dark:to-palette-blue-950 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Customize Your Business Solution?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Combine our core packages with powerful add-ons to create the perfect launch plan for your business.
          </p>
          <Button asChild size="lg" className="bg-palette-blue-900 text-white hover:bg-palette-blue-800 hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl">
            <Link to="/contact">Build My Package</Link>
          </Button>
        </div>

        {/* Original "Custom Add-On Packages Available" section */}
        <div className="mt-16 text-center p-4 rounded-2xl shadow-xl animate-fade-in-up delay-800
                    bg-gradient-to-br from-calpir-green-50 to-palette-blue-50 dark:from-calpir-green-950 dark:to-palette-blue-950 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Custom Add-On Packages Available
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-8">
            Need something specific? We can create custom add-on packages tailored to your business needs. Contact us to discuss your requirements.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-calpir-green-600 text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;
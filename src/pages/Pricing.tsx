"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { PlusCircle, BarChart2, Users, Headphones, Share2, Mail, Globe, Code, Shield, Layout, DollarSign, BookOpen, Settings, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PackageComparisonTable from "@/components/PackageComparisonTable"; // Import the new component

const addOnsCategories = [
  {
    name: "Social Media Expansion",
    icon: Share2,
    iconColor: "text-palette-red-400",
    items: [
      { posts: "10 Posts/Month", price: "$199", description: "Professional social media posts with graphics" },
      { posts: "20 Posts/Month", price: "$349", description: "Enhanced content with stories and engagement" },
      { posts: "30 Posts/Month", price: "$499", description: "Full social media management with analytics" },
    ],
  },
  {
    name: "Email Marketing",
    icon: Mail,
    iconColor: "text-palette-orange-500",
    items: [
      { posts: "Email Marketing Setup", price: "$499", description: "One-time complete email automation system" },
      { posts: "3 Campaigns/Month", price: "$599", description: "Management for 3 email campaigns monthly" },
      { posts: "5 Campaigns/Month", price: "$699", description: "Management for 5 email campaigns monthly" },
    ],
  },
  {
    name: "Analytics Upgrades",
    icon: BarChart2,
    iconColor: "text-palette-blue-500",
    items: [
      { posts: "Monthly Insights", price: "$199", description: "Monthly performance reports" },
      { posts: "Monthly Recommendations", price: "$249", description: "Detailed insights + recommendations" },
      { posts: "Real-time Analytics", price: "$399", description: "Real-time business intelligence" },
    ],
  },
  {
    name: "Ongoing Support",
    icon: Headphones,
    iconColor: "text-palette-purple-400",
    items: [
      { posts: "Monthly Emails", price: "$199", description: "Monthly strategy emails + support" },
      { posts: "Weekly Calls", price: "$499", description: "Weekly calls + priority support" },
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
          <PackageComparisonTable /> {/* Render the comparison table here */}
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-1000">
            Enhance Your Package with Add-Ons
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {addOnsCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-110 transition-transform duration-300 hover:shadow-2xl animate-slide-in-left" style={{ animationDelay: `${1.1 + catIndex * 0.15}s` }}>
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center p-6 rounded-2xl shadow-xl animate-fade-in-up delay-2000
                    bg-gradient-to-br from-calpir-green-50 to-palette-blue-50 dark:from-calpir-green-950 dark:to-palette-blue-950 max-w-4xl mx-auto">
            <p className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Custom Add-On Packages & Platform Setups Available
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
              Need something specific, or a setup for a single platform not listed? We can create custom solutions tailored to your business needs. Contact us to discuss your requirements.
            </p>
            <Link to="/get-a-quote">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-calpir-green-600 text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
              >
                Request Custom Set Up
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Pricing;
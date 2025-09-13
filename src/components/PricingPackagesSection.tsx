"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const packages = [
  {
    name: "Starter Package",
    tag: "Best for Solo Entrepreneurs",
    price: "$1,499",
    description: "Perfect for solo entrepreneurs and small startups with tight budgets. Launch in just 7 days!",
    features: [
      "Customized Website (5 pages)",
      "Basic CRM & project management",
      "Social media setup (2 platforms)",
      "Simple invoicing",
      "Email Systems & Automation Setup", // Added for consistency
      "Basic HR/Recruiting tools", // Added for consistency
      "Up to 2 Integrations", // Added for consistency
      "Monthly Analytics Summary", // Added for consistency
      "...and more!",
    ],
    highlight: false,
    timeline: "7 Days", // NEW
  },
  {
    name: "Growth Package",
    tag: "Most Popular",
    price: "$2,999",
    description: "Scaling startups or businesses upgrading platforms—more depth for growth/transitions. Launch in 14 days!",
    features: [
      "Everything in Starter +",
      "Customized Website (10 pages)",
      "SEO Optimization",
      "Advanced CRM and project management tools",
      "Expense tracking",
      "Social media setup (5 platforms + 10 posts)", // Added for consistency
      "Advanced HR/Recruiting (ATS, legal templates)", // Added for consistency
      "Basic Business Automations", // Added for consistency
      "Up to 5 Integrations", // Added for consistency
      "Monthly Detailed Analytics + Recommendations", // Added for consistency
      "Basic Training Sessions", // Added for consistency
      "Monthly Support Package", // Added for consistency
      "...and more!",
    ],
    highlight: true,
    timeline: "14 Days", // NEW
  },
  {
    name: "Ultimate Package",
    tag: "Enterprise Level",
    price: "$5,999",
    description: "Funded startups or businesses needing premium setups/migrations—advanced features, dedicated manager (1-month email/check-ins). Launch in 28 days!",
    features: [
      "Everything in Growth +",
      "Customized Website (Unlimited pages)",
      "E-commerce Functionality", // Added for consistency
      "Advanced automation & forecasting",
      "Unlimited project workspaces",
      "Social media setup (5+ platforms + 20 posts)", // Added for consistency
      "Full HR strategy + sourcing for 1 global role", // Added for consistency
      "Performance Management", // Added for consistency
      "Unlimited Integrations", // Added for consistency
      "Weekly Detailed Analytics + Recommendations", // Added for consistency
      "Weekly Support Package", // Added for consistency
      "...and more!",
    ],
    highlight: false,
    timeline: "28 Days", // NEW
  },
];

const PricingPackagesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950" id="pricing">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          Choose Your Launch Package
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          Select the perfect package to launch your business with our proven systems and frameworks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 rounded-2xl shadow-lg border-2 ${
                pkg.highlight
                  ? "border-primary bg-calpir-green-50 dark:bg-calpir-green-950"
                  : "border-gray-200 bg-white dark:bg-gray-800"
              } transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-zoom-in`}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
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
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{pkg.description}</p>

              <ul className="list-none space-y-3 text-left mb-8">
                {pkg.features.slice(0, 5).map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.15 + fIndex * 0.05}s` }}>
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
                {pkg.features.length > 5 && (
                  <li className="flex items-start text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.15 + 5 * 0.05}s` }}>
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>...and more!</span>
                  </li>
                )}
              </ul>
              <div className="text-center mb-6">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Launch Timeline:</p>
                <p className="text-2xl font-bold text-primary dark:text-calpir-green-300">{pkg.timeline}</p>
              </div>

              <Link to="/build-my-business">
                <Button
                  size="lg"
                  className={`w-full text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow ${
                    pkg.highlight
                      ? "bg-primary hover:bg-calpir-green-700 text-white hover:text-white"
                      : "bg-gray-800 hover:bg-gray-900 text-white dark:bg-primary dark:hover:bg-calpir-green-700 dark:hover:text-white"
                  }`}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackagesSection;
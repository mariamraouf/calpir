"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const packages = [
  {
    name: "Starter Package",
    tag: "Best for Solo Entrepreneurs",
    description: "Perfect for solo entrepreneurs and small startups with tight budgets. Launch in just 7 days!",
    features: [
      "Customized Website (5 pages)",
      "Basic CRM & project management",
      "Social media setup (2 platforms)",
      "Simple invoicing",
      "Email Systems & Automation Setup",
      "Basic HR/Recruiting tools",
      "Up to 2 Integrations",
      "Monthly Analytics Summary",
    ],
    highlight: false,
    timeline: "7 Days",
    pricingAnchor: "complete-packages", // Anchor for pricing page
  },
  {
    name: "Growth Package",
    tag: "Most Popular",
    description: "Scaling startups or businesses upgrading platforms—more depth for growth/transitions. Launch in 14 days!",
    features: [
      "Everything in Starter +",
      "Customized Website (10 pages)",
      "SEO Optimization",
      "Advanced CRM and project management tools",
      "Expense tracking",
      "Social media setup (4 platforms + 10 posts)",
      "Advanced HR/Recruiting (ATS, legal templates)",
      "Basic Business Automations",
      "Up to 3 Integrations",
      "Monthly Detailed Analytics + Recommendations",
      "Basic Training Sessions",
      "Monthly Support Package",
    ],
    highlight: true,
    timeline: "14 Days",
    pricingAnchor: "complete-packages", // Anchor for pricing page
  },
  {
    name: "Ultimate Package",
    tag: "Enterprise Level",
    description: "Funded startups or businesses needing premium setups/migrations—advanced features, dedicated manager (1-month email/check-ins). Launch in 28 days!",
    features: [
      "Everything in Growth +",
      "Customized Website (Unlimited pages)",
      "E-commerce Functionality",
      "Advanced automation & forecasting",
      "Unlimited project workspaces",
      "Social media setup (5+ platforms + 15 posts)",
      "Full HR strategy + sourcing for 1 global role",
      "Performance Management",
      "Unlimited Integrations",
      "Weekly Detailed Analytics + Recommendations",
      "Weekly Support Package",
    ],
    highlight: false,
    timeline: "28 Days",
    pricingAnchor: "complete-packages", // Anchor for pricing page
  },
];

const PackageDetailsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-950"> {/* Reduced vertical padding */}
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up"> {/* Reduced font size */}
          Our Complete Business Packages
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200"> {/* Reduced font size and max-width */}
          Choose a comprehensive package to launch your business with our proven systems and frameworks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Reduced gap */}
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 rounded-2xl shadow-lg border-2 ${ /* Reduced padding */
                pkg.highlight
                  ? "border-primary bg-calpir-green-50 dark:bg-calpir-green-950"
                  : "border-gray-200 bg-white dark:bg-gray-800"
              } transition-all duration-300 hover:scale-105 hover:shadow-xl animate-zoom-in`}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              {pkg.tag && (
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${ /* Reduced padding and margin */
                    pkg.highlight
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                >
                  {pkg.tag}
                </span>
              )}
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{pkg.name}</h3> {/* Reduced font size */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 flex-grow">{pkg.description}</p> {/* Reduced font size and margin */}

              <ul className="list-none space-y-2 text-left mb-6"> {/* Reduced space-y and margin */}
                {pkg.features.slice(0, 5).map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-sm text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.15 + fIndex * 0.05}s` }}> {/* Reduced font size */}
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" /> {/* Reduced icon size */}
                    <span>{feature}</span>
                  </li>
                ))}
                {pkg.features.length > 5 && (
                  <li className="flex items-start text-sm text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.15 + 5 * 0.05}s` }}> {/* Reduced font size */}
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" /> {/* Reduced icon size */}
                    <span>...and more!</span>
                  </li>
                )}
              </ul>
              <div className="text-center mb-5"> {/* Reduced margin */}
                <p className="text-base font-semibold text-gray-900 dark:text-white">Launch Timeline:</p> {/* Reduced font size */}
                <p className="text-xl font-bold text-primary dark:text-calpir-green-300">{pkg.timeline}</p> {/* Reduced font size */}
              </div>

              <Link to={`/pricing#${pkg.pricingAnchor}`}>
                <Button
                  size="sm" // Changed to sm
                  className={`w-full text-base px-6 py-2 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:animate-button-glow ${ /* Reduced font size, padding, border-radius, shadow */
                    pkg.highlight
                      ? "bg-primary hover:bg-calpir-green-700 text-white hover:text-white"
                      : "bg-gray-800 hover:bg-gray-900 text-white dark:bg-primary dark:hover:bg-calpir-green-700 dark:hover:text-white"
                  }`}
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageDetailsSection;
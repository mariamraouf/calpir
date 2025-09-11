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
    description: "Perfect for solo entrepreneurs and small startups with tight budgets.",
    features: [
      "Website: Up to 5 pages, Hosting & Domain",
      "Project Management: Basic setup (2 workspaces)",
      "CRM: Basic contact tracking",
      "Accounting: Simple invoicing",
      "Social Media: Setup on 2 platforms + 5 posts",
      "HR/Recruiting: Employee profiles, Job templates",
      "Integrations: Up to 2 connections",
      "Analytics: Monthly summary",
    ],
    highlight: false,
  },
  {
    name: "Growth Package",
    tag: "Most Popular",
    price: "$2,999",
    description: "Scaling startups or businesses upgrading platforms—more depth for growth/transitions.",
    features: [
      "Everything in Starter, plus:",
      "Website: Up to 10 pages, SEO Optimization, Up to 5 additional pages",
      "Project Management: Enhanced setup (5 workspaces)",
      "CRM: Advanced with automation",
      "Accounting: Expense tracking",
      "Social Media: Setup on 5 platforms + 10 posts",
      "HR/Recruiting: Legal templates, Job postings on 2 global sites, ATS & talent pipeline",
      "Business Automations: Basic Automation Setup",
      "Integrations: Up to 5 connections",
      "Analytics: Monthly detailed insights + Recommendations",
      "Training: Basic Training Sessions",
      "Support: Monthly Support Package",
    ],
    highlight: true,
  },
  {
    name: "Ultimate Package",
    tag: "Enterprise Level",
    price: "$5,999",
    description: "Funded startups or businesses needing premium setups/migrations—advanced features, dedicated manager (1-month email/check-ins).",
    features: [
      "Everything in Growth, plus:",
      "Website: Unlimited pages, E-commerce Functionality",
      "Project Management: Advanced setup (unlimited workspaces)",
      "CRM: Predictive automation",
      "Accounting: Forecasting tools",
      "Social Media: Setup on 5+ platforms + 20 posts",
      "HR/Recruiting: Full strategy + sourcing for 1 global role, Single Role Recruitment, Scalable ATS system",
      "Business Automations: Advanced Automation Package",
      "Performance Management: Full setup",
      "Integrations: Unlimited",
      "Analytics: Weekly insights + Recommendations",
      "Training: Basic Training Sessions",
      "Support: Monthly Support Package",
      "Payroll & Performance Management",
    ],
    highlight: false,
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
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const packages = [
  {
    name: "Startup Package",
    tag: "Best for Startups",
    price: "$1,500",
    description: "Perfect for solo entrepreneurs and small startups with tight budgets",
    features: [
      "Professional website + branding",
      "Basic email system setup",
      "1 month social media content",
      "Business document templates",
      "7-day complete setup",
      "Basic support for 30 days",
      "Basic project management tool setup",
      "Payment processing integration",
    ],
    highlight: false,
  },
  {
    name: "Professional Package",
    tag: "Most Popular",
    price: "$3,000",
    description: "Complete business operations suite for growing businesses",
    features: [
      "Everything in Startup Package",
      "Full branding + marketing materials",
      "Advanced CRM system setup & training",
      "Phone system integration",
      "3 months social media content",
      "Financial management setup",
      "Priority support for 90 days",
      "Advanced automation workflows",
      "Team collaboration tools",
    ],
    highlight: true,
  },
  {
    name: "Enterprise Package",
    tag: "Enterprise Level",
    price: "$5,000+",
    description: "Premium features + ongoing support for established businesses",
    features: [
      "Everything in Professional Package",
      "Advanced automation workflows",
      "Premium CRM with analytics",
      "Priority support & consultation",
      "Custom integrations",
      "Dedicated account manager",
      "6 months content + strategy",
      "Staff recruitment assistance",
      "Advanced reporting & analytics",
    ],
    highlight: false,
  },
];

const PricingPackagesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950" id="pricing">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Choose Your Launch Package
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Select the perfect package to launch your business with our proven systems and frameworks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 rounded-lg shadow-xl border-2 ${
                pkg.highlight
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-950"
                  : "border-gray-200 bg-white dark:bg-gray-800"
              } transition-all duration-300 hover:scale-[1.02]`}
            >
              {pkg.tag && (
                <span
                  className={`inline-block px-4 py-1 rounded-full text-xs font-semibold mb-4 ${
                    pkg.highlight
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                >
                  {pkg.tag}
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{pkg.name}</h3>
              <p className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4">{pkg.price}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{pkg.description}</p>

              <ul className="list-none space-y-3 text-left mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  pkg.highlight
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-800 hover:bg-gray-900 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackagesSection;
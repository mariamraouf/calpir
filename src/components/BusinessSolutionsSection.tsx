"use client";

import React from "react";
import { Globe, Layout, Palette, TrendingUp, CheckCircle } from "lucide-react";

const solutions = [
  {
    icon: Layout,
    title: "Website Development",
    description: "Professional websites with modern design and functionality",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Content Management",
      "Performance Optimization",
    ],
    iconColor: "text-calpir-green-600",
  },
  {
    icon: Palette,
    title: "Brand Identity Design",
    description: "Complete branding package with logos, guidelines, and materials",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Marketing Materials",
      "Visual Identity",
    ],
    iconColor: "text-calpir-green-500",
  },
  {
    icon: TrendingUp,
    title: "Marketing Systems",
    description: "Automated marketing workflows and customer acquisition systems",
    features: [
      "Email Automation",
      "Social Media Setup",
      "Analytics Tracking",
    ],
    iconColor: "text-calpir-green-700",
  },
];

const BusinessSolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900" id="services">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Complete Business Solutions
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Everything your business needs to launch successfully, from operations setup to marketing automation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <solution.icon className={`h-12 w-12 mb-4 ${solution.iconColor}`} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{solution.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{solution.description}</p>
              <ul className="list-none space-y-2 text-left w-full">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-calpir-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutionsSection;
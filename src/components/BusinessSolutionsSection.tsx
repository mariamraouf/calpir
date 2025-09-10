"use client";

import React from "react";
import { FileText, Layout, Palette, TrendingUp, CheckCircle, Briefcase } from "lucide-react"; // Added Briefcase icon

const solutions = [
  {
    icon: Briefcase, // Using Briefcase icon for Project Management
    title: "Project Management",
    description: "Efficiently manage projects and tasks with robust systems.",
    features: [
      "Task Tracking",
      "Workflow Automation",
      "Team Collaboration",
      "Reporting & Analytics",
    ],
    iconColor: "text-calpir-green-700", // Using primary green for this new section
  },
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
    iconColor: "text-palette-blue-500", // Blue as per screenshot
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
    iconColor: "text-palette-purple-400", // Purple as per screenshot
  },
  {
    icon: TrendingUp,
    title: "Marketing Systems",
    description: "Automated marketing workflows and customer acquisition systems",
    features: [
      "Email Automation",
      "Social Media Setup",
      "Analytics Tracking",
      "Brand Messaging", // Added Brand Messaging
    ],
    iconColor: "text-palette-orange-500", // Orange as per screenshot
  },
];

const BusinessSolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900 dark:bg-gray-900" id="services"> {/* Darker background */}
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in-up"> {/* White text */}
          Complete Business Solutions
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200"> {/* Lighter gray text */}
          Everything your business needs to launch successfully, from operations setup to marketing automation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-700 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-110 animate-zoom-in" /* Darker card, border */
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <solution.icon className={`h-12 w-12 mb-4 ${solution.iconColor}`} />
              <h3 className="text-xl font-semibold mb-3 text-white dark:text-white">{solution.title}</h3> {/* White text */}
              <p className="text-gray-400 dark:text-gray-400 mb-4">{solution.description}</p> {/* Lighter gray text */}
              <ul className="list-none space-y-2 text-left w-full">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-300 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1 + fIndex * 0.05}s` }}> {/* Lighter text */}
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
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
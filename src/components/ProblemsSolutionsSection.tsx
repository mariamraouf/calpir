"use client";

import React from "react";
import { DollarSign, Clock, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProblemsSolutionsSection = () => {
  const problems = [
    {
      title: "Expensive Individual Hires",
      description: "Web developer ($5,000+), Designer ($3,000+), Marketing specialist ($4,000+), Operations manager ($6,000+)",
      icon: DollarSign,
    },
    {
      title: "Months of Setup Time",
      description: "3-6 months to coordinate everything, test systems, and get everything working together properly",
      icon: Clock,
    },
    {
      title: "Managing Multiple People",
      description: "Coordinating different freelancers, agencies, and specialists who don't communicate with each other",
      icon: Users,
    },
    {
      title: "Technical Complexity",
      description: "Integrating different tools, ensuring everything works together, and troubleshooting constant issues",
      icon: Settings,
    },
  ];

  const solutions = [
    { label: "$1,500", detail: "vs $18,000+ individual hires" },
    { label: "7 Days", detail: "vs 3-6 months setup time" },
    { label: "1 Team", detail: "vs managing 5+ specialists" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container">
        {/* Problems Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            We Know How Hard It Is for Startups
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building a business from scratch is expensive, time-consuming, and overwhelming. You need to hire multiple specialists, coordinate different systems, and spend months just to get basic operations running.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800"
            >
              <problem.icon className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{problem.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solutions Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            We Make It Easy for You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Instead of hiring 5+ different specialists and spending months coordinating everything, get your complete business setup in just 7 days with our proven systems and experienced team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-blue-50 dark:bg-blue-950 rounded-lg shadow-md border border-blue-200 dark:border-blue-800"
            >
              <p className="text-5xl font-extrabold text-blue-700 dark:text-blue-300 mb-2">{solution.label}</p>
              <p className="text-lg text-gray-700 dark:text-gray-200">{solution.detail}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Start Your Startup Package Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolutionsSection;
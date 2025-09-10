"use client";

import React from "react";
import { DollarSign, Clock, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Import Link

const problems = [
  {
    title: "Expensive Individual Hires",
    description: "Web developer ($5,000+), Designer ($3,000+), Marketing specialist ($4,000+), Operations manager ($6,000+)",
    icon: DollarSign,
    iconColor: "text-palette-red-400", // Red as per screenshot
  },
  {
    title: "Months of Setup Time",
    description: "3-6 months to coordinate everything, test systems, and get everything working together properly",
    icon: Clock,
    iconColor: "text-palette-orange-500", // Orange as per screenshot
  },
  {
    title: "Managing Multiple People",
    description: "Coordinating different freelancers, agencies, and specialists who don't communicate with each other",
    icon: Users,
    iconColor: "text-palette-yellow-400", // Yellow/Gold as per screenshot
  },
  {
    title: "Technical Complexity",
    description: "Integrating different tools, ensuring everything works together, and troubleshooting constant issues",
    icon: Settings,
    iconColor: "text-palette-purple-400", // Purple as per screenshot
  },
];

const solutions = [
  { label: "$1,500", detail: "vs $18,000+ individual hires" },
  { label: "7 Days", detail: "vs 3-6 months setup time" },
  { label: "1 Team", detail: "vs managing 5+ specialists" },
];

const ProblemsSolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background dark:bg-background"> {/* Darker background */}
      <div className="container">
        {/* Problems Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-foreground animate-fade-in-up"> {/* White text */}
            We Know How Hard It Is for Startups
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200"> {/* Lighter gray text */}
            Building a business from scratch is expensive, time-consuming, and overwhelming. You need to hire multiple specialists, coordinate different systems, and spend months just to get basic operations running.
            <br /><br />
            We match you with the platforms that best suit your budget, and our team knows all the tips and tricks to save you money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-700 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-110 animate-zoom-in" /* Darker card, border */
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <problem.icon className={`h-12 w-12 mb-4 ${problem.iconColor}`} />
              <h3 className="text-xl font-semibold mb-2 text-white dark:text-white">{problem.title}</h3> {/* White text */}
              <p className="text-gray-400 dark:text-gray-400">{problem.description}</p> {/* Lighter gray text */}
            </div>
          ))}
        </div>

        {/* Solutions Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-foreground animate-bounce-pop delay-600"> {/* White text */}
            We Make It Easy for You
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-300 max-w-3xl mx-auto mb-10 animate-bounce-pop delay-700"> {/* Lighter gray text */}
            Instead of hiring 5+ different specialists and spending months coordinating everything, get your complete business setup in just 7 days with our proven systems and experienced team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-calpir-green-950 dark:bg-calpir-green-950 rounded-2xl shadow-lg border border-calpir-green-700 dark:border-calpir-green-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-110 animate-bounce-pop" /* Darker card, border */
              style={{ animationDelay: `${0.8 + index * 0.15}s` }}
            >
              <p className="text-5xl font-extrabold text-primary dark:text-calpir-green-300 mb-2">{solution.label}</p>
              <p className="text-lg text-gray-200 dark:text-gray-200">{solution.detail}</p> {/* Lighter text */}
            </div>
          ))}
        </div>

        <div className="text-center animate-bounce-pop delay-1200">
          <Link to="/build-my-business">
            <Button
              size="lg"
              className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow"
            >
              Start Your Startup Package Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolutionsSection;
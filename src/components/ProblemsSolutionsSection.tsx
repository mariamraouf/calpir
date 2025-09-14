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

const ProblemsSolutionsSection = () => { // Removed setOpenBuildMyBusinessForm prop
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container">
        {/* Problems Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
            Starting a business? Yeah, we know the struggle is real.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Seriously, launching something from scratch can feel like a wild ride. Between the endless costs, the time suck of setting everything up, and trying to wrangle a bunch of different people and tools, it's a lot. We've been there. That's why we're all about making it simpler, whether you go for a full package or just need a few key services. We'll even share our best tips to keep things lean and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-110 animate-zoom-in"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <problem.icon className={`h-12 w-12 mb-4 ${problem.iconColor}`} />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{problem.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solutions Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-bounce-pop delay-600">
            So, how about we make this easy for you?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 animate-bounce-pop delay-700">
            Forget the headache of juggling a million freelancers and spending months just getting off the ground. We're your dedicated team, ready to get your entire business humming in just 7 days with our tried-and-true systems. We're genuinely hyped to see you win.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-calpir-green-50 dark:bg-calpir-green-950 rounded-2xl shadow-lg border border-calpir-green-200 dark:border-calpir-green-800 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-110 animate-bounce-pop"
              style={{ animationDelay: `${0.8 + index * 0.15}s` }}
            >
              <p className="text-5xl font-extrabold text-primary dark:text-calpir-green-300 mb-2">{solution.label}</p>
              <p className="text-lg text-gray-700 dark:text-gray-200">{solution.detail}</p>
            </div>
          ))}
        </div>

        <div className="text-center animate-bounce-pop delay-1200">
          <Link to="/build-my-business"> {/* Changed to Link */}
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
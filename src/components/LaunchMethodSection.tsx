"use client";

import React from "react";
import { Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "30-minute free consultation to understand your business goals and needs. Once you decide to work with us, we provide a 1-hour consultation to deep dive into your requirements and develop your custom strategy.",
    iconColor: "text-palette-blue-600", // Diverse color
  },
  {
    number: "02",
    icon: Code,
    title: "Development & Creation",
    description: "Our developer teams build your website, our designers create your branding, and our specialists develop your marketing materials using proven frameworks.",
    iconColor: "text-palette-orange-500", // Diverse color
  },
  {
    number: "03",
    icon: Rocket,
    title: "Integration & Launch",
    description: "We integrate all systems, test everything, prepare for launch, and provide ongoing support to ensure your business success.",
    iconColor: "text-calpir-green-700", // Primary green
  },
];

const LaunchMethodSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          The 7-Day Launch Method
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          Three simple steps to transform your business idea into a fully operational company in just 7 days.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold shadow-lg animate-zoom-in" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                {step.number}
              </div>
              <div className="mt-8">
                <step.icon className={`h-10 w-10 mb-4 ${step.iconColor} animate-fade-in-up`} style={{ animationDelay: `${0.5 + index * 0.2}s` }} />
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 animate-fade-in-up" style={{ animationDelay: `${0.7 + index * 0.2}s` }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchMethodSection;
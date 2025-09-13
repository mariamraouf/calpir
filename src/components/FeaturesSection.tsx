"use client";

import React from "react";
import { Lightbulb, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "We bring fresh ideas and cutting-edge technology to solve your business challenges.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "Launch your essential business systems and online presence in record time.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Build your business on a foundation of robust security and dependable infrastructure.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white animate-fade-in-up">
          Why Choose Calpir?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-zoom-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
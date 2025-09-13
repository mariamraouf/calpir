"use client";

import React from "react";
import { Lightbulb, Rocket, Settings } from "lucide-react";

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
    icon: Settings,
    title: "Seamless Integration",
    description: "Connect all your tools and platforms for a unified, efficient workflow.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Why Choose Calpir?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          We empower your business with speed, efficiency, and expert support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
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
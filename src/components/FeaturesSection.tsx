"use client";

import React from "react";
import { Zap, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Launch your entire business setup in just 7 days with our streamlined process.",
    iconColor: "text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Benefit from robust, secure systems and expert support for peace of mind.",
    iconColor: "text-palette-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Our solutions grow with your business, ensuring long-term success and adaptability.",
    iconColor: "text-palette-orange-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          Why Choose Calpir?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          We provide comprehensive, efficient, and tailored solutions to get your business up and running quickly and effectively.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-zoom-in"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <feature.icon className={`h-12 w-12 mb-4 ${feature.iconColor}`} />
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
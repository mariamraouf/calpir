"use client";

import React from "react";
import { Layout, Palette, TrendingUp, Briefcase, Users, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layout,
    title: "Website Development",
    description: "Professional, responsive websites tailored to your brand.",
    iconColor: "text-palette-blue-500",
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description: "Crafting a unique visual identity and compelling brand story.",
    iconColor: "text-palette-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Marketing Systems",
    description: "Automated marketing workflows and customer acquisition strategies.",
    iconColor: "text-palette-orange-500",
  },
  {
    icon: Briefcase,
    title: "Operations Setup",
    description: "Streamlining your business processes for maximum efficiency.",
    iconColor: "text-calpir-green-700",
  },
  {
    icon: Users,
    title: "HR & Recruiting",
    description: "Building robust HR systems for talent acquisition and management.",
    iconColor: "text-primary",
  },
  {
    icon: Code,
    title: "Integrations & Automations",
    description: "Connecting your tools and automating tasks to save time.",
    iconColor: "text-palette-blue-600",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          Our Comprehensive Services
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          From foundational setup to advanced automation, we cover every aspect of launching and scaling your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-zoom-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <service.icon className={`h-12 w-12 mb-4 ${service.iconColor}`} />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 animate-fade-in-up delay-800">
          <Link to="/services">
            <Button
              size="lg"
              className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
"use client";

import React from "react";
import { Layout, Palette, TrendingUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Layout,
    title: "Website Development",
    description: "Professional websites with modern design and functionality.",
    link: "/services#website-building",
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description: "Complete branding package with logos, guidelines, and materials.",
    link: "/services#design-branding",
  },
  {
    icon: TrendingUp,
    title: "Marketing Systems",
    description: "Automated marketing workflows and customer acquisition systems.",
    link: "/services#email-systems",
  },
  {
    icon: Briefcase,
    title: "Operations Setup",
    description: "Efficiently manage projects and tasks with robust systems.",
    link: "/services#project-management",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          Our Core Services
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          We offer a comprehensive suite of services to get your business up and running, and keep it thriving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-zoom-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <Link to={service.link}>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <Link to="/services">
          <Button
            size="lg"
            className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow animate-fade-in-up delay-600"
          >
            View All Services
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesOverview;
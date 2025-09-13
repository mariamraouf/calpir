"use client";

import React from "react";
import { Layout, Briefcase, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Layout,
    title: "Website & Digital Presence",
    description: "Professional websites, e-commerce, SEO, and online visibility.",
    link: "/services#website-building",
  },
  {
    icon: Briefcase,
    title: "Operations & Management",
    description: "Project management, CRM, accounting, and custom automations.",
    link: "/services#project-management",
  },
  {
    icon: Users,
    title: "HR & Legal Foundations",
    description: "Recruiting, HR operations, legal compliance, and payroll setup.",
    link: "/services#hr-legal-compliance",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Branding",
    description: "Social media, email marketing, analytics, and brand identity.",
    link: "/services#social-media-setup",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Our Comprehensive Services
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Everything you need to build, manage, and grow your business, all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <service.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              <Link to={service.link}>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
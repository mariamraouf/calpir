"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { PlusCircle, BarChart2, Users, Headphones, Share2, Mail, Code, Shield, Layout, BookOpen, Settings, Clock, Puzzle, Globe, Palette, Briefcase, FileText, DollarSign, TrendingUp, Lightbulb, CheckCircle, Scale, Handshake, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PackageComparisonTable from "@/components/PackageComparisonTable";
import PageHeader from "@/components/PageHeader";
import { servicesData } from "@/data/services"; // Import from central file

const addOnsCategories = [
  {
    name: "Digital Foundation Services",
    icon: Globe,
    iconColor: "text-palette-blue-500",
    subcategories: [
      {
        name: "Website & Online Presence",
        items: [
          { id: "website-expansions-per-page", posts: "Website Expansions: Per Page", price: "$199", description: "Development for each additional website page" },
          { id: "website-expansions-ecommerce", posts: "Website Expansions: E-commerce Functionality", price: "$499", description: "Setup for e-commerce capabilities" },
          { id: "seo-optimization-addon", posts: "SEO Optimization", price: "$499", description: "Improve your website's visibility on search engines" },
        ]
      },
      {
        name: "Social Media & Marketing",
        items: [
          { id: "social-media-5-posts", posts: "Social Media Content: 5 Posts/Month", price: "$199", description: "Professional social media posts with graphics" },
          { id: "social-media-10-posts", posts: "Social Media Content: 10 Posts/Month", price: "$349", description: "Enhanced content with stories and engagement" },
          { id: "social-media-15-posts", posts: "Social Media Content: 15 Posts/Month", price: "$649", description: "Full social media management with analytics" },
          { id: "email-system-setup", posts: "Email System Setup", price: "$499", description: "Develop effective email marketing and communication strategies." },
        ]
      }
    ]
  },
  {
    name: "Operations & Management Services",
    icon: Briefcase,
    iconColor: "text-palette-orange-500",
    subcategories: [
      {
        name: "Business Systems",
        items: [
          { id: "analytics-google-setup", posts: "Analytics & Reporting (Google Analytics setup)", price: "$699", description: "Comprehensive Google Analytics setup and reporting" },
          { id: "security-basics-setup", posts: "Security Basics: One-time Setup", price: "$299", description: "Basic security configurations and recommendations" },
          { id: "time-tracking-setup", posts: "Time Tracking", price: "$499", description: "Comprehensive setup of a time tracking tool" },
        ]
      },
      {
        name: "Platform & Integration Services",
        items: [
          { id: "extra-integrations-per", posts: "Extra Integrations: Per Integration", price: "$199", description: "Setup and configuration for each additional platform integration" },
          { id: "custom-automations-3-plus", posts: "Custom Automations: For 3 Automations", price: "$299", description: "Setup for 3 custom automation workflows" },
        ]
      }
    ]
  },
  {
    name: "Human Resources Services",
    icon: Users,
    iconColor: "text-primary",
    subcategories: [
      {
        name: "HR Foundation",
        items: [
          { id: "hr-legal-compliance", posts: "Legal & Compliance", price: "$499", description: "HR contracts, NDAs, employee handbook, compliance checklists" },
          { id: "hr-recruiting-hiring", posts: "Recruiting & Hiring", price: "$599", description: "Job descriptions, interview guides, ATS setup, onboarding workflows" },
          { id: "hr-operations-payroll", posts: "HR Operations & Payroll", price: "$799", description: "Payroll, benefits, time tracking, employee database, HR automation" },
          { id: "hr-foundation-package", posts: "HR Foundation", price: "$1,249", description: "Full HR system integration, custom workflow design, HR dashboard & analytics" },
        ]
      },
    ]
  },
  {
    name: "Training & Support Services",
    icon: BookOpen,
    iconColor: "text-calpir-green-600",
    subcategories: [
      {
        name: "Team Development",
        items: [
          { id: "training-sessions-per-hour", posts: "Training Sessions: Per Hour", price: "$199", description: "Dedicated training sessions for your team" },
        ]
      }
    ]
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Transparent Pricing for Every Business Stage"
          highlightWord="Pricing"
          description="Find the perfect solution for your business with our clear and flexible pricing. All packages are one-time setup/migration fees; clients are responsible for any tool subscriptions. Prices are globally affordable."
          buttons={[
            { text: "Start My Business", href: "/build-my-business", variant: "primary" },
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "outline", isExternal: true },
          ]}
        />

        {/* Navigation Buttons - Now Sticky on MD and up */}
        <div className="md:sticky md:top-[80px] z-40 w-full bg-background dark:bg-gray-950 py-4 shadow-sm">
          <div className="container flex flex-col sm:flex-row items-center justify-center rounded-full bg-white dark:bg-gray-800 p-1 shadow-xl border border-gray-200 dark:border-gray-700 gap-2 sm:gap-1">
            <a href="#complete-packages" className="w-full sm:w-auto">
              <Button
                className="w-full text-lg px-6 py-2 rounded-full transition-colors duration-200
                  bg-calpir-green-50 dark:bg-calpir-green-50
                  text-primary dark:text-primary
                  hover:bg-calpir-green-100 dark:hover:bg-calpir-green-200
                  data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Complete Packages
              </Button>
            </a>
            <a href="#package-add-ons" className="w-full sm:w-auto">
              <Button
                className="w-full text-lg px-6 py-2 rounded-full transition-colors duration-200
                  bg-calpir-green-50 dark:bg-calpir-green-50
                  text-primary dark:text-primary
                  hover:bg-calpir-green-100 dark:hover:bg-calpir-green-200
                  data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Package Add-ons
              </Button>
            </a>
            <a href="#individual-services" className="w-full sm:w-auto">
              <Button
                className="w-full text-lg px-6 py-2 rounded-full transition-colors duration-200
                  bg-calpir-green-50 dark:bg-calpir-green-50
                  text-primary dark:text-primary
                  hover:bg-calpir-green-100 dark:hover:bg-calpir-green-200
                  data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Individual Services
              </Button>
            </a>
            <a href="#custom-solutions" className="w-full sm:w-auto">
              <Button
                className="w-full text-lg px-6 py-2 rounded-full transition-colors duration-200
                  bg-calpir-green-50 dark:bg-calpir-green-50
                  text-primary dark:text-primary
                  hover:bg-calpir-green-100 dark:hover:bg-calpir-green-200
                  data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Custom Solutions
              </Button>
            </a>
          </div>
        </div>
        {/* Add a div to provide spacing below the sticky nav when it's not sticking */}
        <div className="mb-16"></div>

        {/* Section 1: Complete Business Packages */}
        <section id="complete-packages" className="mb-20 container scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-400">
            Complete Business Packages
          </h2>
          <PackageComparisonTable />
        </section>

        {/* Section 3: Package Add-ons (Moved before Individual Services) */}
        <section id="package-add-ons" className="mb-20 container scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-1000">
            Enhance Your Package with Add-Ons
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {addOnsCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-110 transition-transform duration-300 hover:shadow-2xl animate-slide-in-left" style={{ animationDelay: `${1.1 + catIndex * 0.15}s` }}>
                <div className="flex items-center mb-6">
                  {category.icon && <category.icon className={`h-8 w-8 mr-3 ${category.iconColor}`} />}
                  <h3 className="text-2xl font-bold text-primary dark:text-calpir-green-400">{category.name}</h3>
                </div>
                {category.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex} className="space-y-6 mb-6 last:mb-0">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2 mb-4">{subcategory.name}</h4>
                    {subcategory.items.map((item, itemIndex) => (
                      <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${1.2 + catIndex * 0.15 + subIndex * 0.05 + itemIndex * 0.02}s` }}>
                        <div className="text-left mb-2 sm:mb-0 sm:mr-4">
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.posts}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-xl font-bold text-primary dark:text-calpir-green-300">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Individual Services (Moved after Package Add-ons) */}
        <section id="individual-services" className="mb-20 container scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-500">
            Individual Services
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed text-center mb-12 animate-fade-in-up delay-600">
            Perfect for specific business needs or as package add-ons.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {servicesData.map((service, index) => (
              <section key={service.id} id={service.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-slide-in-left" style={{ animationDelay: `${0.7 + index * 0.05}s` }}>
                <div className="flex items-center mb-6">
                  <service.icon className={`h-12 w-12 mr-4 flex-shrink-0 ${service.iconColor}`} />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                    <p className="text-md text-gray-600 dark:text-gray-400">{service.description}</p>
                  </div>
                </div>
                <div className="text-right mb-6">
                  <span className="text-3xl font-extrabold text-primary dark:text-calpir-green-300">{service.investment}</span>
                </div>
                <ul className="list-none space-y-3 text-left mb-8">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1 + detailIndex * 0.05}s` }}>
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <Link to="/individual-service-inquiry">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* Section 4: Custom Solutions */}
        <section id="custom-solutions" className="mt-20 mb-20 text-center p-8 rounded-2xl shadow-xl animate-fade-in-up delay-2000
                    bg-gradient-to-br from-calpir-green-50 to-palette-blue-50 dark:from-calpir-green-950 dark:to-palette-blue-950 max-w-4xl mx-auto scroll-mt-24">
          <Puzzle className="h-16 w-16 mx-auto mb-6 text-primary dark:text-calpir-green-300 animate-bounce-slow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Custom Add-On Packages & Platform Setups Available
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
            Need something specific, or a setup for a single platform not listed? We can create custom solutions tailored to your business needs. Contact us to discuss your requirements.
          </p>
          <Link to="/get-a-quote">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-calpir-green-600 text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Request Custom Set Up
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Pricing;
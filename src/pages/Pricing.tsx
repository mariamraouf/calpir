"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import {
  PlusCircle,
  BarChart2,
  Users,
  Headphones,
  Share2, // Used for Social Media & Marketing
  Mail,
  Code,
  Shield,
  Layout,
  BookOpen,
  Settings,
  Clock,
  Puzzle,
  Globe, // Used for Digital Foundation Services
  Palette,
  Briefcase, // Used for Operations & Management Services
  FileText,
  DollarSign,
  TrendingUp,
  Lightbulb, // Used for Platform & Integration Services
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PackageComparisonTable from "@/components/PackageComparisonTable";
import PageHeader from "@/components/PageHeader";
import { servicesData } from "@/data/services"; // Import from central file
import { addOnsOptions } from "@/data/addons"; // Import from central file

// Group add-ons directly by category for rendering in Pricing page
const groupedAddOns: Record<string, typeof addOnsOptions> = addOnsOptions.reduce((acc, addOn) => {
  if (!acc[addOn.category]) {
    acc[addOn.category] = [];
  }
  acc[addOn.category].push(addOn);
  return acc;
}, {} as Record<string, typeof addOnsOptions>);

// Map category names to icons and colors for display
const addOnCategoryDisplayMap: Record<string, { icon: React.ElementType, iconColor: string }> = {
  "Digital Foundation Services": { icon: Globe, iconColor: "text-palette-blue-500" },
  "Social Media & Marketing": { icon: Share2, iconColor: "text-palette-red-400" }, // NEW
  "Social Foundation Services": { icon: Mail, iconColor: "text-primary" }, // Added for Email System Setup
  "Operations & Management Services": { icon: Briefcase, iconColor: "text-palette-orange-500" },
  "Platform & Integration Services": { icon: Lightbulb, iconColor: "text-palette-orange-400" }, // NEW
  "Human Resources Services": { icon: Users, iconColor: "text-primary" },
  "Training & Support Services": { icon: BookOpen, iconColor: "text-calpir-green-600" },
};

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

        {/* Section 3: Package Add-ons */}
        <section id="package-add-ons" className="mb-20 container scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-1000">
            Enhance Your Package with Add-Ons
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {Object.entries(groupedAddOns).map(([categoryName, addOns], catIndex) => {
              const displayInfo = addOnCategoryDisplayMap[categoryName];
              if (!displayInfo) return null;

              return (
                <div key={categoryName} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl animate-slide-in-left" style={{ animationDelay: `${1.1 + catIndex * 0.15}s` }}>
                  <div className="flex items-center mb-6">
                    {displayInfo.icon && <displayInfo.icon className={`h-8 w-8 mr-3 ${displayInfo.iconColor}`} />}
                    <h3 className="text-2xl font-bold text-primary dark:text-calpir-green-400">{categoryName}</h3>
                  </div>
                  <div className="space-y-4">
                    {addOns.map((item, itemIndex) => (
                      <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${1.2 + catIndex * 0.15 + itemIndex * 0.02}s` }}>
                        <div className="text-left mb-2 sm:mb-0 sm:mr-4">
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.label.split('(')[0].trim()}</p>
                          {item.serviceId && (
                            <Link to={`/services#${item.serviceId}`} className="text-primary hover:underline ml-2 text-sm" target="_blank" rel="noopener noreferrer">
                              (Learn More)
                            </Link>
                          )}
                        </div>
                        <span className="text-xl font-bold text-primary dark:text-calpir-green-300">{item.label.match(/\(\$[^)]+\)/)?.[0] || ""}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Individual Services */}
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
                  <Link to={`/services#${service.id}`}>
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
            Need something specific, or a setup for a single platform not listed? Our experts will examine your setup and recommend accordingly to create custom solutions tailored to your business needs. Contact us to discuss your requirements.
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
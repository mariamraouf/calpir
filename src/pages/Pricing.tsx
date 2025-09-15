"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Users,
  Share2, // Used for Social Media & Marketing
  Mail,
  BookOpen,
  Puzzle,
  Globe, // Used for Digital Foundation Services
  Briefcase, // Used for Operations & Management Services
  Lightbulb, // Used for Platform & Integration Services
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import PackageComparisonTable from "@/components/PackageComparisonTable";
import PageHeader from "@/components/PageHeader";
import { servicesData } from "@/data/services"; // Import from central file
import { addOnsOptions } from "@/data/addons"; // Import from central file
import OfferCatalogSchema from "@/components/OfferCatalogSchema"; // Import the new schema component
import BreadcrumbSchema from "@/components/BreadcrumbSchema"; // Import the new schema component

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

const REQUEST_CUSTOM_SETUP_URL = "https://forms.clickup.com/9015087055/f/8cnekyf-7955/T9A15GLMNY3RJ1NHH3";
const CLAIM_INDIVIDUAL_SERVICE_URL = "https://forms.clickup.com/9015087055/f/8cnekyf-8015/KLJFO48BFQXRD1HHTP"; // Added this constant

const Pricing = () => {
  const location = useLocation();
  const [highlightedServiceId, setHighlightedServiceId] = useState<string | null>(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove '#'
      setHighlightedServiceId(id);

      // Scroll to the element
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Remove highlight after a delay
        const timer = setTimeout(() => {
          setHighlightedServiceId(null);
        }, 2000); // 2 seconds for the glow effect
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash]);

  const packagesForSchema = [
    {
      name: "Starter Package",
      description: "Complete business setup for solo entrepreneurs, launched in 7 days.",
      price: "1499",
      url: "https://www.calpir.com/pricing#starter-package-pricing",
    },
    {
      name: "Growth Package",
      description: "Comprehensive business setup for scaling startups, launched in 14 days.",
      price: "2999",
      url: "https://www.calpir.com/pricing#growth-package-pricing",
    },
    {
      name: "Ultimate Package",
      description: "Enterprise-level business setup for funded startups, launched in 28 days.",
      price: "5999",
      url: "https://www.calpir.com/pricing#ultimate-package-pricing",
    },
  ];

  const individualServicesForSchema = servicesData.map(service => ({
    name: service.title,
    description: service.description,
    price: service.investment.replace(/[^0-9.]/g, ''),
    url: `https://www.calpir.com/pricing#${service.id}`,
  }));

  const addOnsForSchema = addOnsOptions.map(addOn => ({
    name: addOn.label.split('(')[0].trim(),
    description: `Add-on service: ${addOn.label.split('(')[0].trim()}`,
    price: addOn.label.match(/\(\$([^)]+)\)/)?.[1]?.replace(/,/g, '') || '',
    url: `https://www.calpir.com/pricing#${addOn.serviceId}`,
  }));

  const breadcrumbItems = [
    { name: "Home", item: "https://www.calpir.com/" },
    { name: "Pricing", item: "https://www.calpir.com/pricing" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema items={breadcrumbItems} />
      <OfferCatalogSchema
        name="Calpir Business Services Pricing"
        description="Transparent pricing for Calpir's complete business launch packages and individual services for startups and entrepreneurs."
        providerName="Calpir"
        providerUrl="https://www.calpir.com"
        offerItems={[...packagesForSchema, ...individualServicesForSchema, ...addOnsForSchema]}
      />
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Transparent Pricing for Every Business Stage"
          highlightWord="Pricing"
          description="Find the perfect solution for your business with our clear and flexible pricing. All packages are one-time setup/migration fees; clients are responsible for any tool subscriptions. Prices are globally affordable."
          buttons={[
            { text: "Start My Business", href: "/build-my-business", variant: "primary", isExternal: true },
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
                      <div key={item.id} id={item.serviceId} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0 animate-fade-in-up ${highlightedServiceId === item.serviceId ? 'highlight-glow' : ''}`} style={{ animationDelay: `${1.2 + catIndex * 0.15 + itemIndex * 0.02}s` }}>
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
              <section key={service.id} id={service.id} className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-slide-in-left ${highlightedServiceId === service.id ? 'highlight-glow' : ''}`} style={{ animationDelay: `${0.7 + index * 0.05}s` }}>
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
                  <a href={CLAIM_INDIVIDUAL_SERVICE_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow"
                    >
                      Get Started
                    </Button>
                  </a>
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
          <a href={REQUEST_CUSTOM_SETUP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-calpir-green-600 text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Request Custom Set Up
            </Button>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
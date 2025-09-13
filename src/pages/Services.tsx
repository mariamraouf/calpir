"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { CheckCircle, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { servicesData } from "@/data/services";
import PackageDetailsSection from "@/components/PackageDetailsSection"; // Import the new component

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Comprehensive Business Solutions"
          description="Whether you need a complete business launch package or specific individual services, Calpir provides tailored solutions to meet your unique needs. Explore our offerings below."
          buttons={[
            { text: "Start My Business", href: "/build-my-business", variant: "primary" },
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "outline", isExternal: true },
          ]}
        />

        {/* Navigation Buttons */}
        <div className="md:sticky md:top-[80px] z-40 w-full bg-background dark:bg-gray-950 py-3 shadow-sm"> {/* Reduced vertical padding */}
          <div className="container flex flex-col sm:flex-row items-center justify-center rounded-full bg-white dark:bg-gray-800 p-1 shadow-xl border border-gray-200 dark:border-gray-700 gap-1 sm:gap-1"> {/* Reduced padding and gap */}
            <a href="#complete-packages-section" className="w-full sm:w-auto">
              <Button
                className="w-full text-base px-4 py-2 rounded-full transition-colors duration-200
                  bg-calpir-green-50 dark:bg-calpir-green-50
                  text-primary dark:text-primary
                  hover:bg-calpir-green-100 dark:hover:bg-calpir-green-200
                  data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Complete Packages
              </Button>
            </a>
            <a href="#individual-services-section" className="w-full sm:w-auto">
              <Button
                className="w-full text-base px-4 py-2 rounded-full transition-colors duration-200
                  bg-calpir-green-50 dark:bg-calpir-green-50
                  text-primary dark:text-primary
                  hover:bg-calpir-green-100 dark:hover:bg-calpir-green-200
                  data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Individual Services
              </Button>
            </a>
          </div>
        </div>
        {/* Add a div to provide spacing below the sticky nav when it's not sticking */}
        <div className="mb-12"></div> {/* Reduced margin */}

        {/* Section 1: Complete Packages */}
        <section id="complete-packages-section" className="container scroll-mt-24">
          <PackageDetailsSection />
          <div className="text-center mt-6 mb-12 animate-fade-in-up delay-1100"> {/* Reduced margins */}
            <Link to="/pricing#complete-packages">
              <Button
                size="lg"
                className="border-primary bg-primary text-white hover:bg-calpir-green-700 hover:text-white text-base px-8 py-3 rounded-2xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-button-glow animate-pulse-glow dark:text-white dark:border-calpir-green-300 dark:hover:bg-calpir-green-700"
              >
                View Package Pricing & Comparison
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 2: Individual Services */}
        <section id="individual-services-section" className="container py-12 md:py-16 scroll-mt-24"> {/* Reduced vertical padding */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white animate-fade-in-up delay-500"> {/* Reduced font size and margin */}
            Individual Business Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed text-center mb-10 animate-fade-in-up delay-600"> {/* Reduced font size and max-width */}
            Need specific business solutions without a full package? Choose from our comprehensive individual services. These services are also available as package add-ons at different pricing.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> {/* Reduced gap */}
            {servicesData.map((service, index) => (
              <section key={service.id} id={service.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-slide-in-left" style={{ animationDelay: `${0.7 + index * 0.05}s` }}> {/* Reduced padding, hover shadow and scale */}
                <div className="flex items-center mb-5"> {/* Reduced margin */}
                  <service.icon className={`h-10 w-10 mr-3 flex-shrink-0 ${service.iconColor}`} /> {/* Reduced icon size */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h2> {/* Reduced font size */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p> {/* Reduced font size */}
                  </div>
                </div>
                <ul className="list-none space-y-2 text-left mb-6"> {/* Reduced space-y and margin */}
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1 + detailIndex * 0.05}s` }}> {/* Reduced font size */}
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" /> {/* Reduced icon size */}
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-auto pt-5 border-t border-gray-100 dark:border-gray-700"> {/* Reduced padding */}
                  <Link to={`/pricing#individual-services`}>
                    <Button
                      size="sm" // Changed to sm
                      className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-base px-6 py-2 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-button-glow"
                    >
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-16 mb-16 text-center p-6 rounded-2xl shadow-xl animate-fade-in-up delay-1500
                    bg-gradient-to-br from-palette-blue-50 to-calpir-green-50 dark:from-palette-blue-950 dark:to-calpir-green-950 max-w-3xl mx-auto"> {/* Reduced margins, padding, max-width */}
          <Puzzle className="h-14 w-14 mx-auto mb-5 text-primary dark:text-calpir-green-300 animate-bounce-slow" /> {/* Reduced icon size and margin */}
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white"> {/* Reduced font size */}
            Need a Specific Setup?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-7"> {/* Reduced font size and max-width */}
            If your business requires a specific platform setup or integration not explicitly listed in our packages or add-ons, we can still help! Our team specializes in tailoring solutions to your unique needs.
          </p>
          <Link to="/get-a-quote">
            <Button
              size="sm" // Changed to sm
              className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-base px-6 py-2 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:animate-button-glow"
            >
              Request a Custom Set Up
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Services;
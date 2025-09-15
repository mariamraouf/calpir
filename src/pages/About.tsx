"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader"; // Import PageHeader
import BreadcrumbSchema from "@/components/BreadcrumbSchema"; // Import the new schema component

const About = () => {
  const coreServices = [
    "Operations flows",
    "Project management",
    "HR/recruiting (global focus)",
    "Website building/hosting",
    "Accounting",
    "Social media",
    "Email",
    "CRM",
    "Integrations",
    "Design/branding",
    "Analytics",
    "Marketing", // Added Marketing
  ];

  const breadcrumbItems = [
    { name: "Home", item: "https://www.calpir.com/" },
    { name: "About Us", item: "https://www.calpir.com/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="About Calpir"
          description="At Calpir, we're genuinely obsessed with helping founders like you bring their big ideas to life. We've been in your shoes, navigating the startup maze, and we built Calpir to be the ultimate shortcut. Think of us as your secret weapon for launching and scaling, handling everything from operations and HR to killer websites and social media. We're talking a full setup in just 7 days for our Starter package! With our deep dive into 300+ platforms, we'll hook you up with exactly what you need, building or migrating your systems seamlessly. We're not just a service; we're your partners in making your business dreams a reality, without the usual headaches."
          buttons={[
            { text: "Start My Business", href: "/build-my-business", variant: "primary", isExternal: true },
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "outline", isExternal: true },
          ]}
        />

        <section className="container py-16 md:py-24 mb-8"> {/* Changed mb-16 to mb-8 */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-500">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coreServices.map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg animate-slide-in-left transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-lg text-gray-800 dark:text-gray-200">{service}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-16 md:py-24 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in-up delay-1200">
            Our Delivery Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6 bg-calpir-green-50 dark:bg-calpir-green-950 rounded-2xl shadow-lg animate-zoom-in transform hover:scale-110 transition-transform duration-300" style={{ animationDelay: `1.3s` }}>
              <h3 className="text-2xl font-semibold text-primary dark:text-calpir-green-300 mb-2">Starter Package</h3>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-200">7 Days</p>
            </div>
            <div className="p-6 bg-calpir-green-50 dark:bg-calpir-green-950 rounded-2xl shadow-lg animate-zoom-in transform hover:scale-110 transition-transform duration-300" style={{ animationDelay: `1.45s` }}>
              <h3 className="text-2xl font-semibold text-primary dark:text-calpir-green-300 mb-2">Growth Package</h3>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-200">14 Days</p>
            </div>
            <div className="p-6 bg-calpir-green-50 dark:bg-calpir-green-950 rounded-2xl shadow-lg animate-zoom-in transform hover:scale-110 transition-transform duration-300" style={{ animationDelay: `1.6s` }}>
              <h3 className="text-2xl font-semibold text-primary dark:text-calpir-green-300 mb-2">Ultimate Package</h3>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-200">28 Days</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default About;
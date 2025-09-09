"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { CheckCircle } from "lucide-react";

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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-16 md:py-24">
        <section className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Calpir
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed delay-200">
            Calpir provides all-in-one setup and software migration services for startups and businesses, saving time, money, and effort. We handle operations, HR, websites, social media, and more, with a 7-day setup for our Starter package. Our expertise in 300+ platforms ensures tailored recommendations, and we build or migrate your processes seamlessly. Whether launching or switching software, we make it easy.
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400 mt-8 italic delay-400">
            Disclaimer: We configure your chosen platforms; clients are responsible for any subscription costs.
          </p>
        </section>

        <section className="mb-16">
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

        <section className="text-center mb-16">
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
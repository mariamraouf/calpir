"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { CheckCircle, FileText, Layout, Palette, TrendingUp, Users, Briefcase, DollarSign, Settings, Shield, BookOpen, Lightbulb, Mail, Headphones, Clock, Globe, Code, Share2, Scale, Handshake, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { servicesData } from "@/data/services"; // Import from central file

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Individual Business Services"
          description="Need specific business solutions without a full package? Choose from our comprehensive individual services. These services are also available as package add-ons at different pricing."
          buttons={[
            { text: "Claim Your Service", href: "/individual-service-inquiry", variant: "primary" },
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "outline", isExternal: true },
          ]}
        />

        <section className="container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {servicesData.map((service, index) => (
              <section key={service.id} id={service.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-110 animate-slide-in-left" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
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
                  <Link to="/individual-service-inquiry"> {/* Updated button link */}
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

        <section className="mt-20 mb-20 text-center p-8 rounded-2xl shadow-xl animate-fade-in-up delay-1500
                    bg-gradient-to-br from-palette-blue-50 to-calpir-green-50 dark:from-palette-blue-950 dark:to-calpir-green-950 max-w-4xl mx-auto">
          <Puzzle className="h-16 w-16 mx-auto mb-6 text-primary dark:text-calpir-green-300 animate-bounce-slow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Need a Specific Setup?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            If your business requires a specific platform setup or integration not explicitly listed in our packages or add-ons, we can still help! Our team specializes in tailoring solutions to your unique needs.
          </p>
          <Link to="/get-a-quote">
            <Button
              size="lg"
              className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow"
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
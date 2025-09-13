"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CallToActionSection from "@/components/CallToActionSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesOverview from "@/components/ServicesOverview";
import { MadeWithDyad } from "@/components/made-with-dyad";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ServicesOverview /> {/* Existing mention of services */}

        {/* New prominent mention of individual services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Need Something Specific?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our individual services allow you to pick and choose exactly what your business needs,
              from a single SEO optimization to a complete HR system setup.
            </p>
            <Link href="/services" passHref>
              <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg">
                Explore Individual Services
              </button>
            </Link>
          </div>
        </section>

        <PricingSection
          title="Flexible Pricing for Every Stage"
          description="Choose the plan that fits your business needs, or build your own custom package."
          packages={[
            {
              name: "Starter",
              price: "$999",
              description: "Launch your online presence with essential tools.",
              features: [
                "Basic Website (5 pages)",
                "Email System Setup",
                "Social Media Content (5 Posts/Month)",
                "Basic Analytics & Reporting",
              ],
              buttonText: "Get Started",
              buttonLink: "/build-my-business?package=starter",
              timeline: "7 Days Launch", // Added timeline
            },
            {
              name: "Growth",
              price: "$2,499",
              description: "Scale your operations and expand your reach.",
              features: [
                "Advanced Website (10 pages)",
                "Email Marketing Automation",
                "Social Media Content (10 Posts/Month)",
                "SEO Optimization",
                "Custom Automations (3)",
                "Recruiting & Hiring System",
              ],
              buttonText: "Grow My Business",
              buttonLink: "/build-my-business?package=growth",
              timeline: "14 Days Launch", // Added timeline
            },
            {
              name: "Ultimate",
              price: "$4,999",
              description: "Comprehensive solutions for established businesses.",
              features: [
                "Enterprise Website (15+ pages)",
                "Full Marketing Automation Suite",
                "Social Media Content (15 Posts/Month)",
                "Advanced SEO & Content Strategy",
                "HR Foundation System",
                "Full Project Management Setup",
                "Dedicated Support",
              ],
              buttonText: "Transform My Business",
              buttonLink: "/build-my-business?package=ultimate",
              timeline: "28 Days Launch", // Added timeline
            },
          ]}
        />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;
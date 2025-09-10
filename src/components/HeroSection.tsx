"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Import Link

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gray-50 dark:bg-gray-900 overflow-hidden"> {/* Changed background */}
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center text-left gap-8 lg:gap-16"> {/* Changed layout and alignment */}
        {/* Left Column: Text and Buttons */}
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-foreground dark:text-white animate-fade-in-up"> {/* Changed text color */}
            Launch Your <span className="text-palette-orange-500">Dream Business</span> in 7 Days
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-10 text-gray-700 dark:text-gray-300 opacity-90 animate-fade-in-up delay-200"> {/* Changed text color */}
            Start Your Business Smoothly! Create a Sleek Website, Develop Strong Branding, Set Up Efficient Systems, and Simplify with Automation. Turn Your Idea into Success Using Proven Methods.
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-4 animate-fade-in-up delay-400"> {/* Changed justify-center to justify-start */}
            <Link to="/build-my-business">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
              >
                Start My Business
              </Button>
            </Link>
            <a href="https://calendly.com/your-calpir-consultation" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
              >
                Get a Free Consultation
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: Calpir Logo */}
        <div className="flex justify-center lg:justify-end items-center mt-10 lg:mt-0 lg:mr-16"> {/* Positioned to the right */}
          <img
            src="/calpir-logo.png"
            alt="Calpir Logo"
            className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 animate-bounce-slow" // Made logo bigger
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Import Link

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary to-calpir-green-900 text-white overflow-hidden">
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center text-left gap-8 lg:gap-16">
        {/* Left Column: Text and Buttons */}
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white animate-fade-in-up">
            Launch Your <span className="text-palette-orange-500">Dream Business</span> in 7 Days
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-10 text-white opacity-90 animate-fade-in-up delay-200">
            Start Your Business Smoothly! Create a Sleek Website, Develop Strong Branding, Set Up Efficient Systems, and Simplify with Automation. Turn Your Idea into Success Using Proven Methods.
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-4 animate-fade-in-up delay-400">
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

        {/* Right Column: Calpir Logo with white circular background (tight fit) */}
        <div className="flex justify-center lg:justify-center items-center mt-10 lg:mt-0">
          <div className="bg-white rounded-full flex items-center justify-center shadow-xl animate-super-bounce h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"> {/* White circular background with size */}
            <img
              src="/calpir-logo.png"
              alt="Calpir Logo"
              className="h-full w-full object-contain" // Logo fills the parent circle
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
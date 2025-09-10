"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Import Link

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Background pattern - Placeholder for wavy lines. A proper SVG would be ideal here. */}
      {/* For now, we'll rely on the subtle background color and the main content. */}

      <div className="container relative z-10 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <img
            src="/calpir-logo.png"
            alt="Calpir Logo"
            className="h-32 w-32 mx-auto lg:mx-0 mb-8 animate-bounce-slow" // Made bigger
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-foreground dark:text-white animate-fade-in-up">
            Empower Your <span className="text-palette-orange-500">Data</span>{" "}
            <span className="text-palette-orange-500">Journey</span> with Intelligent Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-10 text-gray-600 dark:text-gray-300 opacity-90 animate-fade-in-up delay-200">
            Advanced applications and tools designed for Content Engineers, Data Architects, Business Analysts, and AI/ML professionals who demand precision, efficiency, and scalability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in-up delay-400">
            <Link to="/services"> {/* Linking to /services as a placeholder for /products */}
              <Button
                size="lg"
                className="bg-palette-orange-500 hover:bg-palette-orange-600 text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
              >
                Explore Our Products
              </Button>
            </Link>
            <a href="https://calendly.com/your-calpir-consultation" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-700 text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
              >
                Book a Demo
              </Button>
            </a>
          </div>
        </div>

        {/* Right Graphic - Simplified placeholder for the complex abstract design */}
        <div className="lg:w-1/2 flex justify-center items-center relative h-80 w-80 md:h-96 md:w-96 animate-zoom-in delay-600">
          <div className="absolute inset-0 rounded-full border-2 border-palette-blue-700 flex items-center justify-center">
            <div className="h-3/4 w-3/4 rounded-full border border-palette-orange-500 flex items-center justify-center">
              {/* Inner abstract design - simplified */}
              <div className="relative h-full w-full flex items-center justify-center">
                {/* Central element */}
                <div className="absolute h-16 w-16 rounded-full bg-foreground dark:bg-white z-10"></div>
                {/* Radial "petals" */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-1/2 w-1/4 bg-palette-orange-500 rounded-full opacity-90"
                    style={{ transform: `rotate(${i * 60}deg) translateY(-25%)` }}
                  ></div>
                ))}
                {/* Grid of dots */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 p-4">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="h-2 w-2 rounded-full bg-foreground dark:bg-white opacity-70 mx-auto my-auto"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
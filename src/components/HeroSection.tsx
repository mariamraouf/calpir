"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react"; // Re-adding PlayCircle for consistency, though the video is removed.
import { Link } from "react-router-dom"; // Import Link

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-calpir-green-50 to-palette-blue-50 dark:from-calpir-green-950 dark:to-palette-blue-950 overflow-hidden">
      {/* Original Background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-palette-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-palette-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        {/* Left Content - Original text and buttons */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white animate-fade-in-up">
            Launch Your Business in <span className="text-primary">7 Days</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-10 text-gray-600 dark:text-gray-300 opacity-90 animate-fade-in-up delay-200">
            Calpir provides all-in-one setup and software migration services for startups and businesses, saving time, money, and effort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in-up delay-400">
            <Link to="/build-my-business">
              <Button
                size="lg"
                className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
              >
                Start Your Startup Package
              </Button>
            </Link>
            <a href="https://calendly.com/your-calpir-consultation" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white dark:border-calpir-green-300 dark:text-calpir-green-300 dark:hover:bg-calpir-green-700 dark:hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
              >
                Book a Free Consultation
              </Button>
            </a>
          </div>
        </div>

        {/* Right Content - Bigger, bouncing Calpir logo */}
        <div className="lg:w-1/2 flex justify-center items-center relative h-80 w-80 md:h-96 md:w-96 animate-zoom-in delay-600">
          <img
            src="/calpir-logo.png"
            alt="Calpir Logo"
            className="h-64 w-64 md:h-80 md:w-80 animate-bounce-slow" // Bigger and bouncing logo
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
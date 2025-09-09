"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Import Link

const HeroSection = () => { // Removed setOpenBuildMyBusinessForm, setOpenCustomQuoteForm props
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-foreground to-calpir-green-900 text-white overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container relative z-10 text-center">
        <img
          src="/calpir-logo.png"
          alt="Calpir Logo"
          className="h-24 w-24 mx-auto mb-8 animate-bounce-slow"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Launch Your Dream Business in 7 Days
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90 animate-fade-in-up delay-200">
          Start Your Business Smoothly! Create a Sleek Website, Develop Strong Branding, Set Up Efficient Systems, and Simplify with Automation. Turn Your Idea into Success Using Proven Methods.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
          <Link to="/build-my-business"> {/* Changed to Link */}
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Start My Business
            </Button>
          </Link>
          <Link to="/get-a-quote"> {/* Changed to Link */}
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
      {/* Background shapes for visual interest */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
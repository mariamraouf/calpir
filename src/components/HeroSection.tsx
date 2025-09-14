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
          Ready to build something amazing? Let's launch your dream business, together.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90 animate-fade-in-up delay-200">
          We get it – starting a business is a whole journey. We're here to be the co-pilot we wish we had, helping you craft a killer website, build a brand that pops, and set up systems that actually work. No gatekeeping, just genuine support to bring your vision to life. Check out our packages or mix-and-match <Link to="/services" className="text-white underline hover:no-underline font-semibold">individual services</Link> to find your perfect fit.
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
          <a href="https://calendly.com/your-calpir-consultation" target="_blank" rel="noopener noreferrer"> {/* Changed to external link */}
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Get a Free Consultation
            </Button>
          </a>
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
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Import Link

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-foreground to-calpir-green-950 text-white overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10" /* Reduced opacity for subtlety */
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container relative z-10 text-center px-4">
        <img
          src="/calpir-logo.png"
          alt="Calpir Logo"
          className="h-28 w-28 md:h-32 md:w-32 mx-auto mb-8 animate-pulse-glow" /* Larger logo with pulse glow */
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-text-reveal [animation-delay:0.2s]">
          <span className="block">Launch Your Dream Business</span>
          <span className="block text-primary [animation-delay:0.4s]">in Just 7 Days</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90 animate-text-reveal [animation-delay:0.6s]">
          Start Your Business Smoothly! Create a Sleek Website, Develop Strong Branding, Set Up Efficient Systems, and Simplify with Automation. Turn Your Idea into Success Using Proven Methods.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up [animation-delay:0.8s]">
          <Link to="/build-my-business">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-calpir-green-700 hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Start My Business
            </Button>
          </Link>
          <a href="https://calendly.com/your-calpir-consultation" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline" /* Changed to outline for contrast */
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Get a Free Consultation
            </Button>
          </a>
        </div>
      </div>
      {/* Background shapes for visual interest - now with a subtle 3D rotation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary opacity-5 rounded-full mix-blend-overlay animate-blob animate-rotate-3d"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-calpir-green-400 opacity-5 rounded-full mix-blend-overlay animate-blob animation-delay-2000 animate-rotate-3d"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-palette-blue-500 opacity-5 rounded-full mix-blend-overlay animate-blob animation-delay-4000 animate-rotate-3d"></div>
      </div>
    </section>
  );
};

export default HeroSection;
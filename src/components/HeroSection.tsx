// STEP 5: Replace your ENTIRE src/components/HeroSection.tsx with this code
// This updates your H1 with startup keywords and adds more SEO content

"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
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
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '10px'}}>
          <img
            src="/calpir-logo.png"
            alt="Calpir Logo"
            className="h-24 w-24 mx-auto mb-8 animate-bounce-slow"
          />
          <p style={{fontSize: '5rem', fontWeight: 'bold'}}>Calpir</p>
        </div>
        
        {/* ✅ UPDATED: H1 with startup keywords for better SEO */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Launch Your Startup Website in 7 Days - Complete New Business Setup
        </h1>
        
        {/* ✅ UPDATED: Description with startup-focused keywords */}
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 opacity-90 animate-fade-in-up delay-200">
          Choose our complete <strong>startup launch package</strong> for everything new entrepreneurs need to get started, 
          or select individual services to fill specific gaps. From professional <strong>startup website development</strong> to 
          brand development to <strong>business automation systems</strong> that actually work - we provide personalized 
          support whether you're launching your first business or scaling up.
        </p>
        
        {/* ✅ ADDED: Value proposition for startups */}
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up delay-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">$1,499</div>
              <div className="text-sm opacity-90">vs $18,000+ individual hires</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">7 Days</div>
              <div className="text-sm opacity-90">vs 3-6 months setup time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">500+</div>
              <div className="text-sm opacity-90">Startups successfully launched</div>
            </div>
          </div>
        </div>
        
        {/* ✅ UPDATED: CTA buttons with startup focus */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
          <Link to="/pricing#complete-packages">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Launch My Startup - $1,499
            </Button>
          </Link>
          <Link to="/services#individual-services-section">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
            >
              Get Free Consultation
            </Button>
          </Link>
        </div>
        
        {/* ✅ ADDED: Trust indicators for SEO content */}
        <div className="mt-8 animate-fade-in-up delay-500">
          <p className="text-sm opacity-75 mb-2">Trusted by entrepreneurs and startups worldwide</p>
          <p className="text-xs opacity-60">
            ⚡ 7-day launch guarantee • 💰 No hidden fees • 🎯 Proven startup systems • 🚀 500+ successful launches
          </p>
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

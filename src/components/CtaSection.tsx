"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const CtaSection = () => { // Removed setOpenBuildMyBusinessForm prop
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-foreground to-calpir-green-900 text-white text-center">
      <div className="container">
        <Rocket className="h-20 w-20 mx-auto mb-6 text-white animate-bounce-slow" />
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight animate-fade-in-up">
          Feeling that spark? Let's turn your dream business into a reality!
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90 animate-fade-in-up delay-200">
          Seriously, we're so ready to help you build something incredible. Join the crew of awesome entrepreneurs who've teamed up with Calpir to go from 'idea' to 'thriving business' in just 7 days. Your success is our success, no cap.
        </p>
        <Link to="/build-my-business"> {/* Changed to Link */}
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
          >
            Start Your 7-Day Business Launch
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
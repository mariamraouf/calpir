"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-calpir-green-700 text-white text-center">
      <div className="container">
        <Rocket className="h-20 w-20 mx-auto mb-6 text-white animate-bounce-slow" />
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight animate-fade-in-up">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90 animate-fade-in-up delay-200">
          Let's build the future of your business together. Get started with a free consultation today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
          <Link to="/build-my-business">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Start My Business
            </Button>
          </Link>
          <a href="https://calendly.com/your-calpir-consultation" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Get a Free Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
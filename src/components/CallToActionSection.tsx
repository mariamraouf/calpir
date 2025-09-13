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
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Ready to Launch Your Dream Business?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
          Join hundreds of successful entrepreneurs who chose Calpir Solutions to transform their ideas into thriving businesses.
        </p>
        <Link to="/build-my-business">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
          >
            Start Your Business Launch
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
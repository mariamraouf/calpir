"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-calpir-green-700 to-calpir-green-900 text-white text-center">
      <div className="container">
        <Rocket className="h-20 w-20 mx-auto mb-6 text-white animate-bounce-slow" />
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Ready to Launch Your Dream Business?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
          Join hundreds of successful entrepreneurs who chose Calpir Solutions to transform their ideas into thriving businesses in just 7 days.
        </p>
        <Button size="lg" className="bg-white text-calpir-green-700 hover:bg-gray-100 text-lg px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          Start Your 7-Day Business Launch
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
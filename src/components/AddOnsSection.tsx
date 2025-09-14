"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, BarChart2, Users, Headphones, Share2, Mail, Globe, Code, Shield, Layout, DollarSign, BookOpen, Settings, Clock, TrendingUp, Briefcase, FileText, Palette, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
// import { addOnsOptions } from "@/data/addons"; // No longer needed for this simplified component

// Group add-ons by category and subcategory for rendering in AddOnsSection
// const groupedAddOns = addOnsOptions.reduce((acc, addOn) => {
//   if (!acc[addOn.category]) {
//     acc[addOn.category] = {};
//   }
//   if (!acc[addOn.category][addOn.subcategory]) {
//     acc[addOn.category][addOn.subcategory] = [];
//   }
//   acc[addOn.category][addOn.subcategory].push(addOn);
//   return acc;
// }, {} as Record<string, Record<string, typeof addOnsOptions>>);

// Map category names to icons and colors for display
// const categoryDisplayMap: Record<string, { icon: React.ElementType, iconColor: string }> = {
//   "Digital Foundation Services": { icon: Globe, iconColor: "text-palette-blue-500" },
//   "Operations & Management Services": { icon: Briefcase, iconColor: "text-palette-orange-500" },
//   "Human Resources Services": { icon: Users, iconColor: "text-primary" },
//   "Training & Support Services": { icon: BookOpen, iconColor: "text-calpir-green-600" },
// };

const AddOnsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          Just Need a Little Something Extra? Or Not Ready for a Full Package?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
          No worries if a full package isn't your vibe right now! You can totally grab individual services or add on exactly what you need to your current plan. We're all about making it work for <Link to="/services" className="text-primary hover:underline font-semibold">you</Link>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up delay-300">
          <Link to="/individual-service-inquiry">
            <Button
              size="lg"
              className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow"
            >
              View All Services
            </Button>
          </Link>
          <a href="https://calendly.com/mariam-calpir/30min" target="_blank" rel="noopener noreferrer"> {/* Updated to new Calendly link */}
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow dark:text-calpir-green-300 dark:border-calpir-green-300 dark:hover:bg-calpir-green-700"
            >
              Get a Free Consultation
            </Button>
          </a>
        </div>

        {/* The detailed add-ons display logic has been removed from this component.
            It is now primarily handled on the /pricing page. */}
      </div>
    </section>
  );
};

export default AddOnsSection;
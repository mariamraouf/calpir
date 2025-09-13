"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, BarChart2, Users, Headphones, Share2, Mail, Globe, Code, Shield, Layout, DollarSign, BookOpen, Settings, Clock, TrendingUp, Briefcase, FileText, Palette, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { addOnsOptions } from "@/data/addons"; // Import from central file

// Group add-ons by category and subcategory for rendering in AddOnsSection
const groupedAddOns = addOnsOptions.reduce((acc, addOn) => {
  if (!acc[addOn.category]) {
    acc[addOn.category] = {};
  }
  if (!acc[addOn.category][addOn.subcategory]) {
    acc[addOn.category][addOn.subcategory] = [];
  }
  acc[addOn.category][addOn.subcategory].push(addOn);
  return acc;
}, {} as Record<string, Record<string, typeof addOnsOptions>>);

// Map category names to icons and colors for display
const categoryDisplayMap: Record<string, { icon: React.ElementType, iconColor: string }> = {
  "Digital Foundation Services": { icon: Globe, iconColor: "text-palette-blue-500" },
  "Operations & Management Services": { icon: Briefcase, iconColor: "text-palette-orange-500" },
  "Human Resources Services": { icon: Users, iconColor: "text-primary" },
  "Training & Support Services": { icon: BookOpen, iconColor: "text-calpir-green-600" },
};

const AddOnsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          Not Ready for a Full Package?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
          Choose individual services or enhance your package with add-ons to perfectly fit your business needs.
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
          <a href="https://calendly.com/your-calpir-consultation" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow dark:text-calpir-green-300 dark:border-calpir-green-300 dark:hover:bg-calpir-green-700"
            >
              Get a Free Consultation
            </Button>
          </a>
        </div>

        {/* Display Add-ons by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {Object.entries(groupedAddOns).map(([categoryName, subcategories], catIndex) => {
            const displayInfo = categoryDisplayMap[categoryName];
            if (!displayInfo) return null; // Skip if no display info

            return (
              <div key={categoryName} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl animate-slide-in-left" style={{ animationDelay: `${0.4 + catIndex * 0.15}s` }}>
                <div className="flex items-center mb-6">
                  {displayInfo.icon && <displayInfo.icon className={`h-8 w-8 mr-3 ${displayInfo.iconColor}`} />}
                  <h3 className="text-2xl font-bold text-primary dark:text-calpir-green-400">{categoryName}</h3>
                </div>
                {Object.entries(subcategories).map(([subcategoryName, addOns], subCatIndex) => (
                  <div key={subcategoryName} className="mb-6 last:mb-0">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 border-b pb-2">{subcategoryName}</h4>
                    <div className="space-y-4">
                      {addOns.map((item, itemIndex) => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${0.5 + catIndex * 0.15 + subCatIndex * 0.05 + itemIndex * 0.02}s` }}>
                          <div className="text-left mb-2 sm:mb-0 sm:mr-4">
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.label.split('(')[0].trim()}</p>
                            {item.serviceId && (
                              <Link to={`/services#${item.serviceId}`} className="text-primary hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                                (Learn More)
                              </Link>
                            )}
                          </div>
                          <span className="text-xl font-bold text-primary dark:text-calpir-green-300">{item.label.match(/\(\$[^)]+\)/)?.[0] || ""}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;
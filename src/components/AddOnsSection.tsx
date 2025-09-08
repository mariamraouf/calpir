"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const addOnsCategories = [
  {
    name: "Social Media Content",
    items: [
      { posts: "10 Posts/Month", price: "$297", description: "Professional social media posts with graphics" },
      { posts: "20 Posts/Month", price: "$497", description: "Enhanced content with stories and engagement" },
      { posts: "30 Posts/Month", price: "$697", description: "Full social media management with analytics" },
    ],
  },
  {
    name: "Video Content",
    items: [
      { posts: "Basic Video Package", price: "$497", description: "2 promotional videos per month" },
      { posts: "Standard Video Package", price: "$897", description: "4 videos + social media clips" },
      { posts: "Premium Video Package", price: "$1,297", description: "8 videos + full video marketing strategy" },
    ],
  },
  {
    name: "Marketing Campaigns",
    items: [
      { posts: "Email Marketing Setup", price: "$397", description: "Complete email automation system" },
      { posts: "Ad Campaign Management", price: "$797", description: "Google & Facebook ads management" },
      { posts: "Full Marketing Strategy", price: "$1,497", description: "Complete marketing plan + execution" },
    ],
  },
  {
    name: "Advanced Analytics",
    items: [
      { posts: "Basic Reporting", price: "$197", description: "Monthly performance reports" },
      { posts: "Advanced Analytics", price: "$397", description: "Detailed insights + recommendations" },
      { posts: "Custom Dashboards", price: "$697", description: "Real-time business intelligence" },
    ],
  },
  {
    name: "Staff Recruitment",
    items: [
      { posts: "Job Posting Setup", price: "$297", description: "Professional job listings on major platforms" },
      { posts: "Candidate Screening", price: "$597", description: "Initial screening + interview coordination" },
      { posts: "Full Recruitment Service", price: "$1,297", description: "End-to-end hiring process management" },
    ],
  },
  {
    name: "Ongoing Support",
    items: [
      { posts: "Monthly Check-ins", price: "$197", description: "Monthly strategy calls + support" },
      { posts: "Weekly Support", price: "$397", description: "Weekly calls + priority support" },
      { posts: "Dedicated Account Manager", price: "$797", description: "Personal business advisor + unlimited support" },
    ],
  },
];

const AddOnsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Enhance Your Package with Add-Ons
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Scale your business operations with our professional add-on services. Each service is designed to grow with your business needs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {addOnsCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">{category.name}</h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                    <div className="text-left mb-2 sm:mb-0 sm:mr-4">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.posts}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xl font-bold text-blue-700 dark:text-blue-300">{item.price}</span>
                      <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900">
                        <PlusCircle className="h-4 w-4 mr-2" /> Add to Package
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Custom Add-On Packages Available
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Need something specific? We can create custom add-on packages tailored to your business needs. Contact us to discuss your requirements.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;
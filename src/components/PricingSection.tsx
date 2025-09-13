"use client";

import React from "react";
import { Link } from "react-router-dom"; // Changed from next/link
import { CheckCircle } from "lucide-react";

interface Feature {
  text: string;
  isIncluded: boolean;
}

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  timeline?: string; // Added timeline property
}

interface PricingSectionProps {
  title: string;
  description: string;
  packages: Package[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ title, description, packages }) => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-8 flex flex-col justify-between border border-gray-200 hover:border-primary-500 transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <p className="text-5xl font-extrabold text-primary-600 mb-6">
                  {pkg.price}
                </p>
                {pkg.timeline && ( // Display timeline if available
                  <p className="text-md font-semibold text-gray-700 mb-6">
                    {pkg.timeline}
                  </p>
                )}
                <ul className="text-left space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to={pkg.buttonLink}>
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
                  {pkg.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Looking for something more tailored?
          </p>
          <Link to="/build-my-business">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg">
              Build Your Custom Package
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
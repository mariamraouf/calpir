"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react"; // Removed Phone, MapPin as per request to remove address

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Website Building", href: "/services#website-building" },
    { name: "Marketing", href: "/services#marketing" },
    { name: "Operations", href: "/services#operations" },
    { name: "HR & Legal", href: "/services#hr-legal" },
    { name: "Design & Branding", href: "/services#design-branding" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo-white.png" alt="Calpir Logo" className="h-8" />
            <span className="text-2xl font-bold text-white">Calpir</span>
          </Link>
          <p className="text-sm">
            Your partner in building and scaling your business with expert solutions.
          </p>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <a href="mailto:contact@calpir.com" className="hover:text-white">
              contact@calpir.com
            </a>
          </div>
          {/* Removed Phone and Address as per request */}
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-white transition-colors duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter (Placeholder) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates and insights.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-md bg-gray-700 border border-gray-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 flex-grow"
            />
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-r-md text-sm transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-sm">
        <p>&copy; {currentYear} Calpir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react"; // Removed Linkedin, Instagram
import { Button } from "@/components/ui/button";

const BUILD_MY_BUSINESS_URL = "https://forms.clickup.com/9015087055/f/8cnekyf-7975/TZ1NJ34TI8S352Q2G5";
const CLAIM_INDIVIDUAL_SERVICE_URL = "https://forms.clickup.com/9015087055/f/8cnekyf-8015/KLJFO48BFQXRD1HHTP";
const REQUEST_CUSTOM_SETUP_URL = "https://forms.clickup.com/9015087055/f/8cnekyf-7955/T9A15GLMNY3RJ1NHH3";

const Footer = () => {
  return (
    <footer className="bg-foreground dark:bg-gray-950 text-gray-300 py-16 md:py-20">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="col-span-full md:col-span-1 animate-fade-in-up">
          <Link to="/" className="flex items-center space-x-2 font-bold text-2xl text-white mb-4 transition-transform duration-300 hover:scale-110">
            <img src="/calpir-logo.png" alt="Calpir Logo" className="h-8 w-8" />
            <span className="text-white">Calpir</span>
          </Link>
          <p className="text-sm leading-relaxed mb-4">
            Your partner in launching and scaling successful businesses with strategic operations and proven frameworks.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" /> <a href="mailto:contact@calpir.com" className="hover:text-white transition-colors">contact@calpir.com</a>
            </p>
            {/* Removed social media icons */}
          </div>
        </div>

        {/* Company Links */}
        <div className="animate-fade-in-up delay-300">
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            {/* Removed Payment Terms link */}
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Quick Actions / Forms */}
        <div className="animate-fade-in-up delay-400">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={BUILD_MY_BUSINESS_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="link"
                  className="p-0 h-auto text-gray-300 hover:text-white transition-colors justify-start text-sm"
                >
                  Build My Business
                </Button>
              </a>
            </li>
            <li>
              <a href={CLAIM_INDIVIDUAL_SERVICE_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="link"
                  className="p-0 h-auto text-gray-300 hover:text-white transition-colors justify-start text-sm"
                >
                  Claim an Individual Service
                </Button>
              </a>
            </li>
            <li>
              <a href={REQUEST_CUSTOM_SETUP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="link"
                  className="p-0 h-auto text-gray-300 hover:text-white transition-colors justify-start text-sm"
                >
                  Request a Custom Set Up
                </Button>
              </a>
            </li>
            <li>
              <a href="https://calendly.com/mariam-calpir/30min" target="_blank" rel="noopener noreferrer"> {/* Updated to new Calendly link */}
                <Button
                  variant="link"
                  className="p-0 h-auto text-gray-300 hover:text-white transition-colors justify-start text-sm"
                >
                  Get a Free Consultation
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500 animate-fade-in-up delay-500">
        <p>© 2024 Calpir. All rights reserved. Complete Business Operations Service.</p>
      </div>
    </footer>
  );
};

export default Footer;
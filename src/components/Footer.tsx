"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button"; // Import Button

const Footer = ({ setOpenBuildMyBusinessForm, setOpenCustomQuoteForm }: { setOpenBuildMyBusinessForm: (open: boolean) => void; setOpenCustomQuoteForm: (open: boolean) => void }) => {
  return (
    <footer className="bg-foreground dark:bg-gray-950 text-gray-300 py-16 md:py-20">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="col-span-full md:col-span-1 animate-fade-in-up">
          <Link to="/" className="flex items-center space-x-2 font-bold text-2xl text-white mb-4 transition-transform duration-300 hover:scale-110">
            <img src="/calpir-logo.png" alt="Calpir Logo" className="h-8 w-8" />
            <span className="text-white">Calpir</span>
          </Link>
          <p className="text-sm leading-relaxed mb-4">
            Empowering entrepreneurs to launch successful businesses with proven systems, comprehensive operations setup, and strategic business frameworks.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" /> <a href="mailto:hello@calpirsolutions.com" className="hover:text-white transition-colors">hello@calpirsolutions.com</a>
            </p>
            <p className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-primary" /> <a href="tel:(555) 123-4567" className="hover:text-white transition-colors">(555) 123-4567</a>
            </p>
            <p className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2 text-primary" /> <span className="hover:text-white transition-colors">24/7 Live Chat</span>
            </p>
          </div>
        </div>

        {/* Services Links */}
        <div className="animate-fade-in-up delay-200">
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/services#operations-flows" className="hover:text-white transition-colors">Business Operations Setup</a></li>
            <li><a href="/services#website-building" className="hover:text-white transition-colors">Website Development</a></li>
            <li><a href="/services#design-branding" className="hover:text-white transition-colors">Brand Identity</a></li>
            <li><a href="/services#social-media" className="hover:text-white transition-colors">Marketing Systems</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="animate-fade-in-up delay-300">
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Quick Actions / Forms */}
        <div className="animate-fade-in-up delay-400">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
          <div className="space-y-4">
            <Button
              className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-md py-2 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-button-glow"
              onClick={() => setOpenBuildMyBusinessForm(true)}
            >
              Build My Business
            </Button>
            <Button
              variant="outline"
              className="w-full text-primary border-primary hover:bg-primary hover:text-white text-md py-2 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setOpenCustomQuoteForm(true)}
            >
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="container border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500 animate-fade-in-up delay-500">
        <p>© 2024 Calpir. All rights reserved. Complete Business Operations Service.</p>
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import { MadeWithDyad } from "./made-with-dyad";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Calpir Logo" className="h-8" />
          <span className="text-2xl font-bold text-gray-800">Calpir</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild>
            <Link href="/build-my-business">Build My Business</Link>
          </Button>
          <a
            href="mailto:contact@calpir.com"
            className="flex items-center text-gray-600 hover:text-primary-500 transition-colors duration-200"
          >
            <Mail className="h-5 w-5 mr-1" />
            contact@calpir.com
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <Link href="/build-my-business" onClick={() => setIsOpen(false)}>
                Build My Business
              </Link>
            </Button>
            <a
              href="mailto:contact@calpir.com"
              className="flex items-center text-gray-700 hover:text-primary-500 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="h-5 w-5 mr-1" />
              contact@calpir.com
            </a>
          </div>
        </div>
      )}
      <MadeWithDyad />
    </nav>
  );
};

export default Navbar;
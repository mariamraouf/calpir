"use client";

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

const Navbar = () => {
  const mainNavLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Platforms", href: "/platforms" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 font-bold text-lg transition-transform duration-300 hover:scale-110">
          <img src="/calpir-logo.png" alt="Calpir Logo" className="h-8 w-8" />
          <span className="text-foreground">Calpir</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {mainNavLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-300 hover:text-primary hover:scale-110 transform ${
                  isActive ? "text-primary dark:text-calpir-green-300" : "text-foreground"
                } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/build-my-business">
            <Button
              className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white hover:animate-button-glow transform hover:scale-110"
            >
              Get Started
            </Button>
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="transition-transform duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="animate-slide-in-right">
            <div className="flex flex-col space-y-4 pt-6">
              {mainNavLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-lg font-medium hover:text-primary transition-colors duration-200 ${
                      isActive ? "text-primary dark:text-calpir-green-300" : "text-foreground"
                    } transform hover:scale-105`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/build-my-business">
                <Button
                  className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white hover:animate-button-glow transform hover:scale-110"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
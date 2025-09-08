"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

const Navbar = () => {
  const mainNavLinks = [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceDropdownLinks = [
    { name: "Operations Flows Setup", href: "/services#operations-flows" },
    { name: "Project Management Setup", href: "/services#project-management" },
    { name: "HR & Recruiting", href: "/services#hr-recruiting" },
    { name: "Website Building & Hosting", href: "/services#website-building" },
    { name: "Accounting System Setup", href: "/services#accounting" },
    { name: "Social Media Management", href: "/services#social-media" },
    { name: "Email Systems & Automation", href: "/services#email-systems" },
    { name: "CRM Setup & Optimization", href: "/services#crm-setup" },
    { name: "Platform Integrations", href: "/services#integrations" },
    { name: "Design & Branding", href: "/services#design-branding" },
    { name: "Analytics & Reporting", href: "/services#analytics" },
    { name: "Software Migrations", href: "/services#migrations" },
    { name: "Security Basics Setup", href: "/services#security-basics" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 font-bold text-lg">
          <span className="text-blue-600">C</span> Calpir Solutions
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-blue-600 focus:outline-none">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {serviceDropdownLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <a href={link.href} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    {link.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 pt-6">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-lg font-medium hover:text-blue-600 focus:outline-none w-full justify-between">
                  Services <ChevronDown className="ml-1 h-5 w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {serviceDropdownLinks.map((link) => (
                    <DropdownMenuItem key={link.name} asChild>
                      <a href={link.href} className="block px-4 py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        {link.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button asChild className="w-full">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
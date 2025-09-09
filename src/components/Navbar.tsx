"use client";

import React from "react";
import { NavLink, Link } from "react-router-dom"; // Import NavLink
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
    { name: "Analytics & Reporting",
      href: "/services#analytics" },
    { name: "Software Migrations", href: "/services#migrations" },
    { name: "Security Basics Setup", href: "/services#security-basics" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 font-bold text-lg transition-transform duration-300 hover:scale-110">
          <img src="/calpir-logo.png" alt="Calpir Logo" className="h-8 w-8" />
          <span className="text-foreground">Calpir</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-colors duration-300 hover:text-primary hover:scale-110 transform ${
                isActive ? "text-primary dark:text-calpir-green-300" : "text-foreground"
              } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300`
            }
          >
            Home
          </NavLink>
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center text-sm font-medium transition-colors hover:text-primary focus:outline-none hover:scale-110 transform duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                    isActive ? "text-primary dark:text-calpir-green-300" : "text-foreground"
                  }`
                }
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </NavLink>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="animate-slide-down-fade">
              {serviceDropdownLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <a href={link.href} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                    {link.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white hover:animate-button-glow transform hover:scale-110">
            <Link to="/contact">Get Started</Link>
          </Button>
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-medium hover:text-primary transition-colors duration-200 ${
                    isActive ? "text-primary dark:text-calpir-green-300" : "text-foreground"
                  } transform hover:scale-105`
                }
              >
                Home
              </NavLink>
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `flex items-center text-lg font-medium hover:text-primary focus:outline-none w-full justify-between transition-colors duration-200 transform hover:scale-105 ${
                        isActive ? "text-primary dark:text-calpir-green-300" : "text-foreground"
                      }`
                    }
                  >
                    Services <ChevronDown className="ml-1 h-5 w-5" />
                  </NavLink>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full animate-slide-down-fade">
                  {serviceDropdownLinks.map((link) => (
                    <DropdownMenuItem key={link.name} asChild>
                      <a href={link.href} className="block px-4 py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                        {link.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button asChild className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white hover:animate-button-glow transform hover:scale-110">
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
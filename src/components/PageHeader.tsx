"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ButtonConfig {
  text: string;
  href: string;
  variant: "primary" | "outline"; // Custom variants for styling
  isExternal?: boolean;
}

interface PageHeaderProps {
  title: string;
  highlightWord?: string;
  description: string;
  buttons?: ButtonConfig[];
  className?: string;
}

const PageHeader = ({ title, highlightWord, description, buttons, className }: PageHeaderProps) => {
  const titleParts = highlightWord ? title.split(new RegExp(`(${highlightWord})`, 'gi')) : [title];

  // Define external form URLs
  const BUILD_MY_BUSINESS_URL = "https://forms.clickup.com/9015087055/f/8cnekyf-7975/TZ1NJ34TI8S352Q2G5";
  const CLAIM_INDIVIDUAL_SERVICE_URL = "https://forms.clickup.com/9015087055/f/8cnekyf-8015/KLJFO48BFQXRD1HHTP";
  const REQUEST_CUSTOM_SETUP_URL = "https://forms.clickup.com/9015087055/f/8cnekyf-7955/T9A15GLMNY3RJ1NHH3";
  const CALENDLY_CONSULTATION_URL = "https://calendly.com/mariam-calpir/30min";

  const getButtonHref = (buttonText: string, originalHref: string) => {
    switch (buttonText) {
      case "Start My Business":
        return BUILD_MY_BUSINESS_URL;
      case "Claim an Individual Service":
        return CLAIM_INDIVIDUAL_SERVICE_URL;
      case "Request a Custom Set Up":
        return REQUEST_CUSTOM_SETUP_URL;
      case "Get a Free Consultation":
        return CALENDLY_CONSULTATION_URL;
      default:
        return originalHref;
    }
  };

  const isButtonExternal = (buttonText: string, originalHref: string) => {
    const href = getButtonHref(buttonText, originalHref);
    return href.startsWith("http") || href.startsWith("https");
  };

  return (
    <section className={`relative w-full py-20 md:py-28 lg:py-36 bg-gray-100 dark:bg-gray-950 overflow-hidden ${className}`}>
      {/* Background pattern - using a subtle gradient for now, can be replaced with SVG if needed */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 10% 20%, hsl(var(--palette-orange-50)) 0%, transparent 50%),
                          radial-gradient(circle at 90% 80%, hsl(var(--palette-blue-50)) 0%, transparent 50%)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        mixBlendMode: 'multiply', // Blends nicely with dark mode
      }}></div>
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
        mixBlendMode: 'overlay',
      }}></div>


      <div className="container relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground dark:text-white animate-fade-in-up">
          {titleParts.map((part, index) =>
            part === highlightWord ? (
              <span key={index} className="text-primary dark:text-calpir-green-300">
                {part}
              </span>
            ) : (
              <React.Fragment key={index}>{part}</React.Fragment>
            )
          )}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300 opacity-90 animate-fade-in-up delay-200">
          {description}
        </p>
        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            {buttons.map((button, index) => {
              const href = getButtonHref(button.text, button.href);
              const external = isButtonExternal(button.text, button.href);

              return external ? (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className={`text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:animate-button-glow ${
                      button.variant === "primary"
                        ? "bg-primary hover:bg-calpir-green-700 text-white"
                        : "bg-white text-primary border-2 border-primary hover:bg-calpir-green-50 dark:bg-white dark:text-primary dark:border-primary dark:hover:bg-calpir-green-50"
                    }`}
                  >
                    {button.text}
                  </Button>
                </a>
              ) : (
                <Link key={index} to={href}>
                  <Button
                    size="lg"
                    className={`text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:animate-button-glow ${
                      button.variant === "primary"
                        ? "bg-primary hover:bg-calpir-green-700 text-white"
                        : "bg-white text-primary border-2 border-primary hover:bg-calpir-green-50 dark:bg-white dark:text-primary dark:border-primary dark:hover:bg-calpir-green-50"
                    }`}
                  >
                    {button.text}
                  </Button>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
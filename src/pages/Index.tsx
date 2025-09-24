// STEP 4B: Replace your ENTIRE src/pages/Index.tsx with this code
// This just adds the Helmet for SEO - keeps all your existing components

"use client";

import { Helmet } from "react-helmet-async"; // ✅ NEW: Add this import
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import ProblemsSolutionsSection from "@/components/ProblemsSolutionsSection";
import BusinessSolutionsSection from "@/components/BusinessSolutionsSection";
import LaunchMethodSection from "@/components/LaunchMethodSection";
import AddOnsSection from "@/components/AddOnsSection";
import PricingPackagesSection from "@/components/PricingPackagesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OrganizationSchema from "@/components/SchemaMarkup";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ NEW: SEO Meta Tags - This fixes your title/description issues */}
      <Helmet>
        <title>Calpir - Launch Your Startup in 7 Days | New Business Setup</title>
        <meta 
          name="description" 
          content="Launch your startup fast! Complete new business setup packages for entrepreneurs. Website development, CRM, automation starting at $1,499. Free consultation." 
        />
        <meta 
          name="keywords" 
          content="startup website launch, new business setup, launch startup website, startup website development, startup operations setup, new business launch package, startup CRM setup, launch business fast, entrepreneur services" 
        />
        <link rel="canonical" href="https://www.calpir.com" />
      </Helmet>

      <OrganizationSchema
        name="Calpir"
        url="https://www.calpir.com"
        logo="https://www.calpir.com/calpir-logo.png"
        contactEmail="contact@calpir.com"
        socialLinks={["https://www.linkedin.com/company/calpir"]}
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <div className="animate-fade-in-up delay-200">
          <IntegrationsSection />
        </div>
        <div className="animate-fade-in-up delay-400">
          <ProblemsSolutionsSection />
        </div>
        <div className="animate-fade-in-up delay-600">
          <BusinessSolutionsSection />
        </div>
        <div className="animate-fade-in-up delay-800">
          <LaunchMethodSection />
        </div>
        <div className="animate-fade-in-up delay-1000">
          <PricingPackagesSection />
          <div className="text-center mt-8 mb-8 animate-fade-in-up delay-1100">
            <Link to="/pricing#complete-packages">
              <Button
                size="lg"
                className="border-primary bg-primary text-white hover:bg-calpir-green-700 hover:text-white text-lg px-10 py-4 rounded-2xl shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow animate-pulse-glow dark:text-white dark:border-calpir-green-300 dark:hover:bg-calpir-green-700"
              >
                Package Comparison Table <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="animate-fade-in-up delay-1200">
          <AddOnsSection />
        </div>
        <div className="animate-fade-in-up delay-1400">
          <CtaSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

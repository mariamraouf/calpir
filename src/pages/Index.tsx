"use client";

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
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button"; // Import Button
import { Link } from "react-router-dom"; // Import Link
import { ArrowRight } from "lucide-react"; // Import ArrowRight icon

const Index = () => { // Removed setOpenBuildMyBusinessForm, setOpenCustomQuoteForm props
  return (
    <div className="min-h-screen flex flex-col">
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
          <div className="text-center mt-12 animate-fade-in-up delay-1100">
            <Link to="/pricing#complete-packages">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow dark:text-calpir-green-300 dark:border-calpir-green-300 dark:hover:bg-calpir-green-700"
              >
                Package Comparison Table <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="animate-fade-in-up delay-1200">
          <AddOnsSection />
        </div>
        {/* The "Build My Package" section has been moved into AddOnsSection.tsx */}
        <div className="animate-fade-in-up delay-1400">
          <CtaSection />
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;
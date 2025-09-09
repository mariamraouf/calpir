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

const Index = ({ setOpenBuildMyBusinessForm, setOpenCustomQuoteForm }: { setOpenBuildMyBusinessForm: (open: boolean) => void; setOpenCustomQuoteForm: (open: boolean) => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection setOpenBuildMyBusinessForm={setOpenBuildMyBusinessForm} setOpenCustomQuoteForm={setOpenCustomQuoteForm} />
        <div className="animate-fade-in-up delay-200">
          <IntegrationsSection />
        </div>
        <div className="animate-fade-in-up delay-400">
          <ProblemsSolutionsSection setOpenBuildMyBusinessForm={setOpenBuildMyBusinessForm} />
        </div>
        <div className="animate-fade-in-up delay-600">
          <BusinessSolutionsSection />
        </div>
        <div className="animate-fade-in-up delay-800">
          <LaunchMethodSection />
        </div>
        <div className="animate-fade-in-up delay-1000">
          <PricingPackagesSection setOpenBuildMyBusinessForm={setOpenBuildMyBusinessForm} />
        </div>
        <div className="animate-fade-in-up delay-1200">
          <AddOnsSection setOpenBuildMyBusinessForm={setOpenBuildMyBusinessForm} setOpenCustomQuoteForm={setOpenCustomQuoteForm} />
        </div>
        {/* The "Build My Package" section has been moved into AddOnsSection.tsx */}
        <div className="animate-fade-in-up delay-1400">
          <CtaSection setOpenBuildMyBusinessForm={setOpenBuildMyBusinessForm} />
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;
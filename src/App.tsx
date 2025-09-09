import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import BuildMyBusinessForm from "@/components/BuildMyBusinessForm";
import CustomQuoteForm from "@/components/CustomQuoteForm";
import Navbar from "@/components/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // Import Footer
import { Dialog } from "@/components/ui/dialog";
import React, { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [openBuildMyBusinessForm, setOpenBuildMyBusinessForm] = useState(false);
  const [openCustomQuoteForm, setOpenCustomQuoteForm] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Pass setters to Navbar */}
          <Navbar
            setOpenBuildMyBusinessForm={setOpenBuildMyBusinessForm}
            setOpenCustomQuoteForm={setOpenCustomQuoteForm}
          />
          <Routes>
            <Route path="/" element={<Index setOpenBuildMyBusinessForm={setOpenBuildMyBusinessForm} setOpenCustomQuoteForm={setOpenCustomQuoteForm} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services setOpenCustomQuoteForm={setOpenCustomQuoteForm} />} />
            <Route path="/pricing" element={<Pricing setOpenBuildMyBusinessForm={setOpenBuildMyBusinessForm} />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Pass setters to Footer */}
          <Footer
            setOpenBuildMyBusinessForm={setOpenBuildMyBusinessForm}
            setOpenCustomQuoteForm={setOpenCustomQuoteForm}
          />
        </BrowserRouter>

        {/* Build My Business Form Dialog */}
        <Dialog open={openBuildMyBusinessForm} onOpenChange={setOpenBuildMyBusinessForm}>
          <BuildMyBusinessForm setOpen={setOpenBuildMyBusinessForm} />
        </Dialog>

        {/* Custom Quote Form Dialog */}
        <Dialog open={openCustomQuoteForm} onOpenChange={setOpenCustomQuoteForm}>
          <CustomQuoteForm setOpen={setOpenCustomQuoteForm} />
        </Dialog>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
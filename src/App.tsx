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
import PrimaryFormDialog from "@/components/PrimaryFormDialog";
import SecondaryFormDialog from "@/components/SecondaryFormDialog";
import { Dialog } from "@/components/ui/dialog";
import React, { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [openPrimaryForm, setOpenPrimaryForm] = useState(false);
  const [openSecondaryForm, setOpenSecondaryForm] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index setOpenPrimaryForm={setOpenPrimaryForm} setOpenSecondaryForm={setOpenSecondaryForm} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services setOpenSecondaryForm={setOpenSecondaryForm} />} />
            <Route path="/pricing" element={<Pricing setOpenPrimaryForm={setOpenPrimaryForm} />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

        {/* Primary Form Dialog */}
        <Dialog open={openPrimaryForm} onOpenChange={setOpenPrimaryForm}>
          <PrimaryFormDialog setOpen={setOpenPrimaryForm} />
        </Dialog>

        {/* Secondary Form Dialog */}
        <Dialog open={openSecondaryForm} onOpenChange={setOpenSecondaryForm}>
          <SecondaryFormDialog setOpen={setOpenSecondaryForm} />
        </Dialog>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
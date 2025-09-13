"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { servicesData } from "@/data/services"; // Import from central file

const IndividualServiceFormPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    selectedServices: [] as string[],
    serviceDetails: "",
    timeline: "",
    budgetRange: "",
    additionalDetails: "",
    consent: false,
  });

  const handleChange = (id: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string) => (value: string) => {
    handleChange(id, value);
  };

  const handleCheckboxChange = (serviceId: string, checked: boolean) => {
    handleChange(
      "selectedServices",
      checked
        ? [...formData.selectedServices, serviceId]
        : formData.selectedServices.filter((item) => item !== serviceId)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Please agree to the Privacy Policy and Terms of Service.");
      return;
    }
    if (formData.selectedServices.length === 0) {
      toast.error("Please select at least one service.");
      return;
    }
    console.log("Individual Service Form Submitted:", formData);
    toast.success("Your individual service inquiry has been sent! We'll get back to you soon.");
    // Reset form
    setFormData({
      fullName: "", email: "", phoneNumber: "", companyName: "", selectedServices: [],
      serviceDetails: "", timeline: "", budgetRange: "", additionalDetails: "", consent: false,
    });
  };

  // Group services by category and subcategory
  const groupedServices = servicesData.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = {};
    }
    if (!acc[service.category][service.subcategory]) {
      acc[service.category][service.subcategory] = [];
    }
    acc[service.category][service.subcategory].push(service);
    return acc;
  }, {} as Record<string, Record<string, typeof servicesData>>);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Claim Your Individual Service"
          description="Select the specific services you need, and we'll help you get started quickly."
          buttons={[
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "primary", isExternal: true },
            { text: "View All Services", href: "/services", variant: "outline" },
          ]}
        />

        <section className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-300">
            <form onSubmit={handleSubmit} className="grid gap-8 py-4">
              {/* Contact Information */}
              <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Your Contact Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                  <Input id="fullName" value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} required className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input id="phoneNumber" type="tel" value={formData.phoneNumber} onChange={(e) => handleChange("phoneNumber", e.target.value)} className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" value={formData.companyName} onChange={(e) => handleChange("companyName", e.target.value)} className="rounded-2xl" />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Select Services <span className="text-red-500">*</span></h3>
                {Object.entries(groupedServices).map(([category, subcategories]) => (
                  <div key={category} className="space-y-4 pl-4 border-l-2 border-primary/50 dark:border-calpir-green-300/50">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{category}</h4>
                    {Object.entries(subcategories).map(([subcategory, services]) => (
                      <div key={subcategory} className="space-y-2 pl-4">
                        <h5 className="text-md font-medium text-gray-700 dark:text-gray-300">{subcategory}</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {services.map((service) => (
                            <div key={service.id} className="flex items-start space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                              <Checkbox
                                id={`service-${service.id}`}
                                checked={formData.selectedServices.includes(service.id)}
                                onCheckedChange={(checked) => handleCheckboxChange(service.id, checked as boolean)}
                                className="mt-1"
                              />
                              <Label htmlFor={`service-${service.id}`} className="flex flex-col flex-grow cursor-pointer">
                                <span className="font-medium text-gray-900 dark:text-white">{service.title}</span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">{service.investment}</span>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                {formData.selectedServices.length > 0 && (
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="serviceDetails">Please provide any specific details or requirements for your selected services.</Label>
                    <Textarea id="serviceDetails" value={formData.serviceDetails} onChange={(e) => handleChange("serviceDetails", e.target.value)} rows={4} className="rounded-2xl" />
                  </div>
                )}
              </div>

              {/* Project Timeline & Budget */}
              <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project Timeline & Budget</h3>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Desired Timeline <span className="text-red-500">*</span></Label>
                  <Select onValueChange={handleSelectChange("timeline")} value={formData.timeline} required>
                    <SelectTrigger id="timeline" className="p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-md hover:border-primary transition-all duration-300">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Within 7 Days">Within 7 Days</SelectItem>
                      <SelectItem value="1-2 Weeks">1-2 Weeks</SelectItem>
                      <SelectItem value="1 Month">1 Month</SelectItem>
                      <SelectItem value="Flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budgetRange">Your Estimated Budget Range</Label>
                  <Select onValueChange={handleSelectChange("budgetRange")} value={formData.budgetRange}>
                    <SelectTrigger id="budgetRange" className="p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-md hover:border-primary transition-all duration-300">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<$500">&lt;$500</SelectItem>
                      <SelectItem value="$500-$1,500">$500-$1,500</SelectItem>
                      <SelectItem value="$1,500-$3,000">$1,500-$3,000</SelectItem>
                      <SelectItem value="$3,000+">$3,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalDetails">Any Additional Details or Questions?</Label>
                  <Textarea id="additionalDetails" value={formData.additionalDetails} onChange={(e) => handleChange("additionalDetails", e.target.value)} rows={4} className="rounded-2xl" />
                </div>
              </div>

              {/* Submission and Consent */}
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleChange("consent", checked as boolean)}
                  required
                />
                <Label htmlFor="consent">
                  I agree to Calpir’s <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link> <span className="text-red-500">*</span>
                </Label>
              </div>

              <div className="mt-6">
                <Button type="submit" className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:animate-button-glow">
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default IndividualServiceFormPage;
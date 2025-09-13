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

const CustomQuotePage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    businessType: "",
    customRequirements: "",
    budgetRange: "",
    timeline: "",
    consent: false,
  });

  const handleChange = (id: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string) => (value: string) => {
    handleChange(id, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Please agree to the Privacy Policy and Terms of Service.");
      return;
    }
    console.log("Custom Set Up Form Submitted:", formData);
    toast.success("Your custom setup inquiry has been sent! We'll get back to you soon.");
    // Reset form
    setFormData({
      fullName: "", email: "", phoneNumber: "", companyName: "", businessType: "", customRequirements: "", budgetRange: "", timeline: "", consent: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Unlock Your Custom Solution"
          description="Got unique business needs or a specific platform setup not covered by our standard offerings? Share your vision, and our experts will meticulously examine your requirements, providing tailored recommendations for a custom-built solution that perfectly fits."
          buttons={[
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "primary", isExternal: true },
            { text: "View All Services", href: "/services", variant: "outline" },
          ]}
        />

        <section className="container py-16 md:py-24">
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-300">
            <form onSubmit={handleSubmit} className="grid gap-6 py-4">
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

              {/* Business Details & Custom Requirements */}
              <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Your Custom Requirements</h3>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select onValueChange={handleSelectChange("businessType")} value={formData.businessType}>
                    <SelectTrigger id="businessType" className="p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-md hover:border-primary transition-all duration-300">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Solo Entrepreneur">Solo Entrepreneur</SelectItem>
                      <SelectItem value="Small Startup">Small Startup</SelectItem>
                      <SelectItem value="Scaling Startup">Scaling Startup</SelectItem>
                      <SelectItem value="Funded Business">Funded Business</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customRequirements">Please describe your specific custom requirements, including any platforms or integrations needed. <span className="text-red-500">*</span></Label>
                  <Textarea id="customRequirements" placeholder="e.g., I need a custom integration between X and Y, or a unique workflow for Z..." value={formData.customRequirements} onChange={(e) => handleChange("customRequirements", e.target.value)} rows={6} required className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budgetRange">Your Estimated Budget Range</Label>
                  <Select onValueChange={handleSelectChange("budgetRange")} value={formData.budgetRange}>
                    <SelectTrigger id="budgetRange" className="p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-md hover:border-primary transition-all duration-300">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<$1,000">&lt;$1,000</SelectItem>
                      <SelectItem value="$1,000-$3,000">$1,000-$3,000</SelectItem>
                      <SelectItem value="$3,000-$5,000">$3,000-$5,000</SelectItem>
                      <SelectItem value="$5,000+">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Desired Timeline</Label>
                  <Select onValueChange={handleSelectChange("timeline")} value={formData.timeline}>
                    <SelectTrigger id="timeline" className="p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-md hover:border-primary transition-all duration-300">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Urgent (Within 1 Week)">Urgent (Within 1 Week)</SelectItem>
                      <SelectItem value="1-2 Weeks">1-2 Weeks</SelectItem>
                      <SelectItem value="1 Month">1 Month</SelectItem>
                      <SelectItem value="Flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
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
                  Request Custom Set Up
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

export default CustomQuotePage;
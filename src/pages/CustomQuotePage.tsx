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

const CustomQuotePage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    businessType: "",
    briefDescription: "",
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
    console.log("Custom Quote Form Submitted:", formData);
    toast.success("Your inquiry has been sent! We'll get back to you soon.");
    // Reset form
    setFormData({
      fullName: "", email: "", phoneNumber: "", businessType: "", briefDescription: "", consent: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-16 md:py-24">
        <section className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Request a Custom Quote
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed delay-200">
            Tell us a bit about what you need, including specific platform setups or integrations not listed in our standard packages or add-ons, and we'll provide a custom quote.
          </p>
        </section>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-300">
          <form onSubmit={handleSubmit} className="grid gap-6 py-4">
            <div>
              <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
              <Input id="fullName" value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" type="tel" value={formData.phoneNumber} onChange={(e) => handleChange("phoneNumber", e.target.value)} />
            </div>
            <div>
              <Label htmlFor="businessType">Business Type</Label>
              <Select onValueChange={handleSelectChange("businessType")} value={formData.businessType}>
                <SelectTrigger id="businessType">
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
            <div>
              <Label htmlFor="briefDescription">Brief Description</Label>
              <Textarea id="briefDescription" placeholder="Tell us about your business or what you’re looking for, including any specific platforms you need set up..." value={formData.briefDescription} onChange={(e) => handleChange("briefDescription", e.target.value)} rows={4} />
            </div>

            <div className="flex items-center space-x-2">
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
                Get Quote
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default CustomQuotePage;
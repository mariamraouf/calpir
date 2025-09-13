"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const SecondaryFormDialog = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    businessType: "",
    inquiryType: "",
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
    console.log("Secondary Form Submitted:", formData);
    toast.success("Your inquiry has been sent! We'll get back to you soon.");
    setOpen(false); // Close the dialog
    // Reset form
    setFormData({
      fullName: "", email: "", phoneNumber: "", businessType: "", inquiryType: "", briefDescription: "", consent: false,
    });
  };

  return (
    <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">Get a Free Consultation / Custom Quote</DialogTitle>
        <DialogDescription className="text-gray-600 dark:text-gray-300">
          Tell us a bit about what you need, and we'll be in touch.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="grid gap-6 py-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
          <Input id="fullName" value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
          <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
          <Input id="phoneNumber" type="tel" value={formData.phoneNumber} onChange={(e) => handleChange("phoneNumber", e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="businessType">Business Type (Optional)</Label>
          <Select onValueChange={handleSelectChange("businessType")} value={formData.businessType}>
            <SelectTrigger id="businessType" className="p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
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
          <Label>Inquiry Type <span className="text-red-500">*</span></Label>
          <RadioGroup onValueChange={handleSelectChange("inquiryType")} value={formData.inquiryType} required className="space-y-2">
            <div className="flex items-center space-x-2 p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <RadioGroupItem value="Free Consultation" id="inquiry-consultation" />
              <Label htmlFor="inquiry-consultation">Free Consultation</Label>
            </div>
            <div className="flex items-center space-x-2 p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <RadioGroupItem value="Custom Quote" id="inquiry-quote" />
              <Label htmlFor="inquiry-quote">Custom Quote</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label htmlFor="briefDescription">Brief Description (Optional)</Label>
          <Textarea id="briefDescription" placeholder="Tell us about your business or what you’re looking for..." value={formData.briefDescription} onChange={(e) => handleChange("briefDescription", e.target.value)} rows={4} />
        </div>

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

        <DialogFooter>
          <Button type="submit" className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:animate-button-glow">
            {formData.inquiryType === "Custom Quote" ? "Get Quote" : "Request Consultation"}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default SecondaryFormDialog;
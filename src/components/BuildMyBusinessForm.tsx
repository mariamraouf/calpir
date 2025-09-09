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

// Data for add-ons (simplified for form, full list is in AddOnsSection)
const addOnsOptions = [
  { id: "socialMedia", label: "Social Media Expansion (e.g., 10 Posts/Month - $199)" },
  { id: "emailMarketing", label: "Email Marketing Setup ($499)" },
  { id: "analyticsUpgrades", label: "Analytics Upgrades (e.g., Monthly Insights - $199)" },
  { id: "ongoingSupport", label: "Ongoing Support (e.g., Monthly Emails - $199)" },
  { id: "staffRecruitment", label: "Staff Recruitment (Global) (e.g., 1 Role - $450)" },
  { id: "extraIntegrations", label: "Extra Integrations (Per Integration - $199)" },
  { id: "websiteExpansions", label: "Website Expansions (e.g., Per Page - $199)" },
  { id: "hrCustomizations", label: "HR Customizations (One-time Setup - $299)" },
  { id: "trainingSessions", label: "Training Sessions (Per Hour - $199)" },
  { id: "customAutomations", label: "Custom Automations (For 5+ Automations - $299)" },
  { id: "securityBasics", label: "Security Basics (One-time Setup - $299)" },
];

const BuildMyBusinessForm = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    businessType: "",
    industry: "",
    otherIndustry: "",
    businessStage: "",
    packagePreference: "",
    budgetRange: "",
    addOnInterests: [] as string[],
    addOnRequirements: "",
    primaryGoals: [] as string[],
    otherPrimaryGoal: "",
    timeline: "",
    additionalDetails: "",
    contactMethod: "",
    preferredTime: "",
    consent: false,
  });

  const handleChange = (id: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string) => (value: string) => {
    handleChange(id, value);
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (id.startsWith("addOn-")) {
      const addOnId = id.replace("addOn-", "");
      handleChange(
        "addOnInterests",
        checked
          ? [...formData.addOnInterests, addOnId]
          : formData.addOnInterests.filter((item) => item !== addOnId)
      );
    } else if (id.startsWith("goal-")) {
      const goalId = id.replace("goal-", "");
      handleChange(
        "primaryGoals",
        checked
          ? [...formData.primaryGoals, goalId]
          : formData.primaryGoals.filter((item) => item !== goalId)
      );
    } else {
      handleChange(id, checked);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Please agree to the Privacy Policy and Terms of Service.");
      return;
    }
    console.log("Build My Business Form Submitted:", formData);
    toast.success("Your business launch inquiry has been sent! We'll be in touch soon.");
    setOpen(false); // Close the dialog
    // Reset form
    setFormData({
      fullName: "", email: "", phoneNumber: "", companyName: "", businessType: "", industry: "", otherIndustry: "",
      businessStage: "", packagePreference: "", budgetRange: "", addOnInterests: [], addOnRequirements: "",
      primaryGoals: [], otherPrimaryGoal: "", timeline: "", additionalDetails: "", contactMethod: "", preferredTime: "", consent: false,
    });
  };

  const showAddOnRequirements = formData.addOnInterests.length > 0;
  const showOtherIndustryInput = formData.industry === "Other";
  const showOtherPrimaryGoalInput = formData.primaryGoals.includes("Other");

  return (
    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">Build My Business</DialogTitle>
        <DialogDescription className="text-gray-600 dark:text-gray-300">
          Tell us about your business needs to get started with your custom solution.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="grid gap-6 py-4">
        {/* Contact Information */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">1. Contact Information</h3>
          <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
          <Input id="fullName" value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} required />
          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
          <Input id="email" type="email" placeholder="Your Email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required />
          <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
          <Input id="phoneNumber" type="tel" placeholder="Your Phone Number" value={formData.phoneNumber} onChange={(e) => handleChange("phoneNumber", e.target.value)} />
          <Label htmlFor="companyName">Company Name (Optional)</Label>
          <Input id="companyName" placeholder="Your Company Name" value={formData.companyName} onChange={(e) => handleChange("companyName", e.target.value)} />
        </div>

        {/* Business Details */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">2. Business Details</h3>
          <Label htmlFor="businessType">Business Type <span className="text-red-500">*</span></Label>
          <Select onValueChange={handleSelectChange("businessType")} value={formData.businessType} required>
            <SelectTrigger id="businessType">
              <SelectValue placeholder="Select business type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Solo Entrepreneur">Solo Entrepreneur</SelectItem>
              <SelectItem value="Small Startup">Small Startup</SelectItem>
              <SelectItem value="Scaling Startup">Scaling Startup</SelectItem>
              <SelectItem value="Funded Business">Funded Business</SelectItem>
              <SelectItem value="Non-Profit">Non-Profit</SelectItem>
              <SelectItem value="E-commerce Business">E-commerce Business</SelectItem>
              <SelectItem value="Service-Based Business">Service-Based Business</SelectItem>
              <SelectItem value="Product-Based Business">Product-Based Business</SelectItem>
              <SelectItem value="Consulting Firm">Consulting Firm</SelectItem>
              <SelectItem value="Agency">Agency</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="industry">Industry (Optional)</Label>
          <Select onValueChange={handleSelectChange("industry")} value={formData.industry}>
            <SelectTrigger id="industry">
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tech">Tech</SelectItem>
              <SelectItem value="E-commerce">E-commerce</SelectItem>
              <SelectItem value="Consulting">Consulting</SelectItem>
              <SelectItem value="Creative">Creative</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
              <SelectItem value="Real Estate">Real Estate</SelectItem>
              <SelectItem value="Retail">Retail</SelectItem>
              <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
              <SelectItem value="Manufacturing">Manufacturing</SelectItem>
              <SelectItem value="Logistics">Logistics</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Legal">Legal</SelectItem>
              <SelectItem value="Non-Profit">Non-Profit</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {showOtherIndustryInput && (
            <>
              <Label htmlFor="otherIndustry">Please specify your industry</Label>
              <Input id="otherIndustry" value={formData.otherIndustry} onChange={(e) => handleChange("otherIndustry", e.target.value)} />
            </>
          )}
          <Label htmlFor="businessStage">Current Business Stage <span className="text-red-500">*</span></Label>
          <Select onValueChange={handleSelectChange("businessStage")} value={formData.businessStage} required>
            <SelectTrigger id="businessStage">
              <SelectValue placeholder="Select business stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Idea/Planning">Idea/Planning</SelectItem>
              <SelectItem value="Early Stage (0-1 year)">Early Stage (0-1 year)</SelectItem>
              <SelectItem value="Scaling (1-3 years)">Scaling (1-3 years)</SelectItem>
              <SelectItem value="Established (3+ years)">Established (3+ years)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Package Selection */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">3. Package Preference <span className="text-red-500">*</span></h3>
          <RadioGroup onValueChange={handleSelectChange("packagePreference")} value={formData.packagePreference} required>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Starter ($1,499)" id="package-starter" />
              <Label htmlFor="package-starter">Starter ($1,499)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Growth ($2,999)" id="package-growth" />
              <Label htmlFor="package-growth">Growth ($2,999)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Ultimate ($5,999)" id="package-ultimate" />
              <Label htmlFor="package-ultimate">Ultimate ($5,999)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Not Sure" id="package-not-sure" />
              <Label htmlFor="package-not-sure">Not Sure</Label>
            </div>
          </RadioGroup>
          {formData.packagePreference === "Not Sure" && (
            <>
              <Label htmlFor="budgetRange">What is your budget range?</Label>
              <Select onValueChange={handleSelectChange("budgetRange")} value={formData.budgetRange}>
                <SelectTrigger id="budgetRange">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$1,499 >">$1,499 &gt;</SelectItem>
                  <SelectItem value="<$2,000">&lt;$2,000</SelectItem>
                  <SelectItem value="$2,000-$5,000">$2,000-$5,000</SelectItem>
                  <SelectItem value="$5,000+">$5,000+</SelectItem>
                  <SelectItem value="Custom Quote Needed">Custom Quote Needed</SelectItem>
                </SelectContent>
              </Select>
            </>
          )}
        </div>

        {/* Add-On Interests */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">4. Add-On Interests (Optional)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {addOnsOptions.map((addOn) => (
              <div key={addOn.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`addOn-${addOn.id}`}
                  checked={formData.addOnInterests.includes(addOn.id)}
                  onCheckedChange={(checked) => handleCheckboxChange(`addOn-${addOn.id}`, checked as boolean)}
                />
                <Label htmlFor={`addOn-${addOn.id}`}>{addOn.label}</Label>
              </div>
            ))}
          </div>
          {showAddOnRequirements && (
            <>
              <Label htmlFor="addOnRequirements" className="mt-4">Please describe any specific requirements for these add-ons (e.g., preferred platforms, specific needs).</Label>
              <Textarea id="addOnRequirements" value={formData.addOnRequirements} onChange={(e) => handleChange("addOnRequirements", e.target.value)} rows={3} />
            </>
          )}
        </div>

        {/* Project Goals and Timeline */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">5. Project Goals and Timeline <span className="text-red-500">*</span></h3>
          <Label>Primary Goal(s) <span className="text-red-500">*</span></Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="goal-website"
                checked={formData.primaryGoals.includes("Website Development")}
                onCheckedChange={(checked) => handleCheckboxChange("goal-website", checked as boolean)}
              />
              <Label htmlFor="goal-website">Website Development</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="goal-brand"
                checked={formData.primaryGoals.includes("Brand Identity")}
                onCheckedChange={(checked) => handleCheckboxChange("goal-brand", checked as boolean)}
              />
              <Label htmlFor="goal-brand">Brand Identity</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="goal-marketing"
                checked={formData.primaryGoals.includes("Marketing Systems")}
                onCheckedChange={(checked) => handleCheckboxChange("goal-marketing", checked as boolean)}
              />
              <Label htmlFor="goal-marketing">Marketing Systems</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="goal-project"
                checked={formData.primaryGoals.includes("Project Management Setup")}
                onCheckedChange={(checked) => handleCheckboxChange("goal-project", checked as boolean)}
              />
              <Label htmlFor="goal-project">Project Management Setup</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="goal-other"
                checked={formData.primaryGoals.includes("Other")}
                onCheckedChange={(checked) => handleCheckboxChange("goal-other", checked as boolean)}
              />
              <Label htmlFor="goal-other">Other</Label>
            </div>
          </div>
          {showOtherPrimaryGoalInput && (
            <>
              <Label htmlFor="otherPrimaryGoal">Please specify your primary goal</Label>
              <Input id="otherPrimaryGoal" value={formData.otherPrimaryGoal} onChange={(e) => handleChange("otherPrimaryGoal", e.target.value)} />
            </>
          )}
          <Label htmlFor="timeline">Timeline <span className="text-red-500">*</span></Label>
          <Select onValueChange={handleSelectChange("timeline")} value={formData.timeline} required>
            <SelectTrigger id="timeline">
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Within 7 Days">Within 7 Days</SelectItem>
              <SelectItem value="1-2 Weeks">1-2 Weeks</SelectItem>
              <SelectItem value="1 Month">1 Month</SelectItem>
              <SelectItem value="Flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="additionalDetails">Additional Details (Optional)</Label>
          <Textarea id="additionalDetails" placeholder="Tell us more about your business needs or specific challenges." value={formData.additionalDetails} onChange={(e) => handleChange("additionalDetails", e.target.value)} rows={4} />
        </div>

        {/* Consultation Preference */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">6. Consultation Preference <span className="text-red-500">*</span></h3>
          <RadioGroup onValueChange={handleSelectChange("contactMethod")} value={formData.contactMethod} required>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Email" id="contact-email" />
              <Label htmlFor="contact-email">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Video Call (e.g., Zoom)" id="contact-video" />
              <Label htmlFor="contact-video">Video Call (e.g., Zoom)</Label>
            </div>
          </RadioGroup>
          <Label htmlFor="preferredTime">Preferred Time (Optional)</Label>
          <Input id="preferredTime" placeholder="e.g., Weekdays after 2 PM EST" value={formData.preferredTime} onChange={(e) => handleChange("preferredTime", e.target.value)} />
        </div>

        {/* Submission and Consent */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => handleChange("consent", checked as boolean)}
            required
          />
          <Label htmlFor="consent">
            I agree to Calpir’s <Link to="/privacy-policy" className="text-primary hover:underline" onClick={() => setOpen(false)}>Privacy Policy</Link> and <Link to="/terms-of-service" className="text-primary hover:underline" onClick={() => setOpen(false)}>Terms of Service</Link> <span className="text-red-500">*</span>
          </Label>
        </div>

        <DialogFooter>
          <Button type="submit" className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:animate-button-glow">
            Start My Business
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

export default BuildMyBusinessForm;
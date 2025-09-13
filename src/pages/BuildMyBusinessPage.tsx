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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { addOnsOptions } from "@/data/addons"; // Import from central file

const industryOptions = [
  "Technology and AI",
  "Marketing and Consulting",
  "Retail/Wholesale",
  "Agriculture",
  "Construction",
  "Manufacturing",
  "Transportation",
  "Finance and Insurance",
  "Real Estate",
  "Healthcare",
  "Education",
  "Hospitality",
  "Arts and Entertainment",
  "Other Services",
  "Other",
];

const systemPriorities = [
  "Organized",
  "Automated",
  "Limited Access",
  "Scalable",
  "Cost-Effective",
  "User-Friendly",
  "Secure",
  "Integrated",
  "Customizable",
];

const BuildMyBusinessPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    existingWebsite: "",
    countryOfHeadquarters: "",
    businessType: "",
    industry: "",
    otherIndustry: "",
    businessStage: "",
    businessOperationModel: "",
    packagePreference: "",
    budgetRange: "",
    addOnInterests: [] as string[],
    addOnRequirements: "",
    primaryGoals: [] as string[],
    otherPrimaryGoal: "",
    currentSystems: "",
    preferredPlatforms: "",
    systemPriorities: [] as string[],
    additionalDetails: "",
    timeline: "",
    contactMethod: "", // Added missing property
    preferredTime: "", // Added missing property
    consent: false,
  });

  const handleChange = (id: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string) => (value: string) => {
    handleChange(id, value);
  };

  const handleCheckboxChange = (value: string, checked: boolean, field: "addOnInterests" | "primaryGoals" | "systemPriorities") => {
    handleChange(
      field,
      checked
        ? [...formData[field], value]
        : formData[field].filter((item) => item !== value)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Please agree to the Privacy Policy and Terms of Service.");
      return;
    }
    console.log("Primary Form Submitted:", formData);
    toast.success("Your business launch inquiry has been sent! We'll be in touch soon.");
    // Reset form
    setFormData({
      fullName: "", email: "", phoneNumber: "", companyName: "", existingWebsite: "", countryOfHeadquarters: "",
      businessType: "", industry: "", otherIndustry: "", businessStage: "", businessOperationModel: "",
      packagePreference: "", budgetRange: "", addOnInterests: [], addOnRequirements: "",
      primaryGoals: [], otherPrimaryGoal: "", currentSystems: "", preferredPlatforms: "", systemPriorities: [],
      additionalDetails: "", timeline: "", contactMethod: "", preferredTime: "", consent: false, // Reset added properties
    });
  };

  const showAddOnRequirements = formData.addOnInterests.length > 0;
  const showOtherIndustryInput = formData.industry === "Other";
  const showOtherPrimaryGoalInput = formData.primaryGoals.includes("Other");

  // Group add-ons by category (no subcategory nesting needed for this form)
  const groupedAddOns = addOnsOptions.reduce((acc, addOn) => {
    if (!acc[addOn.category]) {
      acc[addOn.category] = [];
    }
    acc[addOn.category].push(addOn);
    return acc;
  }, {} as Record<string, typeof addOnsOptions>);


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Ignite Your Business Journey"
          description="Ready to transform your vision into a thriving enterprise? Tell us about your business needs, and our experts will meticulously examine your setup, providing tailored recommendations to craft your ultimate custom solution."
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
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
                <div className="space-y-2">
                  <Label htmlFor="existingWebsite">Existing Website Link</Label>
                  <Input id="existingWebsite" type="url" placeholder="https://yourwebsite.com" value={formData.existingWebsite} onChange={(e) => handleChange("existingWebsite", e.target.value)} className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="countryOfHeadquarters">Country of Headquarters <span className="text-red-500">*</span></Label>
                  <Input id="countryOfHeadquarters" value={formData.countryOfHeadquarters} onChange={(e) => handleChange("countryOfHeadquarters", e.target.value)} required className="rounded-2xl" />
                </div>
              </div>

              {/* Business Details */}
              <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Business Details</h3>
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type <span className="text-red-500">*</span></Label>
                  <Select onValueChange={handleSelectChange("businessType")} value={formData.businessType} required>
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
                  <Label htmlFor="industry">Industry <span className="text-red-500">*</span></Label>
                  <Select onValueChange={handleSelectChange("industry")} value={formData.industry} required>
                    <SelectTrigger id="industry" className="p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-md hover:border-primary transition-all duration-300">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industryOptions.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {showOtherIndustryInput && (
                  <div className="space-y-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                    <Label htmlFor="otherIndustry">Please specify your industry</Label>
                    <Input id="otherIndustry" value={formData.otherIndustry} onChange={(e) => handleChange("otherIndustry", e.target.value)} className="rounded-2xl" />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="businessStage">Current Business Stage <span className="text-red-500">*</span></Label>
                  <Select onValueChange={handleSelectChange("businessStage")} value={formData.businessStage} required>
                    <SelectTrigger id="businessStage" className="p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-md hover:border-primary transition-all duration-300">
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
                <div className="space-y-2">
                  <Label>Business Operation Model <span className="text-red-500">*</span></Label>
                  <RadioGroup onValueChange={handleSelectChange("businessOperationModel")} value={formData.businessOperationModel} required className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                      <RadioGroupItem value="Remote" id="op-remote" />
                      <Label htmlFor="op-remote">Remote</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                      <RadioGroupItem value="Hybrid" id="op-hybrid" />
                      <Label htmlFor="op-hybrid">Hybrid</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                      <RadioGroupItem value="On-site" id="op-on-site" />
                      <Label htmlFor="op-on-site">On-site</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Current & Preferred Systems */}
              <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Systems & Platforms</h3>
                <div className="space-y-2">
                  <Label htmlFor="currentSystems">Current Systems/Software Used</Label>
                  <Textarea id="currentSystems" placeholder="e.g., HubSpot, ClickUp, QuickBooks" value={formData.currentSystems} onChange={(e) => handleChange("currentSystems", e.target.value)} rows={3} className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredPlatforms">Preferred Platforms/Software</Label>
                  <Textarea id="preferredPlatforms" placeholder="e.g., Salesforce, Asana, Xero" value={formData.preferredPlatforms} onChange={(e) => handleChange("preferredPlatforms", e.target.value)} rows={3} className="rounded-2xl" />
                </div>
                <div className="space-y-2">
                  <Label>Key System Priorities <span className="text-red-500">*</span></Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {systemPriorities.map((priority) => (
                      <div key={priority} className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                        <Checkbox
                          id={`priority-${priority}`}
                          checked={formData.systemPriorities.includes(priority)}
                          onCheckedChange={(checked) => handleCheckboxChange(priority, checked as boolean, "systemPriorities")}
                        />
                        <Label htmlFor={`priority-${priority}`}>{priority}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Package Selection */}
              <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Package Preference <span className="text-red-500">*</span></h3>
                <RadioGroup onValueChange={handleSelectChange("packagePreference")} value={formData.packagePreference} required className="space-y-2">
                  <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                    <RadioGroupItem value="Starter ($1,499)" id="package-starter" />
                    <Label htmlFor="package-starter">Starter ($1,499)</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                    <RadioGroupItem value="Growth ($2,999)" id="package-growth" />
                    <Label htmlFor="package-growth">Growth ($2,999)</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                    <RadioGroupItem value="Ultimate ($5,999)" id="package-ultimate" />
                    <Label htmlFor="package-ultimate">Ultimate ($5,999)</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                    <RadioGroupItem value="Not Sure" id="package-not-sure" />
                    <Label htmlFor="package-not-sure">Not Sure</Label>
                  </div>
                </RadioGroup>
                {formData.packagePreference === "Not Sure" && (
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="budgetRange">What is your budget range?</Label>
                    <Select onValueChange={handleSelectChange("budgetRange")} value={formData.budgetRange}>
                      <SelectTrigger id="budgetRange" className="p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-md hover:border-primary transition-all duration-300">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<$2,000">&lt;$2,000</SelectItem>
                        <SelectItem value="$2,000-$5,000">$2,000-$5,000</SelectItem>
                        <SelectItem value="$5,000+">$5,000+</SelectItem>
                        <SelectItem value="Custom Quote Needed">Custom Quote Needed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              {/* Add-On Interests */}
              <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Add-On Interests</h3>
                {Object.entries(groupedAddOns).map(([category, addOns]) => (
                  <div key={category} className="space-y-4 pl-4 border-l-2 border-primary/50 dark:border-calpir-green-300/50">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{category}</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {addOns.map((addOn) => (
                        <div key={addOn.id} className="flex items-start space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                          <Checkbox
                            id={`addOn-${addOn.id}`}
                            checked={formData.addOnInterests.includes(addOn.id)}
                            onCheckedChange={(checked) => handleCheckboxChange(addOn.id, checked as boolean, "addOnInterests")}
                            className="mt-1"
                          />
                          <Label htmlFor={`addOn-${addOn.id}`} className="flex-grow">
                            {addOn.label}
                            {addOn.serviceId && (
                              <Link to={`/services#${addOn.serviceId}`} className="text-primary hover:underline ml-2 text-sm" target="_blank" rel="noopener noreferrer">
                                (Learn More)
                              </Link>
                            )}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {showAddOnRequirements && (
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="addOnRequirements">Please describe any specific requirements for these add-ons (e.g., preferred platforms, specific needs).</Label>
                    <Textarea id="addOnRequirements" value={formData.addOnRequirements} onChange={(e) => handleChange("addOnRequirements", e.target.value)} rows={3} className="rounded-2xl" />
                  </div>
                )}
              </div>

              {/* Project Goals and Timeline */}
              <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project Goals and Timeline <span className="text-red-500">*</span></h3>
                <div className="space-y-2">
                  <Label>Primary Goal(s) <span className="text-red-500">*</span></Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                      <Checkbox
                        id="goal-website-development"
                        checked={formData.primaryGoals.includes("Website Development")}
                        onCheckedChange={(checked) => handleCheckboxChange("Website Development", checked as boolean, "primaryGoals")}
                      />
                      <Label htmlFor="goal-website-development">Website Development</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                      <Checkbox
                        id="goal-brand-identity"
                        checked={formData.primaryGoals.includes("Design & Branding Package")}
                        onCheckedChange={(checked) => handleCheckboxChange("Design & Branding Package", checked as boolean, "primaryGoals")}
                      />
                      <Label htmlFor="goal-brand-identity">Design & Branding Package</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                      <Checkbox
                        id="goal-marketing-systems"
                        checked={formData.primaryGoals.includes("Marketing Systems")}
                        onCheckedChange={(checked) => handleCheckboxChange("Marketing Systems", checked as boolean, "primaryGoals")}
                      />
                      <Label htmlFor="goal-marketing-systems">Marketing Systems</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                      <Checkbox
                        id="goal-project-management-setup"
                        checked={formData.primaryGoals.includes("Project Management Setup")}
                        onCheckedChange={(checked) => handleCheckboxChange("Project Management Setup", checked as boolean, "primaryGoals")}
                      />
                      <Label htmlFor="goal-project-management-setup">Project Management Setup</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                      <Checkbox
                        id="goal-hr-legal-compliance"
                        checked={formData.primaryGoals.includes("HR: Legal & Compliance")}
                        onCheckedChange={(checked) => handleCheckboxChange("HR: Legal & Compliance", checked as boolean, "primaryGoals")}
                      />
                      <Label htmlFor="goal-hr-legal-compliance">HR: Legal & Compliance</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                      <Checkbox
                        id="goal-application-tracking-system" // UPDATED ID
                        checked={formData.primaryGoals.includes("HR: Application Tracking System")} // UPDATED LABEL
                        onCheckedChange={(checked) => handleCheckboxChange("HR: Application Tracking System", checked as boolean, "primaryGoals")} // UPDATED LABEL
                      />
                      <Label htmlFor="goal-application-tracking-system">HR: Application Tracking System</Label> {/* UPDATED LABEL */}
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                      <Checkbox
                        id="goal-hr-operations-payroll"
                        checked={formData.primaryGoals.includes("HR: Operations & Payroll")}
                        onCheckedChange={(checked) => handleCheckboxChange("HR: Operations & Payroll", checked as boolean, "primaryGoals")}
                      />
                      <Label htmlFor="goal-hr-operations-payroll">HR: Operations & Payroll</Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                      <Checkbox
                        id="goal-other"
                        checked={formData.primaryGoals.includes("Other")}
                        onCheckedChange={(checked) => handleCheckboxChange("Other", checked as boolean, "primaryGoals")}
                      />
                      <Label htmlFor="goal-other">Other</Label>
                    </div>
                  </div>
                </div>
                {showOtherPrimaryGoalInput && (
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="otherPrimaryGoal">Please specify your primary goal</Label>
                    <Input id="otherPrimaryGoal" value={formData.otherPrimaryGoal} onChange={(e) => handleChange("otherPrimaryGoal", e.target.value)} className="rounded-2xl" />
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline <span className="text-red-500">*</span></Label>
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
                  <Label htmlFor="additionalDetails">Additional Details</Label>
                  <Textarea id="additionalDetails" value={formData.additionalDetails} onChange={(e) => handleChange("additionalDetails", e.target.value)} rows={4} className="rounded-2xl" />
                </div>
              </div>

              {/* Consultation Preference */}
              <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">6. Consultation Preference <span className="text-red-500">*</span></h3>
                <RadioGroup onValueChange={handleSelectChange("contactMethod")} value={formData.contactMethod} required className="space-y-2">
                  <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                    <RadioGroupItem value="Email" id="contact-email" />
                    <Label htmlFor="contact-email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                    <RadioGroupItem value="Phone" id="contact-phone" />
                    <Label htmlFor="contact-phone">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                    <RadioGroupItem value="Video Call (e.g., Zoom)" id="contact-video" />
                    <Label htmlFor="contact-video">Video Call (e.g., Zoom)</Label>
                  </div>
                </RadioGroup>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred Time</Label>
                  <Input id="preferredTime" placeholder="e.g., Weekdays after 2 PM EST" value={formData.preferredTime} onChange={(e) => handleChange("preferredTime", e.target.value)} className="rounded-2xl" />
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
                  Start My Business
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

export default BuildMyBusinessPage;
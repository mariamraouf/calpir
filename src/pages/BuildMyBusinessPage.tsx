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

// Data for add-ons (simplified for form, full list is in AddOnsSection)
const addOnsOptions = [
  { id: "social-media", label: "Social Media Expansion", serviceId: "social-media" },
  { id: "email-marketing", label: "Email Marketing Setup", serviceId: "email-systems" },
  { id: "analytics-upgrades", label: "Analytics Upgrades", serviceId: "analytics" },
  { id: "ongoing-support", label: "Ongoing Support", serviceId: "ongoing-support" }, // Assuming an ID for ongoing support if it were a service
  { id: "staff-recruitment", label: "Staff Recruitment (Global)", serviceId: "hr-recruiting" },
  { id: "extra-integrations", label: "Extra Integrations", serviceId: "integrations" },
  { id: "website-expansions", label: "Website Expansions", serviceId: "website-building" },
  { id: "hr-customizations", label: "HR Customizations", serviceId: "hr-recruiting" },
  { id: "training-sessions", label: "Training Sessions", serviceId: "training-sessions" }, // Assuming an ID for training sessions
  { id: "custom-automations", label: "Custom Automations", serviceId: "operations-flows" },
  { id: "security-basics", label: "Security Basics", serviceId: "security-basics" },
];

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
    existingWebsite: "", // New field
    countryOfHeadquarters: "", // New field
    businessType: "",
    industry: "",
    otherIndustry: "",
    businessStage: "",
    businessOperationModel: "", // New field
    packagePreference: "",
    budgetRange: "",
    addOnInterests: [] as string[],
    addOnRequirements: "",
    primaryGoals: [] as string[],
    otherPrimaryGoal: "",
    currentSystems: "", // New field
    preferredPlatforms: "", // New field
    systemPriorities: [] as string[], // New field
    additionalDetails: "",
    consent: false,
  });

  const handleChange = (id: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string) => (value: string) => {
    handleChange(id, value);
  };

  const handleCheckboxChange = (id: string, checked: boolean, field: "addOnInterests" | "primaryGoals" | "systemPriorities") => {
    const itemId = id.split('-').slice(1).join('-'); // Extract original ID from "addOn-id" or "goal-id"
    handleChange(
      field,
      checked
        ? [...formData[field], itemId]
        : formData[field].filter((item) => item !== itemId)
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
      additionalDetails: "", consent: false,
    });
  };

  const showAddOnRequirements = formData.addOnInterests.length > 0;
  const showOtherIndustryInput = formData.industry === "Other";
  const showOtherPrimaryGoalInput = formData.primaryGoals.includes("Other");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-16 md:py-24">
        <section className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Launch Your Dream Business
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed delay-200">
            Tell us about your business needs to get started with your custom solution.
          </p>
        </section>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-300">
          <form onSubmit={handleSubmit} className="grid gap-6 py-4">
            {/* Contact Information */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">1. Contact Information</h3>
              <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
              <Input id="fullName" value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} required />
              <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required />
              <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
              <Input id="phoneNumber" type="tel" value={formData.phoneNumber} onChange={(e) => handleChange("phoneNumber", e.target.value)} />
              <Label htmlFor="companyName">Company Name (Optional)</Label>
              <Input id="companyName" value={formData.companyName} onChange={(e) => handleChange("companyName", e.target.value)} />
              <Label htmlFor="existingWebsite">Existing Website Link (Optional)</Label>
              <Input id="existingWebsite" type="url" placeholder="https://yourwebsite.com" value={formData.existingWebsite} onChange={(e) => handleChange("existingWebsite", e.target.value)} />
              <Label htmlFor="countryOfHeadquarters">Country of Headquarters <span className="text-red-500">*</span></Label>
              <Input id="countryOfHeadquarters" value={formData.countryOfHeadquarters} onChange={(e) => handleChange("countryOfHeadquarters", e.target.value)} required />
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
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Label htmlFor="industry">Industry <span className="text-red-500">*</span></Label>
              <Select onValueChange={handleSelectChange("industry")} value={formData.industry} required>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  {industryOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
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
              <Label>Business Operation Model <span className="text-red-500">*</span></Label>
              <RadioGroup onValueChange={handleSelectChange("businessOperationModel")} value={formData.businessOperationModel} required>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Remote" id="op-remote" />
                  <Label htmlFor="op-remote">Remote</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Hybrid" id="op-hybrid" />
                  <Label htmlFor="op-hybrid">Hybrid</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="On-site" id="op-on-site" />
                  <Label htmlFor="op-on-site">On-site</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Current & Preferred Systems */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">3. Systems & Platforms</h3>
              <Label htmlFor="currentSystems">Current Systems/Software Used (Optional)</Label>
              <Textarea id="currentSystems" placeholder="e.g., HubSpot, ClickUp, QuickBooks" value={formData.currentSystems} onChange={(e) => handleChange("currentSystems", e.target.value)} rows={3} />
              <Label htmlFor="preferredPlatforms">Preferred Platforms/Software (Optional)</Label>
              <Textarea id="preferredPlatforms" placeholder="e.g., Salesforce, Asana, Xero" value={formData.preferredPlatforms} onChange={(e) => handleChange("preferredPlatforms", e.target.value)} rows={3} />
              <Label>Key System Priorities <span className="text-red-500">*</span></Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {systemPriorities.map((priority) => (
                  <div key={priority} className="flex items-center space-x-2">
                    <Checkbox
                      id={`priority-${priority}`}
                      checked={formData.systemPriorities.includes(priority)}
                      onCheckedChange={(checked) => handleCheckboxChange(`priority-${priority}`, checked as boolean, "systemPriorities")}
                    />
                    <Label htmlFor={`priority-${priority}`}>{priority}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Selection */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">4. Package Preference <span className="text-red-500">*</span></h3>
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
                  <RadioGroupItem value="Ultimate ($5,999+)" id="package-ultimate" />
                  <Label htmlFor="package-ultimate">Ultimate ($5,999+)</Label>
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">5. Add-On Interests (Optional)</h3>
              <div className="grid grid-cols-1 gap-2">
                {addOnsOptions.map((addOn) => (
                  <div key={addOn.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`addOn-${addOn.id}`}
                      checked={formData.addOnInterests.includes(addOn.id)}
                      onCheckedChange={(checked) => handleCheckboxChange(`addOn-${addOn.id}`, checked as boolean, "addOnInterests")}
                    />
                    <Label htmlFor={`addOn-${addOn.id}`}>
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
              {showAddOnRequirements && (
                <>
                  <Label htmlFor="addOnRequirements" className="mt-4">Please describe any specific requirements for these add-ons (e.g., preferred platforms, specific needs).</Label>
                  <Textarea id="addOnRequirements" value={formData.addOnRequirements} onChange={(e) => handleChange("addOnRequirements", e.target.value)} rows={3} />
                </>
              )}
            </div>

            {/* Project Goals */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">6. Project Goals <span className="text-red-500">*</span></h3>
              <Label>Primary Goal(s) <span className="text-red-500">*</span></Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="goal-website"
                    checked={formData.primaryGoals.includes("Website Development")}
                    onCheckedChange={(checked) => handleCheckboxChange("goal-website", checked as boolean, "primaryGoals")}
                  />
                  <Label htmlFor="goal-website">Website Development</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="goal-brand"
                    checked={formData.primaryGoals.includes("Brand Identity")}
                    onCheckedChange={(checked) => handleCheckboxChange("goal-brand", checked as boolean, "primaryGoals")}
                  />
                  <Label htmlFor="goal-brand">Brand Identity</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="goal-marketing"
                    checked={formData.primaryGoals.includes("Marketing Systems")}
                    onCheckedChange={(checked) => handleCheckboxChange("goal-marketing", checked as boolean, "primaryGoals")}
                  />
                  <Label htmlFor="goal-marketing">Marketing Systems</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="goal-project"
                    checked={formData.primaryGoals.includes("Project Management Setup")}
                    onCheckedChange={(checked) => handleCheckboxChange("goal-project", checked as boolean, "primaryGoals")}
                  />
                  <Label htmlFor="goal-project">Project Management Setup</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="goal-hr-operations"
                    checked={formData.primaryGoals.includes("HR & Operations Setup")}
                    onCheckedChange={(checked) => handleCheckboxChange("goal-hr-operations", checked as boolean, "primaryGoals")}
                  />
                  <Label htmlFor="goal-hr-operations">HR & Operations Setup</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="goal-other"
                    checked={formData.primaryGoals.includes("Other")}
                    onCheckedChange={(checked) => handleCheckboxChange("goal-other", checked as boolean, "primaryGoals")}
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
              <Label htmlFor="additionalDetails">Additional Details (Optional)</Label>
              <Textarea id="additionalDetails" value={formData.additionalDetails} onChange={(e) => handleChange("additionalDetails", e.target.value)} rows={4} />
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
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default BuildMyBusinessPage;
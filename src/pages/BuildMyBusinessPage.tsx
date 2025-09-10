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

// Data for add-ons (brief description with pricing and serviceId for linking)
const addOnsOptions = [
  { id: "social-media-10-posts", label: "Social Media Expansion: 10 Posts/Month ($199)", serviceId: "social-media" },
  { id: "social-media-20-posts", label: "Social Media Expansion: 20 Posts/Month ($349)", serviceId: "social-media" },
  { id: "social-media-30-posts", label: "Social Media Expansion: 30 Posts/Month ($499)", serviceId: "social-media" },

  { id: "email-marketing-setup", label: "Email Marketing Setup ($499)", serviceId: "email-systems" },
  { id: "email-marketing-3-campaigns", label: "Email Marketing: 3 Campaigns/Month ($599)", serviceId: "email-systems" },
  { id: "email-marketing-5-campaigns", label: "Email Marketing: 5 Campaigns/Month ($699)", serviceId: "email-systems" },

  { id: "analytics-monthly-insights", label: "Analytics Upgrades: Monthly Insights ($199)", serviceId: "analytics" },
  { id: "analytics-monthly-recommendations", label: "Analytics Upgrades: Monthly Recommendations ($249)", serviceId: "analytics" },
  { id: "analytics-real-time", label: "Analytics Upgrades: Real-time Analytics ($399)", serviceId: "analytics" },

  { id: "ongoing-support-monthly-emails", label: "Ongoing Support: Monthly Emails ($199)", serviceId: "ongoing-support" },
  { id: "ongoing-support-weekly-calls", label: "Ongoing Support: Weekly Calls ($499)", serviceId: "ongoing-support" },

  { id: "staff-recruitment-1-role", label: "Staff Recruitment (Global): 1 Role ($450)", serviceId: "hr-recruiting" },
  { id: "staff-recruitment-2-roles", label: "Staff Recruitment (Global): 2 Roles ($700)", serviceId: "hr-recruiting" },
  { id: "staff-recruitment-3-roles", label: "Staff Recruitment (Global): 3 Roles ($900)", serviceId: "hr-recruiting" },
  { id: "staff-recruitment-unlimited", label: "Staff Recruitment (Global): Unlimited (3 months) ($4,999)", serviceId: "hr-recruiting" },

  { id: "extra-integrations-per", label: "Extra Integrations: Per Integration ($199)", serviceId: "integrations" },

  { id: "website-expansions-per-page", label: "Website Expansions: Per Page ($199)", serviceId: "website-building" },
  { id: "website-expansions-ecommerce", label: "Website Expansions: E-commerce Functionality ($499)", serviceId: "website-building" },

  { id: "hr-customizations-setup", label: "HR Customizations: One-time Setup ($299)", serviceId: "hr-recruiting" },

  { id: "training-sessions-per-hour", label: "Training Sessions: Per Hour ($199)", serviceId: "training-sessions" },

  { id: "custom-automations-5-plus", label: "Custom Automations: For 5+ Automations ($299)", serviceId: "operations-flows" },

  { id: "security-basics-setup", label: "Security Basics: One-time Setup ($299)", serviceId: "security-basics" },
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
    consent: false,
  });

  const handleChange = (id: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string) => (value: string) => {
    handleChange(id, value);
  };

  const handleCheckboxChange = (id: string, checked: boolean, field: "addOnInterests" | "primaryGoals" | "systemPriorities") => {
    const itemId = id.replace(/^(addOn-|goal-|priority-)/, ""); // Extract original ID from "addOn-id", "goal-id", or "priority-id"
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
          <form onSubmit={handleSubmit} className="grid gap-8 py-4"> {/* Increased gap for more space */}
            {/* Contact Information */}
            <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">1. Contact Information</h3>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                <Input id="fullName" value={formData.fullName} onChange={(e) => handleChange("fullName", e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" type="tel" value={formData.phoneNumber} onChange={(e) => handleChange("phoneNumber", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" value={formData.companyName} onChange={(e) => handleChange("companyName", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="existingWebsite">Existing Website Link</Label>
                <Input id="existingWebsite" type="url" placeholder="https://yourwebsite.com" value={formData.existingWebsite} onChange={(e) => handleChange("existingWebsite", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="countryOfHeadquarters">Country of Headquarters <span className="text-red-500">*</span></Label>
                <Input id="countryOfHeadquarters" value={formData.countryOfHeadquarters} onChange={(e) => handleChange("countryOfHeadquarters", e.target.value)} required />
              </div>
            </div>

            {/* Business Details */}
            <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">2. Business Details</h3>
              <div className="space-y-2">
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
              </div>
              <div className="space-y-2">
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
              </div>
              {showOtherIndustryInput && (
                <div className="space-y-2">
                  <Label htmlFor="otherIndustry">Please specify your industry</Label>
                  <Input id="otherIndustry" value={formData.otherIndustry} onChange={(e) => handleChange("otherIndustry", e.target.value)} />
                </div>
              )}
              <div className="space-y-2">
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
              <div className="space-y-2">
                <Label>Business Operation Model <span className="text-red-500">*</span></Label>
                <RadioGroup onValueChange={handleSelectChange("businessOperationModel")} value={formData.businessOperationModel} required className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
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
            </div>

            {/* Current & Preferred Systems */}
            <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">3. Systems & Platforms</h3>
              <div className="space-y-2">
                <Label htmlFor="currentSystems">Current Systems/Software Used</Label>
                <Textarea id="currentSystems" placeholder="e.g., HubSpot, ClickUp, QuickBooks" value={formData.currentSystems} onChange={(e) => handleChange("currentSystems", e.target.value)} rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredPlatforms">Preferred Platforms/Software</Label>
                <Textarea id="preferredPlatforms" placeholder="e.g., Salesforce, Asana, Xero" value={formData.preferredPlatforms} onChange={(e) => handleChange("preferredPlatforms", e.target.value)} rows={3} />
              </div>
              <div className="space-y-2">
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
            </div>

            {/* Package Selection */}
            <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">4. Package Preference <span className="text-red-500">*</span></h3>
              <RadioGroup onValueChange={handleSelectChange("packagePreference")} value={formData.packagePreference} required className="space-y-2">
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
                <div className="space-y-2 mt-4">
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
                </div>
              )}
            </div>

            {/* Add-On Interests */}
            <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">5. Add-On Interests</h3>
              <div className="grid grid-cols-1 gap-4"> {/* Increased gap for more space */}
                {addOnsOptions.map((addOn) => (
                  <div key={addOn.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`addOn-${addOn.id}`}
                      checked={formData.addOnInterests.includes(addOn.id)}
                      onCheckedChange={(checked) => handleCheckboxChange(`addOn-${addOn.id}`, checked as boolean, "addOnInterests")}
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
              {showAddOnRequirements && (
                <div className="space-y-2 mt-4">
                  <Label htmlFor="addOnRequirements">Please describe any specific requirements for these add-ons (e.g., preferred platforms, specific needs).</Label>
                  <Textarea id="addOnRequirements" value={formData.addOnRequirements} onChange={(e) => handleChange("addOnRequirements", e.target.value)} rows={3} />
                </div>
              )}
            </div>

            {/* Project Goals */}
            <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">6. Project Goals <span className="text-red-500">*</span></h3>
              <div className="space-y-2">
                <Label>Primary Goal(s) <span className="text-red-500">*</span></Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="goal-website-development"
                      checked={formData.primaryGoals.includes("Website Development")}
                      onCheckedChange={(checked) => handleCheckboxChange("goal-website-development", checked as boolean, "primaryGoals")}
                    />
                    <Label htmlFor="goal-website-development">Website Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="goal-brand-identity"
                      checked={formData.primaryGoals.includes("Brand Identity")}
                      onCheckedChange={(checked) => handleCheckboxChange("goal-brand-identity", checked as boolean, "primaryGoals")}
                    />
                    <Label htmlFor="goal-brand-identity">Brand Identity</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="goal-marketing-systems"
                      checked={formData.primaryGoals.includes("Marketing Systems")}
                      onCheckedChange={(checked) => handleCheckboxChange("goal-marketing-systems", checked as boolean, "primaryGoals")}
                    />
                    <Label htmlFor="goal-marketing-systems">Marketing Systems</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="goal-project-management-setup"
                      checked={formData.primaryGoals.includes("Project Management Setup")}
                      onCheckedChange={(checked) => handleCheckboxChange("goal-project-management-setup", checked as boolean, "primaryGoals")}
                    />
                    <Label htmlFor="goal-project-management-setup">Project Management Setup</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="goal-hr-operations-setup"
                      checked={formData.primaryGoals.includes("HR & Operations Setup")}
                      onCheckedChange={(checked) => handleCheckboxChange("goal-hr-operations-setup", checked as boolean, "primaryGoals")}
                    />
                    <Label htmlFor="goal-hr-operations-setup">HR & Operations Setup</Label>
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
              </div>
              {showOtherPrimaryGoalInput && (
                <div className="space-y-2 mt-4">
                  <Label htmlFor="otherPrimaryGoal">Please specify your primary goal</Label>
                  <Input id="otherPrimaryGoal" value={formData.otherPrimaryGoal} onChange={(e) => handleChange("otherPrimaryGoal", e.target.value)} />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="additionalDetails">Additional Details</Label>
                <Textarea id="additionalDetails" value={formData.additionalDetails} onChange={(e) => handleChange("additionalDetails", e.target.value)} rows={4} />
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
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default BuildMyBusinessPage;
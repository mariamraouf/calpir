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

const biggestChallengeOptions = [
  "Don't know where to start",
  "Need a professional website",
  "Overwhelmed by tool options",
  "Lack of time to set everything up",
  "Current systems are messy/inefficient",
  "Need help with branding/marketing",
  "Technical skills limitation",
];

const currentAssetsOptions = [
  "Website",
  "Business email",
  "Social media accounts",
  "Logo/branding",
  "Project management system",
  "CRM system",
  "Accounting system",
  "None of the above",
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
    biggestChallenge: "", // NEW
    currentAssets: [] as string[], // NEW
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
    consent: false,
  });

  const handleChange = (id: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string) => (value: string) => {
    handleChange(id, value);
  };

  const handleCheckboxChange = (value: string, checked: boolean, field: "addOnInterests" | "primaryGoals" | "systemPriorities" | "currentAssets") => {
    handleChange(
      field,
      checked
        ? [...formData[field], value]
        : formData[field].filter((item) => item !== value)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Please agree to the Privacy Policy and Terms of Service.");
      return;
    }

    try {
      const response = await fetch("https://jjawywizvzkcgpbrxadl.supabase.co/functions/v1/create-clickup-task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send inquiry.");
      }

      toast.success("Your business launch inquiry has been sent! We'll be in touch soon.");
      // Reset form
      setFormData({
        fullName: "", email: "", phoneNumber: "", companyName: "", existingWebsite: "", countryOfHeadquarters: "",
        businessType: "", industry: "", otherIndustry: "", businessStage: "", businessOperationModel: "",
        biggestChallenge: "", currentAssets: [],
        packagePreference: "", budgetRange: "", addOnInterests: [], addOnRequirements: "",
        primaryGoals: [], otherPrimaryGoal: "", currentSystems: "", preferredPlatforms: "", systemPriorities: [],
        additionalDetails: "", timeline: "",
        consent: false,
      });
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(error.message || "There was an error sending your inquiry. Please try again.");
    }
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

  const projectGoalsOptions = [
    "Establish Online Presence",
    "Improve Operational Efficiency",
    "Boost Marketing & Sales",
    "Streamline HR & Talent",
    "Enhance Data & Analytics",
    "Launch New Product/Service",
    "Expand Market Reach",
    "Reduce Costs",
    "Other",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Ready to Build Your Dream Business? Let's Go!"
          description="Got a vision? We're here to help you make it real. Tell us what you're dreaming up, and our experts will dive deep, giving you personalized recommendations to craft the ultimate solution for your business. We're genuinely excited to see what you'll create!"
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

              {/* New Questions */}
              <div className="space-y-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Your Current Situation</h3>
                <div className="space-y-2">
                  <Label>What's your biggest challenge right now? <span className="text-red-500">*</span></Label>
                  <RadioGroup onValueChange={handleSelectChange("biggestChallenge")} value={formData.biggestChallenge} required className="space-y-2">
                    {biggestChallengeOptions.map((challenge) => (
                      <div key={challenge} className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                        <RadioGroupItem value={challenge} id={`challenge-${challenge.replace(/\s/g, '-').toLowerCase()}`} />
                        <Label htmlFor={`challenge-${challenge.replace(/\s/g, '-').toLowerCase()}`}>{challenge}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                <div className="space-y-2 mt-6">
                  <Label>Do you currently have any of these? (Select all that apply)</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentAssetsOptions.map((asset) => (
                      <div key={asset} className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                        <Checkbox
                          id={`asset-${asset.replace(/\s/g, '-').toLowerCase()}`}
                          checked={formData.currentAssets.includes(asset)}
                          onCheckedChange={(checked) => handleCheckboxChange(asset, checked as boolean, "currentAssets")}
                        />
                        <Label htmlFor={`asset-${asset.replace(/\s/g, '-').toLowerCase()}`}>{asset}</Label>
                      </div>
                    ))}
                  </div>
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
                    {projectGoalsOptions.map((goal) => (
                      <div key={goal} className="flex items-center space-x-2 p-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:shadow-md hover:border-primary transition-all duration-300">
                        <Checkbox
                          id={`goal-${goal.replace(/\s/g, '-').toLowerCase()}`}
                          checked={formData.primaryGoals.includes(goal)}
                          onCheckedChange={(checked) => handleCheckboxChange(goal, checked as boolean, "primaryGoals")}
                        />
                        <Label htmlFor={`goal-${goal.replace(/\s/g, '-').toLowerCase()}`}>{goal}</Label>
                      </div>
                    ))}
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
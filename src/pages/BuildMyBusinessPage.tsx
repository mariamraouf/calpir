"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Define the interface for the form data
interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  existingWebsite: string;
  countryOfHeadquarters: string;
  businessType: string;
  industry: string;
  otherIndustry: string;
  companySize: string;
  packagePreference: string;
  budgetRange: string;
  addOnInterests: string[];
  addOnRequirements: string;
  primaryGoals: string[];
  otherPrimaryGoal: string;
  currentSystems: string;
  preferredPlatforms: string;
  systemPriorities: string[];
  additionalDetails: string;
  consent: boolean;
}

const BuildMyBusinessPage = () => {
  const initialFormData: FormData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    existingWebsite: "",
    countryOfHeadquarters: "",
    businessType: "",
    industry: "",
    otherIndustry: "",
    companySize: "",
    packagePreference: "",
    budgetRange: "",
    addOnInterests: [],
    addOnRequirements: "",
    primaryGoals: [],
    otherPrimaryGoal: "",
    currentSystems: "",
    preferredPlatforms: "",
    systemPriorities: [],
    additionalDetails: "",
    consent: false,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Fix: Change the type of formErrors to allow string messages for each field
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Retail",
    "Education",
    "Manufacturing",
    "Hospitality",
    "Real Estate",
    "Marketing & Advertising",
    "Non-profit",
    "Other",
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "500+ employees",
  ];

  const packagePreferences = [
    "Starter Package",
    "Growth Package",
    "Ultimate Package",
    "Not sure yet",
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $6,000",
    "Over $6,000",
    "Flexible",
  ];

  const addOnOptions = [
    "Advanced SEO",
    "Custom Software Development",
    "Ongoing Marketing Support",
    "Dedicated Account Manager",
    "Employee Training Programs",
    "Cybersecurity Audit",
    "Legal & Compliance Consulting",
    "Financial Planning & Analysis",
  ];

  const primaryGoalOptions = [
    "Increase Revenue",
    "Improve Efficiency",
    "Expand Market Reach",
    "Enhance Customer Experience",
    "Streamline Operations",
    "Reduce Costs",
    "Improve Employee Satisfaction",
    "Digital Transformation",
    "Other",
  ];

  const systemPriorityOptions = [
    "Ease of Use",
    "Scalability",
    "Cost-Effectiveness",
    "Integration Capabilities",
    "Security",
    "Customization Options",
    "Vendor Support",
  ];

  const validateForm = useCallback(() => {
    // Fix: Change the type of errors to allow string messages
    const errors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName) errors.fullName = "Full Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.phoneNumber)
      errors.phoneNumber = "Phone Number is required.";
    if (!formData.companyName)
      errors.companyName = "Company Name is required.";
    if (!formData.countryOfHeadquarters)
      errors.countryOfHeadquarters = "Country is required.";
    if (!formData.businessType)
      errors.businessType = "Business Type is required.";
    if (!formData.industry) errors.industry = "Industry is required.";
    if (formData.industry === "Other" && !formData.otherIndustry)
      errors.otherIndustry = "Please specify your industry.";
    if (!formData.companySize)
      errors.companySize = "Company Size is required.";
    if (!formData.packagePreference)
      errors.packagePreference = "Package Preference is required.";
    if (!formData.budgetRange)
      errors.budgetRange = "Budget Range is required.";
    if (formData.primaryGoals.length === 0)
      errors.primaryGoals = "Please select at least one primary goal.";
    if (
      formData.primaryGoals.includes("Other") &&
      !formData.otherPrimaryGoal
    )
      errors.otherPrimaryGoal = "Please specify your other primary goal.";
    if (!formData.consent)
      errors.consent = "You must consent to be contacted.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  useEffect(() => {
    // Validate form whenever formData changes, except for initial load
    if (Object.keys(formErrors).length > 0) {
      validateForm();
    }
  }, [formData, formErrors, validateForm]);

  const handleChange = (
    field: keyof FormData,
    value: string | boolean | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (
    item: string,
    checked: boolean,
    field: "addOnInterests" | "primaryGoals" | "systemPriorities"
  ) => {
    setFormData((prev) => {
      const currentItems = prev[field] as string[];
      if (checked) {
        return { ...prev, [field]: [...currentItems, item] };
      } else {
        return { ...prev, [field]: currentItems.filter((i) => i !== item) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form Data Submitted:", formData);
      toast({
        title: "Success!",
        description: "Your request has been submitted. We'll be in touch soon!",
        variant: "default",
      });
      setFormData(initialFormData); // Reset form
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-3xl">
      <div className="mb-8">
        <Link to="/pricing" className="inline-flex items-center text-primary hover:text-calpir-green-700 transition-colors duration-200">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Pricing
        </Link>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-palette-blue-100 dark:border-gray-700">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
          Build My Business
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
          Tell us about your business needs, and we'll craft the perfect solution.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b pb-3 mb-5">
              Contact Information
            </h2>
            <div>
              <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className="rounded-2xl"
              />
              {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="rounded-2xl"
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number <span className="text-red-500">*</span></Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                className="rounded-2xl"
              />
              {formErrors.phoneNumber && <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>}
            </div>
          </div>

          {/* Business Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b pb-3 mb-5">
              Business Details
            </h2>
            <div>
              <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
              <Input
                id="companyName"
                type="text"
                placeholder="Acme Corp"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                className="rounded-2xl"
              />
              {formErrors.companyName && <p className="text-red-500 text-sm mt-1">{formErrors.companyName}</p>}
            </div>
            <div>
              <Label htmlFor="existingWebsite">Existing Website (if any)</Label>
              <Input
                id="existingWebsite"
                type="url"
                placeholder="https://www.acmecorp.com"
                value={formData.existingWebsite}
                onChange={(e) => handleChange("existingWebsite", e.target.value)}
                className="rounded-2xl"
              />
            </div>
            <div>
              <Label htmlFor="countryOfHeadquarters">Country of Headquarters <span className="text-red-500">*</span></Label>
              <Input
                id="countryOfHeadquarters"
                type="text"
                placeholder="United States"
                value={formData.countryOfHeadquarters}
                onChange={(e) => handleChange("countryOfHeadquarters", e.target.value)}
                className="rounded-2xl"
              />
              {formErrors.countryOfHeadquarters && <p className="text-red-500 text-sm mt-1">{formErrors.countryOfHeadquarters}</p>}
            </div>
            <div>
              <Label htmlFor="businessType">Type of Business <span className="text-red-500">*</span></Label>
              <Input
                id="businessType"
                type="text"
                placeholder="e.g., SaaS, E-commerce, Consulting"
                value={formData.businessType}
                onChange={(e) => handleChange("businessType", e.target.value)}
                className="rounded-2xl"
              />
              {formErrors.businessType && <p className="text-red-500 text-sm mt-1">{formErrors.businessType}</p>}
            </div>
            <div>
              <Label htmlFor="industry">Industry <span className="text-red-500">*</span></Label>
              <Select
                onValueChange={(value) => handleChange("industry", value)}
                value={formData.industry}
              >
                <SelectTrigger className="w-full rounded-2xl">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formErrors.industry && <p className="text-red-500 text-sm mt-1">{formErrors.industry}</p>}
            </div>
            {formData.industry === "Other" && (
              <div>
                <Label htmlFor="otherIndustry">Please specify your industry <span className="text-red-500">*</span></Label>
                <Input
                  id="otherIndustry"
                  type="text"
                  placeholder="e.g., Aerospace, Biotechnology"
                  value={formData.otherIndustry}
                  onChange={(e) => handleChange("otherIndustry", e.target.value)}
                  className="rounded-2xl"
                />
                {formErrors.otherIndustry && <p className="text-red-500 text-sm mt-1">{formErrors.otherIndustry}</p>}
              </div>
            )}
            <div>
              <Label htmlFor="companySize">Company Size <span className="text-red-500">*</span></Label>
              <Select
                onValueChange={(value) => handleChange("companySize", value)}
                value={formData.companySize}
              >
                <SelectTrigger className="w-full rounded-2xl">
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl">
                  {companySizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formErrors.companySize && <p className="text-red-500 text-sm mt-1">{formErrors.companySize}</p>}
            </div>
          </div>

          {/* Package & Budget */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b pb-3 mb-5">
              Package & Budget
            </h2>
            <div>
              <Label>Preferred Package <span className="text-red-500">*</span></Label>
              <RadioGroup
                onValueChange={(value) => handleChange("packagePreference", value)}
                value={formData.packagePreference}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"
              >
                {packagePreferences.map((pkg) => (
                  <div key={pkg} className="flex items-center space-x-2 p-3 border rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <RadioGroupItem value={pkg} id={`package-${pkg}`} />
                    <Label htmlFor={`package-${pkg}`} className="flex-1 cursor-pointer">
                      {pkg}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {formErrors.packagePreference && <p className="text-red-500 text-sm mt-1">{formErrors.packagePreference}</p>}
            </div>
            <div>
              <Label>Budget Range <span className="text-red-500">*</span></Label>
              <RadioGroup
                onValueChange={(value) => handleChange("budgetRange", value)}
                value={formData.budgetRange}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2"
              >
                {budgetRanges.map((budget) => (
                  <div key={budget} className="flex items-center space-x-2 p-3 border rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <RadioGroupItem value={budget} id={`budget-${budget}`} />
                    <Label htmlFor={`budget-${budget}`} className="flex-1 cursor-pointer">
                      {budget}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {formErrors.budgetRange && <p className="text-red-500 text-sm mt-1">{formErrors.budgetRange}</p>}
            </div>
          </div>

          {/* Specific Needs */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b pb-3 mb-5">
              Specific Needs
            </h2>
            <div>
              <Label>Primary Goals <span className="text-red-500">*</span></Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {primaryGoalOptions.map((goal) => (
                  <div key={goal} className="flex items-center space-x-2 p-3 border rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <Checkbox
                      id={`goal-${goal}`}
                      checked={formData.primaryGoals.includes(goal)}
                      onCheckedChange={(checked) => handleCheckboxChange(goal, checked as boolean, "primaryGoals")}
                    />
                    <Label htmlFor={`goal-${goal}`} className="flex-1 cursor-pointer">
                      {goal}
                    </Label>
                  </div>
                ))}
              </div>
              {formErrors.primaryGoals && <p className="text-red-500 text-sm mt-1">{formErrors.primaryGoals}</p>}
            </div>
            {formData.primaryGoals.includes("Other") && (
              <div>
                <Label htmlFor="otherPrimaryGoal">Please specify your other primary goal <span className="text-red-500">*</span></Label>
                <Input
                  id="otherPrimaryGoal"
                  type="text"
                  placeholder="e.g., Achieve ISO certification"
                  value={formData.otherPrimaryGoal}
                  onChange={(e) => handleChange("otherPrimaryGoal", e.target.value)}
                  className="rounded-2xl"
                />
                {formErrors.otherPrimaryGoal && <p className="text-red-500 text-sm mt-1">{formErrors.otherPrimaryGoal}</p>}
              </div>
            )}
            <div>
              <Label htmlFor="currentSystems">Current Systems/Software Used</Label>
              <Textarea
                id="currentSystems"
                placeholder="e.g., HubSpot, ClickUp, QuickBooks"
                value={formData.currentSystems}
                onChange={(e) => handleChange("currentSystems", e.target.value)}
                rows={3}
                className="rounded-2xl"
              />
            </div>
            <div>
              <Label htmlFor="preferredPlatforms">Preferred Platforms/Software</Label>
              <Textarea
                id="preferredPlatforms"
                placeholder="e.g., Salesforce, Asana, Xero"
                value={formData.preferredPlatforms}
                onChange={(e) => handleChange("preferredPlatforms", e.target.value)}
                rows={3}
                className="rounded-2xl"
              />
            </div>
            <div>
              <Label>System Priorities</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {systemPriorityOptions.map((priority) => (
                  <div key={priority} className="flex items-center space-x-2 p-3 border rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <Checkbox
                      id={`priority-${priority}`}
                      checked={formData.systemPriorities.includes(priority)}
                      onCheckedChange={(checked) => handleCheckboxChange(priority, checked as boolean, "systemPriorities")}
                    />
                    <Label htmlFor={`priority-${priority}`} className="flex-1 cursor-pointer">
                      {priority}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label>Add-on Interests</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {addOnOptions.map((addOn) => (
                  <div key={addOn} className="flex items-center space-x-2 p-3 border rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <Checkbox
                      id={`addon-${addOn}`}
                      checked={formData.addOnInterests.includes(addOn)}
                      onCheckedChange={(checked) => handleCheckboxChange(addOn, checked as boolean, "addOnInterests")}
                    />
                    <Label htmlFor={`addon-${addOn}`} className="flex-1 cursor-pointer">
                      {addOn}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="addOnRequirements">Specific Add-on Requirements</Label>
              <Textarea
                id="addOnRequirements"
                placeholder="e.g., Need custom integration with X platform for Y add-on."
                value={formData.addOnRequirements}
                onChange={(e) => handleChange("addOnRequirements", e.target.value)}
                rows={3}
                className="rounded-2xl"
              />
            </div>
            <div>
              <Label htmlFor="additionalDetails">Additional Details or Questions</Label>
              <Textarea
                id="additionalDetails"
                placeholder="Is there anything else you'd like us to know?"
                value={formData.additionalDetails}
                onChange={(e) => handleChange("additionalDetails", e.target.value)}
                rows={4}
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleChange("consent", checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I consent to being contacted by Calpir regarding my business needs. <span className="text-red-500">*</span>
            </Label>
            {formErrors.consent && <p className="text-red-500 text-sm mt-1">{formErrors.consent}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-button-glow"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BuildMyBusinessPage;
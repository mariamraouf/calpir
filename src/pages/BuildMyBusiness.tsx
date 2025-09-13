"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import PageHeader from "@/components/PageHeader";
import { useNavigate, useSearchParams } from "react-router-dom"; // Changed from "next/navigation"
import { CheckCircle } from "lucide-react"; // Added this import

interface Service {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  description?: string;
}

const servicesData: Service[] = [
  // Website Building & Hosting
  {
    id: "website-building-hosting",
    name: "Website Building & Hosting (5 pages included)",
    price: 1499,
    category: "Website Building & Hosting",
    description: "Professional website design, development, and reliable hosting.",
  },
  {
    id: "additional-pages",
    name: "Additional Website Pages (per 5 pages)",
    price: 499,
    category: "Website Building & Hosting",
    description: "Expand your website with more content pages.",
  },
  {
    id: "e-commerce-setup",
    name: "E-commerce Setup",
    price: 999,
    category: "Website Building & Hosting",
    description: "Integrate online store functionality with product listings and payment gateways.",
  },
  {
    id: "website-maintenance",
    name: "Website Maintenance (Monthly)",
    price: 199,
    category: "Website Building & Hosting",
    description: "Ongoing updates, security, and performance optimization.",
  },

  // Marketing & Sales
  {
    id: "seo-optimization-service",
    name: "SEO Optimization",
    price: 599,
    category: "Marketing & Sales",
    description: "Improve your search engine ranking and organic traffic.",
  },
  {
    id: "email-system-setup-service",
    name: "Email System Setup",
    price: 499,
    category: "Marketing & Sales",
    description: "Set up and configure your professional email communication system.",
  },
  {
    id: "email-marketing-automation",
    name: "Email Marketing Automation",
    price: 799,
    category: "Marketing & Sales",
    description: "Automate email campaigns for lead nurturing and customer engagement.",
  },
  {
    id: "social-media-content-5",
    name: "Social Media Content: 5 Posts/Month",
    price: 199,
    category: "Marketing & Sales",
    description: "Regular social media content creation to engage your audience.",
  },
  {
    id: "social-media-content-10",
    name: "Social Media Content: 10 Posts/Month",
    price: 349,
    category: "Marketing & Sales",
    description: "Increased social media presence with more frequent posts.",
  },
  {
    id: "social-media-content-15",
    name: "Social Media Content: 15 Posts/Month",
    price: 649,
    category: "Marketing & Sales",
    description: "Extensive social media management for maximum reach.",
  },
  {
    id: "crm-setup",
    name: "CRM System Setup",
    price: 899,
    category: "Marketing & Sales",
    description: "Implement a Customer Relationship Management system to manage leads and customers.",
  },

  // Operations & Productivity
  {
    id: "project-management-setup",
    name: "Project Management Setup",
    price: 799,
    category: "Operations & Productivity",
    description: "Configure tools and workflows for efficient project execution.",
  },
  {
    id: "custom-automations-3",
    name: "Custom Automations: For 3 Automations",
    price: 299,
    category: "Operations & Productivity",
    description: "Automate repetitive tasks to save time and improve efficiency.",
  },
  {
    id: "time-tracking-service",
    name: "Time Tracking",
    price: 599,
    category: "Operations & Productivity",
    description: "Implement a system for accurate employee time tracking.",
  },

  // HR & Legal
  {
    id: "legal-compliance",
    name: "Legal & Compliance",
    price: 499,
    category: "HR & Legal",
    description: "HR contracts, NDAs, employee handbook, policy templates & compliance checklists.",
  },
  {
    id: "recruiting-hiring",
    name: "Recruiting & Hiring",
    price: 599,
    category: "HR & Legal",
    description: "Job descriptions, interview guides, assessment tools, ATS setup and configuration, onboarding workflow implementation.",
  },
  {
    id: "hr-operations-payroll",
    name: "HR Operations & Payroll",
    price: 799,
    category: "HR & Legal",
    description: "Payroll system setup, benefits administration setup, time tracking system configuration, employee database organization, HR workflow automation setup.",
  },
  {
    id: "hr-foundation",
    name: "HR Foundation",
    price: 1249,
    category: "HR & Legal",
    description: "Everything from packages 1-4, full HR system integration & setup, custom workflow design, HR dashboard & analytics setup.",
  },

  // Design & Branding
  {
    id: "logo-branding-kit",
    name: "Logo & Branding Kit",
    price: 799,
    category: "Design & Branding",
    description: "Professional logo design and comprehensive brand guidelines.",
  },
  {
    id: "design-branding-package",
    name: "Design & Branding Package",
    price: 1299,
    category: "Design & Branding",
    description: "Includes Logo & Branding Kit, plus brand style guide and marketing collateral design.",
  },
];

const addOnsData: AddOn[] = [
  {
    id: "seo-optimization-addon",
    name: "SEO Optimization",
    price: 499,
    description: "Boost your search engine ranking.",
  },
  {
    id: "time-tracking-addon",
    name: "Time Tracking",
    price: 499,
    description: "Track employee hours efficiently.",
  },
  {
    id: "email-system-setup-addon",
    name: "Email System Setup",
    price: 499,
    description: "Professional email communication setup.",
  },
  {
    id: "analytics-reporting",
    name: "Analytics & Reporting (Google Analytics setup)",
    price: 699,
    description: "Gain insights into your website performance.",
  },
  {
    id: "social-media-content-5-addon",
    name: "Social Media Content: 5 Posts/Month",
    price: 199,
    description: "Regular social media content creation.",
  },
  {
    id: "social-media-content-10-addon",
    name: "Social Media Content: 10 Posts/Month",
    price: 349,
    description: "Increased social media presence.",
  },
  {
    id: "social-media-content-15-addon",
    name: "Social Media Content: 15 Posts/Month",
    price: 649,
    description: "Extensive social media management.",
  },
  {
    id: "custom-automations-3-addon",
    name: "Custom Automations: For 3 Automations",
    price: 299,
    description: "Automate repetitive tasks.",
  },
];

const BuildMyBusiness = () => {
  const navigate = useNavigate(); // Changed useRouter to useNavigate
  const [searchParams] = useSearchParams(); // Changed from next/navigation

  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: 999,
      services: [
        "website-building-hosting",
        "email-system-setup-service",
        "social-media-content-5",
        "analytics-reporting", // This is an add-on, but included in package logic
      ],
      timeline: "7 Days Launch",
    },
    {
      id: "growth",
      name: "Growth",
      price: 2499,
      services: [
        "website-building-hosting", // Assuming advanced website is covered by this + additional pages
        "additional-pages", // For 10 pages total
        "email-marketing-automation",
        "social-media-content-10",
        "seo-optimization-service",
        "custom-automations-3",
        "recruiting-hiring",
      ],
      timeline: "14 Days Launch",
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: 4999,
      services: [
        "website-building-hosting", // For 15+ pages
        "additional-pages", // Multiple times for 15+ pages
        "e-commerce-setup", // Assuming part of enterprise
        "email-marketing-automation", // Full Marketing Automation Suite
        "social-media-content-15",
        "seo-optimization-service", // Advanced SEO & Content Strategy
        "hr-foundation",
        "project-management-setup",
      ],
      timeline: "28 Days Launch",
    },
  ];

  useEffect(() => {
    const packageParam = searchParams.get("package");
    if (packageParam) {
      setSelectedPackage(packageParam);
      applyPackageSelection(packageParam);
    }
  }, [searchParams]);

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedPackage, selectedServices, selectedAddOns]);

  const applyPackageSelection = (packageId: string) => {
    const pkg = packages.find((p) => p.id === packageId);
    if (pkg) {
      // Clear previous selections
      setSelectedServices([]);
      setSelectedAddOns([]);

      // Apply package services
      const newSelectedServices: string[] = [];
      const newSelectedAddOns: string[] = [];

      pkg.services.forEach((serviceId) => {
        if (servicesData.some((s) => s.id === serviceId)) {
          newSelectedServices.push(serviceId);
        } else if (addOnsData.some((a) => a.id === serviceId)) {
          newSelectedAddOns.push(serviceId);
        }
      });

      setSelectedServices(newSelectedServices);
      setSelectedAddOns(newSelectedAddOns);
    }
  };

  const handlePackageChange = (value: string) => {
    setSelectedPackage(value);
    applyPackageSelection(value);
  };

  const handleServiceChange = (serviceId: string, isChecked: boolean) => {
    setSelectedPackage(null); // Deselect package if custom services are chosen
    setSelectedServices((prev) =>
      isChecked ? [...prev, serviceId] : prev.filter((id) => id !== serviceId)
    );
  };

  const handleAddOnChange = (addOnId: string, isChecked: boolean) => {
    setSelectedPackage(null); // Deselect package if custom add-ons are chosen
    setSelectedAddOns((prev) =>
      isChecked ? [...prev, addOnId] : prev.filter((id) => id !== addOnId)
    );
  };

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [id]: value }));
  };

  const calculateTotalPrice = () => {
    let currentTotal = 0;

    if (selectedPackage) {
      const pkg = packages.find((p) => p.id === selectedPackage);
      if (pkg) {
        currentTotal = pkg.price;
      }
    } else {
      selectedServices.forEach((serviceId) => {
        const service = servicesData.find((s) => s.id === serviceId);
        if (service) {
          currentTotal += service.price;
        }
      });
      selectedAddOns.forEach((addOnId) => {
        const addOn = addOnsData.find((a) => a.id === addOnId);
        if (addOn) {
          currentTotal += addOn.price;
        }
      });
    }
    setTotalPrice(currentTotal);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", {
      selectedPackage,
      selectedServices,
      selectedAddOns,
      totalPrice,
      contactInfo,
    });
    toast.success("Your custom package request has been sent! We'll be in touch soon.");
    // Reset form
    setSelectedPackage(null);
    setSelectedServices([]);
    setSelectedAddOns([]);
    setContactInfo({ name: "", email: "", company: "", message: "" });
  };

  const getServiceCategories = () => {
    const categories = new Set(servicesData.map((service) => service.category));
    return Array.from(categories);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Build Your Business"
          description="Select from our pre-built packages or customize your own suite of services to perfectly match your business needs. Our experts will examine your setup and recommend accordingly."
          buttons={[
            { text: "Explore Services", href: "/services", variant: "outline" },
            { text: "View Pricing", href: "/pricing", variant: "outline" },
          ]}
        />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Choose a Package or Customize
            </h2>

            {/* Package Selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                1. Select a Pre-Built Package
              </h3>
              <RadioGroup
                value={selectedPackage || ""}
                onValueChange={handlePackageChange}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`p-6 border rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedPackage === pkg.id
                        ? "border-primary-500 ring-2 ring-primary-200 bg-primary-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <RadioGroupItem value={pkg.id} id={`package-${pkg.id}`} className="sr-only" />
                    <Label htmlFor={`package-${pkg.id}`} className="flex flex-col space-y-2 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-800">{pkg.name}</span>
                        <span className="text-lg font-semibold text-primary-600">${pkg.price.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-600">{pkg.timeline}</p> {/* Display timeline */}
                      <ul className="text-sm text-gray-700 mt-2 space-y-1">
                        {pkg.services.map((serviceId, index) => {
                          const service = servicesData.find(s => s.id === serviceId);
                          const addOn = addOnsData.find(a => a.id === serviceId);
                          const item = service || addOn;
                          return item ? <li key={index} className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />{item.name}</li> : null;
                        })}
                      </ul>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Custom Services Selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                2. Or, Select Individual Services
              </h3>
              <p className="text-gray-600 mb-6">
                Mix and match services to create a plan that's uniquely yours.
              </p>

              {getServiceCategories().map((category) => (
                <div key={category} className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    {category}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {servicesData
                      .filter((service) => service.category === category)
                      .map((service) => (
                        <div key={service.id} className="flex items-center space-x-3">
                          <Checkbox
                            id={service.id}
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={(checked) =>
                              handleServiceChange(service.id, checked as boolean)
                            }
                          />
                          <Label htmlFor={service.id} className="text-base font-medium cursor-pointer">
                            {service.name} (${service.price})
                            {service.description && (
                              <span className="block text-sm text-gray-500">
                                {service.description}
                              </span>
                            )}
                          </Label>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Add-Ons Selection */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                3. Add-Ons
              </h3>
              <p className="text-gray-600 mb-6">
                Enhance your package with these powerful additions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                {addOnsData.map((addOn) => (
                  <div key={addOn.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={addOn.id}
                      checked={selectedAddOns.includes(addOn.id)}
                      onCheckedChange={(checked) =>
                        handleAddOnChange(addOn.id, checked as boolean)
                      }
                    />
                    <Label htmlFor={addOn.id} className="text-base font-medium cursor-pointer">
                      {addOn.name} (${addOn.price})
                      {addOn.description && (
                        <span className="block text-sm text-gray-500">
                          {addOn.description}
                        </span>
                      )}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Price & Contact Form */}
            <div className="bg-primary-50 p-8 rounded-lg shadow-lg border border-primary-200">
              <h3 className="text-2xl font-bold text-primary-800 mb-6 text-center">
                Your Estimated Total: ${totalPrice.toLocaleString()}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg font-medium text-gray-700">
                    Your Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={contactInfo.name}
                    onChange={handleContactInfoChange}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-lg font-medium text-gray-700">
                    Your Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={contactInfo.email}
                    onChange={handleContactInfoChange}
                    required
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-lg font-medium text-gray-700">
                    Company Name (Optional)
                  </Label>
                  <Input
                    type="text"
                    id="company"
                    value={contactInfo.company}
                    onChange={handleContactInfoChange}
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-lg font-medium text-gray-700">
                    Tell Us More About Your Needs (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={contactInfo.message}
                    onChange={handleContactInfoChange}
                    rows={5}
                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <Button type="submit" className="w-full py-3 text-lg">
                  Submit My Custom Request
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default BuildMyBusiness;
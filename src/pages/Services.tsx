"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { CheckCircle, FileText, Layout, Palette, TrendingUp, Users, Briefcase, DollarSign, Settings, Shield, BookOpen, Lightbulb, Mail } from "lucide-react";
import { Button } from "@/components/ui/button"; // Import Button component
import { Link } from "react-router-dom"; // Import Link for navigation

const servicesData = [
  {
    id: "operations-flows",
    icon: FileText, // Corrected to FileText
    title: "Operations Flows Setup",
    description: "Streamline your business processes with efficient and automated operational workflows.",
    details: [
      "Process mapping and optimization",
      "Workflow automation setup",
      "Standard Operating Procedures (SOPs) documentation",
      "Inter-departmental communication setup",
    ],
    iconColor: "text-primary", // Primary green
  },
  {
    id: "project-management",
    icon: Briefcase,
    title: "Project Management Setup",
    description: "Implement robust project management systems to keep your projects on track and teams coordinated.",
    details: [
      "Tool selection and configuration", // Amended
      "Project template creation",
      "Task management and tracking setup",
      "Reporting and analytics dashboards",
    ],
    iconColor: "text-palette-orange-500", // Diverse color
  },
  {
    id: "hr-recruiting",
    icon: Users,
    title: "HR & Recruiting (Global Focus)",
    description: "Build a strong global team with our comprehensive HR and recruitment solutions.",
    details: [
      "Contracts and NDA drafting with e-signatures", // Replaced
      "Applicant Tracking System (ATS) setup",
      "Onboarding and offboarding workflows",
      "HR policy and compliance guidance",
    ],
    iconColor: "text-primary", // Primary green
  },
  {
    id: "website-building",
    icon: Layout,
    title: "Website Building & Hosting",
    description: "Create a professional, high-performing website tailored to your business needs.",
    details: [
      "Custom website design and development",
      "Responsive and mobile-friendly layouts",
      "SEO optimization for better visibility",
      "Secure and reliable hosting solutions",
    ],
    iconColor: "text-palette-blue-500", // Diverse color
  },
  {
    id: "accounting",
    icon: DollarSign,
    title: "Accounting System Setup",
    description: "Set up efficient accounting systems for seamless financial management.",
    details: [
      "Chart of accounts configuration",
      "Invoicing and expense tracking setup",
      "Integration with payment gateways", // Amended
      "Basic financial reporting",
    ],
    iconColor: "text-palette-yellow-400", // Diverse color
  },
  {
    id: "social-media",
    icon: Palette,
    title: "Social Media Management",
    description: "Establish and manage your brand's presence across key social media platforms.",
    details: [
      "Platform setup and optimization",
      "Content strategy and calendar development",
      "Post design and scheduling",
      "Audience engagement strategies",
    ],
    iconColor: "text-palette-purple-400", // Diverse color
  },
  {
    id: "email-systems",
    icon: Mail,
    title: "Email Systems & Automation",
    description: "Develop effective email marketing and communication strategies.",
    details: [
      "Email platform setup", // Amended
      "Email template design",
      "Automated email sequences", // Amended
      "List management and segmentation",
    ],
    iconColor: "text-primary", // Primary green
  },
  {
    id: "crm-setup",
    icon: Settings,
    title: "CRM Setup & Optimization",
    description: "Implement Customer Relationship Management (CRM) systems to enhance customer interactions.",
    details: [
      "CRM platform selection and configuration", // Amended
      "Sales pipeline setup",
      "Customer data migration",
      "Reporting and analytics for customer insights",
    ],
    iconColor: "text-palette-blue-600", // Diverse color
  },
  {
    id: "integrations",
    icon: Lightbulb,
    title: "Platform Integrations",
    description: "Connect your essential business tools for seamless data flow and automation.",
    details: [
      "Integration strategy and planning",
      "Advanced integration setup", // Amended from "API and webhook configurations"
      "Data synchronization between platforms",
      "Custom automation workflows", // Amended
    ],
    iconColor: "text-palette-orange-400", // Diverse color
  },
  {
    id: "design-branding",
    icon: Palette,
    title: "Design & Branding",
    description: "Craft a compelling brand identity that resonates with your target audience.",
    details: [
      "Logo design and brand guidelines",
      "Marketing collateral design", // No change requested for this specific item
      "Website visual design",
      "Brand voice and messaging development",
    ],
    iconColor: "text-palette-purple-500", // Diverse color
  },
  {
    id: "analytics",
    icon: TrendingUp,
    title: "Analytics & Reporting",
    description: "Gain valuable insights into your business performance with robust analytics setup.",
    details: [
      "Google Analytics setup and configuration",
      "Custom dashboard creation",
      "Key Performance Indicator (KPI) tracking",
      "Monthly performance reports and recommendations",
    ],
    iconColor: "text-primary", // Primary green
  },
  {
    id: "migrations",
    icon: BookOpen,
    title: "Software Migrations",
    description: "Seamlessly transition your data and workflows to new platforms.",
    details: [
      "Data export and import management",
      "Workflow recreation on new platforms",
      "User training and support during transition",
      "Post-migration optimization",
    ],
    iconColor: "text-palette-red-400", // Diverse color
  },
  {
    id: "security-basics",
    icon: Shield,
    title: "Security Basics Setup",
    description: "Implement fundamental security measures to protect your business data.",
    details: [
      "Basic website security configurations",
      "User access management setup",
      "Data backup strategies",
      "Security best practices guidance",
    ],
    iconColor: "text-palette-blue-700", // Diverse color
  },
];

const Services = ({ setOpenBuildMyBusinessForm, setOpenCustomQuoteForm }: { setOpenBuildMyBusinessForm: (open: boolean) => void; setOpenCustomQuoteForm: (open: boolean) => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setOpenBuildMyBusinessForm={setOpenBuildMyBusinessForm} setOpenCustomQuoteForm={setOpenCustomQuoteForm} />
      <main className="flex-grow container py-16 md:py-24">
        <section className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Comprehensive Services
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed delay-200">
            Calpir offers a full suite of services designed to launch, optimize, and scale your business operations. From initial setup to ongoing support, we cover every aspect to ensure your success.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {servicesData.map((service, index) => (
            <section key={service.id} id={service.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-110 animate-slide-in-left" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <div className="flex items-center mb-6">
                <service.icon className={`h-12 w-12 mr-4 flex-shrink-0 ${service.iconColor}`} />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                  <p className="text-md text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              </div>
              <ul className="list-none space-y-3 text-left mb-8">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.1 + detailIndex * 0.05}s` }}>
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow"
                  onClick={() => setOpenCustomQuoteForm(true)}
                >
                  Get a Free Consultation
                </Button>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Consult with our experts and get to know the best platforms suitable for your business.
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer setOpenBuildMyBusinessForm={setOpenBuildMyBusinessForm} setOpenCustomQuoteForm={setOpenCustomQuoteForm} />
      <MadeWithDyad />
    </div>
  );
};

export default Services;
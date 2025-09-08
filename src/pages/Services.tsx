"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { CheckCircle, Globe, Layout, Palette, TrendingUp, Users, Briefcase, DollarSign, Settings, Shield, BookOpen, Lightbulb, Mail } from "lucide-react";

const servicesData = [
  {
    id: "operations-flows",
    icon: Globe,
    title: "Operations Flows Setup",
    description: "Streamline your business processes with efficient and automated operational workflows.",
    details: [
      "Process mapping and optimization",
      "Workflow automation setup",
      "Standard Operating Procedures (SOPs) documentation",
      "Inter-departmental communication setup",
    ],
  },
  {
    id: "project-management",
    icon: Briefcase,
    title: "Project Management Setup",
    description: "Implement robust project management systems to keep your projects on track and teams coordinated.",
    details: [
      "Tool selection and configuration (e.g., ClickUp, Asana, Jira)",
      "Project template creation",
      "Task management and tracking setup",
      "Reporting and analytics dashboards",
    ],
  },
  {
    id: "hr-recruiting",
    icon: Users,
    title: "HR & Recruiting (Global Focus)",
    description: "Build a strong global team with our comprehensive HR and recruitment solutions.",
    details: [
      "Global hiring strategy development",
      "Applicant Tracking System (ATS) setup",
      "Onboarding and offboarding workflows",
      "HR policy and compliance guidance",
    ],
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
  },
  {
    id: "accounting",
    icon: DollarSign,
    title: "Accounting System Setup",
    description: "Set up efficient accounting systems for seamless financial management.",
    details: [
      "Chart of accounts configuration",
      "Invoicing and expense tracking setup",
      "Integration with payment gateways (e.g., Stripe, PayPal)",
      "Basic financial reporting",
    ],
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
  },
  {
    id: "email-systems",
    icon: Mail,
    title: "Email Systems & Automation",
    description: "Develop effective email marketing and communication strategies.",
    details: [
      "Email platform setup (e.g., Mailchimp, Klaviyo)",
      "Email template design",
      "Automated email sequences (welcome, abandoned cart, etc.)",
      "List management and segmentation",
    ],
  },
  {
    id: "crm-setup",
    icon: Settings,
    title: "CRM Setup & Optimization",
    description: "Implement Customer Relationship Management (CRM) systems to enhance customer interactions.",
    details: [
      "CRM platform selection and configuration (e.g., HubSpot, Salesforce)",
      "Sales pipeline setup",
      "Customer data migration",
      "Reporting and analytics for customer insights",
    ],
  },
  {
    id: "integrations",
    icon: Lightbulb,
    title: "Platform Integrations",
    description: "Connect your essential business tools for seamless data flow and automation.",
    details: [
      "Integration strategy and planning",
      "API and webhook configurations",
      "Data synchronization between platforms",
      "Custom automation workflows (e.g., Zapier, Make)",
    ],
  },
  {
    id: "design-branding",
    icon: Palette,
    title: "Design & Branding",
    description: "Craft a compelling brand identity that resonates with your target audience.",
    details: [
      "Logo design and brand guidelines",
      "Marketing collateral design (e.g., business cards, brochures)",
      "Website visual design",
      "Brand voice and messaging development",
    ],
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
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-16 md:py-24 animate-fade-in-up">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Comprehensive Services
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Calpir offers a full suite of services designed to launch, optimize, and scale your business operations. From initial setup to ongoing support, we cover every aspect to ensure your success.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {servicesData.map((service) => (
            <section key={service.id} id={service.id} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01]">
              <div className="flex items-center mb-6">
                <service.icon className="h-12 w-12 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                  <p className="text-md text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              </div>
              <ul className="list-none space-y-3 text-left">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Services;
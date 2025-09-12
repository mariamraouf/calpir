"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlusCircle, BarChart2, Users, Headphones, Share2, Mail, Code, Shield, Layout, BookOpen, Settings, Clock, Puzzle, Globe, Palette, Briefcase, FileText, DollarSign, TrendingUp, Lightbulb, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PackageComparisonTable from "@/components/PackageComparisonTable"; // Import the new component
import PageHeader from "@/components/PageHeader"; // Import PageHeader

// Re-using servicesData from Services.tsx for Individual Services section
const servicesData = [
  {
    id: "website-building",
    icon: Layout,
    title: "Website Building & Hosting",
    investment: "$999",
    description: "Create a professional, high-performing website tailored to your business needs, including domain registration.",
    details: [
      "Custom website design and development",
      "5-10 pages included",
      "Secure and reliable hosting solutions",
      "Domain registration and setup",
      "Responsive and mobile-friendly layouts",
    ],
    iconColor: "text-palette-blue-500",
  },
  {
    id: "additional-website-pages",
    icon: Layout,
    title: "Additional Website Pages",
    investment: "$199/page",
    description: "Expand your website with professionally designed and developed extra pages.",
    details: [
      "Custom design for new pages",
      "Content integration and optimization",
      "Seamless navigation integration",
      "Responsive design for all devices",
    ],
    iconColor: "text-palette-blue-400",
  },
  {
    id: "seo-optimization",
    icon: Globe,
    title: "SEO Optimization",
    investment: "$599",
    description: "Improve your website's visibility on search engines to attract more organic traffic.",
    details: [
      "Keyword research and analysis",
      "On-page SEO optimization (meta tags, content)",
      "Technical SEO audit and fixes",
      "Local SEO strategies (if applicable)",
    ],
    iconColor: "text-palette-blue-700",
  },
  {
    id: "social-media-setup", // Standardized name
    icon: Share2,
    title: "Social Media Setup", // Standardized name
    investment: "$499", // Updated pricing
    description: "Establish and manage your brand's presence across key social media platforms.",
    details: [
      "Setup on 2 platforms",
      "Content strategy and calendar development",
      "Post design and scheduling",
      "Audience engagement strategies",
    ],
    iconColor: "text-palette-red-400",
  },
  {
    id: "design-branding",
    icon: Palette,
    title: "Design & Branding Package",
    investment: "$1,299",
    description: "Craft a compelling brand identity that resonates with your target audience.",
    details: [
      "Logo design and brand guidelines",
      "Marketing collateral design",
      "Website visual design",
      "Brand voice and messaging development",
    ],
    iconColor: "text-palette-purple-500",
  },
  {
    id: "email-systems",
    icon: Mail,
    title: "Email Systems & Automation Setup", // Standardized name
    investment: "$499", // Updated pricing
    description: "Develop effective email marketing and communication strategies.",
    details: [
      "Email platform setup",
      "Email template design",
      "Automated email sequences",
      "List management and segmentation",
    ],
    iconColor: "text-primary",
  },
  {
    id: "project-management",
    icon: Briefcase,
    title: "Project Management Setup",
    investment: "$799",
    description: "Implement robust project management systems to keep your projects on track and teams coordinated.",
    details: [
      "Tool selection and configuration",
      "Project template creation",
      "Task management and tracking setup",
      "Reporting and analytics dashboards",
    ],
    iconColor: "text-palette-orange-500",
  },
  {
    id: "operations-flows",
    icon: FileText,
    title: "Operations Flows Setup",
    investment: "$1,199",
    description: "Streamline your business processes with efficient and automated operational workflows.",
    details: [
      "Process mapping and optimization",
      "Workflow automation setup",
      "Standard Operating Procedures (SOPs) documentation",
      "Inter-departmental communication setup",
    ],
    iconColor: "text-primary",
  },
  {
    id: "crm-setup",
    icon: Settings,
    title: "CRM Setup & Optimization",
    investment: "$899",
    description: "Implement Customer Relationship Management (CRM) systems to enhance customer interactions.",
    details: [
      "CRM platform selection and configuration",
      "Sales pipeline setup",
      "Customer data migration",
      "Reporting and analytics for customer insights",
    ],
    iconColor: "text-palette-blue-600",
  },
  {
    id: "accounting",
    icon: DollarSign,
    title: "Accounting System Setup",
    investment: "$699",
    description: "Set up efficient accounting systems for seamless financial management.",
    details: [
      "Chart of accounts configuration",
      "Invoicing and expense tracking setup",
      "Integration with payment gateways",
      "Basic financial reporting",
    ],
    iconColor: "text-palette-yellow-400",
  },
  {
    id: "analytics",
    icon: TrendingUp,
    title: "Analytics & Reporting",
    investment: "$799",
    description: "Gain valuable insights into your business performance with robust analytics setup.",
    details: [
      "Google Analytics setup and configuration",
      "Custom dashboard creation",
      "Key Performance Indicator (KPI) tracking",
      "Monthly performance reports and recommendations",
    ],
    iconColor: "text-primary",
  },
  {
    id: "integrations",
    icon: Lightbulb,
    title: "Platform Integrations",
    investment: "$199/integration",
    description: "Connect your essential business tools for seamless data flow and automation.",
    details: [
      "Integration strategy and planning",
      "Advanced integration setup",
      "Data synchronization between platforms",
      "Custom automation workflows",
    ],
    iconColor: "text-palette-orange-400",
  },
  {
    id: "migrations",
    icon: BookOpen,
    title: "Software Migrations",
    investment: "$599-$1,499",
    description: "Seamlessly transition your data and workflows to new platforms. (Price varies based on complexity and number of platforms)",
    details: [
      "Data export and import management",
      "Workflow recreation on new platforms",
      "User training and support during transition",
      "Post-migration optimization",
    ],
    iconColor: "text-palette-red-400",
  },
  {
    id: "custom-automations",
    icon: Code,
    title: "Custom Automations",
    investment: "$299",
    description: "Automate repetitive tasks and complex workflows to boost efficiency and reduce manual effort.",
    details: [
      "Custom automation strategy and design",
      "Integration of automation tools",
      "Setup of multi-step workflows (5+ automations)",
      "Automated reporting and data synchronization",
    ],
    iconColor: "text-palette-orange-400",
  },
  {
    id: "hr-recruiting-system",
    icon: Users,
    title: "HR & Recruiting System",
    investment: "$1,299",
    description: "Build a strong global team with our comprehensive HR and recruitment solutions.",
    details: [
      "Applicant Tracking System (ATS) setup",
      "Contracts and NDA drafting with e-signatures",
      "Onboarding and offboarding workflows",
      "HR policy and compliance guidance",
    ],
    iconColor: "text-primary",
  },
  {
    id: "time-tracking",
    icon: Clock,
    title: "Time Tracking System Setup",
    investment: "$299",
    description: "Comprehensive setup of a time tracking tool with custom reports and integrations.",
    details: [
      "Time tracking tool selection and configuration",
      "Automated time logging setup",
      "Reporting for project hours and team activity",
      "Integration with project management and payroll systems",
    ],
    iconColor: "text-palette-orange-500",
  },
  {
    id: "performance-management",
    icon: TrendingUp,
    title: "Performance Management",
    investment: "$699",
    description: "Set up systems for employee performance tracking, reviews, and goal setting to foster growth.",
    details: [
      "Performance review system setup",
      "Goal setting and OKR tracking",
      "Feedback and recognition programs",
      "Employee development plans",
    ],
    iconColor: "text-palette-blue-600",
  },
  {
    id: "single-role-recruitment",
    icon: Users,
    title: "Single Role Recruitment",
    investment: "$449", // Changed from $450 to $449
    description: "Assistance with recruiting for one global role, from job posting to initial screening.",
    details: [
      "Job description optimization",
      "Posting on global job boards",
      "Candidate sourcing and initial screening",
      "Interview coordination and support",
    ],
    iconColor: "text-calpir-green-700",
  },
  {
    id: "multi-role-recruitment",
    icon: Users,
    title: "Multi-Role Recruitment",
    investment: "$699", // Changed from $700 to $699
    description: "Comprehensive support for recruiting multiple global roles simultaneously.",
    details: [
      "Strategic recruitment planning for multiple roles",
      "Volume candidate sourcing and management",
      "Streamlined interview processes",
      "Offer management and negotiation support",
    ],
    iconColor: "text-calpir-green-600",
  },
  {
    id: "comprehensive-recruitment",
    icon: Users,
    title: "Comprehensive Recruitment (3 months)",
    investment: "$4,999",
    description: "Dedicated recruitment partnership for three months, offering unlimited hiring support.",
    details: [
      "Full-cycle recruitment for unlimited roles",
      "Dedicated recruitment specialist",
      "Employer branding support",
      "Talent pipeline development",
    ],
    iconColor: "text-calpir-green-500",
  },
  {
    id: "basic-training-sessions",
    icon: BookOpen,
    title: "Basic Training Sessions",
    investment: "$199/hour",
    description: "Introductory training to get your team familiar with new systems and tools.",
    details: [
      "1-hour live online session",
      "Q&A and basic troubleshooting",
      "Access to recorded session",
    ],
    iconColor: "text-calpir-green-600",
  },
  {
    id: "monthly-support-package",
    icon: Headphones,
    title: "Monthly Support Package",
    investment: "$199/month",
    description: "Ongoing email support and monthly check-ins to ensure smooth operations.",
    details: [
      "Priority email support",
      "Monthly 30-minute strategy call",
      "System health checks",
      "Minor adjustments and updates",
    ],
    iconColor: "text-palette-purple-400",
  },
  {
    id: "premium-support-package",
    icon: Headphones,
    title: "Weekly Support Package", // Changed title
    investment: "$499/month",
    description: "Dedicated weekly calls and priority support for critical business needs.",
    details: [
      "Dedicated support manager",
      "Weekly 1-hour strategy calls",
      "24/7 emergency support",
      "Proactive system monitoring and optimization",
    ],
    iconColor: "text-palette-purple-500",
  },
];


const addOnsCategories = [
  {
    name: "Social Media Expansion",
    icon: Share2,
    iconColor: "text-palette-red-400",
    items: [
      { posts: "10 Posts/Month", price: "$199", description: "Professional social media posts with graphics" },
      { posts: "20 Posts/Month", price: "$349", description: "Enhanced content with stories and engagement" },
      { posts: "30 Posts/Month", price: "$499", description: "Full social media management with analytics" },
    ],
  },
  {
    name: "Email Marketing",
    icon: Mail,
    iconColor: "text-palette-orange-500",
    items: [
      { posts: "Email Systems & Automation Setup", price: "$499", description: "Develop effective email marketing and communication strategies." },
    ],
  },
  {
    name: "Analytics Upgrades",
    icon: BarChart2,
    iconColor: "text-palette-blue-500",
    items: [
      { posts: "Monthly Insights", price: "$199", description: "Monthly performance reports" },
      { posts: "Monthly Recommendations", price: "$249", description: "Detailed insights + recommendations" },
      { posts: "Real-time Analytics", price: "$399", description: "Real-time business intelligence" },
    ],
  },
  {
    name: "Ongoing Support",
    icon: Headphones,
    iconColor: "text-palette-purple-400",
    items: [
      { posts: "Monthly Emails", price: "$199", description: "Monthly strategy emails + support" },
      { posts: "Weekly Calls", price: "$499", description: "Weekly calls + priority support" },
    ],
  },
  {
    name: "Staff Recruitment (Global)",
    icon: Users,
    iconColor: "text-primary",
    items: [
      { posts: "1 Role", price: "$449", description: "Assistance with recruiting for one global role" }, // Changed from $450 to $449
      { posts: "2 Roles", price: "$699", description: "Assistance with recruiting for two global roles" }, // Changed from $700 to $699
      { posts: "3 Roles", price: "$899", description: "Assistance with recruiting for three global roles" }, // Changed from $900 to $899
      { posts: "Unlimited (3 months)", price: "$4,999", description: "Unlimited recruitment assistance for 3 months" },
    ],
  },
  {
    name: "Extra Integrations",
    icon: PlusCircle,
    iconColor: "text-palette-blue-600",
    items: [
      { posts: "Per Integration", price: "$199", description: "Setup and configuration for each additional platform integration" },
    ],
  },
  {
    name: "Website Expansions",
    icon: Layout,
    iconColor: "text-palette-purple-500",
    items: [
      { posts: "Per Page", price: "$199", description: "Development for each additional website page" },
      { posts: "E-commerce Functionality", price: "$499", description: "Setup for e-commerce capabilities" },
    ],
  },
  {
    name: "HR Customizations",
    icon: Settings,
    iconColor: "text-palette-yellow-400",
    items: [
      { posts: "One-time Setup", price: "$299", description: "Custom HR system setup and configuration" },
    ],
  },
  {
    name: "Training Sessions",
    icon: BookOpen,
    iconColor: "text-calpir-green-600",
    items: [
      { posts: "Per Hour", price: "$199", description: "Dedicated training sessions for your team" },
    ],
  },
  {
    name: "Custom Automations",
    icon: Code,
    iconColor: "text-palette-orange-400",
    items: [
      { posts: "For 5+ Automations", price: "$299", description: "Setup for 5 or more custom automation workflows" },
    ],
  },
  {
    name: "Security Basics",
    icon: Shield,
    iconColor: "text-palette-red-500",
    items: [
      { posts: "One-time Setup", price: "$299", description: "Basic security configurations and recommendations" },
    ],
  },
  {
    name: "Time Tracking", // New Add-on Category
    icon: Clock,
    iconColor: "text-palette-orange-500",
    items: [
      { posts: "Basic Setup", price: "$149", description: "Initial setup of a time tracking tool for small teams" },
      { posts: "Advanced Setup & Reporting", price: "$299", description: "Comprehensive setup with custom reports and integrations" },
      { posts: "Team Training & Optimization", price: "$399", description: "Training sessions for your team and workflow optimization" },
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Transparent Pricing for Every Business Stage"
          highlightWord="Pricing"
          description="Find the perfect solution for your business with our clear and flexible pricing. All packages are one-time setup/migration fees; clients are responsible for any tool subscriptions. Prices are globally affordable."
          buttons={[
            { text: "Start My Business", href: "/build-my-business", variant: "primary" },
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "outline", isExternal: true },
          ]}
        />

        {/* Navigation Buttons - Now Sticky */}
        <div className="sticky top-[80px] z-40 w-full bg-background dark:bg-gray-950 py-4 shadow-sm">
          <div className="container flex justify-center animate-fade-in-up delay-300">
            <div className="inline-flex items-center justify-center rounded-full bg-white dark:bg-gray-800 p-1 shadow-xl border border-gray-200 dark:border-gray-700 gap-1">
              <a href="#complete-packages">
                <Button
                  className="text-lg px-6 py-2 rounded-full transition-colors duration-200
                  bg-calpir-green-50 dark:bg-calpir-green-50
                  text-primary dark:text-primary
                  hover:bg-calpir-green-100 dark:hover:bg-calpir-green-200
                  data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  Complete Packages
                </Button>
              </a>
              <a href="#package-add-ons">
                <Button
                  className="text-lg px-6 py-2 rounded-full transition-colors duration-200
                  bg-calpir-green-50 dark:bg-calpir-green-50
                  text-primary dark:text-primary
                  hover:bg-calpir-green-100 dark:hover:bg-calpir-green-200
                  data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  Package Add-ons
                </Button>
              </a>
              <a href="#individual-services">
                <Button
                  className="text-lg px-6 py-2 rounded-full transition-colors duration-200
                  bg-calpir-green-50 dark:bg-calpir-green-50
                  text-primary dark:text-primary
                  hover:bg-calpir-green-100 dark:hover:bg-calpir-green-200
                  data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  Individual Services
                </Button>
              </a>
              <a href="#custom-solutions">
                <Button
                  className="text-lg px-6 py-2 rounded-full transition-colors duration-200
                  bg-calpir-green-50 dark:bg-calpir-green-50
                  text-primary dark:text-primary
                  hover:bg-calpir-green-100 dark:hover:bg-calpir-green-200
                  data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md"
                >
                  Custom Solutions
                </Button>
              </a>
            </div>
          </div>
        </div>
        {/* Add a div to provide spacing below the sticky nav when it's not sticking */}
        <div className="mb-16"></div>

        {/* Section 1: Complete Business Packages */}
        <section id="complete-packages" className="mb-20 container scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-400">
            Complete Business Packages
          </h2>
          <PackageComparisonTable />
        </section>

        {/* Section 3: Package Add-ons (Moved before Individual Services) */}
        <section id="package-add-ons" className="mb-20 container scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-1000">
            Enhance Your Package with Add-Ons
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {addOnsCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-110 transition-transform duration-300 hover:shadow-2xl animate-slide-in-left" style={{ animationDelay: `${1.1 + catIndex * 0.15}s` }}>
                <div className="flex items-center mb-6">
                  {category.icon && <category.icon className={`h-8 w-8 mr-3 ${category.iconColor}`} />}
                  <h3 className="text-2xl font-bold text-primary dark:text-calpir-green-400">{category.name}</h3>
                </div>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${1.2 + catIndex * 0.15 + itemIndex * 0.05}s` }}>
                      <div className="text-left mb-2 sm:mb-0 sm:mr-4">
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.posts}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-xl font-bold text-primary dark:text-calpir-green-300">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Individual Services (Moved after Package Add-ons) */}
        <section id="individual-services" className="mb-20 container scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white animate-fade-in-up delay-500">
            Individual Services
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed text-center mb-12 animate-fade-in-up delay-600">
            Perfect for specific business needs or as package add-ons.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {servicesData.map((service, index) => (
              <div key={service.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-slide-in-left" style={{ animationDelay: `${0.7 + index * 0.05}s` }}>
                <div className="flex items-center mb-6">
                  <service.icon className={`h-12 w-12 mr-4 flex-shrink-0 ${service.iconColor}`} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-md text-gray-600 dark:text-gray-400">{service.description}</p>
                  </div>
                </div>
                <div className="text-right mb-6">
                  <span className="text-3xl font-extrabold text-primary dark:text-calpir-green-300">{service.investment}</span>
                </div>
                <ul className="list-none space-y-3 text-left mb-8">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
                  <a href="https://calendly.com/your-calpir-consultation" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow"
                    >
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Custom Solutions */}
        <section id="custom-solutions" className="mt-20 mb-20 text-center p-8 rounded-2xl shadow-xl animate-fade-in-up delay-2000
                    bg-gradient-to-br from-calpir-green-50 to-palette-blue-50 dark:from-calpir-green-950 dark:to-palette-blue-950 max-w-4xl mx-auto scroll-mt-24">
          <Puzzle className="h-16 w-16 mx-auto mb-6 text-primary dark:text-calpir-green-300 animate-bounce-slow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Custom Add-On Packages & Platform Setups Available
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
            Need something specific, or a setup for a single platform not listed? We can create custom solutions tailored to your business needs. Contact us to discuss your requirements.
          </p>
          <Link to="/get-a-quote">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-calpir-green-600 text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:animate-button-glow"
            >
              Request Custom Set Up
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { CheckCircle, FileText, Layout, Palette, TrendingUp, Users, Briefcase, DollarSign, Settings, Shield, BookOpen, Lightbulb, Mail, Headphones, Puzzle, Clock, Globe, Code, Share2, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: "website-building",
    icon: Layout,
    title: "Website Building & Hosting",
    investment: "$999",
    description: "Create a professional, high-performing website tailored to your business needs, including domain registration (5-10 pages).",
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
    id: "ecommerce-functionality",
    icon: DollarSign,
    title: "E-commerce Functionality",
    investment: "$499",
    description: "Set up comprehensive e-commerce capabilities for your website, enabling online sales and product management.",
    details: [
      "Product catalog setup",
      "Shopping cart and checkout configuration",
      "Payment gateway integration",
      "Order management system setup",
    ],
    iconColor: "text-palette-yellow-400",
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
    id: "social-media-system-setup",
    icon: Share2,
    title: "Social Media System Setup",
    investment: "$799",
    description: "Establish and manage your brand's presence across key social media platforms (setup for 2 platforms).",
    details: [
      "Setup on 2 platforms",
      "Content strategy and calendar development",
      "Post design and scheduling",
      "Audience engagement strategies",
    ],
    iconColor: "text-palette-red-400",
  },
  {
    id: "social-media-expansion-10-posts",
    icon: Share2,
    title: "Social Media Expansion: 10 Posts/Month",
    investment: "$199/month",
    description: "Ongoing professional social media posts with graphics to maintain an active presence.",
    details: [
      "10 custom-designed posts per month",
      "Content creation and scheduling",
      "Platform-specific optimization",
      "Basic engagement monitoring",
    ],
    iconColor: "text-palette-red-300",
  },
  {
    id: "social-media-expansion-20-posts",
    icon: Share2,
    title: "Social Media Expansion: 20 Posts/Month",
    investment: "$349/month",
    description: "Enhanced social media content with stories and increased engagement for a more dynamic presence.",
    details: [
      "20 custom-designed posts per month",
      "Includes stories/reels content",
      "Advanced scheduling and analytics",
      "Proactive engagement strategies",
    ],
    iconColor: "text-palette-red-500",
  },
  {
    id: "social-media-expansion-30-posts",
    icon: Share2,
    title: "Social Media Expansion: 30 Posts/Month",
    investment: "$499/month",
    description: "Full social media management with comprehensive content, analytics, and community engagement.",
    details: [
      "30 custom-designed posts per month",
      "Full content calendar management",
      "Detailed monthly performance reports",
      "Community management and interaction",
    ],
    iconColor: "text-palette-red-600",
  },
  {
    id: "brand-identity-design",
    icon: Palette,
    title: "Brand Identity Design",
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
    id: "email-marketing-system-setup",
    icon: Mail,
    title: "Email Marketing System Setup",
    investment: "$899",
    description: "Develop comprehensive email marketing and communication strategies with advanced automation.",
    details: [
      "Advanced email platform setup",
      "Custom email template design",
      "Complex automated email sequences (e.g., welcome, abandoned cart)",
      "Advanced list management and segmentation",
      "Integration with CRM and other tools",
    ],
    iconColor: "text-primary",
  },
  {
    id: "basic-email-setup",
    icon: Mail,
    title: "Basic Email Setup",
    investment: "$499",
    description: "One-time setup of a foundational email marketing system for basic communication needs.",
    details: [
      "Basic email platform configuration",
      "Simple email template design",
      "Initial contact list import",
      "Basic welcome sequence setup",
    ],
    iconColor: "text-calpir-green-600",
  },
  {
    id: "email-marketing-3-campaigns",
    icon: Mail,
    title: "Email Marketing: 3 Campaigns/Month",
    investment: "$599/month",
    description: "Management and execution of three email marketing campaigns per month.",
    details: [
      "Content creation for 3 campaigns",
      "Audience segmentation and targeting",
      "A/B testing for optimization",
      "Performance tracking and reporting",
    ],
    iconColor: "text-calpir-green-500",
  },
  {
    id: "email-marketing-5-campaigns",
    icon: Mail,
    title: "Email Marketing: 5 Campaigns/Month",
    investment: "$699/month",
    description: "Management and execution of five email marketing campaigns per month with advanced strategies.",
    details: [
      "Content creation for 5 campaigns",
      "Advanced audience segmentation",
      "Comprehensive A/B testing and optimization",
      "Detailed performance analysis and recommendations",
    ],
    iconColor: "text-calpir-green-400",
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
  },
  {
    id: "analytics-monthly-insights",
    icon: BarChart2,
    title: "Analytics Upgrades: Monthly Insights",
    investment: "$199/month",
    description: "Receive monthly performance reports to track your business's key metrics.",
    details: [
      "Monthly data compilation and analysis",
      "Key metric tracking and visualization",
      "Summary of performance trends",
      "Delivered via email report",
    ],
    iconColor: "text-palette-blue-300",
  },
  {
    id: "analytics-monthly-recommendations",
    icon: BarChart2,
    title: "Analytics Upgrades: Monthly Recommendations",
    investment: "$249/month",
    description: "Detailed insights and actionable recommendations based on your monthly performance data.",
    details: [
      "All features of Monthly Insights",
      "In-depth analysis of data trends",
      "Actionable strategies for improvement",
      "Consultation call to discuss recommendations",
    ],
    iconColor: "text-palette-blue-400",
  },
  {
    id: "analytics-real-time",
    icon: BarChart2,
    title: "Analytics Upgrades: Real-time Analytics",
    investment: "$399/month",
    description: "Access real-time business intelligence dashboards for immediate data insights and decision-making.",
    details: [
      "All features of Monthly Recommendations",
      "Real-time data dashboard setup",
      "Customizable metrics and visualizations",
      "Alerts for critical changes",
    ],
    iconColor: "text-palette-blue-500",
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
    description: "Seamlessly transition your data and workflows to new platforms.",
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
    description: "Automate repetitive tasks and complex workflows to boost efficiency and reduce manual effort (for 5+ automations).",
    details: [
      "Custom automation strategy and design",
      "Integration of automation tools",
      "Setup of multi-step workflows (5+ automations)",
      "Automated reporting and data synchronization",
    ],
    iconColor: "text-palette-orange-400",
  },
  {
    id: "security-basics-setup",
    icon: Shield,
    title: "Security Basics Setup",
    investment: "$299",
    description: "One-time setup of fundamental security configurations and recommendations for your business systems.",
    details: [
      "Password manager setup",
      "Two-factor authentication (2FA) implementation",
      "Basic data backup recommendations",
      "Security best practices guidance",
    ],
    iconColor: "text-palette-red-500",
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
    id: "time-tracking-basic-setup",
    icon: Clock,
    title: "Time Tracking: Basic Setup",
    investment: "$149",
    description: "Initial setup of a time tracking tool for small teams to monitor work hours.",
    details: [
      "Basic time tracking tool configuration",
      "User setup and permissions",
      "Simple project/task assignment",
      "Basic time entry guidance",
    ],
    iconColor: "text-palette-orange-300",
  },
  {
    id: "time-tracking-advanced-setup",
    icon: Clock,
    title: "Time Tracking: Advanced Setup & Reporting",
    investment: "$299",
    description: "Comprehensive setup with custom reports, integrations, and advanced features.",
    details: [
      "Advanced tool configuration and customization",
      "Custom report generation and dashboards",
      "Integration with payroll/invoicing systems",
      "Workflow automation for time approval",
    ],
    iconColor: "text-palette-orange-500",
  },
  {
    id: "time-tracking-team-training",
    icon: Clock,
    title: "Time Tracking: Team Training & Optimization",
    investment: "$399",
    description: "Dedicated training sessions for your team and optimization of time tracking workflows.",
    details: [
      "Interactive team training sessions",
      "Best practices for accurate time entry",
      "Workflow optimization for efficiency",
      "Ongoing support and Q&A",
    ],
    iconColor: "text-palette-orange-600",
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
    investment: "$450",
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
    investment: "$700",
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
    title: "Premium Support Package",
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

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-16 md:py-24">
        <section className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Individual Business Services
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed delay-200">
            Need specific business solutions without a full package? Choose from our comprehensive individual services.
            <br />
            <span className="text-md text-gray-500 dark:text-gray-400 italic">Note: These services are also available as package add-ons at different pricing.</span>
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {servicesData.map((service, index) => (
            <section key={service.id} id={service.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-110 animate-slide-in-left" style={{ animationDelay: `${0.3 + index * 0.05}s` }}>
              <div className="flex items-center mb-6">
                <service.icon className={`h-12 w-12 mr-4 flex-shrink-0 ${service.iconColor}`} />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                  <p className="text-md text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              </div>
              <div className="text-right mb-6">
                <span className="text-3xl font-extrabold text-primary dark:text-calpir-green-300">{service.investment}</span>
              </div>
              <ul className="list-none space-y-3 text-left mb-8">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start text-gray-700 dark:text-gray-300 animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.05 + detailIndex * 0.02}s` }}>
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
                    Get a Free Consultation
                  </Button>
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Consult with our experts and get to know the best platforms suitable for your business.
                </p>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-20 text-center p-8 rounded-2xl shadow-xl animate-fade-in-up delay-1500
                    bg-gradient-to-br from-palette-blue-50 to-calpir-green-50 dark:from-palette-blue-950 dark:to-calpir-green-950 max-w-4xl mx-auto">
          <Puzzle className="h-16 w-16 mx-auto mb-6 text-primary dark:text-calpir-green-300 animate-bounce-slow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Need a Specific Platform Setup?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            If your business requires a specific platform setup or integration not explicitly listed in our packages or add-ons, we can still help! Our team specializes in tailoring solutions to your unique needs.
          </p>
          <Link to="/get-a-quote">
            <Button
              size="lg"
              className="bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg px-8 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:animate-button-glow"
            >
              Request a Custom Set Up
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Services;
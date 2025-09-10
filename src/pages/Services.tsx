"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { CheckCircle, FileText, Layout, Palette, TrendingUp, Users, Briefcase, DollarSign, Settings, Shield, BookOpen, Lightbulb, Mail, Headphones, Puzzle, Clock, Globe, Code } from "lucide-react"; // Added Globe and Code icons
import { Button } from "@/components/ui/button"; // Import Button component
import { Link } from "react-router-dom"; // Import Link for navigation

const servicesData = [
  {
    id: "operations-flows",
    icon: FileText,
    title: "Operations Flows Setup",
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
    id: "business-automations",
    icon: Code,
    title: "Business Automations",
    description: "Automate repetitive tasks and complex workflows to boost efficiency and reduce manual effort.",
    details: [
      "Custom automation strategy and design",
      "Integration of automation tools (e.g., Zapier, Make.com)",
      "Setup of multi-step workflows",
      "Automated reporting and data synchronization",
    ],
    iconColor: "text-palette-orange-400",
  },
  {
    id: "project-management",
    icon: Briefcase,
    title: "Project Management Setup",
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
    id: "performance-management",
    icon: TrendingUp,
    title: "Performance Management",
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
    id: "hr-recruiting",
    icon: Users,
    title: "HR & Recruiting (Global Focus)",
    description: "Build a strong global team with our comprehensive HR and recruitment solutions.",
    details: [
      "Contracts and NDA drafting with e-signatures",
      "Applicant Tracking System (ATS) setup",
      "Onboarding and offboarding workflows",
      "HR policy and compliance guidance",
    ],
    iconColor: "text-primary",
  },
  {
    id: "single-role-recruitment",
    icon: Users,
    title: "Single Role Recruitment",
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
    id: "website-building",
    icon: Layout,
    title: "Website Building & Hosting",
    description: "Create a professional, high-performing website tailored to your business needs, including domain registration.",
    details: [
      "Custom website design and development",
      "Responsive and mobile-friendly layouts",
      "Secure and reliable hosting solutions",
      "Domain registration and setup",
    ],
    iconColor: "text-palette-blue-500",
  },
  {
    id: "additional-website-pages",
    icon: Layout,
    title: "Additional Website Pages",
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
    description: "Integrate robust e-commerce capabilities into your website for online sales.",
    details: [
      "Product catalog setup and management",
      "Secure payment gateway integration",
      "Shopping cart and checkout optimization",
      "Inventory management features",
    ],
    iconColor: "text-palette-yellow-400",
  },
  {
    id: "seo-optimization",
    icon: Globe,
    title: "SEO Optimization",
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
    id: "accounting",
    icon: DollarSign,
    title: "Accounting System Setup",
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
    iconColor: "text-palette-purple-400",
  },
  {
    id: "email-systems",
    icon: Mail,
    title: "Email Systems & Automation",
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
    id: "crm-setup",
    icon: Settings,
    title: "CRM Setup & Optimization",
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
    id: "integrations",
    icon: Lightbulb,
    title: "Platform Integrations",
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
    id: "design-branding",
    icon: Palette,
    title: "Design & Branding",
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
    iconColor: "text-primary",
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
    iconColor: "text-palette-red-400",
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
    iconColor: "text-palette-blue-700",
  },
  {
    id: "time-tracking",
    icon: Clock,
    title: "Time Tracking System Setup",
    description: "Implement efficient time tracking solutions to monitor productivity and manage project hours accurately.",
    details: [
      "Time tracking tool selection and configuration",
      "Automated time logging setup",
      "Reporting for project hours and team activity",
      "Integration with project management and payroll systems",
    ],
    iconColor: "text-palette-orange-500",
  },
  {
    id: "basic-training-sessions",
    icon: BookOpen,
    title: "Basic Training Sessions",
    description: "Introductory training to get your team familiar with new systems and tools.",
    details: [
      "1-hour live online session",
      "Q&A and basic troubleshooting",
      "Access to recorded session",
    ],
    iconColor: "text-calpir-green-600",
  },
  {
    id: "advanced-systems-training",
    icon: BookOpen,
    title: "Advanced Systems Training",
    description: "In-depth training for complex systems, advanced features, and custom workflows.",
    details: [
      "2-hour live online session",
      "Customized curriculum based on your setup",
      "Advanced tips and best practices",
      "Dedicated follow-up support",
    ],
    iconColor: "text-calpir-green-700",
  },
  {
    id: "custom-workshop-development",
    icon: BookOpen,
    title: "Custom Workshop Development",
    description: "Tailored workshop designed to address specific team needs and challenges.",
    details: [
      "Full-day interactive workshop (virtual or on-site)",
      "Custom exercises and case studies",
      "Comprehensive training materials",
      "Post-workshop consultation",
    ],
    iconColor: "text-calpir-green-800",
  },
  {
    id: "team-certification-program",
    icon: BookOpen,
    title: "Team Certification Program",
    description: "Certify your team members on new platforms and systems with a structured program.",
    details: [
      "Multi-module training program",
      "Quizzes and practical assessments",
      "Official certification upon completion",
      "Ongoing access to learning resources",
    ],
    iconColor: "text-calpir-green-900",
  },
  {
    id: "comprehensive-training-program",
    icon: BookOpen,
    title: "Comprehensive Training Program",
    description: "An all-encompassing training solution for full team adoption and mastery of new systems.",
    details: [
      "Customized training roadmap",
      "Blended learning approach (live, self-paced)",
      "Dedicated training manager",
      "Performance tracking and reporting",
    ],
    iconColor: "text-calpir-green-900",
  },
  {
    id: "monthly-support-package",
    icon: Headphones,
    title: "Monthly Support Package",
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
    description: "Dedicated weekly calls and priority support for critical business needs.",
    details: [
      "Dedicated support manager",
      "Weekly 1-hour strategy calls",
      "24/7 emergency support",
      "Proactive system monitoring and optimization",
    ],
    iconColor: "text-palette-purple-500",
  },
  {
    id: "ongoing-security-monitoring",
    icon: Shield,
    title: "Ongoing Security Monitoring",
    description: "Continuous monitoring and proactive measures to protect your business from threats.",
    details: [
      "Real-time threat detection",
      "Vulnerability assessments",
      "Security incident response planning",
      "Regular security reports and recommendations",
    ],
    iconColor: "text-palette-red-500",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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

        {/* New section for custom platform setups */}
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
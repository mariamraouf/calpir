// src/data/addons.ts

export const addOnsOptions = [
  // Digital Foundation Services (now only Website & Online Presence)
  { category: "Digital Foundation Services", id: "website-expansions-per-page", label: "Website Expansions: Per Page ($199)", serviceId: "additional-website-pages" },
  { category: "Digital Foundation Services", id: "website-expansions-ecommerce", label: "Website Expansions: E-commerce Functionality ($499)", serviceId: "ecommerce-functionality" },
  { category: "Digital Foundation Services", id: "seo-optimization-addon", label: "SEO Optimization: One-time Setup ($499)", serviceId: "seo-optimization" },

  // Social Media & Marketing (now a top-level category)
  { category: "Social Media & Marketing", id: "social-media-5-posts", label: "Social Media Content: 5 Posts/Month ($199)", serviceId: "social-media-setup" },
  { category: "Social Media & Marketing", id: "social-media-10-posts", label: "Social Media Content: 10 Posts/Month ($349)", serviceId: "social-media-setup" },
  { category: "Social Media & Marketing", id: "social-media-15-posts", label: "Social Media Content: 15 Posts/Month ($649)", serviceId: "social-media-setup" },
  { category: "Social Foundation Services", id: "email-marketing-setup", label: "Email System Setup ($499)", serviceId: "email-systems" },

  // Operations & Management Services (now only Business Systems)
  { category: "Operations & Management Services", id: "analytics-google-analytics-setup", label: "Analytics & Reporting (Google Analytics setup) ($699)", serviceId: "analytics" },
  { category: "Operations & Management Services", id: "security-basics-setup", label: "Security Basics: One-time Setup ($299)", serviceId: "security-basics" },
  { category: "Operations & Management Services", id: "time-tracking-setup", label: "Time Tracking: One-time Setup ($499)", serviceId: "time-tracking" },
  { category: "Operations & Management Services", id: "sop-creation", label: "Standard Operating Procedures (SOPs) ($299)", serviceId: "sop-creation" }, // NEW ADD-ON

  // Platform & Integration Services (now a top-level category)
  { category: "Platform & Integration Services", id: "extra-integrations-per", label: "Extra Integrations: Per Integration ($199)", serviceId: "integrations" },
  { category: "Platform & Integration Services", id: "custom-automations-3-plus", label: "Custom Automations: For 3 Automations ($299)", serviceId: "custom-automations" },

  // Human Resources Services (already simplified)
  { category: "Human Resources Services", id: "hr-legal-compliance", label: "Legal & Compliance ($499)", serviceId: "hr-legal-compliance" },
  { category: "Human Resources Services", id: "application-tracking-system", label: "Application Tracking System ($599)", serviceId: "application-tracking-system" }, // RENAMED
  { category: "Human Resources Services", id: "hr-operations-payroll", label: "HR Operations & Payroll ($799)", serviceId: "hr-operations-payroll" },
  { category: "Human Resources Services", id: "hr-foundation-package", label: "HR Foundation ($1,249)", serviceId: "hr-foundation-package" },
];
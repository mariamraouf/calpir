// src/data/addons.ts

export const addOnsOptions = [
  // Digital Foundation Services
  { category: "Digital Foundation Services", subcategory: "Website & Online Presence", id: "website-expansions-per-page", label: "Website Expansions: Per Page ($199)", serviceId: "additional-website-pages" },
  { category: "Digital Foundation Services", subcategory: "Website & Online Presence", id: "website-expansions-ecommerce", label: "Website Expansions: E-commerce Functionality ($499)", serviceId: "ecommerce-functionality" },
  { category: "Digital Foundation Services", subcategory: "Website & Online Presence", id: "seo-optimization-addon", label: "SEO Optimization: One-time Setup ($499)", serviceId: "seo-optimization" }, // NEW ADD-ON
  { category: "Digital Foundation Services", subcategory: "Social Media & Marketing", id: "social-media-5-posts", label: "Social Media Content: 5 Posts/Month ($199)", serviceId: "social-media-setup" }, // AMENDED
  { category: "Digital Foundation Services", subcategory: "Social Media & Marketing", id: "social-media-10-posts", label: "Social Media Content: 10 Posts/Month ($349)", serviceId: "social-media-setup" }, // AMENDED
  { category: "Digital Foundation Services", subcategory: "Social Media & Marketing", id: "social-media-15-posts", label: "Social Media Content: 15 Posts/Month ($649)", serviceId: "social-media-setup" }, // AMENDED
  { category: "Digital Foundation Services", subcategory: "Social Media & Marketing", id: "email-marketing-setup", label: "Email System Setup ($499)", serviceId: "email-systems" }, // AMENDED LABEL & PRICE

  // Operations & Management Services
  { category: "Operations & Management Services", subcategory: "Business Systems", id: "analytics-google-analytics-setup", label: "Analytics & Reporting (Google Analytics setup) ($699)", serviceId: "analytics" }, // NEW ADD-ON
  // Removed: Analytics Upgrades: Monthly Insights, Monthly Recommendations, Real-time Analytics
  { category: "Operations & Management Services", subcategory: "Platform & Integration Services", id: "extra-integrations-per", label: "Extra Integrations: Per Integration ($199)", serviceId: "integrations" },
  { category: "Operations & Management Services", subcategory: "Platform & Integration Services", id: "custom-automations-3-plus", label: "Custom Automations: For 3 Automations ($299)", serviceId: "custom-automations" }, // AMENDED
  { category: "Operations & Management Services", subcategory: "Business Systems", id: "security-basics-setup", label: "Security Basics: One-time Setup ($299)", serviceId: "security-basics" },
  { category: "Operations & Management Services", subcategory: "Business Systems", id: "time-tracking-setup", label: "Time Tracking: One-time Setup ($499)", serviceId: "time-tracking" }, // AMENDED PRICE

  // Human Resources Services
  { category: "Human Resources Services", subcategory: "HR Foundation", id: "hr-legal-compliance", label: "Legal & Compliance ($499)", serviceId: "hr-legal-compliance" }, // NEW HR SERVICE
  { category: "Human Resources Services", subcategory: "Talent Acquisition", id: "hr-recruiting-hiring", label: "Recruiting & Hiring ($599)", serviceId: "hr-recruiting-hiring" }, // NEW HR SERVICE
  { category: "Human Resources Services", subcategory: "HR Operations", id: "hr-operations-payroll", label: "HR Operations & Payroll ($799)", serviceId: "hr-operations-payroll" }, // NEW HR SERVICE
  { category: "Human Resources Services", subcategory: "HR Foundation", id: "hr-foundation-package", label: "HR Foundation ($1,249)", serviceId: "hr-foundation-package" }, // NEW HR SERVICE

  // Removed: All previous Staff Recruitment add-ons
  // Removed: All Training & Support Services (Monthly Support Package, Premium Support Package)
];
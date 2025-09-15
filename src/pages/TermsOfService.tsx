"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader"; // Import PageHeader
import BreadcrumbSchema from "@/components/BreadcrumbSchema"; // Import the new schema component

const TermsOfService = () => {
  const breadcrumbItems = [
    { name: "Home", item: "https://www.calpir.com/" },
    { name: "Terms of Service", item: "https://www.calpir.com/terms-of-service" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Terms of Service"
          description="Welcome to Calpir! By using our services, you're agreeing to these terms. It's all about keeping things fair and clear for everyone, so give them a read."
          buttons={[
            { text: "Start My Business", href: "/build-my-business", variant: "primary", isExternal: true },
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "outline", isExternal: true },
          ]}
        />

        <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-300 text-gray-800 dark:text-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the Calpir website and services ("Services"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Description of Service</h2>
            <p className="mb-4">
              Calpir provides business setup and software migration services for startups and businesses, including operations, HR, website building, social media, email systems, CRM, integrations, design, analytics, and marketing. All services are subject to the terms of the chosen package and any additional add-ons.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Client Responsibilities</h2>
            <p className="mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
              <li>Providing accurate and complete information required for service delivery.</li>
              <li>Paying for any third-party software subscriptions, licenses, or tools recommended or set up by Calpir.</li>
              <li>Reviewing and approving all deliverables in a timely manner.</li>
              <li>Ensuring compliance with all applicable laws and regulations related to their business operations.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Payment and Fees</h2>
            <p className="mb-4">
              All package prices and add-on fees are one-time charges for setup and migration services, unless otherwise specified. Payment terms will be outlined in your service agreement. Calpir reserves the right to change pricing at any time, but changes will not affect services already purchased.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Limitation of Liability</h2>
            <p className="mb-4">
              Calpir will not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use or the inability to use the service.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">6. Intellectual Property</h2>
            <p className="mb-4">
              All content, trademarks, and data on this website, including but not limited to text, graphics, logos, icons, images, and software, are the property of Calpir or its content suppliers and are protected by international copyright laws.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">7. Governing Law</h2>
            <p className="mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">8. Changes to Terms</h2>
            <p className="mb-4">
              Calpir reserves the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new Terms of Service on this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms of Service.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">9. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at <a href="mailto:contact@calpir.com" className="text-primary hover:underline">contact@calpir.com</a>.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 italic">
              These Terms of Service were last updated on: **October 26, 2024**.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default TermsOfService;
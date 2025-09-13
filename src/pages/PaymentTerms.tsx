"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

const PaymentTerms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Payment Terms"
          description="Understanding our payment process is simple and transparent. Here’s how we handle payments for our services."
          buttons={[
            { text: "Start My Business", href: "/build-my-business", variant: "primary" },
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "outline", isExternal: true },
          ]}
        />

        <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-300 text-gray-800 dark:text-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. General Payment Structure</h2>
            <p className="mb-4">
              For most of our packages and individual services, we operate on a two-phase payment structure to ensure mutual commitment and satisfaction:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6 space-y-2">
              <li><strong>50% Upfront Payment:</strong> A deposit of 50% of the total service fee is required before the commencement of any work. This secures your project slot and allows us to allocate resources and begin strategic planning.</li>
              <li><strong>50% Upon Completion:</strong> The remaining 50% of the payment is due upon the successful completion of the agreed-upon services and client approval. We ensure all deliverables meet your expectations before final payment is requested.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Payment Plans for Ultimate Packages</h2>
            <p className="mb-4">
              For our comprehensive Ultimate Package, we understand the investment involved and offer more flexible payment options:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6 space-y-2">
              <li><strong>3-Month Payment Plan:</strong> Clients opting for the Ultimate Package can choose a 3-month payment plan. This typically involves an initial deposit followed by two equal monthly installments. Specific terms will be detailed in your service agreement.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Accepted Payment Methods</h2>
            <p className="mb-4">
              We accept various secure payment methods, which will be communicated during the invoicing process.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Invoicing and Due Dates</h2>
            <p className="mb-4">
              Invoices will be issued electronically with clear due dates. Timely payment ensures uninterrupted service delivery. Late payments may incur additional fees as outlined in your service agreement.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Refunds and Cancellations</h2>
            <p className="mb-4">
              Details regarding refunds and cancellations are outlined in our <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>. We strive for client satisfaction and will work with you to resolve any concerns.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 italic">
              These Payment Terms were last updated on: <strong>October 26, 2024</strong>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default PaymentTerms;
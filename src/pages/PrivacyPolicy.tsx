"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom"; // Import Link

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-16 md:py-24">
        <section className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed delay-200">
            Your privacy is critically important to us. This Privacy Policy outlines how Calpir collects, uses, maintains, and discloses information collected from users of the Calpir website.
          </p>
        </section>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-300 text-gray-800 dark:text-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, phone number, company name. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. How We Use Collected Information</h2>
          <p className="mb-4">
            Calpir may collect and use Users personal information for the following purposes:
          </p>
          <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
            <li>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
            <li>To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
            <li>To improve our Site: We may use feedback you provide to improve our products and services.</li>
            <li>To send periodic emails: We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. How We Protect Your Information</h2>
          <p className="mb-4">
            We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">4. Sharing Your Personal Information</h2>
          <p className="mb-4">
            We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">5. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            Calpir has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">6. Your Acceptance of These Terms</h2>
          <p className="mb-4">
            By using this Site, you signify your acceptance of this policy and <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 italic">
            This Privacy Policy was last updated on: **October 26, 2024**.
          </p>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default PrivacyPolicy;
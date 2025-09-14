"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Mail, MapPin } from "lucide-react"; // Added MapPin
import PageHeader from "@/components/PageHeader";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Get in Touch"
          description="Got questions? Or just ready to chat about your big idea? Hit us up! Reach out to us via email or find us at our office in Bristol, UK. We're here to listen and help, no pressure."
          buttons={[
            { text: "Start My Business", href: "/build-my-business", variant: "primary", isExternal: true },
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "outline", isExternal: true },
          ]}
        />

        <section className="container py-16 md:py-24">
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Contact Us Directly</h2>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
              We're here to help! Reach out to us via email or find us at our office in Bristol, UK.
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary mr-4" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email Us</p>
                  <a href="mailto:contact@calpir.com" className="text-primary hover:underline dark:text-calpir-green-400">contact@calpir.com</a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary mr-4" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Our Office</p>
                  <p className="text-gray-700 dark:text-gray-300">123 Innovation Drive</p>
                  <p className="text-gray-700 dark:text-gray-300">Bristol, BS1 1AA</p>
                  <p className="text-gray-700 dark:text-gray-300">United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Contact;
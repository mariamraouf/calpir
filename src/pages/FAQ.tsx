"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = {
  "General & Pricing FAQs": [
    {
      question: "What's included in the one-time setup fee?",
      answer: (
        <>
          Everything listed in your chosen package - development, setup, configuration, and initial training. You only pay for ongoing tool subscriptions separately. For a detailed breakdown, visit our{" "}
          <Link to="/pricing#complete-packages" className="text-primary hover:underline">Pricing page</Link>.
        </>
      ),
    },
    {
      question: "Do I need to pay for software subscriptions?",
      answer:
        "Yes, clients are responsible for all third-party tool subscriptions (like ClickUp, Mailchimp, etc.). We'll recommend the most cost-effective plans for your needs.",
    },
    {
      question: "Can I upgrade my package after starting?",
      answer:
        "Absolutely! You can upgrade to a higher package or add individual services at any time. We'll credit what you've already paid.",
    },
    {
      question: "Do you offer payment plans?",
      answer: (
        <>
          Yes, we typically require 50% upfront and 50% upon completion. For Ultimate packages, we offer 3-month payment plans. You can find more details on our{" "}
          <Link to="/payment-terms" className="text-primary hover:underline">Payment Terms page</Link>.
        </>
      ),
    },
    {
      question: "What if I only need 2-3 services instead of a full package?",
      answer: (
        <>
          You can purchase individual services separately. However, packages offer significant savings if you need 4+ services. Explore all options on our{" "}
          <Link to="/services" className="text-primary hover:underline">Services page</Link>.
        </>
      ),
    },
  ],
  "Timeline & Process FAQs": [
    {
      question: "What does '7-day launch' actually mean?",
      answer:
        "From the moment you approve our strategy, your Starter package will be fully set up and ready to use within 7 business days.",
    },
    {
      question: "What do I need to provide to get started?",
      answer:
        "Your business information, content (text, images, brand colors if you have them), and access to accounts we'll be setting up. We'll send you a detailed checklist.",
    },
    {
      question: "What happens if there are delays on my end?",
      answer:
        "Your timeline pauses until you provide the needed information. We'll keep you on track with regular check-ins.",
    },
    {
      question: "Can I make changes during the setup process?",
      answer:
        "Minor changes are included. Major scope changes may require additional fees or timeline adjustments.",
    },
  ],
  "Technical & Support FAQs": [
    {
      question: "What if I don't like the website design?",
      answer:
        "Each package includes revision rounds. Starter: 2 revisions, Growth: 3 revisions, Ultimate: unlimited until you're satisfied.",
    },
    {
      question: "Do you provide training on the systems you set up?",
      answer:
        "Yes! All packages include training sessions to ensure you can use everything we've built for you.",
    },
    {
      question: "What if something breaks after launch?",
      answer:
        "We guarantee our work for 30 days. Any setup issues are fixed free of charge during this period.",
    },
    {
      question: "Do all packages receive a manual on how to use the system?",
      answer:
        "Yes, every package includes a comprehensive manual and documentation to guide you through using your newly set up systems effectively.",
    },
  ],
  "Business-Specific FAQs": [
    {
      question: "I already have a website. Can you improve it instead of starting over?",
      answer: (
        <>
          Yes! We offer website migrations and improvements. This falls under our custom solutions -{" "}
          <Link to="/get-a-quote" className="text-primary hover:underline">contact us for a quote</Link>.
        </>
      ),
    },
    {
      question: "Can you work with my existing tools?",
      answer:
        "Absolutely. We can integrate with your current systems or recommend better alternatives if needed. Check out our extensive list of supported platforms on the " +
        "<Link to='/platforms' className='text-primary hover:underline'>Platforms page</Link>.",
    },
    {
      question: "I'm not tech-savvy. Will I be able to manage everything after setup?",
      answer:
        "That's exactly why we exist! We set everything up to be user-friendly and provide comprehensive training.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with all industries - from e-commerce to consulting, SaaS to local services. Our systems are adaptable to any business model.",
    },
  ],
  "Comparison & Decision FAQs": [
    {
      question: "How is this different from hiring individual freelancers?",
      answer:
        "We're a coordinated team using proven systems. No miscommunication, faster delivery, and everything works together seamlessly.",
    },
    {
      question: "Why should I choose Calpir over other business setup services?",
      answer:
        "Our team isn't just another agency - we're startup veterans who've been in the trenches. Each specialist has years of hands-on experience launching businesses globally, and we've combined our expertise into one powerhouse team. While others are still figuring things out, we've already perfected the 7-day launch method with 300+ platform integrations and saved our clients over $500K in setup costs.",
    },
    {
      question: "Can I start with a smaller package and add more later?",
      answer:
        "Yes! Many clients start with Starter and upgrade as they grow. We make the transition seamless.",
    },
    {
      question: "What if I need something not listed in any package?",
      answer: (
        <>
          We offer custom solutions!{" "}
          <Link to="/get-a-quote" className="text-primary hover:underline">Contact us</Link> with your specific needs, and we'll create a tailored proposal.
        </>
      ),
    },
  ],
};

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Frequently Asked Questions"
          highlightWord="Questions"
          description="Find quick answers to common questions about our services, pricing, process, and more."
          buttons={[
            { text: "Start My Business", href: "/build-my-business", variant: "primary" },
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "outline", isExternal: true },
          ]}
        />

        <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-300">
            {Object.entries(faqs).map(([category, items], catIndex) => (
              <div key={category} className="mb-10 last:mb-0">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-3 animate-fade-in-up" style={{ animationDelay: `${0.4 + catIndex * 0.1}s` }}>
                  {category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {items.map((faq, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${catIndex}-${itemIndex}`} className="border-b border-gray-200 dark:border-gray-700 animate-fade-in-up" style={{ animationDelay: `${0.5 + catIndex * 0.1 + itemIndex * 0.05}s` }}>
                      <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 dark:text-gray-200 hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default FAQ;
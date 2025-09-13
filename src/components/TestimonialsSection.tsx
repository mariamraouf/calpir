"use client";

import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Calpir transformed our startup. Their 7-day launch method was incredibly efficient, and the results exceeded our expectations!",
    author: "Jane Doe",
    title: "CEO, Tech Innovators",
  },
  {
    quote: "The team at Calpir is exceptional. They streamlined our operations and built a stunning website, all within our budget and timeline.",
    author: "John Smith",
    title: "Founder, Creative Solutions",
  },
  {
    quote: "We couldn't be happier with Calpir's support. Their expertise in integrations and marketing systems gave us a significant competitive edge.",
    author: "Emily White",
    title: "Operations Manager, Global Ventures",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200">
          Hear from the businesses we've helped launch and grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-zoom-in"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <Quote className="h-12 w-12 mb-4 text-primary dark:text-calpir-green-300" />
              <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
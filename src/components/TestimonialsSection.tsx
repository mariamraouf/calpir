"use client";

import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Calpir transformed our operations in just a week! Their expertise and speed are unmatched.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators",
  },
  {
    quote: "The website and branding package exceeded our expectations. Professional and highly effective.",
    name: "John Smith",
    title: "Founder, Creative Solutions",
  },
  {
    quote: "Finally, a team that understands our needs and delivers. Our marketing systems are now seamless.",
    name: "Emily White",
    title: "Marketing Director, Global Reach",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white animate-fade-in-up">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 animate-zoom-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <Quote className="h-10 w-10 text-primary mb-4" />
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
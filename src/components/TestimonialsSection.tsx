"use client";

import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Calpir transformed our startup. Their 7-day launch method was incredibly efficient and delivered beyond our expectations!",
    author: "Jane Doe",
    title: "CEO, Tech Innovators",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=JD",
  },
  {
    quote: "The team at Calpir is exceptional. They streamlined our operations and built a fantastic website, all within budget.",
    author: "John Smith",
    title: "Founder, Creative Solutions",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=JS",
  },
  {
    quote: "Highly recommend Calpir for any business looking to scale quickly. Their expertise in integrations saved us months of work.",
    author: "Emily White",
    title: "Operations Manager, Global Ventures",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=EW",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Hear directly from entrepreneurs who have successfully launched and scaled their businesses with Calpir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <Quote className="h-10 w-10 mb-4 text-primary opacity-70" />
              <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="h-16 w-16 rounded-full mb-3 border-2 border-primary"
              />
              <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
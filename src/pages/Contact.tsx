"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react"; // Removed Phone, MapPin
import { toast } from "sonner";
import PageHeader from "@/components/PageHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Your message has been sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Get in Touch"
          description="Got questions? Or just ready to chat about your big idea? Hit us up! Fill out the form below, or shoot us an email. We're here to listen and help, no pressure."
          buttons={[
            { text: "Start My Business", href: "/build-my-business", variant: "primary" },
            { text: "Get a Free Consultation", href: "https://calendly.com/your-calpir-consultation", variant: "outline", isExternal: true },
          ]}
        />

        <section className="container py-16 md:py-24">
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="mt-1 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 rounded-2xl"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-calpir-green-700 text-white hover:text-white text-lg py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:animate-button-glow transform hover:scale-110">
                Send Message
              </Button>
            </form>
            <div className="flex items-center mt-8 justify-center">
              <Mail className="h-6 w-6 text-primary mr-4" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Email Us</p>
                <a href="mailto:contact@calpir.com" className="text-primary hover:underline dark:text-calpir-green-400">contact@calpir.com</a>
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
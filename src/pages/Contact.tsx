"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// Removed unused imports from "@/components/ui/form"
import { toast } from "sonner"; // Using sonner for toasts
import LocalBusinessSchema from "@/components/LocalBusinessSchema"; // Import the new schema component
import { Mail, CalendarDays, Layout, DollarSign, Info, MessageSquareText } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const CALENDLY_CONSULTATION_URL = "https://calendly.com/mariam-calpir/30min";
const BUILD_MY_BUSINESS_URL = "https://forms.clickup.com/9015087055/f/8cnekyf-7975/TZ1NJ34TI8S352Q2G5";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real application, you would send this data to a backend service.
    // For now, we'll just show a toast notification.
    toast.success("Your message has been sent!", {
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <LocalBusinessSchema
        name="Calpir"
        image="https://www.calpir.com/calpir-logo.png"
        url="https://www.calpir.com"
        telephone="+1-555-CALPIR" // Placeholder, replace with actual
        streetAddress="123 Business Lane" // Placeholder, replace with actual
        addressLocality="Startup City" // Placeholder, replace with actual
        addressRegion="ST" // Placeholder, replace with actual
        postalCode="12345" // Placeholder, replace with actual
        addressCountry="US" // Placeholder, replace with actual
        priceRange="$1499 - $5999"
        openingHours={[
          { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" }
        ]}
        areaServed={["Global"]} // Adjust if specific cities are targeted
        hasMap="https://www.google.com/maps/place/Calpir" // Placeholder, link to GMB map
        ratingValue="4.9" // Placeholder, based on actual reviews
        reviewCount="75" // Placeholder, based on actual reviews
      />
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="Let's Connect & Build Something Awesome!"
          highlightWord="Connect"
          description="Got questions, a brilliant idea, or just want to chat about how we can supercharge your business? We're all ears! Reach out, book a call, or explore our resources. We're here to make your journey smoother and more successful."
          buttons={[
            { text: "Start My Business", href: BUILD_MY_BUSINESS_URL, variant: "primary", isExternal: true },
            { text: "Get a Free Consultation", href: CALENDLY_CONSULTATION_URL, variant: "outline", isExternal: true },
          ]}
        />

        <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-12"> {/* Changed grid-cols-2 to grid-cols-1 */}
            {/* Contact Options */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-up delay-300">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Directly Connect</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Whether you're ready to dive in or just have a quick question, we're here to help. Choose the best way to reach us!
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email Us Directly</p>
                    <a href="mailto:contact@calpir.com" className="text-primary hover:underline dark:text-calpir-green-400">contact@calpir.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Book a Free Consultation</p>
                    <a href={CALENDLY_CONSULTATION_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline dark:text-calpir-green-400">Schedule a 30-min chat</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquareText className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Request a Custom Setup</p>
                    <a href="https://forms.clickup.com/9015087055/f/8cnekyf-7955/T9A15GLMNY3RJ1NHH3" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline dark:text-calpir-green-400">Tell us your needs</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - REMOVED */}
          </div>

          {/* Quick Links Section */}
          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-calpir-green-50 to-palette-blue-50 dark:from-calpir-green-950 dark:to-palette-blue-950 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 text-center animate-fade-in-up delay-500">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Need More Info? Quick Links!</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our site for detailed information on our offerings, or find answers to common questions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/services" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                <Layout className="h-8 w-8 text-palette-blue-500 mb-2" />
                <span className="font-semibold text-gray-900 dark:text-white">Our Services</span>
              </Link>
              <Link to="/pricing" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                <DollarSign className="h-8 w-8 text-calpir-green-700 mb-2" />
                <span className="font-semibold text-gray-900 dark:text-white">Pricing Details</span>
              </Link>
              <Link to="/faq" className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                <Info className="h-8 w-8 text-palette-purple-500 mb-2" />
                <span className="font-semibold text-gray-900 dark:text-white">Frequently Asked Questions</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
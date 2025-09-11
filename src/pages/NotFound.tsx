"use client";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import PageHeader from "@/components/PageHeader"; // Import PageHeader
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="404 Page Not Found"
          highlightWord="404"
          description="Oops! The page you are looking for does not exist. It might have been moved or deleted."
          buttons={[
            { text: "Return to Home", href: "/", variant: "primary" },
            { text: "Contact Support", href: "/contact", variant: "outline" },
          ]}
        />
        {/* The rest of the content can be removed or kept if needed below the header */}
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default NotFound;
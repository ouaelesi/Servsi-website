import ContactForm from "@/components/contactPage/ContactForm";
import ContactHeader from "@/components/contactPage/header";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"], // Example weights
  subsets: ["latin"],
  display: "swap", // Optimizes font loading
  variable: "--font-montserrat", // Optional: for CSS variables
});

export default function ContactPage() {
  return (
    <div className={montserrat.className}>
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

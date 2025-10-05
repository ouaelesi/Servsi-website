import ContactSection from "@/components/contactPage/ContactSection";
import ContactHeader from "@/components/contactPage/header";
import Partners from "@/components/contactPage/Partners";
import TrustedBySection from "@/components/contactPage/TrustedBy";
import FAQAccordion from "@/components/FaqSection";
import PartnersSlider from "@/components/PartnersSlider";
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
    <div className={montserrat.className + " bg-[#FAFAFA]"}>
      <ContactHeader />
      <ContactSection />
      <Partners />
      <TrustedBySection/>
      <FAQAccordion />
    </div>
  );
}

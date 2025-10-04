import AboutUsSection from "@/components/AboutUs";
import CtaBanner from "@/components/BannerSection";
import FAQAccordion from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/Testimonials";
import WhyUsSection from "@/components/WhyUsSection";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"], // Example weights
  subsets: ["latin"],
  display: "swap", // Optimizes font loading
  variable: "--font-montserrat", // Optional: for CSS variables
});

export default function Home() {
  return (
    <div className={montserrat.className}>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <PartnersSection />
      <WhyUsSection />
      <TestimonialsSection />

      <FAQAccordion />
      <CtaBanner />
    </div>
  );
}

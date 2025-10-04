import AboutHeader from "@/components/AboutPage/AboutHeader";
import AwardsSection from "@/components/AboutPage/AwardsSection";
import DirectorMessage from "@/components/AboutPage/DirectorMessage";
import TeamMarquee from "@/components/AboutPage/OurTeam";
import StrategySection from "@/components/AboutPage/StrategySection";
import CtaBanner from "@/components/BannerSection";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"], // Example weights
  subsets: ["latin"],
  display: "swap", // Optimizes font loading
  variable: "--font-montserrat", // Optional: for CSS variables
});
export default function AboutPage() {
  return (
    <div className={montserrat.className}>
      <AboutHeader />
      <StrategySection />
      <AwardsSection />
      <DirectorMessage/>
      {/* <TeamMarquee /> */}
      <CtaBanner />
    </div>
  );
}

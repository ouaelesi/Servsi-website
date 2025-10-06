import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/NavBar";



const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"], // Example weights
  subsets: ["latin"],
  display: "swap", // Optimizes font loading
  variable: "--font-montserrat", // Optional: for CSS variables
});



export const metadata: Metadata = {
  title: "SERVSI - Your Trusted IT Partner",
  description: "Empowering Your Business with Tailored IT Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body   className={`${montserrat.variable}`}> 
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}

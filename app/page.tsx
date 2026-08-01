import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import Features from "@/components/sections/Features";
import CRMWorkflow from "@/components/sections/CRMWorkflow";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import Integrations from "@/components/sections/Integrations";
import WhyChooseUs from "@/components/sections/Benefits";
import Statistics from "@/components/sections/Statistics";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedCompanies />
        <Features />
        <CRMWorkflow />
        <DashboardShowcase />
        <Integrations />
        <WhyChooseUs />
        <Statistics />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
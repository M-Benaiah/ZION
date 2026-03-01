"use client"; // Enable client-side interactivity for contact form (if needed by children, though components have it)

import HeroSection from "./components/HeroSection";
import ValueProps from "./components/ValueProps";
import ServicesPreview from "./components/ServicesPreview";
import AboutSection from "./components/AboutSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";
import CTASection from "./components/CTASection";

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ValueProps />
      <ServicesPreview />
      <AboutSection />
      <WhyChooseUs />
      <ProcessSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}

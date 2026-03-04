import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ObjectiveSection from "@/components/ObjectiveSection";
import DifferentialSection from "@/components/DifferentialSection";
import PlansSection from "@/components/PlansSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Site frame */}
      <div className="mx-2 sm:mx-4 my-2 sm:my-4 rounded-3xl border border-border/30 overflow-hidden glow-frame noise-bg">
        <Header />
        <main className="relative z-10">
          <HeroSection />
          <ServicesSection />
          <ObjectiveSection />
          <DifferentialSection />
          <PlansSection />
          <AboutSection />
          <TestimonialsSection />
          <PartnersSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;

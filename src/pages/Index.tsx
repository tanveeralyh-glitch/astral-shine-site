import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <GallerySection />
    <AboutSection />
    <StatsSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;

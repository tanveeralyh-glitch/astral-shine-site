import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <GallerySection />
    <AboutSection />
    <StatsSection />
    <TeamSection />
    <TestimonialsSection />
    <ContactSection />
    <NewsletterSection />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <StatsSection />
    <GallerySection />
    <TeamSection />
    <PricingSection />
    <TestimonialsSection />
    <ContactSection />
    <BlogSection />
    <NewsletterSection />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <BeforeAfterSection />
    <StatsSection />
    <TestimonialsSection />
    <BookingSection />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;

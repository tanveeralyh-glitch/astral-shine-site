import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Particles from "./Particles";
import { Phone } from "lucide-react";

const phrases = ["Spotless Homes", "Fresh Offices", "Clean Spaces"];

const heroImages = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
];

const HeroSection = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [bgIdx, setBgIdx] = useState(0);

  useEffect(() => {
    const target = phrases[phraseIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(target.slice(0, text.length + 1));
          if (text.length + 1 === target.length) setTimeout(() => setDeleting(true), 1500);
        } else {
          setText(target.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setPhraseIdx((i) => (i + 1) % phrases.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx]);

  useEffect(() => {
    const timer = setInterval(() => setBgIdx((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating background images */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === bgIdx ? 1 : 0 }}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
        </div>
      ))}

      <Particles />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse_glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-pulse_glow" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
        >
          Master's Touch Cleaning
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Professional Cleaning Services —{" "}
          <span className="text-gradient">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-10"
        >
          We make your home and office spotless and fresh. Trusted by hundreds of customers across Sydney.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="glow" size="lg" className="text-base px-8" asChild>
            <a href="tel:+61415883582">
              <Phone className="w-4 h-4 mr-2" /> Call Now
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 border-primary/30 hover:border-primary/60" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

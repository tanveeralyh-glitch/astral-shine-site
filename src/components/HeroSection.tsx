import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Particles from "./Particles";

const phrases = ["Transform Spaces", "Elevate Standards", "Redefine Clean"];

const HeroSection = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <Particles />
      {/* Glow orbs */}
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
          We Don't Clean — We{" "}
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
          Premium cleaning services that turn ordinary spaces into extraordinary experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="glow" size="lg" className="text-base px-8" asChild>
            <a href="#book">Book Now</a>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 border-primary/30 hover:border-primary/60" asChild>
            <a href="#book">Get Free Quote</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

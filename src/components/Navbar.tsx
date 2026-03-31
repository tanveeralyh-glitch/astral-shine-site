import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Results", "Reviews", "Book"];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-primary/10" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="font-display text-xl font-bold text-gradient">
          Master's Touch
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="#book"
          className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium glow-purple hover:brightness-110 transition-all"
        >
          Book Now
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

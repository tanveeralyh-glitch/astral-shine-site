import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary tracking-widest uppercase text-sm mb-3">Who We Are</p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold">About Us</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-10 text-center space-y-6"
      >
        <p className="text-muted-foreground text-lg leading-relaxed">
          We provide professional and reliable cleaning services to keep your home and workplace clean and hygienic. Our team ensures high-quality results with attention to detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="flex items-center gap-2 text-foreground">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-medium">Always Open</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-medium">Hebe St, Greenacre NSW 2190, Australia</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

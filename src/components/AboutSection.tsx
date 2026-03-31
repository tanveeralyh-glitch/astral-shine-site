import { motion } from "framer-motion";
import { MapPin, Clock, CheckCircle2 } from "lucide-react";

const bullets = [
  "Residential Cleaning Services Near You!",
  "Commercial Cleaning Service in Australia",
  "Professional Floor & Carpet Cleaning",
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80"
            alt="About our cleaning service"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-5 -right-5 glass-card p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">16+</span>
            </div>
            <div>
              <p className="font-display font-bold text-sm">Cleaning Offers</p>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            className="absolute top-4 -right-3 glass-card p-3 flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-accent-foreground" />
            </div>
            <div>
              <p className="text-xs font-bold">100+</p>
              <p className="text-[10px] text-muted-foreground">Awards Ready</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-6">
            We Make Spaces Look <span className="text-gradient">Great</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We provide professional and reliable cleaning services to keep your home and workplace clean and hygienic. Our team ensures high-quality results with attention to detail.
          </p>
          <ul className="space-y-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">Always Open</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">Hebe St, Greenacre NSW 2190</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

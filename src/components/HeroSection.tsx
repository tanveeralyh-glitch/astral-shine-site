import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Clock, Sparkles, ThumbsUp, Truck } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Best Price", desc: "Cheap & best price" },
  { icon: Truck, title: "Free Delivery", desc: "Cheap & best price" },
  { icon: ThumbsUp, title: "Customer's Protection", desc: "Cheap & best price" },
  { icon: Clock, title: "Live Support", desc: "Cheap & best price" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
    {/* BG decorations */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
      {/* Left */}
      <div className="flex-1 max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-primary font-semibold tracking-wider uppercase text-sm mb-4"
        >
          Learn From Today
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
        >
          Happiness Is Freshly{" "}
          <span className="text-gradient">Cleaning</span> House
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-lg leading-relaxed mb-8"
        >
          Awesome site on the top advertising a Courses available business online includes assembling having awesome
          site on the top advertising. Courses available business having.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap gap-4"
        >
          <Button variant="glow" size="lg" className="text-base px-8 rounded-full" asChild>
            <a href="tel:+61415883582">
              <Phone className="w-4 h-4 mr-2" /> About Us
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 rounded-full border-primary/30 hover:border-primary hover:bg-primary/5" asChild>
            <a href="#services">Book a Service</a>
          </Button>
        </motion.div>
      </div>

      {/* Right — hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex-1 relative"
      >
        <div className="relative w-full max-w-lg mx-auto">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px]" />
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
            alt="Professional cleaning"
            className="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-4 -left-4 z-20 glass-card px-4 py-3 flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <ThumbsUp className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold">500+</p>
              <p className="text-[10px] text-muted-foreground">Happy Clients</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>

    {/* Feature badges */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="container mx-auto px-6 mt-16 mb-8"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border card-hover"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-display font-bold text-sm">{f.title}</p>
              <p className="text-muted-foreground text-xs">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default HeroSection;

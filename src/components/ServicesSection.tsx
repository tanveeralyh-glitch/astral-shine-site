import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Wind, ShieldCheck, Brush } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Deep Clean", desc: "Top-to-bottom sanitization for every room in your home." },
  { icon: Building2, title: "Commercial Spaces", desc: "Office & retail cleaning tailored to your schedule." },
  { icon: Sparkles, title: "Move-In / Move-Out", desc: "Get your deposit back with spotless results." },
  { icon: Wind, title: "Carpet & Upholstery", desc: "Deep extraction cleaning for fabrics and fibers." },
  { icon: ShieldCheck, title: "Post-Construction", desc: "Dust, debris and residue removal after any build." },
  { icon: Brush, title: "Custom Packages", desc: "Tailored plans designed around your exact needs." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-6">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-widest uppercase text-sm mb-3">What We Do</p>
        <h2 className="font-display text-3xl sm:text-5xl font-bold">Our Services</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group perspective-[800px]"
          >
            <div className="relative h-56 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 glass-card flex flex-col items-center justify-center gap-4 [backface-visibility:hidden]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              </div>
              {/* Back */}
              <div className="absolute inset-0 glass-card flex items-center justify-center p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary/10">
                <p className="text-center text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

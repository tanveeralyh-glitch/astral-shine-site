import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Briefcase, HardHat, Brush } from "lucide-react";

const services = [
  { icon: Home, title: "End Of Lease Cleaning", desc: "Get your full bond back with our thorough end-of-lease clean." },
  { icon: Sparkles, title: "Pre Lease Cleaning", desc: "Move into a spotless home ready to feel like your own." },
  { icon: Brush, title: "General Cleaning", desc: "Regular cleaning to keep your home fresh and tidy." },
  { icon: Briefcase, title: "Office Cleaning", desc: "Professional office cleaning tailored to your schedule." },
  { icon: Building2, title: "Commercial Cleaning", desc: "Large-scale cleaning for retail, warehouses & more." },
  { icon: HardHat, title: "After Renovation Cleaning", desc: "Dust, debris & residue removal after any build or renovation." },
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
            className="group"
          >
            <div className="glass-card p-8 h-full flex flex-col items-center text-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(270_80%_65%/0.2)]">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

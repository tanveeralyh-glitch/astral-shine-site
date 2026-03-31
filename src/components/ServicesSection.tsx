import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Briefcase, HardHat, Brush } from "lucide-react";

const services = [
  { icon: Home, title: "End Of Lease Cleaning", desc: "Get your full bond back with our thorough end-of-lease clean.", color: "bg-blue-50 dark:bg-blue-950/30" },
  { icon: Sparkles, title: "Pre Lease Cleaning", desc: "Move into a spotless home ready to feel like your own.", color: "bg-purple-50 dark:bg-purple-950/30" },
  { icon: Brush, title: "General Cleaning", desc: "Regular cleaning to keep your home fresh and tidy.", color: "bg-indigo-50 dark:bg-indigo-950/30" },
  { icon: Briefcase, title: "Office Cleaning", desc: "Professional office cleaning tailored to your schedule.", color: "bg-sky-50 dark:bg-sky-950/30" },
  { icon: Building2, title: "Commercial Cleaning", desc: "Large-scale cleaning for retail, warehouses & more.", color: "bg-violet-50 dark:bg-violet-950/30" },
  { icon: HardHat, title: "After Renovation Cleaning", desc: "Dust, debris & residue removal after any build or renovation.", color: "bg-blue-50 dark:bg-blue-950/30" },
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
        <p className="text-primary tracking-widest uppercase text-sm mb-3 font-semibold">What We Do</p>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold">Keep your vision to our<br />latest services.</h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Professional cleaning solutions tailored to your needs. We handle everything from homes to commercial spaces.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group"
          >
            <div className={`${s.color} rounded-2xl p-8 h-full flex flex-col items-center text-center gap-4 card-hover border border-transparent hover:border-primary/20`}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
